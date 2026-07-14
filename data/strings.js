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
      welcomeTitle: "Guide. Support. Empower.",
      welcomeBody: "Everything you need to lead young people through life skills — ready-to-run session plans plus a toolkit of lessons, stories, and support resources.",
      todayEncouragement: "Today's encouragement",
      sectionsTitle: "Start here",
      sessionPlansSub: "Full, ready-to-run life-skills sessions to lead with your group.",
      resourcesSub: "Lessons, stories, your private space, facilitator tools, and support.",
      progressTitle: "Your progress",
      lessonsDone: "lessons reviewed",
      badgesEarned: "badges earned",
      installTitle: "Add I Matter to your home screen",
      installBody: "Install the app so it works anytime, even without internet.",
      offlineReady: "Ready to use offline",
      online: "Online",
      offline: "Offline — everything still works!"
    },

    /* Resources hub */
    resources: {
      title: "Resources",
      intro: "Your toolkit for sessions and beyond — teaching topics, stories, your own space, facilitator tools, and support information.",
      learnSub: "10 teaching topics with short lessons, examples, and quick quizzes.",
      storiesSub: "Short stories to read and discuss with your students.",
      myspaceSub: "Your private notes, plans, journal, and badges — on this device only.",
      facilitatorSub: "PIN-protected monthly session plans, projector mode, and notes.",
      helpSub: "Support contacts and safety guidance to share with students.",
      aboutSub: "About the program, the organization, and your privacy."
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
      deleteAll: "Delete all my data",
      deleteConfirm: "This will delete everything saved in this app on this device: journal, goals, notes, and badges. This cannot be undone. Delete everything?",
      deleted: "All your data has been deleted.",
      emptyList: "Nothing here yet. Add your first one!",
      journalPromptLabel: "Need an idea? Try this prompt:"
    },

    /* Stories */
    stories: {
      title: "Stories",
      intro: "Short stories to read and discuss with your students. Ask the group: what would you do?",
      discussion: "Talk about it",
      whatWouldYouDo: "What would you do?",
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
      resetResultsConfirm: "Reset lesson and quiz completion counters on this device? Personal My Space entries are not touched.",
      objective: "Learning objective",
      opening: "Opening activity",
      mainLesson: "Main lesson",
      groupDiscussion: "Group discussion",
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
      welcomeTitle: "Ongoza. Saidia. Wezesha.",
      welcomeBody: "Kila unachohitaji kuwaongoza vijana katika stadi za maisha — mipango ya vikao iliyo tayari kutumika pamoja na zana ya masomo, hadithi, na rasilimali za msaada.",
      todayEncouragement: "Moyo wa leo",
      sectionsTitle: "Anzia hapa",
      sessionPlansSub: "Vikao kamili vya stadi za maisha vilivyo tayari kuendeshwa na kikundi chako.",
      resourcesSub: "Masomo, hadithi, nafasi yako ya faragha, zana za mwezeshaji, na msaada.",
      progressTitle: "Maendeleo yako",
      lessonsDone: "masomo yaliyopitiwa",
      badgesEarned: "beji zilizopatikana",
      installTitle: "Weka I Matter kwenye skrini yako",
      installBody: "Sakinisha programu ili itumike wakati wowote, hata bila intaneti.",
      offlineReady: "Tayari kutumika bila intaneti",
      online: "Mtandaoni",
      offline: "Nje ya mtandao — kila kitu bado kinafanya kazi!"
    },

    resources: {
      title: "Rasilimali",
      intro: "Zana yako kwa vikao na zaidi — mada za kufundisha, hadithi, nafasi yako mwenyewe, zana za mwezeshaji, na taarifa za msaada.",
      learnSub: "Mada 10 za kufundisha zenye masomo mafupi, mifano, na maswali mafupi.",
      storiesSub: "Hadithi fupi za kusoma na kujadili na wanafunzi wako.",
      myspaceSub: "Maelezo yako ya faragha, mipango, shajara, na beji — kwenye kifaa hiki tu.",
      facilitatorSub: "Mipango ya vikao vya kila mwezi iliyolindwa kwa PIN, hali ya projekta, na maelezo.",
      helpSub: "Mawasiliano ya msaada na mwongozo wa usalama wa kushiriki na wanafunzi.",
      aboutSub: "Kuhusu programu, shirika, na faragha yako."
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
      deleteAll: "Futa data yangu yote",
      deleteConfirm: "Hii itafuta kila kitu kilichohifadhiwa kwenye kifaa hiki: shajara, malengo, maelezo, na beji. Haiwezi kurudishwa. Futa kila kitu?",
      deleted: "Data yako yote imefutwa.",
      emptyList: "Hakuna kitu bado. Ongeza cha kwanza!",
      journalPromptLabel: "Unahitaji wazo? Jaribu hili:"
    },

    stories: {
      title: "Hadithi",
      intro: "Hadithi fupi za kusoma na kujadili na wanafunzi wako. Waulize kikundi: ungefanya nini?",
      discussion: "Zungumza kuhusu hili",
      whatWouldYouDo: "Wewe ungefanya nini?",
      keyLesson: "Somo kuu"
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
      resetResultsConfirm: "Futa hesabu za masomo na maswali kwenye kifaa hiki? Maandishi ya Nafasi Yangu hayataguswa.",
      objective: "Lengo la kujifunza",
      opening: "Shughuli ya kufungua",
      mainLesson: "Somo kuu",
      groupDiscussion: "Majadiliano ya kikundi",
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
