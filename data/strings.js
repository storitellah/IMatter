/* ==========================================================================
   I MATTER — UI TEXT (English + Kiswahili)
   --------------------------------------------------------------------------
   Every piece of interface text lives here so it can be translated.
   To add another language: copy the whole "en" block, rename it (e.g. "fr"),
   translate the values, then add the language code to LANGS in script.js.
   ========================================================================== */

window.IM_STRINGS = {
  en: {
    appName: "I Matter",

    /* Navigation */
    nav: {
      home: "Home", resources: "Resources", "session-plans": "Session Plans"
    },

    /* Common actions */
    actions: {
      back: "Back", close: "Close",
      save: "Save", saved: "Saved on this device", delete: "Delete",
      print: "Print", reveal: "Tap to reveal",
      open: "Open", install: "Install app",
      addNote: "Add", checkUpdates: "Check for updates"
    },

    /* Home */
    home: {
      welcomeTitle: "You matter.",
      welcomeBody: "Your life has value. Your choices have power. Your future is worth investing in.",
      welcomeSub: "A Positive Youth Development toolkit for facilitators, teachers, and youth workers.",
      todayEncouragement: "Today's encouragement",
      pillarsTitle: "The six pillars",
      sectionsTitle: "Start here",
      sessionPlansSub: "Six ready-to-run sessions — one for each pillar of the framework.",
      resourcesSub: "The framework, pillar lessons, stories, your private space, and support.",
      progressTitle: "Your progress",
      lessonsDone: "lessons reviewed",
      badgesEarned: "badges earned",
      installTitle: "Add I Matter to your home screen",
      installBody: "Install the app once with an internet connection — after that it works anywhere, anytime."
    },

    /* Resources hub */
    resources: {
      title: "Resources",
      intro: "Your toolkit for sessions and beyond — the framework, pillar lessons, stories, your own space, and support information.",
      frameworkSub: "What I Matter is, the approach behind it, and the six pillars.",
      learnSub: "Short lessons for every pillar — key ideas, examples, and quick quizzes.",
      storiesSub: "Short stories to read and discuss with your students.",
      myspaceSub: "Your private notes, plans, journal, and badges — on this device only.",
      helpSub: "Support contacts and safety guidance to share with students.",
      aboutSub: "About the program, the organization, and your privacy."
    },

    /* Framework page */
    framework: {
      title: "The Framework",
      pillar: "Pillar",
      outcome: "Outcome",
      focus: "Focus",
      topics: "Core topics"
    },

    /* Learn (pillar lessons) */
    learn: {
      title: "The Six Pillars",
      intro: "Every pillar strengthens the inner compass. Lead these short lessons with your students — key ideas, real-life examples, and quick quizzes to discuss together.",
      lessons: "lessons",
      introHeading: "Introduction",
      keyLesson: "Key lesson",
      example: "Real-life example",
      reflection: "Think about it",
      activity: "Small activity",
      quiz: "Quick quiz",
      takeaway: "Takeaway",
      related: "Related topics",
      markDone: "Mark as reviewed",
      done: "Reviewed!",
      correct: "That's right! Well done.",
      incorrect: "Not quite — that's okay! Learning means trying.",
      tryAgain: "Try again"
    },

    /* My Space */
    myspace: {
      title: "My Space",
      intro: "A private space for your own notes, planning, and reflection. Everything here stays on this device only.",
      privacyNote: "Private: saved only on this device. Nothing is uploaded or shared.",
      strengths: "My strengths",
      goals: "My goals",
      gratitude: "Gratitude notes",
      learned: "Things I learned",
      trusted: "People I trust",
      calmPlan: "My calm-down plan",
      studyPlan: "My study plan",
      weeklyChallenge: "My weekly challenge",
      journal: "Private journal",
      badges: "My badges",
      pinProtect: "Protect My Space with a PIN",
      pinPrompt: "Choose a PIN (4+ digits):",
      wrongPin: "That PIN is not correct.",
      deleteAll: "Delete all my data",
      deleteConfirm: "This will delete everything saved in this app on this device: journal, goals, notes, and badges. This cannot be undone. Delete everything?",
      deleted: "All your data has been deleted.",
      emptyList: "Nothing here yet. Add your first one!",
      journalPromptLabel: "Need an idea? Try this prompt:",
      /* Placeholders and prompts for the tools */
      strengthsPh: "e.g. I am a good listener",
      goalsPh: "e.g. Improve my maths grade this term",
      gratitudePh: "e.g. My friend helped me today",
      learnedPh: "e.g. Naming feelings makes them easier",
      trustedPh: "e.g. My aunt Grace",
      calmPlanPrompt: "When I feel overwhelmed, I will... (e.g. breathe slowly 3 times, drink water, talk to someone I trust)",
      studyPlanPrompt: "My study plan: when, where, which subjects, and my break plan.",
      challengePrompt: "My challenge for this week is..."
    },

    /* Stories */
    stories: {
      title: "Stories",
      intro: "Short stories to read and discuss with your students — one for each pillar. Ask the group: what would you do?",
      discussion: "Talk about it",
      whatWouldYouDo: "What would you do?",
      wwydNote: "There is no single right answer here — what matters is thinking it through. Talk about your choice with a friend, your group, or a trusted adult.",
      keyLesson: "Key lesson"
    },

    /* Help */
    help: {
      title: "Help & Support",
      intro: "Guidance to share with your students. Everyone needs help sometimes, and asking for help is a sign of strength, not weakness.",
      talkTo: "People students can talk to",
      trustedAdult: "A trusted adult — someone who listens and keeps you safe",
      teacher: "A teacher you trust at school",
      facilitator: "Your I Matter facilitator",
      parent: "A parent, guardian, or family member you trust",
      contacts: "Support contacts",
      safetyReminder: "If you or a friend is in danger, tell a trusted adult right away. You never have to face a hard situation alone."
    },

    /* About */
    about: {
      title: "About",
      programHeading: "About I Matter",
      orgHeading: "About Imagine Tomorrow Foundation",
      privacyHeading: "Your privacy",
      privacyBody: "This app does not ask for your name, does not need an account, and does not send your writing or feelings anywhere. Everything you save stays on this device. You can delete it all at any time in My Space.",
      pillarsHeading: "The six pillars",
      versionLabel: "App version"
    },

    /* Session Plans (main tab) */
    sessionPlans: {
      title: "Session Plans",
      intro: "Six ready-to-run life-skills sessions — one for each pillar of the I Matter framework. Read them, prepare, and lead them with your group.",
      duration: "Duration",
      contents: "In this session",
      activity: "Activity",
      parts: "parts",
      pillar: "Pillar",
      outcome: "Outcome"
    },

    /* Settings */
    settings: {
      title: "Settings & Accessibility",
      textSize: "Text size",
      textNormal: "Normal", textLarge: "Large", textXL: "Extra large",
      contrast: "High contrast",
      motion: "Reduce motion",
      simpleLang: "Simple language mode",
      language: "Language",
      english: "English", kiswahili: "Kiswahili",
      updates: "App updates",
      updateFound: "A new version is ready.",
      updateReload: "Refresh now",
      upToDate: "You have the latest version.",
      checking: "Checking..."
    },

    badges: {
      earned: "Badge earned!"
    },

    install: {
      installed: "App installed! It now works anywhere, even without an internet connection.",
      heading: "Install app",
      installedNote: "✅ I Matter is installed on this device. It works anywhere, even offline.",
      body: "Install I Matter so it works anywhere, anytime — even with no internet connection.",
      ios: "On iPhone or iPad: tap the Share button, then choose “Add to Home Screen”.",
      android: "On Android: open the browser menu (⋮), then choose “Install app” or “Add to Home screen”.",
      desktop: "On computer: click the install icon in your browser’s address bar, or use the browser menu."
    }
  },

  /* ------------------------------------------------------------------ */
  sw: {
    appName: "I Matter",

    nav: {
      home: "Nyumbani", resources: "Rasilimali", "session-plans": "Mipango ya Vikao"
    },

    actions: {
      back: "Rudi", close: "Funga",
      save: "Hifadhi", saved: "Imehifadhiwa kwenye kifaa hiki", delete: "Futa",
      print: "Chapisha", reveal: "Gusa kuona jibu",
      open: "Fungua", install: "Sakinisha programu",
      addNote: "Ongeza", checkUpdates: "Angalia masasisho"
    },

    home: {
      welcomeTitle: "Wewe ni wa muhimu.",
      welcomeBody: "Maisha yako yana thamani. Maamuzi yako yana nguvu. Maisha yako ya baadaye yanastahili kuwekezwa.",
      welcomeSub: "Zana ya Makuzi Chanya ya Vijana kwa wawezeshaji, walimu, na wafanyakazi wa vijana.",
      todayEncouragement: "Moyo wa leo",
      pillarsTitle: "Nguzo sita",
      sectionsTitle: "Anzia hapa",
      sessionPlansSub: "Vikao sita vilivyo tayari kuendeshwa — kimoja kwa kila nguzo ya mfumo.",
      resourcesSub: "Mfumo, masomo ya nguzo, hadithi, nafasi yako ya faragha, na msaada.",
      progressTitle: "Maendeleo yako",
      lessonsDone: "masomo yaliyopitiwa",
      badgesEarned: "beji zilizopatikana",
      installTitle: "Weka I Matter kwenye skrini yako",
      installBody: "Sakinisha programu mara moja ukiwa na intaneti — baada ya hapo inafanya kazi popote, wakati wowote."
    },

    resources: {
      title: "Rasilimali",
      intro: "Zana yako kwa vikao na zaidi — mfumo, masomo ya nguzo, hadithi, nafasi yako mwenyewe, na taarifa za msaada.",
      frameworkSub: "I Matter ni nini, mbinu iliyo nyuma yake, na nguzo sita.",
      learnSub: "Masomo mafupi kwa kila nguzo — mawazo makuu, mifano, na maswali mafupi.",
      storiesSub: "Hadithi fupi za kusoma na kujadili na wanafunzi wako.",
      myspaceSub: "Maelezo yako ya faragha, mipango, shajara, na beji — kwenye kifaa hiki tu.",
      helpSub: "Mawasiliano ya msaada na mwongozo wa usalama wa kushiriki na wanafunzi.",
      aboutSub: "Kuhusu programu, shirika, na faragha yako."
    },

    framework: {
      title: "Mfumo",
      pillar: "Nguzo",
      outcome: "Matokeo",
      focus: "Lengo",
      topics: "Mada kuu"
    },

    learn: {
      title: "Nguzo Sita",
      intro: "Kila nguzo huimarisha dira ya ndani. Ongoza masomo haya mafupi na wanafunzi wako — mawazo makuu, mifano halisi, na maswali mafupi ya kujadili pamoja.",
      lessons: "masomo",
      introHeading: "Utangulizi",
      keyLesson: "Somo kuu",
      example: "Mfano halisi",
      reflection: "Fikiria",
      activity: "Shughuli ndogo",
      quiz: "Swali fupi",
      takeaway: "Ujumbe wa kuchukua",
      related: "Mada zinazohusiana",
      markDone: "Weka alama: nimepitia",
      done: "Umepitia!",
      correct: "Sahihi! Hongera.",
      incorrect: "Sio sahihi — ni sawa! Kujifunza ni kujaribu.",
      tryAgain: "Jaribu tena"
    },

    myspace: {
      title: "Nafasi Yangu",
      intro: "Nafasi ya faragha kwa maelezo yako, mipango, na tafakari. Kila kitu hubaki kwenye kifaa hiki tu.",
      privacyNote: "Faragha: huhifadhiwa kwenye kifaa hiki tu. Hakuna kinachotumwa nje.",
      strengths: "Uwezo wangu",
      goals: "Malengo yangu",
      gratitude: "Shukrani zangu",
      learned: "Nilichojifunza",
      trusted: "Watu ninaowaamini",
      calmPlan: "Mpango wangu wa kutulia",
      studyPlan: "Mpango wangu wa kusoma",
      weeklyChallenge: "Changamoto yangu ya wiki",
      journal: "Shajara ya faragha",
      badges: "Beji zangu",
      pinProtect: "Linda Nafasi Yangu kwa PIN",
      pinPrompt: "Chagua PIN (tarakimu 4 au zaidi):",
      wrongPin: "PIN hiyo si sahihi.",
      deleteAll: "Futa data yangu yote",
      deleteConfirm: "Hii itafuta kila kitu kilichohifadhiwa kwenye kifaa hiki: shajara, malengo, maelezo, na beji. Haiwezi kurudishwa. Futa kila kitu?",
      deleted: "Data yako yote imefutwa.",
      emptyList: "Hakuna kitu bado. Ongeza cha kwanza!",
      journalPromptLabel: "Unahitaji wazo? Jaribu hili:",
      strengthsPh: "mfano: Mimi ni msikilizaji mzuri",
      goalsPh: "mfano: Kuboresha alama zangu za hisabati muhula huu",
      gratitudePh: "mfano: Rafiki yangu alinisaidia leo",
      learnedPh: "mfano: Kutaja hisia hufanya ziwe rahisi",
      trustedPh: "mfano: Shangazi yangu Grace",
      calmPlanPrompt: "Ninapohisi kulemewa, nita... (mfano: kupumua polepole mara 3, kunywa maji, kuzungumza na mtu ninayemwamini)",
      studyPlanPrompt: "Mpango wangu wa kusoma: lini, wapi, masomo yapi, na mpango wangu wa mapumziko.",
      challengePrompt: "Changamoto yangu ya wiki hii ni..."
    },

    stories: {
      title: "Hadithi",
      intro: "Hadithi fupi za kusoma na kujadili na wanafunzi wako — moja kwa kila nguzo. Waulize kikundi: ungefanya nini?",
      discussion: "Zungumza kuhusu hili",
      whatWouldYouDo: "Wewe ungefanya nini?",
      wwydNote: "Hakuna jibu moja sahihi hapa — muhimu ni kufikiria kwa kina. Zungumza kuhusu chaguo lako na rafiki, kikundi chako, au mtu mzima unayemwamini.",
      keyLesson: "Somo kuu"
    },

    help: {
      title: "Msaada",
      intro: "Mwongozo wa kushiriki na wanafunzi wako. Kila mtu huhitaji msaada wakati mwingine, na kuomba msaada ni ishara ya nguvu, si udhaifu.",
      talkTo: "Watu ambao wanafunzi wanaweza kuzungumza nao",
      trustedAdult: "Mtu mzima unayemwamini — anayesikiliza na kukulinda",
      teacher: "Mwalimu unayemwamini shuleni",
      facilitator: "Mwezeshaji wako wa I Matter",
      parent: "Mzazi, mlezi, au ndugu unayemwamini",
      contacts: "Mawasiliano ya msaada",
      safetyReminder: "Kama wewe au rafiki yako yuko hatarini, mwambie mtu mzima unayemwamini mara moja. Hupaswi kukabili hali ngumu peke yako."
    },

    about: {
      title: "Kuhusu",
      programHeading: "Kuhusu I Matter",
      orgHeading: "Kuhusu Imagine Tomorrow Foundation",
      privacyHeading: "Faragha yako",
      privacyBody: "Programu hii haiombi jina lako, haihitaji akaunti, na haitumi maandishi au hisia zako popote. Kila unachohifadhi hubaki kwenye kifaa hiki. Unaweza kufuta yote wakati wowote katika Nafasi Yangu.",
      pillarsHeading: "Nguzo sita",
      versionLabel: "Toleo la programu"
    },

    sessionPlans: {
      title: "Mipango ya Vikao",
      intro: "Vikao sita vya stadi za maisha vilivyo tayari kuendeshwa — kimoja kwa kila nguzo ya mfumo wa I Matter. Visome, jiandae, na uviongoze na kikundi chako.",
      duration: "Muda",
      contents: "Katika kikao hiki",
      activity: "Shughuli",
      parts: "sehemu",
      pillar: "Nguzo",
      outcome: "Matokeo"
    },

    settings: {
      title: "Mipangilio na Ufikivu",
      textSize: "Ukubwa wa maandishi",
      textNormal: "Kawaida", textLarge: "Kubwa", textXL: "Kubwa zaidi",
      contrast: "Utofautishaji mkubwa",
      motion: "Punguza mwendo",
      simpleLang: "Hali ya lugha rahisi",
      language: "Lugha",
      english: "Kiingereza", kiswahili: "Kiswahili",
      updates: "Masasisho ya programu",
      updateFound: "Toleo jipya liko tayari.",
      updateReload: "Onyesha upya sasa",
      upToDate: "Una toleo jipya kabisa.",
      checking: "Inakagua..."
    },

    badges: {
      earned: "Umepata beji!"
    },

    install: {
      installed: "Programu imesakinishwa! Sasa inafanya kazi popote, hata bila intaneti.",
      heading: "Sakinisha programu",
      installedNote: "✅ I Matter imesakinishwa kwenye kifaa hiki. Inafanya kazi popote, hata bila intaneti.",
      body: "Sakinisha I Matter ili ifanye kazi popote, wakati wowote — hata bila intaneti.",
      ios: "Kwenye iPhone au iPad: gusa kitufe cha Share, kisha uchague “Add to Home Screen”.",
      android: "Kwenye Android: fungua menyu ya kivinjari (⋮), kisha uchague “Install app” au “Add to Home screen”.",
      desktop: "Kwenye kompyuta: bofya aikoni ya kusakinisha kwenye upau wa anwani wa kivinjari, au tumia menyu ya kivinjari."
    }
  }
};
