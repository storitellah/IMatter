/* Automated smoke test for I Matter.
 *
 * Usage:
 *   1. Serve the app:        python3 -m http.server 8080   (from the repo root)
 *   2. Install the driver:   npm i puppeteer-core          (any folder)
 *   3. Point CHROME_PATH at a local Chrome/Chromium binary if needed.
 *   4. Run:                  node tools/smoke-test.js
 *
 * Covers: rendering of every section, all 76 lessons, all game engines,
 * quizzes, local saving, badges, My Space, Facilitator Mode, accessibility
 * settings, language switch, delete-all-data, offline mode, and console
 * errors. See docs/TESTING.md for the full manual checklist.
 */
const puppeteer = require("puppeteer-core");
const CHROME_PATH = process.env.CHROME_PATH || "/usr/local/bin/google-chrome";

const BASE = "http://localhost:8080/";
let failures = [];
let consoleErrors = [];

function check(name, cond, extra) {
  if (cond) console.log("  PASS", name);
  else { console.log("  FAIL", name, extra || ""); failures.push(name + (extra ? " — " + extra : "")); }
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-dev-shm-usage"]
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 }); // iPhone-ish
  page.on("console", msg => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", err => consoleErrors.push("pageerror: " + err.message));
  page.on("requestfailed", req => {
    if (!req.url().startsWith("http://localhost")) consoleErrors.push("external request: " + req.url());
  });

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  console.log("== Load home ==");
  await page.goto(BASE, { waitUntil: "networkidle0" });
  check("title", (await page.title()).includes("I Matter"));
  check("hero welcome", await page.$eval(".hero h1", el => el.textContent.includes("You matter")));
  check("footer text", await page.$eval("#footer-text", el => el.textContent.includes("Imagine Tomorrow Foundation")));
  check("bottom nav items", (await page.$$(".nav-item")).length === 5);

  console.log("== Service worker ==");
  await sleep(1500);
  const swState = await page.evaluate(async () => {
    const reg = await navigator.serviceWorker.getRegistration();
    return reg ? (reg.active ? "active" : "installing") : "none";
  });
  check("service worker registered", swState !== "none", swState);
  await sleep(1500);
  const cacheCount = await page.evaluate(async () => {
    const keys = await caches.keys();
    if (!keys.length) return 0;
    const c = await caches.open(keys[0]);
    return (await c.keys()).length;
  });
  check("precache populated (>= 20 files)", cacheCount >= 20, "cached: " + cacheCount);

  console.log("== Mood check-in (My Space) ==");
  await page.goto(BASE + "#/myspace/mood", { waitUntil: "domcontentloaded" });
  await sleep(300);
  check("mood buttons", (await page.$$(".mood-btn")).length === 8);
  await page.click('.mood-btn[data-mood="worried"]');
  await sleep(300);
  check("mood response shows", !!(await page.$(".mood-response")));
  check("breathing button for worried", !!(await page.$("[data-breathe]")));
  const moodSaved = await page.evaluate(() => JSON.parse(localStorage.getItem("im.moodHistory") || "[]").length);
  check("mood saved locally", moodSaved === 1);

  console.log("== Learn ==");
  await page.goto(BASE + "#/learn", { waitUntil: "domcontentloaded" });
  await sleep(300);
  const catCount = (await page.$$(".app-main .card.clickable")).length;
  check("10 categories", catCount === 10, "found " + catCount);
  await page.goto(BASE + "#/learn/knowing-myself"); await sleep(300);
  const lessonCount = (await page.$$(".app-main .card.clickable")).length;
  check("knowing-myself has 8 lessons", lessonCount === 8, "found " + lessonCount);

  console.log("== Lesson + quiz ==");
  await page.goto(BASE + "#/lesson/my-strengths"); await sleep(300);
  check("lesson renders", (await page.$eval("h1", el => el.textContent)).includes("My strengths"));
  await page.click("[data-reveal]"); await sleep(200);
  check("tap-to-reveal works", !!(await page.$(".reveal-content:not([hidden])")));
  // answer quiz correctly (answer index 1)
  await page.click('.quiz-option[data-quiz="1"]'); await sleep(200);
  check("quiz feedback good", !!(await page.$(".quiz-feedback.good")));
  await page.waitForSelector("#mark-done", { timeout: 5000 });
  await page.evaluate(() => document.querySelector("#mark-done").click());
  await sleep(300);
  const lessonsDone = await page.evaluate(() => JSON.parse(localStorage.getItem("im.progress")).lessonsDone.length);
  check("lesson marked done + saved", lessonsDone === 1);
  const badges = await page.evaluate(() => JSON.parse(localStorage.getItem("im.badges") || "[]"));
  check("first-steps badge earned", badges.includes("first-steps"), JSON.stringify(badges));

  console.log("== All lessons render + related links valid ==");
  const lessonAudit = await page.evaluate(() => {
    const ids = [];
    const all = {};
    window.IM_CONTENT.categories.forEach(c => c.lessons.forEach(l => { ids.push(l.id); all[l.id] = l; }));
    const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
    const badRelated = [];
    const badQuiz = [];
    ids.forEach(id => {
      const l = all[id];
      (l.related || []).forEach(r => { if (!all[r]) badRelated.push(id + "->" + r); });
      if (!l.quiz || l.quiz.answer >= l.quiz.options.length) badQuiz.push(id);
      ["intro","key","example","reflection","activity","takeaway"].forEach(f => { if (!l[f]) badQuiz.push(id + " missing " + f); });
    });
    return { total: ids.length, dup, badRelated, badQuiz };
  });
  check("76 lessons total", lessonAudit.total === 76, "found " + lessonAudit.total);
  check("no duplicate lesson ids", lessonAudit.dup.length === 0, JSON.stringify(lessonAudit.dup));
  check("no broken related links", lessonAudit.badRelated.length === 0, JSON.stringify(lessonAudit.badRelated));
  check("all lessons complete + valid quizzes", lessonAudit.badQuiz.length === 0, JSON.stringify(lessonAudit.badQuiz));
  // render every lesson page
  const allLessonIds = await page.evaluate(() => {
    const ids = []; window.IM_CONTENT.categories.forEach(c => c.lessons.forEach(l => ids.push(l.id))); return ids;
  });
  let lessonRenderFails = 0;
  for (const id of allLessonIds) {
    await page.goto(BASE + "#/lesson/" + id); await sleep(60);
    const ok = await page.evaluate(() => !!document.querySelector(".takeaway-card"));
    if (!ok) { lessonRenderFails++; console.log("    render fail:", id); }
  }
  check("all 76 lesson pages render", lessonRenderFails === 0);

  console.log("== Games ==");
  await page.goto(BASE + "#/games"); await sleep(300);
  check("10 games listed", (await page.$$(".app-main .card.clickable")).length === 10);

  // choice game: feelings match — play all rounds
  await page.goto(BASE + "#/game/feelings-match"); await sleep(400);
  for (let i = 0; i < 8; i++) {
    await page.waitForSelector(".quiz-option", { timeout: 5000 });
    await page.evaluate(() => document.querySelector(".quiz-option").click());
    await page.waitForSelector("#next-round", { timeout: 5000 });
    await page.evaluate(() => document.querySelector("#next-round").click());
    await sleep(100);
  }
  check("feelings match completes", !!(await page.$(".stars")));

  // memory game: play by cheating (read pairs)
  await page.goto(BASE + "#/game/memory-match"); await sleep(300);
  const memDone = await page.evaluate(async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const cards = [...document.querySelectorAll(".memory-card")];
    const texts = cards.map(c => c.querySelector("span").textContent);
    const pairs = window.IM_GAMES.find(g => g.id === "memory-match").pairs;
    for (const p of pairs) {
      const i = texts.indexOf(p.a), j = texts.indexOf(p.b);
      cards[i].click(); await sleep(50); cards[j].click(); await sleep(1100);
    }
    await sleep(900);
    return !!document.querySelector(".stars");
  });
  check("memory match completes", memDone);

  // order game
  await page.goto(BASE + "#/game/problem-puzzle"); await sleep(300);
  const orderDone = await page.evaluate(async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    for (let p = 0; p < 3; p++) {
      const puzzle = window.IM_GAMES.find(g => g.id === "problem-puzzle").puzzles[p];
      for (const step of puzzle.steps) {
        const btn = [...document.querySelectorAll("[data-step]")].find(b => b.getAttribute("data-step") === step);
        btn.click(); await sleep(40);
      }
      document.querySelector("#check-order").click(); await sleep(150);
      const good = !!document.querySelector(".quiz-feedback.good");
      if (!good) return "wrong order accepted as wrong on puzzle " + p;
      document.querySelector("#next-puzzle").click(); await sleep(150);
    }
    return !!document.querySelector(".stars");
  });
  check("order game completes with perfect score", orderDone === true, String(orderDone));

  // select game
  await page.goto(BASE + "#/game/strength-finder"); await sleep(300);
  await page.click(".select-item"); await page.click("#see-strengths"); await sleep(200);
  check("strength finder shows result", !!(await page.$(".stars")));

  // sort game
  await page.goto(BASE + "#/game/safe-or-unsafe"); await sleep(300);
  const sortDone = await page.evaluate(async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const items = window.IM_GAMES.find(g => g.id === "safe-or-unsafe").items;
    for (const item of items) {
      document.querySelector('[data-g="' + item.answer + '"]').click(); await sleep(80);
      document.querySelector("#next-sort").click(); await sleep(80);
    }
    return !!document.querySelector(".stars") && document.body.textContent.includes("10/10");
  });
  check("sort game completes 10/10", sortDone);

  // path game
  await page.goto(BASE + "#/game/decision-path"); await sleep(300);
  for (let i = 0; i < 5 && !(await page.$("#path-again")); i++) {
    await page.evaluate(() => { const b = [...document.querySelectorAll("[data-to]")][1] || document.querySelector("[data-to]"); if (b) b.click(); });
    await sleep(150);
  }
  check("path game reaches ending with lesson", !!(await page.$("#path-again")) && !!(await page.$(".quiz-feedback")));

  const scores = await page.evaluate(() => JSON.parse(localStorage.getItem("im.scores") || "{}"));
  check("scores saved locally", Object.keys(scores).length >= 5, Object.keys(scores).join(","));

  console.log("== Stories ==");
  await page.goto(BASE + "#/stories"); await sleep(300);
  check("10 stories listed", (await page.$$(".app-main .card.clickable")).length === 10);
  await page.goto(BASE + "#/story/the-note"); await sleep(300);
  check("story renders", (await page.$eval("h1", el => el.textContent)).includes("The Note"));
  await page.click("[data-wwyd]"); await sleep(200);
  check("what-would-you-do responds", !!(await page.$("#wwyd-feedback .quiz-feedback")));
  const storyAudit = await page.evaluate(() => {
    return window.IM_STORIES.filter(s => !window.IM_ACTIVITIES.find(a => a.id === s.relatedActivity)).map(s => s.id);
  });
  check("all story->activity links valid", storyAudit.length === 0, JSON.stringify(storyAudit));

  console.log("== Activities ==");
  await page.goto(BASE + "#/activities"); await sleep(300);
  check("12 activities listed", (await page.$$(".app-main .card.clickable")).length === 12);
  await page.goto(BASE + "#/activity/goal-ladder"); await sleep(300);
  await page.type('[data-field="goal"]', "Become a nurse");
  await page.click("#act-save"); await sleep(300);
  const actSaved = await page.evaluate(() => JSON.parse(localStorage.getItem("im.activity.goal-ladder") || "{}").goal);
  check("activity saves locally", actSaved === "Become a nurse", actSaved);
  const badgesNow = await page.evaluate(() => JSON.parse(localStorage.getItem("im.badges") || "[]"));
  check("goal-setter badge earned", badgesNow.includes("goal-setter"));
  // list field
  await page.goto(BASE + "#/activity/weekly-planner"); await sleep(300);
  await page.type('[data-listin="must"]', "Revise maths");
  await page.click('[data-listadd="must"]'); await sleep(300);
  const listSaved = await page.evaluate(() => (JSON.parse(localStorage.getItem("im.activity.weekly-planner") || "{}").must || []).length);
  check("list field saves", listSaved === 1);

  console.log("== My Space ==");
  await page.goto(BASE + "#/myspace"); await sleep(300);
  check("myspace tiles", (await page.$$(".tile")).length === 11);
  await page.goto(BASE + "#/myspace/journal"); await sleep(300);
  await page.type("#journal-in", "Today I learned that naming feelings helps.");
  await page.click("#journal-save"); await sleep(300);
  const jCount = await page.evaluate(() => JSON.parse(localStorage.getItem("im.journal") || "[]").length);
  check("journal entry saved", jCount === 1);
  await page.goto(BASE + "#/myspace/strengths"); await sleep(300);
  await page.type("#list-in", "I am a good listener");
  await page.click("#list-add"); await sleep(300);
  const strengthsSaved = await page.evaluate(() => JSON.parse(localStorage.getItem("im.myStrengths") || "[]").length);
  check("strengths list saved", strengthsSaved === 1);
  await page.goto(BASE + "#/myspace/calmplan"); await sleep(300);
  await page.type("#text-in", "Breathe slowly three times.");
  await page.click("#text-save"); await sleep(200);
  check("calm plan saved", (await page.evaluate(() => JSON.parse(localStorage.getItem("im.myCalmPlan") || '""'))).includes("Breathe"));
  await page.goto(BASE + "#/myspace/badges"); await sleep(300);
  check("badges grid renders", (await page.$$(".badge")).length === 12);

  console.log("== Help & About ==");
  await page.goto(BASE + "#/help"); await sleep(300);
  check("help contacts render", (await page.$eval(".app-main", el => el.textContent)).includes("PLACEHOLDER"));
  await page.goto(BASE + "#/about"); await sleep(300);
  const aboutText = await page.$eval(".app-main", el => el.textContent);
  check("about renders org", aboutText.includes("Imagine Tomorrow Foundation") && aboutText.includes("2014"));
  const logoOk = await page.$$eval("img", imgs => imgs.every(i => i.complete && i.naturalWidth > 0));
  check("all images load", logoOk);

  console.log("== Facilitator Mode ==");
  await page.goto(BASE + "#/facilitator"); await sleep(300);
  await page.type("#fac-pin", "9999");
  await page.click("#fac-go"); await sleep(200);
  check("wrong PIN rejected", !!(await page.$eval("#fac-msg", el => el.textContent.length > 0)));
  await page.evaluate(() => document.querySelector("#fac-pin").value = "");
  await page.type("#fac-pin", "2014");
  await page.click("#fac-go"); await sleep(400);
  check("correct PIN unlocks", (await page.$eval(".app-main", el => el.textContent)).includes("Session 1"));
  await page.goto(BASE + "#/facilitator/session/3"); await sleep(300);
  const sess = await page.$eval(".app-main", el => el.textContent);
  check("session plan renders", sess.includes("Communication and Listening") && sess.includes("Broken telephone"));
  // projector mode
  await page.goto(BASE + "#/facilitator"); await sleep(300);
  await page.click("#fac-projector"); await sleep(300);
  check("projector mode on", await page.evaluate(() => document.documentElement.getAttribute("data-projector") === "on"));
  await page.click("#fac-projector"); await sleep(300);

  console.log("== Settings & accessibility ==");
  await page.goto(BASE + "#/home"); await sleep(300);
  await page.click("#settings-btn"); await sleep(300);
  check("settings modal opens", !!(await page.$(".modal")));
  await page.click('[data-set="textsize"][data-val="large"]'); await sleep(300);
  check("text size applied", await page.evaluate(() => document.documentElement.getAttribute("data-textsize") === "large"));
  await page.click("#set-contrast"); await sleep(200);
  check("high contrast applied", await page.evaluate(() => document.documentElement.getAttribute("data-contrast") === "high"));
  await page.click("#set-contrast"); await sleep(200);
  await page.click("#set-motion"); await sleep(200);
  check("reduced motion applied", await page.evaluate(() => document.documentElement.getAttribute("data-motion") === "reduced"));
  await page.click("[data-close]"); await sleep(200);
  // language switch
  await page.click("#lang-btn"); await sleep(400);
  check("kiswahili applied", (await page.$eval(".hero h1", el => el.textContent)).includes("muhimu"));
  await page.click("#lang-btn"); await sleep(400);
  check("english restored", (await page.$eval(".hero h1", el => el.textContent)).includes("You matter"));

  console.log("== Accessibility basics ==");
  const a11y = await page.evaluate(() => {
    const noAlt = [...document.querySelectorAll("img")].filter(i => i.getAttribute("alt") === null).length;
    const unlabeled = [...document.querySelectorAll("button")].filter(b => !b.textContent.trim() && !b.getAttribute("aria-label")).length;
    return { noAlt, unlabeled };
  });
  check("all imgs have alt attr", a11y.noAlt === 0, "missing: " + a11y.noAlt);
  check("all buttons labeled", a11y.unlabeled === 0, "unlabeled: " + a11y.unlabeled);
  // keyboard nav: skip link is first focusable element and targets #main
  const skip = await page.evaluate(() => {
    const s = document.querySelector(".skip-link");
    if (!s) return "missing";
    s.focus();
    return document.activeElement === s && s.getAttribute("href") === "#main" && s === document.body.firstElementChild ? "ok" : "bad";
  });
  check("skip link first + focusable + targets #main", skip === "ok", skip);

  console.log("== Delete all data ==");
  page.on("dialog", d => d.accept());
  await page.goto(BASE + "#/myspace"); await sleep(300);
  await page.click("#delete-all"); await sleep(400);
  const remaining = await page.evaluate(() => Object.keys(localStorage).filter(k => k.startsWith("im.")).length);
  check("all im.* data deleted", remaining <= 1, "remaining: " + remaining); // settings may be re-saved

  console.log("== OFFLINE MODE ==");
  await page.goto(BASE, { waitUntil: "networkidle0" }); await sleep(1200);
  await page.setOfflineMode(true);
  await page.reload({ waitUntil: "domcontentloaded" }); await sleep(800);
  check("home loads offline", !!(await page.$(".hero")));
  // Puppeteer's offline emulation doesn't flip navigator.onLine after a
  // reload in headless Chrome, so simulate the browser offline event.
  const pillShows = await page.evaluate(() => {
    Object.defineProperty(navigator, "onLine", { get: () => false });
    window.dispatchEvent(new Event("offline"));
    return !document.querySelector("#offline-pill").hidden;
  });
  check("offline pill visible", pillShows);
  await page.evaluate(() => { window.dispatchEvent(new Event("online")); });
  await page.goto(BASE + "#/lesson/managing-anger"); await sleep(300);
  check("lesson loads offline", (await page.$eval("h1", el => el.textContent)).includes("Managing anger"));
  await page.goto(BASE + "#/game/memory-match"); await sleep(300);
  check("game loads offline", (await page.$$(".memory-card")).length === 12);
  await page.setOfflineMode(false);

  console.log("\n== Console errors ==");
  const realErrors = consoleErrors.filter(e => !e.includes("favicon"));
  check("no console errors", realErrors.length === 0, JSON.stringify(realErrors.slice(0, 5)));

  await browser.close();

  console.log("\n==================================");
  if (failures.length) {
    console.log("FAILURES (" + failures.length + "):");
    failures.forEach(f => console.log(" -", f));
    process.exit(1);
  } else {
    console.log("ALL TESTS PASSED");
  }
})().catch(e => { console.error("Test crashed:", e); process.exit(2); });
