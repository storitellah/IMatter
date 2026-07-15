/* ==========================================================================
   I MATTER — EXTRAS: encouragements, badges, journal prompts
   --------------------------------------------------------------------------
   Safe to edit. Lists with { en: [...], sw: [...] } must keep the same
   number and order of items in both languages.
   ========================================================================== */

window.IM_EXTRAS = {

  /* ---- Daily encouragements (rotate by day) ---- */
  encouragements: {
    en: [
      "You matter. Your ideas, feelings, choices, and dreams are important.",
      "Every expert was once a beginner. Keep going.",
      "Your voice deserves to be heard — including by you.",
      "Small steps every day become big journeys.",
      "You have survived 100% of your hardest days so far.",
      "Asking for help is a sign of strength, not weakness.",
      "You don't have to be perfect to be amazing.",
      "The word 'yet' turns 'I can't' into a plan: 'I can't... yet.'",
      "Kindness is a strength — including kindness to yourself.",
      "Where you start does not decide where you finish.",
      "Your feelings are messengers, not bosses.",
      "Someone believes in you. Believe in yourself, too.",
      "Mistakes are proof that you are trying.",
      "You are the author of your own story.",
      "One small brave step today makes tomorrow's step easier."
    ],
    sw: [
      "Wewe ni wa muhimu. Mawazo yako, hisia zako, maamuzi yako, na ndoto zako ni muhimu.",
      "Kila bingwa aliwahi kuwa mwanafunzi. Endelea mbele.",
      "Sauti yako inastahili kusikika — hata na wewe mwenyewe.",
      "Hatua ndogo kila siku huwa safari kubwa.",
      "Umenusurika asilimia 100 ya siku zako ngumu zaidi hadi sasa.",
      "Kuomba msaada ni ishara ya nguvu, si udhaifu.",
      "Huhitaji kuwa mkamilifu ili uwe wa ajabu.",
      "Neno 'bado' hugeuza 'siwezi' kuwa mpango: 'siwezi... bado.'",
      "Wema ni nguvu — pamoja na wema kwa nafsi yako.",
      "Unapoanzia hakuamui unapomalizia.",
      "Hisia zako ni wajumbe, si mabosi.",
      "Kuna mtu anakuamini. Jiamini na wewe pia.",
      "Makosa ni uthibitisho kwamba unajaribu.",
      "Wewe ndiye mwandishi wa hadithi yako mwenyewe.",
      "Hatua moja ndogo ya ujasiri leo hufanya hatua ya kesho kuwa rahisi."
    ]
  },

  /* ---- Journal prompts (My Space) ---- */
  journalPrompts: {
    en: [
      "What made me smile today?",
      "Something I'm proud of this week is...",
      "A challenge I'm facing right now is... and one thing I could try is...",
      "If I could tell my younger self one thing, it would be...",
      "Three things I'm grateful for today...",
      "Something kind I did (or saw) recently...",
      "A feeling I've been carrying lately is... and it might be telling me...",
      "One thing I want to remember about this week...",
      "Something new I want to try is...",
      "A person who made a difference for me is... because..."
    ],
    sw: [
      "Nini kilinifanya nitabasamu leo?",
      "Kitu ninachojivunia wiki hii ni...",
      "Changamoto ninayokabiliana nayo sasa ni... na jambo moja ningeweza kujaribu ni...",
      "Kama ningeweza kumwambia nafsi yangu ya zamani jambo moja, lingekuwa...",
      "Mambo matatu ninayoshukuru leo...",
      "Jambo la wema nililofanya (au kuona) hivi karibuni...",
      "Hisia niliyokuwa nikibeba siku hizi ni... na huenda inaniambia...",
      "Jambo moja nataka kukumbuka kuhusu wiki hii...",
      "Kitu kipya nataka kujaribu ni...",
      "Mtu aliyeleta tofauti kwangu ni... kwa sababu..."
    ]
  },

  /* ---- Badges ----
     Earned automatically. "check" is handled in script.js by id. */
  badges: [
    { id: "first-steps", emoji: "👣",
      title: { en: "First Steps", sw: "Hatua za Kwanza" },
      desc: { en: "Opened your first lesson", sw: "Ulifungua somo lako la kwanza" } },
    { id: "explorer", emoji: "🔭",
      title: { en: "Explorer", sw: "Mvumbuzi" },
      desc: { en: "Explored 5 lessons", sw: "Ulipitia masomo 5" } },
    { id: "scholar", emoji: "🎓",
      title: { en: "Scholar", sw: "Msomi" },
      desc: { en: "Explored 15 lessons", sw: "Ulipitia masomo 15" } },
    { id: "quiz-whiz", emoji: "🧠",
      title: { en: "Quiz Whiz", sw: "Gwiji wa Maswali" },
      desc: { en: "Answered 10 quiz questions correctly", sw: "Ulijibu maswali 10 kwa usahihi" } },
    { id: "storyteller", emoji: "📖",
      title: { en: "Story Lover", sw: "Mpenzi wa Hadithi" },
      desc: { en: "Read 3 stories", sw: "Ulisoma hadithi 3" } },
    { id: "reflector", emoji: "🪞",
      title: { en: "Reflector", sw: "Mtafakari" },
      desc: { en: "Wrote your first journal entry", sw: "Uliandika shajara yako ya kwanza" } },
    { id: "grateful-heart", emoji: "💚",
      title: { en: "Grateful Heart", sw: "Moyo wa Shukrani" },
      desc: { en: "Wrote 3 gratitude notes", sw: "Uliandika shukrani 3" } }
  ]
};
