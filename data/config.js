/* ==========================================================================
   I MATTER — APP CONFIGURATION
   --------------------------------------------------------------------------
   This file is safe to edit. It contains branding, organization details,
   and support contacts. No code changes are needed elsewhere.

   HOW TO EDIT:
   - Change the text between the quotation marks "...".
   - Fields with { en: "...", sw: "..." } hold the English and Kiswahili
     versions of the same text — edit both.
   - Keep the commas and structure exactly as they are.
   - Save the file and refresh the app (bump CACHE_VERSION in
     service-worker.js so installed devices get the update).
   ========================================================================== */

window.IM_CONFIG = {

  /* ---- App identity ---- */
  appName: "I Matter",
  tagline: {
    en: "A Positive Youth Development Framework — helping adolescents recognize their worth and build an inner compass to navigate life with confidence.",
    sw: "Mfumo wa Makuzi Chanya ya Vijana — unaowasaidia vijana kutambua thamani yao na kujenga dira ya ndani ya kuongoza maisha kwa kujiamini."
  },
  version: "4.2.0",

  /* ---- The heart of the program ---- */
  motto: {
    en: "YOU MATTER. Your life has value. Your choices have power. Your future is worth investing in.",
    sw: "WEWE NI WA MUHIMU. Maisha yako yana thamani. Maamuzi yako yana nguvu. Maisha yako ya baadaye yanastahili kuwekezwa."
  },

  /* ---- Organization ---- */
  organization: {
    name: "Imagine Tomorrow Foundation",
    about: {
      en: "Imagine Tomorrow Foundation is a registered nonprofit organization committed to the holistic development of adolescents and young people in Kenya through community-based programs that address educational, social, and emotional needs.",
      sw: "Imagine Tomorrow Foundation ni shirika lisilo la kiserikali lililosajiliwa, linalojitolea kwa makuzi kamili ya vijana nchini Kenya kupitia programu za kijamii zinazoshughulikia mahitaji ya kielimu, kijamii, na kihisia."
    },
    history: {
      en: "Since 2014, the organization has worked alongside communities in Nairobi and Kajiado counties, creating inclusive spaces where young people can access quality education, express themselves creatively, build confidence, strengthen resilience, and develop pathways into education and work.",
      sw: "Tangu mwaka 2014, shirika limefanya kazi pamoja na jamii katika kaunti za Nairobi na Kajiado, likitengeneza nafasi jumuishi ambapo vijana wanaweza kupata elimu bora, kujieleza kwa ubunifu, kujenga kujiamini, kuimarisha ustahimilivu, na kufungua njia za elimu na kazi."
    },
    website: "https://www.imagine-tomorrow.org/",
    websiteLabel: "imagine-tomorrow.org",
    email: "hello@imagine-tomorrow.org",
    phone: ""
  },

  /* ---- Program ---- */
  program: {
    about: {
      en: "I Matter is a Positive Youth Development Framework designed to help adolescents recognize their worth and build an inner compass to navigate life with confidence. A compass does not choose the path for us or remove the obstacles ahead — it helps us stay oriented, make thoughtful decisions, and find our way even when the road is uncertain.",
      sw: "I Matter ni Mfumo wa Makuzi Chanya ya Vijana ulioundwa kuwasaidia vijana kutambua thamani yao na kujenga dira ya ndani ya kuongoza maisha kwa kujiamini. Dira haituchagulii njia wala haiondoi vikwazo vilivyo mbele — inatusaidia kubaki kwenye mwelekeo, kufanya maamuzi ya busara, na kupata njia yetu hata pale barabara isipokuwa na uhakika."
    },
    delivery: {
      en: "The framework is delivered through a structured sequence of participatory sessions that strengthen the personal, social, and practical life skills young people need to build healthy relationships, make informed decisions, overcome challenges, and create positive futures.",
      sw: "Mfumo huu hutekelezwa kupitia mfululizo wa vikao shirikishi vinavyoimarisha stadi za maisha za kibinafsi, za kijamii, na za kivitendo ambazo vijana wanahitaji ili kujenga mahusiano yenye afya, kufanya maamuzi sahihi, kushinda changamoto, na kujenga maisha bora ya baadaye."
    }
  },

  /* ---- Branding assets (replace files, keep the same paths) ---- */
  logos: {
    app: "assets/logos/i-matter-logo.svg",
    organization: "assets/logos/imagine-tomorrow-logo.svg"
  },
  footerText: {
    en: "I Matter is a program by",
    sw: "I Matter ni programu ya"
  },

  /* ---- Support contacts (Help section) ----
     Each contact: title + description (bilingual) and rows of contact
     details. Rows with href become tap-to-call / tap-to-email links. */
  supportIntro: {
    en: "Ask your teacher or facilitator to confirm that the school and programme contacts are up to date.",
    sw: "Muulize mwalimu au mwezeshaji wako kuthibitisha kwamba mawasiliano ya shule na ya programu ni ya sasa."
  },
  supportContacts: [
    {
      id: "child-helpline",
      emoji: "📞",
      title: { en: "Child protection helpline", sw: "Simu ya msaada ya ulinzi wa mtoto" },
      subtitle: { en: "National Child Helpline", sw: "Simu ya Kitaifa ya Msaada kwa Watoto" },
      rows: [
        { label: { en: "Call: 116", sw: "Piga simu: 116" }, href: "tel:116" },
        { label: { en: "WhatsApp: +254 722 116 116", sw: "WhatsApp: +254 722 116 116" }, href: "https://wa.me/254722116116" },
        { label: { en: "Email: 116@childlinekenya.co.ke", sw: "Barua pepe: 116@childlinekenya.co.ke" }, href: "mailto:116@childlinekenya.co.ke" }
      ],
      note: {
        en: "Available nationwide, toll-free and 24 hours a day. The helpline provides child protection reporting, counselling and referral support.",
        sw: "Inapatikana nchi nzima, bila malipo na saa 24 kwa siku. Simu hii hutoa huduma za kuripoti masuala ya ulinzi wa mtoto, ushauri nasaha, na rufaa."
      }
    },
    {
      id: "emergency",
      emoji: "🚨",
      title: { en: "Emergency services", sw: "Huduma za dharura" },
      subtitle: {
        en: "For police, medical, fire or other urgent emergencies",
        sw: "Kwa polisi, matibabu, moto au dharura nyingine za haraka"
      },
      rows: [
        { label: { en: "Call: 999, 112 or 911", sw: "Piga simu: 999, 112 au 911" }, href: "tel:999" }
      ],
      note: {
        en: "These are Kenya's official national emergency numbers.",
        sw: "Hizi ni nambari rasmi za dharura za kitaifa za Kenya."
      }
    },
    {
      id: "school",
      emoji: "🏫",
      title: { en: "School support contact", sw: "Mawasiliano ya msaada shuleni" },
      subtitle: null,
      rows: [],
      note: {
        en: "Contact your school counsellor, safeguarding teacher, class teacher or support office.",
        sw: "Wasiliana na mshauri wa shule yako, mwalimu wa ulinzi, mwalimu wa darasa au ofisi ya msaada."
      }
    },
    {
      id: "programme-office",
      emoji: "💛",
      title: { en: "I Matter programme office", sw: "Ofisi ya programu ya I Matter" },
      subtitle: { en: "Imagine Tomorrow Foundation", sw: "Imagine Tomorrow Foundation", orgLink: true },
      rows: [
        { label: { en: "Email: hello@imagine-tomorrow.org", sw: "Barua pepe: hello@imagine-tomorrow.org" }, href: "mailto:hello@imagine-tomorrow.org" }
      ],
      note: null
    }
  ],

  /* ---- Theme colours (also update styles.css :root to fully re-theme) ---- */
  colors: {
    primary: "#2fa7b5",
    accent: "#f59e0b",
    background: "#fdf8f1"
  }
};
