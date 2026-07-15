/* ==========================================================================
   I MATTER — Application logic
   A Positive Youth Development toolkit. No accounts, no tracking; all data
   stays on the device. Fully bilingual (English + Kiswahili).
   ========================================================================== */
(function () {
  "use strict";

  /* ======================================================================
     0. Helpers
     ====================================================================== */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* localStorage wrapper (namespaced, JSON, fails safe) */
  var store = {
    get: function (key, fallback) {
      try {
        var raw = localStorage.getItem("im." + key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { localStorage.setItem("im." + key, JSON.stringify(value)); } catch (e) { /* storage full/blocked */ }
    },
    remove: function (key) {
      try { localStorage.removeItem("im." + key); } catch (e) {}
    },
    clearAll: function () {
      try {
        Object.keys(localStorage).forEach(function (k) {
          if (k.indexOf("im.") === 0) localStorage.removeItem(k);
        });
      } catch (e) {}
    }
  };

  var CONFIG = window.IM_CONFIG || {};
  var EXTRAS = window.IM_EXTRAS || { encouragements: { en: [] }, journalPrompts: { en: [] }, badges: [] };
  var FW = window.IM_FRAMEWORK || { pillars: [], en: {}, sw: {} };

  /* ======================================================================
     1. Settings & i18n
     ====================================================================== */
  var LANGS = ["en", "sw"];
  var settings = store.get("settings", {
    lang: "en", textsize: "normal", contrast: "normal", motion: "auto", simple: false
  });

  function saveSettings() { store.set("settings", settings); applySettings(); }

  function applySettings() {
    var html = document.documentElement;
    html.setAttribute("data-textsize", settings.textsize);
    html.setAttribute("data-contrast", settings.contrast);
    html.setAttribute("data-motion", settings.motion === "reduced" ? "reduced" : "auto");
    html.setAttribute("data-simple", settings.simple ? "on" : "off");
    html.setAttribute("lang", settings.lang);
    var langBtn = $("#lang-btn-label");
    if (langBtn) langBtn.textContent = settings.lang === "en" ? "SW" : "EN";
    renderFooter();
  }

  /* t("learn.title") -> translated UI string */
  function t(path) {
    var dict = (window.IM_STRINGS || {})[settings.lang] || (window.IM_STRINGS || {}).en || {};
    var enDict = (window.IM_STRINGS || {}).en || {};
    var parts = path.split(".");
    var cur = dict, curEn = enDict;
    for (var i = 0; i < parts.length; i++) {
      cur = cur && cur[parts[i]];
      curEn = curEn && curEn[parts[i]];
    }
    return cur != null ? cur : (curEn != null ? curEn : path);
  }

  /* lx({en:"...", sw:"..."}) -> localized value from a bilingual field */
  function lx(field) {
    if (field == null) return "";
    if (typeof field === "string") return field;
    var v = field[settings.lang];
    return v != null ? v : (field.en != null ? field.en : "");
  }

  /* Localized content trees (each data file has an en and a sw tree) */
  function content() {
    var c = window.IM_CONTENT || {};
    return c[settings.lang] || c.en || { categories: [] };
  }
  function stories() {
    var s = window.IM_STORIES || {};
    return s[settings.lang] || s.en || [];
  }
  function sessionPlans() {
    var sp = window.IM_SESSION_PLANS || {};
    return sp[settings.lang] || sp.en || [];
  }
  function framework() {
    return FW[settings.lang] || FW.en || {};
  }
  function encouragements() {
    var e = EXTRAS.encouragements || {};
    return e[settings.lang] || e.en || [];
  }
  function journalPrompts() {
    var jp = EXTRAS.journalPrompts || {};
    return jp[settings.lang] || jp.en || [];
  }

  /* The six pillars: shared identity merged with localized names */
  function pillars() {
    var loc = framework().pillars || {};
    return (FW.pillars || []).map(function (p, i) {
      var l = loc[p.id] || {};
      return {
        id: p.id, emoji: p.emoji, color: p.color, num: i + 1,
        name: l.name || p.id, focus: l.focus || "", topics: l.topics || "", outcome: l.outcome || ""
      };
    });
  }
  function pillarById(id) {
    var all = pillars();
    for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
    return null;
  }

  /* ======================================================================
     2. Progress & badges
     ====================================================================== */
  function progress() {
    return store.get("progress", {
      lessonsDone: [], quizCorrect: 0,
      storiesRead: [], journalCount: 0,
      gratitudeCount: 0
    });
  }
  function saveProgress(p) { store.set("progress", p); checkBadges(p); }

  function earnedBadges() { return store.get("badges", []); }

  function checkBadges(p) {
    var earned = earnedBadges();
    var checks = {
      "first-steps": p.lessonsDone.length >= 1,
      "explorer": p.lessonsDone.length >= 5,
      "scholar": p.lessonsDone.length >= 15,
      "quiz-whiz": p.quizCorrect >= 10,
      "storyteller": p.storiesRead.length >= 3,
      "reflector": p.journalCount >= 1,
      "grateful-heart": p.gratitudeCount >= 3
    };
    EXTRAS.badges.forEach(function (b) {
      if (checks[b.id] && earned.indexOf(b.id) === -1) {
        earned.push(b.id);
        store.set("badges", earned);
        toast(b.emoji + " " + t("badges.earned") + " " + lx(b.title));
      }
    });
  }

  /* ======================================================================
     3. Toasts & modal
     ====================================================================== */
  function toast(msg, actionLabel, actionFn, sticky) {
    var region = $("#toast-region");
    if (!region) return;
    var el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = "<span>" + esc(msg) + "</span>";
    if (actionLabel) {
      var btn = document.createElement("button");
      btn.className = "btn small";
      btn.textContent = actionLabel;
      btn.addEventListener("click", function () { el.remove(); if (actionFn) actionFn(); });
      el.appendChild(btn);
    }
    region.appendChild(el);
    if (!sticky) setTimeout(function () { el.remove(); }, 5000);
  }

  function openModal(titleHtml, bodyHtml, onOpen) {
    closeModal();
    var root = $("#modal-root");
    var backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.innerHTML =
      '<div class="modal" role="dialog" aria-modal="true" aria-label="' + esc(titleHtml.replace(/<[^>]*>/g, "")) + '">' +
      '  <div class="modal-head"><h2>' + titleHtml + '</h2>' +
      '  <button class="icon-btn" data-close aria-label="' + esc(t("actions.close")) + '">✕</button></div>' +
      '  <div class="modal-body">' + bodyHtml + "</div>" +
      "</div>";
    backdrop.addEventListener("click", function (e) {
      if (e.target === backdrop || e.target.closest("[data-close]")) closeModal();
    });
    root.appendChild(backdrop);
    document.addEventListener("keydown", escClose);
    var focusable = backdrop.querySelector("button, input, select, textarea, a");
    if (focusable) focusable.focus();
    if (onOpen) onOpen(backdrop);
  }
  function escClose(e) { if (e.key === "Escape") closeModal(); }
  function closeModal() {
    var b = $(".modal-backdrop");
    if (b) b.remove();
    document.removeEventListener("keydown", escClose);
    settingsOpen = false;
  }

  /* ======================================================================
     4. Router
     ====================================================================== */
  var routes = {};
  function route(pattern, handler) { routes[pattern] = handler; }

  function navigate(hash) { location.hash = hash; }

  function currentRoute() {
    var h = location.hash.replace(/^#\/?/, "");
    return h === "" ? "home" : h;
  }

  function render() {
    var path = currentRoute();
    var parts = path.split("/");
    var main = $("#main");
    var handler = routes[parts[0]] || routes.home;
    closeModal();
    main.innerHTML = "";
    var view = document.createElement("div");
    view.className = "view-enter";
    main.appendChild(view);
    handler(view, parts.slice(1));
    window.scrollTo(0, 0);
    updateNav(parts[0]);
    main.focus({ preventScroll: true });
  }

  /* Bottom navigation: Home + the two main sections */
  var NAV_ITEMS = [
    { id: "home", emoji: "🏠" },
    { id: "session-plans", emoji: "📋" },
    { id: "resources", emoji: "🧰" }
  ];

  /* Everything that lives inside the Resources section */
  var RESOURCE_ITEMS = [
    { id: "framework", emoji: "🧭", titleKey: "framework.title", subKey: "resources.frameworkSub" },
    { id: "learn", emoji: "📚", titleKey: "learn.title", subKey: "resources.learnSub" },
    { id: "stories", emoji: "📖", titleKey: "stories.title", subKey: "resources.storiesSub" },
    { id: "myspace", emoji: "💜", titleKey: "myspace.title", subKey: "resources.myspaceSub" },
    { id: "help", emoji: "🆘", titleKey: "help.title", subKey: "resources.helpSub" },
    { id: "about", emoji: "ℹ️", titleKey: "about.title", subKey: "resources.aboutSub" }
  ];

  function buildNav() {
    var nav = $("#bottom-nav");
    nav.innerHTML = NAV_ITEMS.map(function (item) {
      return '<a class="nav-item" href="#/' + item.id + '" data-nav="' + item.id + '">' +
        '<span class="nav-emoji" aria-hidden="true">' + item.emoji + "</span>" +
        "<span>" + esc(t("nav." + item.id)) + "</span></a>";
    }).join("");
  }

  var RESOURCE_IDS = RESOURCE_ITEMS.map(function (i) { return i.id; });
  function updateNav(section) {
    var map = { lesson: "resources", story: "resources", "session-plan": "session-plans" };
    var active = map[section] || section;
    if (RESOURCE_IDS.indexOf(active) !== -1) active = "resources";
    $$(".nav-item[data-nav]").forEach(function (el) {
      if (el.getAttribute("data-nav") === active) el.setAttribute("aria-current", "page");
      else el.removeAttribute("aria-current");
    });
  }

  /* Shared view helpers */
  function backBtn(hash, label) {
    return '<div class="back-row"><a class="chip" href="#/' + hash + '">← ' + esc(label || t("actions.back")) + "</a></div>";
  }

  function orgLink() {
    var org = CONFIG.organization || {};
    return '<a href="' + esc(org.website || "#") + '" target="_blank" rel="noopener">' + esc(org.name || "") + "</a>";
  }

  function renderFooter() {
    var f = $("#footer-text");
    if (f) f.innerHTML = esc(lx(CONFIG.footerText)) + " " + orgLink() + ".";
  }

  function findLesson(id) {
    var cats = content().categories;
    for (var i = 0; i < cats.length; i++) {
      var cat = cats[i];
      for (var j = 0; j < cat.lessons.length; j++) {
        if (cat.lessons[j].id === id) return { lesson: cat.lessons[j], category: cat };
      }
    }
    return null;
  }
  function findById(list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }
  function planForPillar(pillarId) {
    var plans = sessionPlans();
    for (var i = 0; i < plans.length; i++) if (plans[i].pillar === pillarId) return plans[i];
    return null;
  }

  /* ====================================================================
     5. HOME VIEW
     ==================================================================== */
  route("home", function (view) {
    var p = progress();
    var cats = content().categories;
    var totalLessons = cats.reduce(function (n, c) { return n + c.lessons.length; }, 0);
    var enc = encouragements();
    var dayIndex = Math.floor(Date.now() / 86400000);
    var encMsg = enc.length ? enc[dayIndex % enc.length] : "";
    var badges = earnedBadges();

    var html =
      '<section class="hero">' +
      "<h1>" + esc(t("home.welcomeTitle")) + "</h1>" +
      "<p>" + esc(t("home.welcomeBody")) + "</p>" +
      '<p class="hero-sub">' + esc(t("home.welcomeSub")) + "</p>" +
      "</section>";

    /* Install prompt (where supported) */
    if (deferredInstall && !store.get("installDismissed", false)) {
      html += '<div class="card" id="install-card"><div class="card-row">' +
        '<div class="card-emoji">📲</div><div style="flex:1">' +
        '<p class="card-title">' + esc(t("home.installTitle")) + "</p>" +
        '<p class="card-sub">' + esc(t("home.installBody")) + "</p></div></div>" +
        '<div style="display:flex;gap:8px;margin-top:10px">' +
        '<button class="btn small" id="install-btn">' + esc(t("actions.install")) + "</button>" +
        '<button class="btn small secondary" id="install-dismiss">' + esc(t("actions.close")) + "</button></div></div>";
    }

    html +=
      '<div class="encourage-card"><span class="enc-emoji" aria-hidden="true">☀️</span>' +
      "<div><p class=\"card-sub\" style=\"margin:0\">" + esc(t("home.todayEncouragement")) + "</p>" +
      "<p>" + esc(encMsg) + "</p></div></div>";

    /* The six pillars */
    html += '<div class="section-heading"><h2>' + esc(t("home.pillarsTitle")) + "</h2></div>" +
      '<div class="grid-2 pillar-grid">' +
      pillars().map(function (pl) {
        var plan = planForPillar(pl.id);
        var href = plan ? "#/session-plan/" + plan.id : "#/learn/" + pl.id;
        return '<a class="tile c-' + pl.color + '" href="' + href + '">' +
          '<span class="tile-emoji" aria-hidden="true">' + pl.emoji + "</span>" +
          '<span class="tile-label">' + esc(pl.name) + "</span>" +
          '<span class="tile-sub">' + esc(t("framework.pillar")) + " " + pl.num + "</span></a>";
      }).join("") + "</div>";

    /* The two main sections */
    html += '<div class="section-heading"><h2>' + esc(t("home.sectionsTitle")) + "</h2></div>" +
      '<div class="card-grid">' +
      '<a class="card clickable" href="#/session-plans"><div class="card-row">' +
      '<div class="card-emoji">📋</div><div>' +
      '<p class="card-title">' + esc(t("nav.session-plans")) + "</p>" +
      '<p class="card-sub">' + esc(t("home.sessionPlansSub")) + "</p></div></div></a>" +
      '<a class="card clickable" href="#/resources"><div class="card-row">' +
      '<div class="card-emoji">🧰</div><div>' +
      '<p class="card-title">' + esc(t("nav.resources")) + "</p>" +
      '<p class="card-sub">' + esc(t("home.resourcesSub")) + "</p></div></div></a>" +
      "</div>";

    /* Progress summary */
    var pct = totalLessons ? Math.round(p.lessonsDone.length / totalLessons * 100) : 0;
    html += '<section class="card" aria-labelledby="prog-h">' +
      '<h2 id="prog-h">' + esc(t("home.progressTitle")) + "</h2>" +
      '<div class="progress-track" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100" aria-label="' + esc(t("home.lessonsDone")) + '">' +
      '<div class="progress-fill" style="width:' + pct + '%"></div></div>' +
      '<div class="stat-row">' +
      '<div class="stat"><b>' + p.lessonsDone.length + "/" + totalLessons + "</b><span>" + esc(t("home.lessonsDone")) + "</span></div>" +
      '<div class="stat"><b>' + badges.length + "/" + EXTRAS.badges.length + "</b><span>" + esc(t("home.badgesEarned")) + "</span></div>" +
      "</div></section>";

    view.innerHTML = html;

    var installBtn = $("#install-btn", view);
    if (installBtn) installBtn.addEventListener("click", triggerInstall);
    var dismissBtn = $("#install-dismiss", view);
    if (dismissBtn) dismissBtn.addEventListener("click", function () {
      store.set("installDismissed", true);
      var c = $("#install-card", view); if (c) c.remove();
    });
  });

  /* ====================================================================
     5b. RESOURCES (hub for everything that is not a session plan)
     ==================================================================== */
  route("resources", function (view) {
    view.innerHTML =
      "<h1>🧰 " + esc(t("resources.title")) + "</h1>" +
      '<p class="page-intro">' + esc(t("resources.intro")) + "</p>" +
      '<div class="card-grid">' +
      RESOURCE_ITEMS.map(function (item) {
        return '<a class="card clickable" href="#/' + item.id + '"><div class="card-row">' +
          '<div class="card-emoji">' + item.emoji + "</div><div>" +
          '<p class="card-title">' + esc(t(item.titleKey)) + "</p>" +
          '<p class="card-sub">' + esc(t(item.subKey)) + "</p></div></div></a>";
      }).join("") + "</div>";
  });

  /* ====================================================================
     5c. THE FRAMEWORK
     ==================================================================== */
  route("framework", function (view) {
    var fw = framework();
    var html =
      backBtn("resources", t("resources.title")) +
      "<h1>🧭 " + esc(t("framework.title")) + "</h1>" +
      '<p class="page-intro">' + esc(fw.tagline || "") + "</p>" +
      '<div class="card">' +
      (fw.intro || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
      "</div>" +
      '<div class="motto-card"><span aria-hidden="true">💛</span><p>' + esc(lx(CONFIG.motto)) + "</p></div>" +

      '<div class="section-heading"><h2>' + esc(fw.pillarsHeading || "") + "</h2></div>" +
      '<p class="page-intro">' + esc(fw.pillarsIntro || "") + "</p>" +
      pillars().map(function (pl) {
        var plan = planForPillar(pl.id);
        return '<div class="card pillar-card c-' + pl.color + '">' +
          '<div class="pillar-head">' +
          '<span class="pillar-num" aria-hidden="true">' + pl.num + "</span>" +
          '<span class="pillar-emoji" aria-hidden="true">' + pl.emoji + "</span>" +
          "<h3>" + esc(pl.name) + "</h3></div>" +
          "<p>" + esc(pl.focus) + "</p>" +
          '<p class="card-sub"><b>' + esc(t("framework.topics")) + ":</b> " + esc(pl.topics) + "</p>" +
          '<p class="pillar-outcome">🌱 “' + esc(pl.outcome) + "”</p>" +
          '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
          (plan ? '<a class="chip" href="#/session-plan/' + esc(plan.id) + '">📋 ' + esc(t("sessionPlans.title")) + "</a>" : "") +
          '<a class="chip" href="#/learn/' + pl.id + '">📚 ' + esc(t("learn.lessons")) + "</a>" +
          "</div></div>";
      }).join("") +

      '<div class="card"><h2>' + esc(fw.approachHeading || "") + "</h2>" +
      (fw.approach || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +

      '<div class="card"><h2>' + esc(fw.changeHeading || "") + "</h2>" +
      (fw.change || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>";

    view.innerHTML = html;
  });

  /* ====================================================================
     6. LEARN VIEWS (pillar lessons)
     ==================================================================== */
  route("learn", function (view, params) {
    if (params[0]) return renderCategory(view, params[0]);
    var p = progress();
    view.innerHTML =
      backBtn("resources", t("resources.title")) +
      "<h1>📚 " + esc(t("learn.title")) + "</h1>" +
      '<p class="page-intro">' + esc(t("learn.intro")) + "</p>" +
      '<div class="card-grid">' +
      content().categories.map(function (c, i) {
        var done = c.lessons.filter(function (l) { return p.lessonsDone.indexOf(l.id) !== -1; }).length;
        return '<a class="card clickable c-' + c.color + '" href="#/learn/' + c.id + '">' +
          '<div class="card-row"><div class="card-emoji">' + c.emoji + "</div><div>" +
          '<p class="card-sub" style="margin:0">' + esc(t("framework.pillar")) + " " + (i + 1) + "</p>" +
          '<p class="card-title">' + esc(c.title) + "</p>" +
          '<p class="card-sub">' + esc(c.blurb) + "</p>" +
          '<p class="card-sub"><b>' + done + "/" + c.lessons.length + "</b> " + esc(t("learn.lessons")) + "</p>" +
          "</div></div></a>";
      }).join("") + "</div>";
  });

  function renderCategory(view, catId) {
    var cat = findById(content().categories, catId);
    if (!cat) return navigate("#/learn");
    var pl = pillarById(catId);
    var p = progress();
    view.innerHTML =
      backBtn("learn", t("learn.title")) +
      "<h1>" + cat.emoji + " " + esc(cat.title) + "</h1>" +
      '<p class="page-intro">' + esc(cat.blurb) + "</p>" +
      (pl && pl.outcome ? '<div class="motto-card small"><span aria-hidden="true">🌱</span><p>“' + esc(pl.outcome) + "”</p></div>" : "") +
      cat.lessons.map(function (l) {
        var done = p.lessonsDone.indexOf(l.id) !== -1;
        return '<a class="card clickable" href="#/lesson/' + l.id + '"><div class="card-row">' +
          '<div class="card-emoji c-' + cat.color + '">' + (done ? "✅" : cat.emoji) + "</div>" +
          '<div><p class="card-title">' + esc(l.title) + "</p>" +
          '<p class="card-sub">' + esc(l.intro) + "</p></div></div></a>";
      }).join("");
  }

  route("lesson", function (view, params) {
    var found = findLesson(params[0]);
    if (!found) return navigate("#/learn");
    var l = found.lesson, cat = found.category;
    var p = progress();
    var done = p.lessonsDone.indexOf(l.id) !== -1;
    var simple = settings.simple;

    var relatedHtml = (l.related || []).map(function (rid) {
      var rl = findLesson(rid);
      if (!rl) return "";
      return '<a class="chip" href="#/lesson/' + rid + '">' + rl.category.emoji + " " + esc(rl.lesson.title) + "</a>";
    }).join(" ");

    var html =
      backBtn("learn/" + cat.id, cat.title) +
      "<h1>" + esc(l.title) + "</h1>" +
      '<div class="card">' +
      '<div class="lesson-block"><span class="lesson-label">👋 ' + esc(t("learn.introHeading")) + "</span><p>" + esc(l.intro) + "</p></div>" +
      '<div class="lesson-block"><span class="lesson-label">🔑 ' + esc(t("learn.keyLesson")) + "</span><p>" + esc(l.key) + "</p></div>" +
      (simple ? "" :
        '<div class="lesson-block"><span class="lesson-label">🌍 ' + esc(t("learn.example")) + "</span><p>" + esc(l.example) + "</p></div>") +
      '<div class="lesson-block"><span class="lesson-label">💭 ' + esc(t("learn.reflection")) + "</span>" +
      '<button class="reveal-btn" data-reveal aria-expanded="false">' + esc(t("actions.reveal")) + "</button>" +
      '<div class="reveal-content" hidden><p style="margin:0">' + esc(l.reflection) + "</p></div></div>" +
      (simple ? "" :
        '<div class="lesson-block"><span class="lesson-label">✏️ ' + esc(t("learn.activity")) + "</span><p>" + esc(l.activity) + "</p></div>") +
      "</div>";

    /* Quiz */
    if (l.quiz) {
      html += '<div class="card"><span class="lesson-label">🧠 ' + esc(t("learn.quiz")) + "</span>" +
        "<p><b>" + esc(l.quiz.q) + '</b></p><div id="quiz-box">' +
        l.quiz.options.map(function (opt, i) {
          return '<button class="quiz-option" data-quiz="' + i + '">' + esc(opt) + "</button>";
        }).join("") + '</div><div id="quiz-feedback"></div></div>';
    }

    html += '<div class="takeaway-card">🌟 ' + esc(l.takeaway) + "</div>";

    if (relatedHtml) {
      html += '<div class="section-heading"><h2>' + esc(t("learn.related")) + "</h2></div>" +
        '<div style="display:flex;gap:8px;flex-wrap:wrap">' + relatedHtml + "</div>";
    }

    html += '<div style="margin-top:18px"><button class="btn block" id="mark-done"' + (done ? " disabled" : "") + ">" +
      (done ? "✅ " + esc(t("learn.done")) : esc(t("learn.markDone"))) + "</button></div>";

    view.innerHTML = html;

    var reveal = $("[data-reveal]", view);
    if (reveal) reveal.addEventListener("click", function () {
      reveal.setAttribute("aria-expanded", "true");
      reveal.hidden = true;
      reveal.nextElementSibling.hidden = false;
    });

    attachQuiz(view, l.quiz);

    $("#mark-done", view).addEventListener("click", function () {
      var pr = progress();
      if (pr.lessonsDone.indexOf(l.id) === -1) {
        pr.lessonsDone.push(l.id);
        saveProgress(pr);
      }
      this.disabled = true;
      this.textContent = "✅ " + t("learn.done");
    });
  });

  function attachQuiz(view, quiz) {
    if (!quiz) return;
    var buttons = $$(".quiz-option", view);
    var feedback = $("#quiz-feedback", view);
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var idx = parseInt(btn.getAttribute("data-quiz"), 10);
        var correct = idx === quiz.answer;
        buttons.forEach(function (b) { b.disabled = true; });
        btn.classList.add(correct ? "correct" : "incorrect");
        buttons[quiz.answer].classList.add("correct");
        if (correct) {
          var p = progress(); p.quizCorrect++; saveProgress(p);
          feedback.innerHTML = '<div class="quiz-feedback good">🎉 ' + esc(t("learn.correct")) + "</div>";
        } else {
          feedback.innerHTML = '<div class="quiz-feedback oops">💛 ' + esc(t("learn.incorrect")) +
            ' <button class="btn small secondary" id="quiz-retry">' + esc(t("learn.tryAgain")) + "</button></div>";
          $("#quiz-retry", view).addEventListener("click", function () {
            buttons.forEach(function (b) { b.disabled = false; b.classList.remove("correct", "incorrect"); });
            feedback.innerHTML = "";
          });
        }
      });
    });
  }

  /* ====================================================================
     8. MY SPACE (private, device-only)
     ==================================================================== */
  var myspaceUnlocked = false;

  route("myspace", function (view, params) {
    var pin = store.get("myspacePin", null);
    if (pin && !myspaceUnlocked) return renderPinGate(view, pin);
    if (params[0]) return renderMySpaceTool(view, params[0]);
    renderMySpaceHome(view);
  });

  function renderPinGate(view, pin) {
    view.innerHTML =
      "<h1>" + esc(t("myspace.title")) + "</h1>" +
      '<div class="card"><p>🔒 ' + esc(t("myspace.pinProtect")) + "</p>" +
      '<div class="field"><label for="pin-in">PIN</label>' +
      '<input type="password" id="pin-in" inputmode="numeric" autocomplete="off" maxlength="8"></div>' +
      '<button class="btn block" id="pin-go">' + esc(t("actions.open")) + "</button>" +
      '<p class="card-sub" id="pin-msg" role="alert" style="margin-top:8px"></p></div>';
    function tryPin() {
      if ($("#pin-in", view).value === pin) { myspaceUnlocked = true; render(); }
      else $("#pin-msg", view).textContent = t("myspace.wrongPin");
    }
    $("#pin-go", view).addEventListener("click", tryPin);
    $("#pin-in", view).addEventListener("keydown", function (e) { if (e.key === "Enter") tryPin(); });
  }

  var MYSPACE_TOOLS = [
    { id: "strengths", emoji: "🌟", key: "strengths", list: "myStrengths", phKey: "myspace.strengthsPh" },
    { id: "goals", emoji: "🎯", key: "goals", list: "myGoals", phKey: "myspace.goalsPh" },
    { id: "gratitude", emoji: "💚", key: "gratitude", list: "myGratitude", phKey: "myspace.gratitudePh" },
    { id: "learned", emoji: "💡", key: "learned", list: "myLearned", phKey: "myspace.learnedPh" },
    { id: "trusted", emoji: "🤝", key: "trusted", list: "myTrusted", phKey: "myspace.trustedPh" },
    { id: "calmplan", emoji: "🧘", key: "calmPlan", text: "myCalmPlan", promptKey: "myspace.calmPlanPrompt" },
    { id: "studyplan", emoji: "⏰", key: "studyPlan", text: "myStudyPlan", promptKey: "myspace.studyPlanPrompt" },
    { id: "challenge", emoji: "🏅", key: "weeklyChallenge", text: "myChallenge", promptKey: "myspace.challengePrompt" },
    { id: "journal", emoji: "📔", key: "journal" },
    { id: "badges", emoji: "🏆", key: "badges" }
  ];

  function renderMySpaceHome(view) {
    view.innerHTML =
      backBtn("resources", t("resources.title")) +
      "<h1>" + esc(t("myspace.title")) + "</h1>" +
      '<p class="page-intro">' + esc(t("myspace.intro")) + "</p>" +
      '<div class="privacy-banner"><span aria-hidden="true">🔒</span><span>' + esc(t("myspace.privacyNote")) + "</span></div>" +
      '<div class="grid-2">' +
      MYSPACE_TOOLS.map(function (tool) {
        return '<a class="tile c-purple" href="#/myspace/' + tool.id + '">' +
          '<span class="tile-emoji" aria-hidden="true">' + tool.emoji + "</span>" +
          '<span class="tile-label">' + esc(t("myspace." + tool.key)) + "</span></a>";
      }).join("") + "</div>" +
      '<div class="card" style="margin-top:18px"><h2>🛡️ ' + esc(t("about.privacyHeading")) + "</h2>" +
      "<p>" + esc(t("about.privacyBody")) + "</p>" +
      '<div class="toggle-row"><span class="label">' + esc(t("myspace.pinProtect")) + "</span>" +
      '<span class="switch"><input type="checkbox" id="pin-toggle"' + (store.get("myspacePin", null) ? " checked" : "") + '>' +
      '<span class="track"></span><span class="thumb"></span></span></div>' +
      '<button class="btn warn block" id="delete-all" style="margin-top:10px">🗑️ ' + esc(t("myspace.deleteAll")) + "</button></div>";

    $("#pin-toggle", view).addEventListener("change", function () {
      if (this.checked) {
        var chosen = prompt(t("myspace.pinPrompt"));
        if (chosen && chosen.length >= 4) { store.set("myspacePin", chosen); myspaceUnlocked = true; toast("🔒 PIN ✓"); }
        else this.checked = false;
      } else {
        store.remove("myspacePin");
        myspaceUnlocked = false;
      }
    });
    $("#delete-all", view).addEventListener("click", function () {
      if (confirm(t("myspace.deleteConfirm"))) {
        store.clearAll();
        myspaceUnlocked = false;
        toast(t("myspace.deleted"));
        applySettings();
        render();
      }
    });
  }

  function renderMySpaceTool(view, toolId) {
    var tool = null;
    for (var i = 0; i < MYSPACE_TOOLS.length; i++) if (MYSPACE_TOOLS[i].id === toolId) tool = MYSPACE_TOOLS[i];
    if (!tool) return navigate("#/myspace");
    var title = t("myspace." + tool.key);
    var html = backBtn("myspace", t("myspace.title")) + "<h1>" + tool.emoji + " " + esc(title) + "</h1>" +
      '<div class="privacy-banner"><span aria-hidden="true">🔒</span><span>' + esc(t("myspace.privacyNote")) + "</span></div>";

    if (tool.id === "badges") {
      var earned = earnedBadges();
      html += '<div class="badge-grid">' +
        EXTRAS.badges.map(function (b) {
          var got = earned.indexOf(b.id) !== -1;
          return '<div class="badge' + (got ? "" : " locked") + '">' +
            '<div class="badge-emoji" aria-hidden="true">' + b.emoji + "</div>" +
            '<div class="badge-title">' + esc(lx(b.title)) + "</div>" +
            '<div class="badge-desc">' + esc(lx(b.desc)) + "</div></div>";
        }).join("") + "</div>";
      view.innerHTML = html;
      return;
    }

    if (tool.id === "journal") {
      var prompts = journalPrompts();
      var pIdx = Math.floor(Math.random() * prompts.length);
      var entries = store.get("journal", []);
      html += '<div class="card">' +
        '<p class="card-sub">' + esc(t("myspace.journalPromptLabel")) + "</p>" +
        '<p class="affirmation" id="journal-prompt">💭 ' + esc(prompts[pIdx] || "") + "</p>" +
        '<div class="field"><label for="journal-in" class="visually-hidden">' + esc(title) + "</label>" +
        '<textarea id="journal-in" placeholder="..."></textarea></div>' +
        '<button class="btn block" id="journal-save">' + esc(t("actions.save")) + "</button></div>" +
        '<div id="journal-list">' +
        entries.slice().reverse().map(function (e, ri) {
          var idx = entries.length - 1 - ri;
          return '<div class="card"><p class="card-sub">' + esc(e.at.slice(0, 10)) + "</p>" +
            "<p>" + esc(e.text) + '</p><button class="chip" data-del="' + idx + '">🗑️ ' + esc(t("actions.delete")) + "</button></div>";
        }).join("") + "</div>";
      view.innerHTML = html;
      $("#journal-save", view).addEventListener("click", function () {
        var txt = $("#journal-in", view).value.trim();
        if (!txt) return;
        entries.push({ at: new Date().toISOString(), text: txt });
        store.set("journal", entries);
        var p = progress(); p.journalCount++; saveProgress(p);
        renderMySpaceTool(view, toolId);
      });
      $$("[data-del]", view).forEach(function (btn) {
        btn.addEventListener("click", function () {
          entries.splice(parseInt(btn.getAttribute("data-del"), 10), 1);
          store.set("journal", entries);
          renderMySpaceTool(view, toolId);
        });
      });
      return;
    }

    if (tool.list) {
      var items = store.get(tool.list, []);
      html += '<div class="card">' +
        '<div class="add-row"><label for="list-in" class="visually-hidden">' + esc(title) + "</label>" +
        '<input type="text" id="list-in" placeholder="' + esc(t(tool.phKey)) + '">' +
        '<button class="btn" id="list-add">' + esc(t("actions.addNote")) + "</button></div></div>" +
        (items.length === 0 ? '<p class="card-sub" style="text-align:center">' + esc(t("myspace.emptyList")) + "</p>" : "") +
        items.map(function (item, idx) {
          return '<div class="list-entry"><span>' + esc(item) + "</span>" +
            '<button class="del" data-del="' + idx + '" aria-label="' + esc(t("actions.delete")) + '">🗑️</button></div>';
        }).join("");
      view.innerHTML = html;
      var addItem = function () {
        var v = $("#list-in", view).value.trim();
        if (!v) return;
        items.push(v);
        store.set(tool.list, items);
        if (tool.id === "gratitude") { var p = progress(); p.gratitudeCount++; saveProgress(p); }
        renderMySpaceTool(view, toolId);
      };
      $("#list-add", view).addEventListener("click", addItem);
      $("#list-in", view).addEventListener("keydown", function (e) { if (e.key === "Enter") addItem(); });
      $$("[data-del]", view).forEach(function (btn) {
        btn.addEventListener("click", function () {
          items.splice(parseInt(btn.getAttribute("data-del"), 10), 1);
          store.set(tool.list, items);
          renderMySpaceTool(view, toolId);
        });
      });
      return;
    }

    if (tool.text) {
      var saved = store.get(tool.text, "");
      html += '<div class="card">' +
        "<p class=\"card-sub\">" + esc(t(tool.promptKey)) + "</p>" +
        '<div class="field"><label for="text-in" class="visually-hidden">' + esc(title) + "</label>" +
        '<textarea id="text-in">' + esc(saved) + "</textarea></div>" +
        '<button class="btn block" id="text-save">' + esc(t("actions.save")) + "</button>" +
        '<p class="card-sub" id="save-msg" role="status" style="text-align:center;margin-top:8px"></p></div>';
      view.innerHTML = html;
      $("#text-save", view).addEventListener("click", function () {
        store.set(tool.text, $("#text-in", view).value);
        $("#save-msg", view).textContent = "✓ " + t("actions.saved");
      });
      return;
    }
  }

  /* ====================================================================
     9. STORIES
     ==================================================================== */
  route("stories", function (view) {
    var p = progress();
    view.innerHTML =
      backBtn("resources", t("resources.title")) +
      "<h1>📖 " + esc(t("stories.title")) + "</h1>" +
      '<p class="page-intro">' + esc(t("stories.intro")) + "</p>" +
      stories().map(function (s) {
        var read = p.storiesRead.indexOf(s.id) !== -1;
        var pl = pillarById(s.pillar);
        return '<a class="card clickable" href="#/story/' + s.id + '"><div class="card-row">' +
          '<div class="card-emoji' + (pl ? " c-" + pl.color : "") + '">' + (read ? "✅" : s.emoji) + "</div><div>" +
          '<p class="card-title">' + esc(s.title) + "</p>" +
          '<p class="card-sub">' + esc(s.theme) + (pl ? " · " + pl.emoji + " " + esc(pl.name) : "") + "</p></div></div></a>";
      }).join("");
  });

  route("story", function (view, params) {
    var s = findById(stories(), params[0]);
    if (!s) return navigate("#/stories");
    var p = progress();
    if (p.storiesRead.indexOf(s.id) === -1) { p.storiesRead.push(s.id); saveProgress(p); }

    view.innerHTML =
      backBtn("stories", t("stories.title")) +
      "<h1>" + esc(s.title) + "</h1>" +
      '<p class="page-intro">' + esc(s.theme) + "</p>" +
      '<div class="story-illustration" aria-hidden="true">' + s.emoji + "</div>" +
      '<div class="card">' +
      s.text.map(function (para) { return '<p class="story-para">' + esc(para) + "</p>"; }).join("") +
      "</div>" +
      '<div class="card"><span class="lesson-label">💬 ' + esc(t("stories.discussion")) + "</span>" +
      "<p style=\"margin:0\">" + esc(s.discussion) + "</p></div>" +
      '<div class="card"><span class="lesson-label">🤔 ' + esc(t("stories.whatWouldYouDo")) + "</span>" +
      "<p><b>" + esc(s.whatWouldYouDo.q) + "</b></p>" +
      s.whatWouldYouDo.options.map(function (o) {
        return '<button class="quiz-option" data-wwyd>' + esc(o) + "</button>";
      }).join("") +
      '<div id="wwyd-feedback"></div></div>' +
      '<div class="takeaway-card">🌟 ' + esc(t("stories.keyLesson")) + ": " + esc(s.lesson) + "</div>";
    /* "What would you do" has no wrong answers — it opens conversation */
    $$("[data-wwyd]", view).forEach(function (btn) {
      btn.addEventListener("click", function () {
        $$("[data-wwyd]", view).forEach(function (b) { b.classList.remove("correct"); });
        btn.classList.add("correct");
        $("#wwyd-feedback", view).innerHTML =
          '<div class="quiz-feedback good">💭 ' + esc(t("stories.wwydNote")) + "</div>";
      });
    });
  });

  /* ====================================================================
     11. HELP & ABOUT
     ==================================================================== */
  route("help", function (view) {
    var contacts = CONFIG.supportContacts || [];
    view.innerHTML =
      backBtn("resources", t("resources.title")) +
      "<h1>🆘 " + esc(t("help.title")) + "</h1>" +
      '<p class="page-intro">' + esc(t("help.intro")) + "</p>" +
      '<div class="card"><h2>' + esc(t("help.talkTo")) + "</h2>" +
      [["🧑‍🤝‍🧑", t("help.trustedAdult")], ["🧑‍🏫", t("help.teacher")], ["🎓", t("help.facilitator")], ["🏠", t("help.parent")]]
        .map(function (row) {
          return '<div class="card-row" style="margin-bottom:12px"><div class="card-emoji">' + row[0] + "</div>" +
            "<p style=\"margin:0\">" + esc(row[1]) + "</p></div>";
        }).join("") + "</div>" +
      '<div class="section-heading"><h2>' + esc(t("help.contacts")) + "</h2></div>" +
      '<p class="page-intro">' + esc(lx(CONFIG.supportIntro)) + "</p>" +
      contacts.map(function (c) {
        var sub = "";
        if (c.subtitle) {
          sub = c.subtitle.orgLink
            ? '<p class="card-sub" style="margin:0 0 6px">' + orgLink() + "</p>"
            : '<p class="card-sub" style="margin:0 0 6px">' + esc(lx(c.subtitle)) + "</p>";
        }
        return '<div class="card contact-card">' +
          '<div class="card-row" style="align-items:flex-start"><div class="card-emoji">' + c.emoji + "</div><div style=\"flex:1\">" +
          '<p class="card-title">' + esc(lx(c.title)) + "</p>" + sub +
          (c.rows || []).map(function (r) {
            var label = esc(lx(r.label));
            return r.href
              ? '<p class="contact-line"><a href="' + esc(r.href) + '"' + (r.href.indexOf("http") === 0 ? ' target="_blank" rel="noopener"' : "") + ">" + label + "</a></p>"
              : '<p class="contact-line">' + label + "</p>";
          }).join("") +
          (c.note ? '<p class="card-sub" style="margin-top:6px">' + esc(lx(c.note)) + "</p>" : "") +
          "</div></div></div>";
      }).join("") +
      '<div class="takeaway-card">💛 ' + esc(t("help.safetyReminder")) + "</div>";
  });

  route("about", function (view) {
    var org = CONFIG.organization || {};
    var prog = CONFIG.program || {};

    var orgLogo = '<img src="' + esc((CONFIG.logos || {}).organization || "") + '" alt="' + esc(org.name || "") + ' logo" width="180" height="60">';
    var orgLogoLinked = org.website
      ? '<a href="' + esc(org.website) + '" target="_blank" rel="noopener" aria-label="' + esc(org.name || "") + ' website (opens in a new tab)">' + orgLogo + "</a>"
      : orgLogo;

    var contactLines = [];
    if (org.website) contactLines.push('🌐 <a href="' + esc(org.website) + '" target="_blank" rel="noopener">' + esc(org.websiteLabel || org.website) + "</a>");
    if (org.email) contactLines.push('✉️ <a href="mailto:' + esc(org.email) + '">' + esc(org.email) + "</a>");
    if (org.phone) contactLines.push("📞 " + esc(org.phone));

    view.innerHTML =
      backBtn("resources", t("resources.title")) +
      "<h1>ℹ️ " + esc(t("about.title")) + "</h1>" +
      '<div class="card" style="text-align:center">' +
      '<img src="' + esc((CONFIG.logos || {}).app || "") + '" alt="I Matter logo" width="96" height="96" style="border-radius:22px">' +
      "<h2>" + esc(CONFIG.appName || "I Matter") + "</h2>" +
      "<p>" + esc(lx(CONFIG.tagline)) + "</p></div>" +
      '<div class="motto-card"><span aria-hidden="true">💛</span><p>' + esc(lx(CONFIG.motto)) + "</p></div>" +
      '<div class="card"><h2>' + esc(t("about.programHeading")) + "</h2>" +
      "<p>" + esc(lx(prog.about)) + "</p><p>" + esc(lx(prog.delivery)) + "</p>" +
      "<h3>" + esc(t("about.pillarsHeading")) + "</h3>" +
      '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
      pillars().map(function (pl) {
        return '<a class="chip" href="#/framework">' + pl.emoji + " " + esc(pl.name) + "</a>";
      }).join("") + "</div></div>" +
      '<div class="card"><div style="text-align:center;margin-bottom:10px">' +
      orgLogoLinked + "</div>" +
      "<h2>" + esc(t("about.orgHeading")) + "</h2>" +
      "<p>" + esc(lx(org.about)) + "</p><p>" + esc(lx(org.history)) + "</p>" +
      (contactLines.length ? "<p>" + contactLines.join("<br>") + "</p>" : "") + "</div>" +
      '<div class="card"><h2>🔒 ' + esc(t("about.privacyHeading")) + "</h2>" +
      "<p>" + esc(t("about.privacyBody")) + "</p></div>" +
      '<p class="card-sub" style="text-align:center">' + esc(t("about.versionLabel")) + ": " + esc(CONFIG.version || "") + "</p>";
  });

  /* ====================================================================
     11b. SESSION PLANS (one per pillar)
     ==================================================================== */
  route("session-plans", function (view) {
    view.innerHTML =
      "<h1>📋 " + esc(t("sessionPlans.title")) + "</h1>" +
      '<p class="page-intro">' + esc(t("sessionPlans.intro")) + "</p>" +
      sessionPlans().map(function (sp) {
        var pl = pillarById(sp.pillar);
        return '<a class="card clickable sp-card c-' + esc(sp.color || "teal") + '" href="#/session-plan/' + esc(sp.id) + '">' +
          '<div class="card-row"><div class="card-emoji">' + sp.emoji + "</div><div>" +
          (pl ? '<p class="sp-pillar-tag">' + esc(t("sessionPlans.pillar")) + " " + pl.num + " · " + esc(pl.name) + "</p>" : "") +
          '<p class="card-title">' + esc(sp.title) + "</p>" +
          '<p class="card-sub">' + esc(sp.tagline) + "</p>" +
          '<p class="sp-meta">⏱️ ' + esc(sp.duration) + " · " + sp.sections.length + " " + esc(t("sessionPlans.parts")) + "</p>" +
          "</div></div></a>";
      }).join("");
  });

  route("session-plan", function (view, params) {
    var sp = findById(sessionPlans(), params[0]);
    if (!sp) return navigate("#/session-plans");
    renderSessionPlan(view, sp);
  });

  /* Render one list item (supports bold label, plain text, and nested list) */
  function spItem(it) {
    if (typeof it === "string") return "<li>" + esc(it) + "</li>";
    var s = "<li>";
    if (it.b) s += "<strong>" + esc(it.b) + "</strong>" + (it.t ? " " + esc(it.t) : "");
    else if (it.t) s += esc(it.t);
    if (it.sub && it.sub.length) s += '<ul class="sp-sublist">' + it.sub.map(spItem).join("") + "</ul>";
    return s + "</li>";
  }

  /* Render one content block (recursive for activity bodies) */
  function renderSPBlock(b) {
    if (b.p) return '<p class="sp-p">' + esc(b.p) + "</p>";
    if (b.h) return '<h3 class="sp-h">' + esc(b.h) + "</h3>";
    if (b.ul) return '<ul class="sp-list">' + b.ul.map(spItem).join("") + "</ul>";
    if (b.ol) return '<ol class="sp-list sp-ol">' + b.ol.map(spItem).join("") + "</ol>";
    if (b.note) return '<div class="sp-note"><span class="sp-note-emoji" aria-hidden="true">' + (b.emoji || "💡") + '</span><p>' + esc(b.note) + "</p></div>";
    if (b.pledge) return '<div class="sp-pledge"><span aria-hidden="true">✊</span><p>' + esc(b.pledge) + "</p></div>";
    if (b.scenario) {
      var paras = Array.isArray(b.scenario) ? b.scenario : [b.scenario];
      return '<figure class="sp-scenario">' +
        (b.title ? '<figcaption class="sp-scenario-title">📖 ' + esc(b.title) + "</figcaption>" : "") +
        paras.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</figure>";
    }
    if (b.dialogue) {
      return '<div class="sp-dialogue">' +
        (b.title ? '<p class="sp-scenario-title">💬 ' + esc(b.title) + "</p>" : "") +
        b.dialogue.map(function (d) {
          return '<p class="sp-line"><span class="sp-who">' + esc(d.who) + ":</span> " + esc(d.line) + "</p>";
        }).join("") + "</div>";
    }
    if (b.table) {
      var tb = b.table;
      return '<div class="sp-table-wrap"><table class="sp-table"><thead><tr>' +
        tb.headers.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") +
        "</tr></thead><tbody>" +
        tb.rows.map(function (r) {
          return "<tr>" + r.map(function (c, ci) {
            return '<td data-label="' + esc(tb.headers[ci] || "") + '">' + esc(c) + "</td>";
          }).join("") + "</tr>";
        }).join("") + "</tbody></table></div>";
    }
    if (b.activity) {
      return '<div class="sp-activity">' +
        '<p class="sp-activity-head"><span class="sp-activity-badge">🎲 ' + esc(t("sessionPlans.activity")) + "</span> " +
        '<span class="sp-activity-title">' + esc(b.activity) + "</span>" +
        (b.time ? ' <span class="sp-time">⏱️ ' + esc(b.time) + "</span>" : "") + "</p>" +
        '<div class="sp-activity-body">' + (b.body || []).map(renderSPBlock).join("") + "</div></div>";
    }
    return "";
  }

  function renderSessionPlan(view, sp) {
    var color = "c-" + (sp.color || "teal");
    var pl = pillarById(sp.pillar);

    var toc = sp.sections.map(function (sec, i) {
      return '<button class="chip sp-jump" type="button" data-target="sp-sec-' + i + '">' +
        (i + 1) + ". " + esc(sec.title) + "</button>";
    }).join("");

    var body = sp.sections.map(function (sec, i) {
      return '<section class="sp-section" id="sp-sec-' + i + '">' +
        '<div class="sp-sec-head">' +
        '<span class="sp-sec-num" aria-hidden="true">' + (i + 1) + "</span>" +
        "<h2>" + esc(sec.title) + "</h2>" +
        (sec.time ? '<span class="sp-time">⏱️ ' + esc(sec.time) + "</span>" : "") +
        "</div>" +
        sec.blocks.map(renderSPBlock).join("") + "</section>";
    }).join("");

    view.innerHTML =
      backBtn("session-plans", t("sessionPlans.title")) +
      '<header class="sp-hero ' + color + '">' +
      '<span class="sp-hero-emoji" aria-hidden="true">' + sp.emoji + "</span>" +
      (pl ? '<p class="sp-pillar-tag">' + esc(t("sessionPlans.pillar")) + " " + pl.num + " · " + esc(pl.name) + "</p>" : "") +
      "<h1>" + esc(sp.title) + "</h1>" +
      '<p class="sp-hero-tagline">' + esc(sp.tagline) + "</p>" +
      (pl && pl.outcome ? '<p class="sp-hero-outcome">🌱 ' + esc(t("sessionPlans.outcome")) + ": “" + esc(pl.outcome) + "”</p>" : "") +
      '<p class="sp-hero-meta"><span class="chip">⏱️ ' + esc(t("sessionPlans.duration")) + ": " + esc(sp.duration) + "</span></p>" +
      "</header>" +
      '<div class="sp-toc no-print"><p class="lesson-label">🧭 ' + esc(t("sessionPlans.contents")) + "</p>" +
      '<div class="sp-toc-chips">' + toc + "</div></div>" +
      body +
      '<div class="no-print" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">' +
      '<button class="btn secondary" onclick="window.print()">🖨️ ' + esc(t("actions.print")) + "</button></div>";

    $$(".sp-jump", view).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = $("#" + btn.getAttribute("data-target"), view);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  /* ====================================================================
     13. SETTINGS MODAL (accessibility controls)
     ==================================================================== */
  /* Is the app already running as an installed PWA? */
  function isInstalled() {
    return (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) ||
      window.navigator.standalone === true;
  }

  /* Best-effort platform hint for install instructions */
  function installInstructionKey() {
    var ua = (navigator.userAgent || "").toLowerCase();
    if (/iphone|ipad|ipod/.test(ua) || (/macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return "install.ios";
    if (/android/.test(ua)) return "install.android";
    return "install.desktop";
  }

  /* The install control shown inside the Settings panel — always available:
     a real install button where the browser supports it, otherwise clear
     step-by-step instructions (e.g. iOS "Add to Home Screen"). */
  function installFieldHtml() {
    if (isInstalled()) {
      return '<p class="card-sub" role="status">' + esc(t("install.installedNote")) + "</p>";
    }
    var html = '<p class="card-sub" style="margin:0 0 8px">' + esc(t("install.body")) + "</p>";
    if (deferredInstall) {
      html += '<button class="btn small" id="install-now">📲 ' + esc(t("actions.install")) + "</button>";
    } else {
      html += '<p class="card-sub" style="margin:0">📲 ' + esc(t(installInstructionKey())) + "</p>";
    }
    return html;
  }

  function openSettings() {
    function seg(name, value, label) {
      var active = settings[name] === value;
      return '<button class="chip' + (active ? " active" : "") + '" data-set="' + name + '" data-val="' + value + '" aria-pressed="' + active + '">' + esc(label) + "</button>";
    }
    var body =
      '<div class="field"><label>' + esc(t("settings.textSize")) + "</label>" +
      '<div class="seg-group">' +
      seg("textsize", "normal", t("settings.textNormal")) +
      seg("textsize", "large", t("settings.textLarge")) +
      seg("textsize", "xl", t("settings.textXL")) + "</div></div>" +

      '<div class="toggle-row"><span class="label">' + esc(t("settings.contrast")) + "</span>" +
      '<span class="switch"><input type="checkbox" id="set-contrast"' + (settings.contrast === "high" ? " checked" : "") + '>' +
      '<span class="track"></span><span class="thumb"></span></span></div>' +

      '<div class="toggle-row"><span class="label">' + esc(t("settings.motion")) + "</span>" +
      '<span class="switch"><input type="checkbox" id="set-motion"' + (settings.motion === "reduced" ? " checked" : "") + '>' +
      '<span class="track"></span><span class="thumb"></span></span></div>' +

      '<div class="toggle-row"><span class="label">' + esc(t("settings.simpleLang")) + "</span>" +
      '<span class="switch"><input type="checkbox" id="set-simple"' + (settings.simple ? " checked" : "") + '>' +
      '<span class="track"></span><span class="thumb"></span></span></div>' +

      '<div class="field" style="margin-top:10px"><label>' + esc(t("settings.language")) + "</label>" +
      '<div class="seg-group">' +
      seg("lang", "en", t("settings.english")) +
      seg("lang", "sw", t("settings.kiswahili")) + "</div></div>" +

      '<div class="field" style="margin-top:10px"><label>' + esc(t("install.heading")) + "</label>" +
      installFieldHtml() + "</div>" +

      '<div class="field" style="margin-top:10px"><label>' + esc(t("settings.updates")) + "</label>" +
      '<button class="btn secondary small" id="check-updates">🔄 ' + esc(t("actions.checkUpdates")) + "</button>" +
      '<p class="card-sub" id="update-msg" role="status" style="margin-top:6px"></p></div>';

    openModal("⚙️ " + esc(t("settings.title")), body, function (modal) {
      settingsOpen = true;
      $$("[data-set]", modal).forEach(function (btn) {
        btn.addEventListener("click", function () {
          settings[btn.getAttribute("data-set")] = btn.getAttribute("data-val");
          saveSettings();
          closeModal();
          buildNav();
          render();
          openSettings();
        });
      });
      $("#set-contrast", modal).addEventListener("change", function () {
        settings.contrast = this.checked ? "high" : "normal"; saveSettings();
      });
      $("#set-motion", modal).addEventListener("change", function () {
        settings.motion = this.checked ? "reduced" : "auto"; saveSettings();
      });
      $("#set-simple", modal).addEventListener("change", function () {
        settings.simple = this.checked; saveSettings();
      });
      var installNow = $("#install-now", modal);
      if (installNow) installNow.addEventListener("click", triggerInstall);
      $("#check-updates", modal).addEventListener("click", function () {
        var msg = $("#update-msg", modal);
        msg.textContent = t("settings.checking");
        if ("serviceWorker" in navigator) {
          navigator.serviceWorker.getRegistration().then(function (reg) {
            if (!reg) { msg.textContent = t("settings.upToDate"); return; }
            reg.update().then(function () {
              setTimeout(function () {
                msg.textContent = reg.installing || reg.waiting ? t("settings.updateFound") : t("settings.upToDate");
              }, 1500);
            }).catch(function () { msg.textContent = t("settings.upToDate"); });
          });
        } else msg.textContent = t("settings.upToDate");
      });
    });
  }

  $("#settings-btn").addEventListener("click", openSettings);
  $("#lang-btn").addEventListener("click", function () {
    var idx = LANGS.indexOf(settings.lang);
    settings.lang = LANGS[(idx + 1) % LANGS.length];
    saveSettings();
    buildNav();
    render();
  });

  /* ====================================================================
     15. PWA: install prompt + service worker + update notification
     ==================================================================== */
  var deferredInstall = null;
  var settingsOpen = false;
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferredInstall = e;
    /* Reflect availability wherever the install option is showing */
    if (settingsOpen) openSettings();
    else if (currentRoute() === "home") render();
  });
  function triggerInstall() {
    if (!deferredInstall) return;
    deferredInstall.prompt();
    deferredInstall.userChoice.then(function () {
      deferredInstall = null;
      if (settingsOpen) openSettings();
      else if (currentRoute() === "home") render();
    });
  }
  window.addEventListener("appinstalled", function () {
    deferredInstall = null;
    toast("🎉 " + t("install.installed"));
    if (settingsOpen) openSettings();
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("service-worker.js").then(function (reg) {
        /* Notify when a new version is ready */
        reg.addEventListener("updatefound", function () {
          var nw = reg.installing;
          if (!nw) return;
          nw.addEventListener("statechange", function () {
            if (nw.state === "installed" && navigator.serviceWorker.controller) {
              toast("✨ " + t("settings.updateFound"), t("settings.updateReload"), function () {
                nw.postMessage({ type: "SKIP_WAITING" });
              }, true);
            }
          });
        });
      }).catch(function () { /* first load without a connection, or unsupported */ });

      var refreshed = false;
      navigator.serviceWorker.addEventListener("controllerchange", function () {
        if (refreshed) return;
        refreshed = true;
        location.reload();
      });
    });
  }

  /* ======================================================================
     Boot
     ====================================================================== */
  applySettings();
  buildNav();
  window.addEventListener("hashchange", render);
  render();
})();
