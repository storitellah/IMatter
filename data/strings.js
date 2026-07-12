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
    tagline: "A facilitator's toolkit for guiding young people through life skills.",

    /* Navigation */
    nav: {
      home: "Home", learn: "Learn", games: "Games", myspace: "My Space",
      stories: "Stories", activities: "Activities", help: "Help", about: "About",
      more: "More", facilitator: "Facilitator", "session-plans": "Session Plans"
    },

    /* Common actions */
    actions: {
      back: "Back", next: "Next", start: "Start", done: "Done", close: "Close",
      save: "Save", cancel: "Cancel", delete: "Delete", print: "Print",
      exportPdf: "Save as PDF", reset: "Reset", playAgain: "Play again",
      check: "Check", reveal: "Tap to reveal", continue: "Continue",
      seeAll: "See all", tryIt: "Try it", open: "Open", install: "Install app",
      addNote: "Add", edit: "Edit", checkUpdates: "Check for updates"
    },

    /* Home */
    home: {
      welcomeTitle: "Guide. Support. Empower.",
      welcomeBody: "Everything you need to lead young people through life skills — lessons, stories, activities, and ready-to-run session plans.",
      todayEncouragement: "Today's encouragement",
      quickTopics: "Teaching topics",
      featuredActivity: "Featured activity",
      featuredGame: "Featured game",
      moodTitle: "How are you feeling today?",
      moodHint: "Tap the feeling that fits best. This stays on your device.",
      progressTitle: "Your progress",
      lessonsDone: "lessons reviewed",
      gamesPlayed: "games played",
      badgesEarned: "badges earned",
      installTitle: "Add I Matter to your home screen",
      installBody: "Install the app so it works anytime, even without internet.",
      offlineReady: "Ready to use offline",
      online: "Online",
      offline: "Offline — everything still works!"
    },

    /* Learn */
    learn: {
      title: "Learn",
      intro: "Teaching topics to lead with your students — short lessons, real-life examples, and quick quizzes to discuss together.",
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

    /* Games */
    games: {
      title: "Games",
      intro: "Play, learn, and grow. Every game works offline and no one sees your score but you.",
      bestScore: "Best",
      lastScore: "Last",
      score: "Score",
      wellDone: "Well done!",
      goodTry: "Good try! Every attempt helps you learn.",
      instructions: "How to play"
    },

    /* My Space */
    myspace: {
      title: "My Space",
      intro: "A private space for your own notes, planning, and reflection. Everything here stays on this device only.",
      privacyNote: "Private: saved only on this device. Nothing is uploaded or shared.",
      mood: "Mood check-in",
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
      deleteAll: "Delete all my data",
      deleteConfirm: "This will delete everything saved in this app on this device: journal, goals, moods, scores, and badges. This cannot be undone. Delete everything?",
      deleted: "All your data has been deleted.",
      emptyList: "Nothing here yet. Add your first one!",
      journalPromptLabel: "Need an idea? Try this prompt:"
    },

    /* Mood */
    mood: {
      happy: "Happy", calm: "Calm", excited: "Excited", worried: "Worried",
      sad: "Sad", angry: "Angry", tired: "Tired", confused: "Confused",
      thanks: "Thank you for sharing how you feel.",
      breathe: "Try a breathing exercise",
      breatheIn: "Breathe in...",
      breatheHold: "Hold...",
      breatheOut: "Breathe out...",
      breatheDone: "Well done. You can repeat this any time you need it."
    },

    /* Stories */
    stories: {
      title: "Stories",
      intro: "Short stories to read and discuss with your students. Ask the group: what would you do?",
      discussion: "Talk about it",
      whatWouldYouDo: "What would you do?",
      keyLesson: "Key lesson",
      relatedActivity: "Related activity"
    },

    /* Activities */
    activities: {
      title: "Activities",
      intro: "Worksheets and tools to complete with your students or print for your sessions.",
      inApp: "Do it in the app",
      printable: "Printable",
      saved: "Saved on this device",
      resetOne: "Reset this activity"
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
      contactsNote: "Ask your teacher or facilitator to confirm these contacts are current.",
      safetyReminder: "If you or a friend is in danger, tell a trusted adult right away. You never have to face a hard situation alone."
    },

    /* About */
    about: {
      title: "About",
      programHeading: "About I Matter",
      orgHeading: "About Imagine Tomorrow Foundation",
      privacyHeading: "Your privacy",
      privacyBody: "This app does not ask for your name, does not need an account, and does not send your writing or feelings anywhere. Everything you save stays on this device. You can delete it all at any time in My Space.",
      skillsHeading: "Skills we grow together",
      versionLabel: "App version"
    },

    /* Sessions / facilitator */
    facilitator: {
      title: "Facilitator Mode",
      enterPin: "Enter facilitator PIN",
      wrongPin: "That PIN is not correct.",
      unlocked: "Facilitator Mode unlocked",
      lock: "Lock Facilitator Mode",
      sessions: "Monthly session plans",
      projector: "Projector mode",
      projectorOff: "Exit projector mode",
      discussion: "Discussion questions",
      totals: "Local completion totals",
      totalsNote: "These totals count activity on this device only. No individual or personal data is collected.",
      notes: "My session notes",
      groupName: "School / group name",
      changePin: "Change facilitator PIN",
      resetResults: "Reset local activity results",
      resetResultsConfirm: "Reset lesson, game, and quiz completion counters on this device? Personal My Space entries are not touched.",
      objective: "Learning objective",
      opening: "Opening activity",
      mainLesson: "Main lesson",
      groupDiscussion: "Group discussion",
      game: "Game",
      reflection: "Reflection",
      challenge: "Take-home challenge"
    },

    /* Session Plans (public tab) */
    sessionPlans: {
      title: "Session Plans",
      intro: "Ready-to-run life-skills sessions to lead with your students — read them, prepare, and run them with your group.",
      duration: "Duration",
      contents: "In this session",
      activity: "Activity",
      parts: "parts"
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

    offline: {
      nowOffline: "You are offline. Everything in I Matter still works!",
      nowOnline: "You are back online."
    }
  },

  /* ------------------------------------------------------------------ */
  sw: {
    appName: "I Matter",
    tagline: "Zana ya mwezeshaji ya kuwaongoza vijana katika stadi za maisha.",

    nav: {
      home: "Nyumbani", learn: "Jifunze", games: "Michezo", myspace: "Nafasi Yangu",
      stories: "Hadithi", activities: "Shughuli", help: "Msaada", about: "Kuhusu",
      more: "Zaidi", facilitator: "Mwezeshaji", "session-plans": "Mipango ya Vikao"
    },

    actions: {
      back: "Rudi", next: "Endelea", start: "Anza", done: "Imekamilika", close: "Funga",
      save: "Hifadhi", cancel: "Ghairi", delete: "Futa", print: "Chapisha",
      exportPdf: "Hifadhi kama PDF", reset: "Anza upya", playAgain: "Cheza tena",
      check: "Angalia", reveal: "Gusa kuona jibu", continue: "Endelea",
      seeAll: "Ona zote", tryIt: "Jaribu", open: "Fungua", install: "Sakinisha programu",
      addNote: "Ongeza", edit: "Hariri", checkUpdates: "Angalia masasisho"
    },

    home: {
      welcomeTitle: "Ongoza. Saidia. Wezesha.",
      welcomeBody: "Kila unachohitaji kuwaongoza vijana katika stadi za maisha — masomo, hadithi, shughuli, na mipango ya vikao iliyo tayari kutumika.",
      todayEncouragement: "Moyo wa leo",
      quickTopics: "Mada za kufundisha",
      featuredActivity: "Shughuli maalum",
      featuredGame: "Mchezo maalum",
      moodTitle: "Unajisikiaje leo?",
      moodHint: "Gusa hisia inayokufaa. Hii inabaki kwenye kifaa chako.",
      progressTitle: "Maendeleo yako",
      lessonsDone: "masomo yaliyopitiwa",
      gamesPlayed: "michezo iliyochezwa",
      badgesEarned: "beji zilizopatikana",
      installTitle: "Weka I Matter kwenye skrini yako",
      installBody: "Sakinisha programu ili itumike wakati wowote, hata bila intaneti.",
      offlineReady: "Tayari kutumika bila intaneti",
      online: "Mtandaoni",
      offline: "Nje ya mtandao — kila kitu bado kinafanya kazi!"
    },

    learn: {
      title: "Jifunze",
      intro: "Mada za kufundisha na wanafunzi wako — masomo mafupi, mifano halisi, na maswali mafupi ya kujadili pamoja.",
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

    games: {
      title: "Michezo",
      intro: "Cheza, jifunze, na ukue. Kila mchezo hufanya kazi bila intaneti.",
      bestScore: "Bora",
      lastScore: "Mwisho",
      score: "Alama",
      wellDone: "Hongera!",
      goodTry: "Jaribio zuri! Kila jaribio linakusaidia kujifunza.",
      instructions: "Jinsi ya kucheza"
    },

    myspace: {
      title: "Nafasi Yangu",
      intro: "Nafasi ya faragha kwa maelezo yako, mipango, na tafakari. Kila kitu hubaki kwenye kifaa hiki tu.",
      privacyNote: "Faragha: huhifadhiwa kwenye kifaa hiki tu. Hakuna kinachotumwa nje.",
      mood: "Hisia zangu",
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
      deleteAll: "Futa data yangu yote",
      deleteConfirm: "Hii itafuta kila kitu kilichohifadhiwa kwenye kifaa hiki: shajara, malengo, hisia, alama, na beji. Haiwezi kurudishwa. Futa kila kitu?",
      deleted: "Data yako yote imefutwa.",
      emptyList: "Hakuna kitu bado. Ongeza cha kwanza!",
      journalPromptLabel: "Unahitaji wazo? Jaribu hili:"
    },

    mood: {
      happy: "Furaha", calm: "Utulivu", excited: "Msisimko", worried: "Wasiwasi",
      sad: "Huzuni", angry: "Hasira", tired: "Uchovu", confused: "Kuchanganyikiwa",
      thanks: "Asante kwa kushiriki hisia zako.",
      breathe: "Jaribu zoezi la kupumua",
      breatheIn: "Vuta pumzi...",
      breatheHold: "Shikilia...",
      breatheOut: "Toa pumzi...",
      breatheDone: "Hongera. Unaweza kurudia wakati wowote."
    },

    stories: {
      title: "Hadithi",
      intro: "Hadithi fupi za kusoma na kujadili na wanafunzi wako. Waulize kikundi: ungefanya nini?",
      discussion: "Zungumza kuhusu hili",
      whatWouldYouDo: "Wewe ungefanya nini?",
      keyLesson: "Somo kuu",
      relatedActivity: "Shughuli inayohusiana"
    },

    activities: {
      title: "Shughuli",
      intro: "Kazi na zana za kukamilisha na wanafunzi wako au kuchapisha kwa vikao vyako.",
      inApp: "Fanya ndani ya programu",
      printable: "Inachapishika",
      saved: "Imehifadhiwa kwenye kifaa hiki",
      resetOne: "Anza upya shughuli hii"
    },

    help: {
      title: "Msaada",
      intro: "Mwongozo wa kushiriki na wanafunzi wako. Kila mtu huhitaji msaada wakati mwingine, na kuomba msaada ni ishara ya nguvu.",
      talkTo: "Watu ambao wanafunzi wanaweza kuzungumza nao",
      trustedAdult: "Mtu mzima unayemwamini — anayesikiliza na kukulinda",
      teacher: "Mwalimu unayemwamini shuleni",
      facilitator: "Mwezeshaji wako wa I Matter",
      parent: "Mzazi, mlezi, au ndugu unayemwamini",
      contacts: "Mawasiliano ya msaada",
      contactsNote: "Muulize mwalimu au mwezeshaji wako kuthibitisha mawasiliano haya.",
      safetyReminder: "Kama wewe au rafiki yako yuko hatarini, mwambie mtu mzima unayemwamini mara moja. Hupaswi kukabili hali ngumu peke yako."
    },

    about: {
      title: "Kuhusu",
      programHeading: "Kuhusu I Matter",
      orgHeading: "Kuhusu Imagine Tomorrow Foundation",
      privacyHeading: "Faragha yako",
      privacyBody: "Programu hii haiombi jina lako, haihitaji akaunti, na haitumi maandishi au hisia zako popote. Kila unachohifadhi hubaki kwenye kifaa hiki. Unaweza kufuta yote wakati wowote katika Nafasi Yangu.",
      skillsHeading: "Ujuzi tunaokuza pamoja",
      versionLabel: "Toleo la programu"
    },

    facilitator: {
      title: "Hali ya Mwezeshaji",
      enterPin: "Weka PIN ya mwezeshaji",
      wrongPin: "PIN hiyo si sahihi.",
      unlocked: "Hali ya Mwezeshaji imefunguliwa",
      lock: "Funga Hali ya Mwezeshaji",
      sessions: "Mipango ya vikao vya kila mwezi",
      projector: "Hali ya projekta",
      projectorOff: "Toka hali ya projekta",
      discussion: "Maswali ya majadiliano",
      totals: "Jumla za ukamilishaji (kifaa hiki)",
      totalsNote: "Jumla hizi huhesabu matumizi kwenye kifaa hiki tu. Hakuna data ya mtu binafsi inayokusanywa.",
      notes: "Maelezo yangu ya kikao",
      groupName: "Jina la shule / kikundi",
      changePin: "Badilisha PIN ya mwezeshaji",
      resetResults: "Futa matokeo ya shughuli za kifaa hiki",
      resetResultsConfirm: "Futa hesabu za masomo, michezo, na maswali kwenye kifaa hiki? Maandishi ya Nafasi Yangu hayataguswa.",
      objective: "Lengo la kujifunza",
      opening: "Shughuli ya kufungua",
      mainLesson: "Somo kuu",
      groupDiscussion: "Majadiliano ya kikundi",
      game: "Mchezo",
      reflection: "Tafakari",
      challenge: "Changamoto ya nyumbani"
    },

    sessionPlans: {
      title: "Mipango ya Vikao",
      intro: "Vikao vya stadi za maisha vilivyo tayari kuendeshwa na wanafunzi wako — visome, jiandae, na uviendeshe na kikundi chako.",
      duration: "Muda",
      contents: "Katika kikao hiki",
      activity: "Shughuli",
      parts: "sehemu"
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

    offline: {
      nowOffline: "Uko nje ya mtandao. Kila kitu katika I Matter bado kinafanya kazi!",
      nowOnline: "Umerudi mtandaoni."
    }
  }
};
