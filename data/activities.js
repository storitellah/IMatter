/* ==========================================================================
   I MATTER — ACTIVITIES (worksheets & tools)
   --------------------------------------------------------------------------
   Safe to edit. Each activity has:
     id, title, emoji, blurb, intro  - description shown to the user
     fields - what the user fills in. Field types:
        "text"     - one line
        "textarea" - several lines
        "list"     - the user adds multiple entries
   All answers are saved only on the device. Every activity can be printed
   (or saved as PDF using the browser's print dialog).
   ========================================================================== */

window.IM_ACTIVITIES = [
  {
    id: "strengths-shield",
    title: "My Strengths Shield",
    emoji: "🛡️",
    blurb: "Build a shield out of the strengths that protect and power you.",
    intro: "A shield protects a hero. Your strengths protect and power YOU. Fill each part of your shield.",
    fields: [
      { id: "s1", type: "text", label: "1. Something I am good at" },
      { id: "s2", type: "text", label: "2. Something good about my character (e.g. kind, honest, brave)" },
      { id: "s3", type: "text", label: "3. A hard thing I got through before" },
      { id: "s4", type: "text", label: "4. A person who believes in me" },
      { id: "motto", type: "text", label: "My shield motto (a short phrase that gives me strength)" }
    ]
  },
  {
    id: "feelings-wheel",
    title: "Feelings Wheel",
    emoji: "🎡",
    blurb: "Explore the feelings you had this week and what caused them.",
    intro: "Feelings come and go like weather. Spin through your week and record the 'weather' you felt.",
    fields: [
      { id: "f1", type: "text", label: "A moment I felt HAPPY this week" },
      { id: "f2", type: "text", label: "A moment I felt WORRIED or AFRAID" },
      { id: "f3", type: "text", label: "A moment I felt PROUD" },
      { id: "f4", type: "text", label: "A moment I felt ANGRY or FRUSTRATED" },
      { id: "f5", type: "textarea", label: "When a big feeling comes, what helps me handle it?" }
    ]
  },
  {
    id: "goal-ladder",
    title: "Goal Ladder",
    emoji: "🪜",
    blurb: "Break a big goal into small steps you can climb one by one.",
    intro: "Nobody jumps to the top of a ladder — they climb it. Write your goal at the top, then the steps to reach it.",
    fields: [
      { id: "goal", type: "text", label: "🏁 My big goal (top of the ladder)" },
      { id: "step3", type: "text", label: "Step 3 — almost there" },
      { id: "step2", type: "text", label: "Step 2 — building up" },
      { id: "step1", type: "text", label: "Step 1 — I can start THIS WEEK" },
      { id: "helper", type: "text", label: "Someone who can support me" },
      { id: "date", type: "text", label: "When I will check my progress" }
    ]
  },
  {
    id: "trusted-adults-map",
    title: "Trusted Adults Map",
    emoji: "🗺️",
    blurb: "Map the adults you can turn to when you need help.",
    intro: "A trusted adult listens to you, respects you, and keeps you safe. Everyone should know at least three. Draw your map here.",
    fields: [
      { id: "home", type: "text", label: "At home, I can talk to..." },
      { id: "school", type: "text", label: "At school, I can talk to..." },
      { id: "community", type: "text", label: "In my community, I can talk to..." },
      { id: "why", type: "textarea", label: "What makes these people trustworthy?" }
    ]
  },
  {
    id: "decision-tree",
    title: "Decision Tree",
    emoji: "🌳",
    blurb: "Grow a decision like a tree: one choice, many branches.",
    intro: "Write a decision you are facing, then follow each branch to see where it could lead.",
    fields: [
      { id: "decision", type: "text", label: "🌱 The decision I am facing" },
      { id: "optA", type: "text", label: "Branch A — one option I have" },
      { id: "resultA", type: "text", label: "Where branch A could lead (consequences)" },
      { id: "optB", type: "text", label: "Branch B — another option" },
      { id: "resultB", type: "text", label: "Where branch B could lead (consequences)" },
      { id: "choice", type: "textarea", label: "My choice, and why it is safe and fair" }
    ]
  },
  {
    id: "communication-practice",
    title: "Communication Practice",
    emoji: "🗣️",
    blurb: "Practice saying hard things clearly and kindly.",
    intro: "Clear words open doors. Practice turning difficult messages into 'I' statements.",
    fields: [
      { id: "situation", type: "text", label: "A situation where I need to speak up" },
      { id: "feel", type: "text", label: "I feel... (name the feeling)" },
      { id: "when", type: "text", label: "...when... (describe what happens)" },
      { id: "because", type: "text", label: "...because... (explain why it matters)" },
      { id: "need", type: "text", label: "What I need or would like to happen" },
      { id: "practice", type: "textarea", label: "Now write the full sentence and practice it aloud" }
    ]
  },
  {
    id: "weekly-planner",
    title: "Weekly Planner",
    emoji: "📅",
    blurb: "Plan your week with room for school, home, rest, and fun.",
    intro: "A good week has work AND rest. Plan your top priorities for each part of the week.",
    fields: [
      { id: "must", type: "list", label: "MUST do this week (most important)" },
      { id: "should", type: "list", label: "SHOULD do this week" },
      { id: "fun", type: "text", label: "Something fun or restful I will make time for" },
      { id: "help", type: "text", label: "One way I will help at home" }
    ]
  },
  {
    id: "study-timetable",
    title: "Study Timetable",
    emoji: "⏰",
    blurb: "Design a simple, realistic study plan you can actually follow.",
    intro: "Small daily study beats last-minute panic. Keep it realistic — a plan you follow beats a perfect plan you abandon.",
    fields: [
      { id: "subjects", type: "list", label: "Subjects I need to focus on (most urgent first)" },
      { id: "time", type: "text", label: "My daily study time (e.g. 7:00–7:45 pm)" },
      { id: "place", type: "text", label: "Where I will study (quiet spot)" },
      { id: "break", type: "text", label: "My break plan (e.g. 5 minutes after every 25)" },
      { id: "reward", type: "text", label: "How I will reward myself after a good study week" }
    ]
  },
  {
    id: "values-cards",
    title: "Personal Values Cards",
    emoji: "🃏",
    blurb: "Discover the values that guide your choices.",
    intro: "Values are your inner compass. From this list — honesty, kindness, family, courage, fairness, faith, learning, friendship, respect, hard work — choose your top three and make each into a 'card'.",
    fields: [
      { id: "v1", type: "text", label: "Value card 1 — my most important value" },
      { id: "v1why", type: "text", label: "Why it matters to me" },
      { id: "v2", type: "text", label: "Value card 2" },
      { id: "v2why", type: "text", label: "Why it matters to me" },
      { id: "v3", type: "text", label: "Value card 3" },
      { id: "v3why", type: "text", label: "Why it matters to me" },
      { id: "action", type: "textarea", label: "One way I will live these values this week" }
    ]
  },
  {
    id: "vision-board",
    title: "My Future Vision Board",
    emoji: "🔭",
    blurb: "Paint a picture of the future you are building.",
    intro: "Close your eyes and imagine yourself in ten years, living a life you are proud of. Now capture that picture in words. (On paper, add drawings and cut-out pictures!)",
    fields: [
      { id: "career", type: "text", label: "The work I am doing" },
      { id: "skills", type: "text", label: "Skills I have mastered" },
      { id: "impact", type: "text", label: "How I am helping my family or community" },
      { id: "feeling", type: "text", label: "How my life feels" },
      { id: "firststep", type: "textarea", label: "One thing I can do THIS MONTH to move toward this vision" }
    ]
  },
  {
    id: "problem-worksheet",
    title: "Problem-Solving Worksheet",
    emoji: "🧩",
    blurb: "Work through any problem, step by step.",
    intro: "Big or small, most problems can be worked through with the same six steps. Try it with a real problem.",
    fields: [
      { id: "problem", type: "textarea", label: "Step 1 — The problem, in one clear sentence" },
      { id: "ideas", type: "list", label: "Step 2 — Possible solutions (list at least three)" },
      { id: "best", type: "text", label: "Step 3 — The safest, fairest solution" },
      { id: "plan", type: "text", label: "Step 4 — My plan (what, when, who helps)" },
      { id: "review", type: "textarea", label: "Step 5 — After trying: what happened? What did I learn?" }
    ]
  },
  {
    id: "confidence-journal",
    title: "Confidence Journal",
    emoji: "📔",
    blurb: "Record brave moments and kind words to yourself.",
    intro: "Confidence grows when you notice your wins — even tiny ones — and speak to yourself like a good coach.",
    fields: [
      { id: "brave", type: "text", label: "Something brave I did recently (however small)" },
      { id: "proud", type: "text", label: "Something I am proud of this month" },
      { id: "learned", type: "text", label: "A mistake that taught me something" },
      { id: "kind", type: "text", label: "A kind, true sentence to myself" },
      { id: "next", type: "text", label: "One small brave step I will take next" }
    ]
  }
];
