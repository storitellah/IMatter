/* ==========================================================================
   I MATTER — APP CONFIGURATION
   --------------------------------------------------------------------------
   This file is safe to edit. It contains branding, organization details,
   and support contacts. No code changes are needed elsewhere.

   HOW TO EDIT:
   - Change the text between the quotation marks "...".
   - Keep the commas and structure exactly as they are.
   - Save the file and refresh the app (bump CACHE_VERSION in
     service-worker.js so installed devices get the update).
   ========================================================================== */

window.IM_CONFIG = {

  /* ---- App identity ---- */
  appName: "I Matter",
  tagline: "A facilitator's toolkit for guiding young people through life skills.",
  version: "3.0.0",

  /* ---- Organization ---- */
  organization: {
    name: "Imagine Tomorrow Foundation",
    about:
      "Imagine Tomorrow Foundation is a registered nonprofit organization " +
      "committed to the holistic development of adolescents and young people " +
      "in Kenya through community-based programs that address educational, " +
      "social, and emotional needs.",
    history:
      "Since 2014, the organization has worked alongside communities in " +
      "Nairobi and Kajiado counties, creating inclusive spaces where young " +
      "people can access quality education, express themselves creatively, " +
      "build confidence, strengthen resilience, and develop pathways into " +
      "education and work.",
    website: "https://www.imagine-tomorrow.org/",
    email: "hello@imagine-tomorrow.org",
    /* Leave "phone" empty ("") to hide it from the About page. */
    phone: ""
  },

  /* ---- Program ---- */
  program: {
    about:
      "I Matter is a positive youth development program implemented in eight " +
      "partner schools in Nairobi and Kajiado counties. The program uses life " +
      "skills education to strengthen self-awareness, communication, " +
      "problem-solving, decision-making, confidence, emotional well-being, " +
      "resilience, healthy relationships, personal responsibility, and " +
      "future planning.",
    delivery:
      "The program is delivered through monthly sessions that create safe and " +
      "inclusive spaces where students can share experiences, ask questions, " +
      "and build the personal and social skills they need to navigate " +
      "adolescence with confidence."
  },

  /* ---- Branding assets (replace files, keep the same paths) ---- */
  logos: {
    app: "assets/logos/i-matter-logo.svg",
    organization: "assets/logos/imagine-tomorrow-logo.svg"
  },
  footerText: "I Matter is a program by Imagine Tomorrow Foundation.",

  /* ---- Support contacts (Help section) ----
     IMPORTANT: These are placeholders. Replace them with verified,
     up-to-date contacts before sharing the app with young people.
     Leave "number" empty ("") to hide a contact. */
  supportContacts: [
    {
      label: "Child protection helpline",
      note: "Replace with your verified national child helpline.",
      number: "PLACEHOLDER — add verified number"
    },
    {
      label: "Emergency services",
      note: "Replace with your verified local emergency number.",
      number: "PLACEHOLDER — add verified number"
    },
    {
      label: "School support contact",
      note: "Replace with your school counsellor or support office.",
      number: "PLACEHOLDER — add school contact"
    },
    {
      label: "I Matter program office",
      note: "Replace with the Imagine Tomorrow Foundation contact.",
      number: "PLACEHOLDER — add program contact"
    }
  ],

  /* ---- Facilitator Mode ----
     The default PIN below unlocks Facilitator Mode the first time.
     Facilitators should change it on the device (Facilitator > Settings).
     This PIN only protects facilitator tools on this device. */
  facilitator: {
    defaultPin: "2014"
  },

  /* ---- Theme colours (also update styles.css :root to fully re-theme) ---- */
  colors: {
    primary: "#2fa7b5",
    accent: "#f59e0b",
    background: "#fdf8f1"
  }
};
