/* Automated smoke test for I Matter (v4 — Positive Youth Development Framework).
 *
 * Usage:
 *   1. Serve the app:        python3 -m http.server 8080   (from the repo root)
 *   2. Install the driver:   npm i puppeteer-core          (any folder)
 *   3. Point CHROME_PATH at a local Chrome/Chromium binary if needed.
 *   4. Run:                  node tools/smoke-test.js
 *
 * Covers: the two-section layout (Home / Session Plans / Resources), the
 * six-pillar framework, all 24 pillar lessons, six session plans, six
 * stories, quizzes, local saving, badges, My Space, the bilingual
 * English<->Kiswahili switch (every section re-translates), no "Offline"
 * wording, no Facilitator Mode, full offline operation, responsive layout
 * at phone/tablet/desktop widths, and console errors.
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
  page.on("console", msg => { if (msg.type() === "error") consoleErrors.push(msg.text()); });
  page.on("pageerror", err => consoleErrors.push("pageerror: " + err.message));
  page.on("requestfailed", req => {
    if (!req.url().startsWith("http://localhost")) consoleErrors.push("external request: " + req.url());
  });

  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const text = sel => page.$eval(sel, el => el.textContent);
  const bodyText = () => page.$eval(".app-main", el => el.textContent);

  console.log("== Load home ==");
  await page.goto(BASE, { waitUntil: "networkidle0" });
  check("title", (await page.title()).includes("I Matter"));
  check("hero welcome (You matter)", (await text(".hero h1")).toLowerCase().includes("you matter"));
  check("motto in footer links to org", await page.$eval("#footer-text", el =>
    /imagine-tomorrow\.org/.test(el.querySelector("a") ? el.querySelector("a").href : "")));
  check("3-item bottom nav (Home, Session Plans, Resources)", (await page.$$(".nav-item")).length === 3);
  check("six pillar tiles on home", (await page.$$(".pillar-grid .tile")).length === 6);
  check("today's encouragement shows", (await text(".encourage-card")).length > 20);
  check("home links to both main sections", await page.evaluate(() =>
    !!document.querySelector('.app-main a[href="#/session-plans"]') && !!document.querySelector('.app-main a[href="#/resources"]')));

  console.log("== No 'Offline' wording anywhere in the UI chrome ==");
  check("no offline pill element", (await page.$$("#offline-pill")).length === 0);
  const chromeText = await page.evaluate(() =>
    (document.querySelector(".app-header").textContent + " " + document.querySelector(".bottom-nav").textContent));
  check("header/nav contain no 'Offline' text", !/offline/i.test(chromeText), chromeText);

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
  check("precache populated (>= 18 files)", cacheCount >= 18, "cached: " + cacheCount);

  console.log("== Resources hub ==");
  await page.goto(BASE + "#/resources", { waitUntil: "domcontentloaded" });
  await sleep(300);
  check("resources hub lists 6 items", (await page.$$(".app-main .card.clickable")).length === 6);
  check("framework is first resource", await page.evaluate(() =>
    !!document.querySelector('.app-main a[href="#/framework"]')));

  console.log("== The Framework page ==");
  await page.goto(BASE + "#/framework"); await sleep(300);
  check("framework renders 6 pillar cards", (await page.$$(".pillar-card")).length === 6);
  check("framework shows the motto", (await bodyText()).includes("Your choices have power"));
  check("no Facilitator Mode anywhere", !/facilitator mode/i.test(await bodyText()));

  console.log("== Pillar lessons (Learn) ==");
  await page.goto(BASE + "#/learn"); await sleep(300);
  check("6 pillars listed", (await page.$$(".app-main .card.clickable")).length === 6);
  await page.goto(BASE + "#/learn/know-myself"); await sleep(300);
  check("know-myself has 4 lessons", (await page.$$(".app-main .card.clickable")).length === 4);

  console.log("== Lesson + quiz + badge ==");
  await page.goto(BASE + "#/lesson/self-awareness"); await sleep(300);
  check("lesson renders", (await text("h1")).toLowerCase().includes("self-awareness"));
  await page.click("[data-reveal]"); await sleep(200);
  check("tap-to-reveal works", !!(await page.$(".reveal-content:not([hidden])")));
  await page.click('.quiz-option[data-quiz="1"]'); await sleep(200); // answer index 1 is correct
  check("quiz feedback good", !!(await page.$(".quiz-feedback.good")));
  await page.waitForSelector("#mark-done", { timeout: 5000 });
  await page.evaluate(() => document.querySelector("#mark-done").click());
  await sleep(300);
  check("lesson marked done + saved", await page.evaluate(() => JSON.parse(localStorage.getItem("im.progress")).lessonsDone.length) === 1);
  check("first-steps badge earned", (await page.evaluate(() => JSON.parse(localStorage.getItem("im.badges") || "[]"))).includes("first-steps"));

  console.log("== All 24 lessons render in both languages ==");
  for (const lang of ["en", "sw"]) {
    await page.evaluate(l => {
      const s = JSON.parse(localStorage.getItem("im.settings") || "{}"); s.lang = l;
      localStorage.setItem("im.settings", JSON.stringify(s));
    }, lang);
    const ids = await page.evaluate(l => {
      const c = window.IM_CONTENT[l]; const out = [];
      c.categories.forEach(cat => cat.lessons.forEach(le => out.push(le.id))); return out;
    }, lang);
    check(lang + ": 24 lesson ids", ids.length === 24, "found " + ids.length);
    let fails = 0;
    for (const id of ids) {
      await page.goto(BASE + "#/lesson/" + id); await sleep(40);
      if (!(await page.$(".takeaway-card"))) { fails++; console.log("    render fail:", lang, id); }
    }
    check(lang + ": all 24 lesson pages render", fails === 0);
  }
  // restore English
  await page.evaluate(() => {
    const s = JSON.parse(localStorage.getItem("im.settings") || "{}"); s.lang = "en";
    localStorage.setItem("im.settings", JSON.stringify(s));
  });

  console.log("== Games & Activities & Mood fully removed ==");
  check("no IM_GAMES / IM_ACTIVITIES data", await page.evaluate(() =>
    typeof window.IM_GAMES === "undefined" && typeof window.IM_ACTIVITIES === "undefined"));
  for (const dead of ["#/games", "#/activities", "#/facilitator", "#/myspace/mood"]) {
    await page.goto(BASE + dead); await sleep(200);
    check("dead route falls back safely: " + dead, !!(await page.$(".hero")) || !!(await page.$("#pin-toggle")) || !!(await page.$(".app-main")));
  }

  console.log("== Session Plans (one per pillar) ==");
  await page.goto(BASE + "#/session-plans"); await sleep(300);
  check("6 session plans listed", (await page.$$(".app-main .card.clickable")).length === 6);
  check("plans show pillar tags", (await page.$$(".sp-pillar-tag")).length === 6);
  await page.goto(BASE + "#/session-plan/goals-time-procrastination"); await sleep(300);
  check("session plan renders sections", (await page.$$(".sp-section")).length === 8);
  await page.goto(BASE + "#/session-plan/decision-making-problem-solving"); await sleep(300);
  check("session plan has consequences table", (await page.$$(".sp-table")).length === 1);

  console.log("== Stories (one per pillar) ==");
  await page.goto(BASE + "#/stories"); await sleep(300);
  check("6 stories listed", (await page.$$(".app-main .card.clickable")).length === 6);
  await page.goto(BASE + "#/story/two-friends-one-rumour"); await sleep(300);
  check("story renders", (await text("h1")).includes("Rumour"));
  await page.click("[data-wwyd]"); await sleep(200);
  check("what-would-you-do responds", !!(await page.$("#wwyd-feedback .quiz-feedback")));

  console.log("== My Space ==");
  await page.goto(BASE + "#/myspace"); await sleep(300);
  check("myspace tiles (10)", (await page.$$(".tile")).length === 10);
  await page.goto(BASE + "#/myspace/journal"); await sleep(300);
  await page.type("#journal-in", "Today I learned about the six pillars.");
  await page.click("#journal-save"); await sleep(300);
  check("journal entry saved", await page.evaluate(() => JSON.parse(localStorage.getItem("im.journal") || "[]").length) === 1);
  await page.goto(BASE + "#/myspace/strengths"); await sleep(300);
  await page.type("#list-in", "I am a good listener");
  await page.click("#list-add"); await sleep(300);
  check("strengths list saved", await page.evaluate(() => JSON.parse(localStorage.getItem("im.myStrengths") || "[]").length) === 1);
  await page.goto(BASE + "#/myspace/badges"); await sleep(300);
  check("badges grid renders (7)", (await page.$$(".badge")).length === 7);

  console.log("== Help & Support (new contacts) ==");
  await page.goto(BASE + "#/help"); await sleep(300);
  const help = await bodyText();
  check("child helpline 116 present", help.includes("116"));
  check("emergency numbers present", help.includes("999") && help.includes("112") && help.includes("911"));
  check("programme email present", help.includes("hello@imagine-tomorrow.org"));
  check("tel: link present", !!(await page.$('a[href^="tel:"]')));
  check("no PLACEHOLDER text", !/PLACEHOLDER/.test(help));

  console.log("== About links org to imagine-tomorrow.org ==");
  await page.goto(BASE + "#/about"); await sleep(300);
  check("about renders org & links out", await page.evaluate(() =>
    [...document.querySelectorAll(".app-main a")].some(a => /imagine-tomorrow\.org/.test(a.href))));
  const logoOk = await page.$$eval("img", imgs => imgs.every(i => i.complete && i.naturalWidth > 0));
  check("all images load", logoOk);

  console.log("== Bilingual: switch to Kiswahili re-translates every section ==");
  await page.goto(BASE + "#/home"); await sleep(200);
  await page.click("#lang-btn"); await sleep(400);
  check("home in Kiswahili", (await text(".hero h1")).toLowerCase().includes("wewe ni wa muhimu"));
  check("nav in Kiswahili (Nyumbani/Rasilimali)", (await page.$eval(".bottom-nav", el => el.textContent)).includes("Rasilimali"));
  await page.goto(BASE + "#/resources"); await sleep(300);
  check("resources page in Kiswahili", (await text("h1")).includes("Rasilimali"));
  await page.goto(BASE + "#/learn/know-myself"); await sleep(300);
  check("pillar title translated (Ninajijua)", (await text("h1")).includes("Ninajijua"));
  await page.goto(BASE + "#/lesson/self-awareness"); await sleep(300);
  check("lesson translated (Kujitambua)", (await text("h1")).includes("Kujitambua"));
  await page.goto(BASE + "#/session-plans"); await sleep(300);
  check("session plans translated", (await bodyText()).includes("Kujitambua") || (await bodyText()).includes("Mawasiliano"));
  await page.goto(BASE + "#/story/two-friends-one-rumour"); await sleep(300);
  check("story translated (Uvumi)", (await text("h1")).includes("Uvumi"));
  await page.goto(BASE + "#/framework"); await sleep(300);
  check("framework translated (Mfumo/Nguzo)", (await bodyText()).includes("Nguzo"));
  await page.goto(BASE + "#/help"); await sleep(300);
  check("help translated (Msaada)", (await text("h1")).includes("Msaada"));
  check("help still shows 116 & emergency numbers in SW", (await bodyText()).includes("116") && (await bodyText()).includes("999"));
  // switch back
  await page.goto(BASE + "#/home"); await sleep(200);
  await page.click("#lang-btn"); await sleep(400);
  check("english restored", (await text(".hero h1")).toLowerCase().includes("you matter"));

  console.log("== Settings & accessibility ==");
  await page.click("#settings-btn"); await sleep(300);
  check("settings modal opens", !!(await page.$(".modal")));
  // Install option is always present in Settings — a button where the browser
  // supports it, otherwise Add-to-Home-Screen instructions.
  const installField = await page.evaluate(() => {
    const labels = [...document.querySelectorAll(".modal .field label")].map(l => l.textContent);
    const hasHeading = labels.some(t => /install|sakinisha/i.test(t));
    const hasControl = !!document.querySelector("#install-now") ||
      /home screen|address bar|browser menu|skrini|kivinjari/i.test(document.querySelector(".modal").textContent);
    return { hasHeading, hasControl };
  });
  check("settings has an Install app option", installField.hasHeading && installField.hasControl, JSON.stringify(installField));
  await page.click('[data-set="textsize"][data-val="large"]'); await sleep(300);
  check("text size applied", await page.evaluate(() => document.documentElement.getAttribute("data-textsize") === "large"));
  await page.click("#set-contrast"); await sleep(200);
  check("high contrast applied", await page.evaluate(() => document.documentElement.getAttribute("data-contrast") === "high"));
  await page.click("#set-contrast"); await sleep(200);
  await page.evaluate(() => { const s = JSON.parse(localStorage.getItem("im.settings")); s.textsize = "normal"; localStorage.setItem("im.settings", JSON.stringify(s)); });
  await page.keyboard.press("Escape"); await sleep(200);

  console.log("== Responsive: no horizontal scroll at phone / tablet / desktop ==");
  for (const [w, h, label] of [[320, 640, "small phone"], [390, 844, "phone"], [768, 1024, "iPad portrait"], [1024, 768, "iPad landscape"], [1440, 900, "desktop/Mac"]]) {
    await page.setViewport({ width: w, height: h });
    for (const hash of ["#/home", "#/framework", "#/session-plan/goals-time-procrastination", "#/help"]) {
      await page.goto(BASE + hash); await sleep(150);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      check(label + " no h-scroll on " + hash, overflow <= 1, "overflow " + overflow + "px");
    }
  }
  await page.setViewport({ width: 390, height: 844 });

  console.log("== Accessibility basics ==");
  await page.goto(BASE + "#/home"); await sleep(200);
  const a11y = await page.evaluate(() => ({
    noAlt: [...document.querySelectorAll("img")].filter(i => i.getAttribute("alt") === null).length,
    unlabeled: [...document.querySelectorAll("button")].filter(b => !b.textContent.trim() && !b.getAttribute("aria-label")).length
  }));
  check("all imgs have alt attr", a11y.noAlt === 0, "missing: " + a11y.noAlt);
  check("all buttons labeled", a11y.unlabeled === 0, "unlabeled: " + a11y.unlabeled);
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
  check("all im.* data deleted", await page.evaluate(() => Object.keys(localStorage).filter(k => k.startsWith("im.")).length) <= 1);

  console.log("== OFFLINE MODE (works with no connection once installed) ==");
  await page.goto(BASE, { waitUntil: "networkidle0" }); await sleep(1200);
  await page.setOfflineMode(true);
  await page.reload({ waitUntil: "domcontentloaded" }); await sleep(800);
  check("home loads offline", !!(await page.$(".hero")));
  await page.goto(BASE + "#/lesson/resilience"); await sleep(300);
  check("lesson loads offline", (await text("h1")).toLowerCase().includes("resilience"));
  await page.goto(BASE + "#/session-plan/self-awareness-confidence"); await sleep(300);
  check("session plan loads offline", (await page.$$(".sp-section")).length > 0);
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
