/* ==========================================================================
   I MATTER — EXTRAS: mood responses, affirmations, badges, journal prompts
   --------------------------------------------------------------------------
   Safe to edit.
   ========================================================================== */

window.IM_EXTRAS = {

  /* ---- Mood check-in responses ----
     Each mood offers: a message, a suggestion, and helpful links.
     "breathe: true" adds a guided breathing exercise button. */
  moods: [
    {
      id: "happy", emoji: "😄", labelKey: "happy",
      message: "That's wonderful! Happiness is worth noticing and remembering.",
      suggestion: "Spread it around — a kind word from a happy heart can brighten someone else's day.",
      affirmation: "I notice and enjoy the good moments in my life.",
      link: { type: "lesson", id: "emotional-wellbeing", label: "Emotional well-being" }
    },
    {
      id: "calm", emoji: "😌", labelKey: "calm",
      message: "Calm is a lovely place to be. Well done for checking in.",
      suggestion: "This is a great moment to plan something, learn something, or help someone.",
      affirmation: "I carry my calm with me wherever I go.",
      link: { type: "lesson", id: "my-feelings", label: "My feelings" }
    },
    {
      id: "excited", emoji: "🤩", labelKey: "excited",
      message: "Excitement is energy! Something good is happening or coming.",
      suggestion: "Channel that energy — maybe into the Goal Builder game or planning your next step.",
      affirmation: "My energy and enthusiasm are gifts.",
      link: { type: "game", id: "goal-builder", label: "Goal Builder game" }
    },
    {
      id: "worried", emoji: "😟", labelKey: "worried",
      message: "Worry visits everyone. Thank you for being honest about it.",
      suggestion: "Try the breathing exercise below. If the worry is big or won't leave, share it with a trusted adult — worries shrink when spoken.",
      affirmation: "I can handle this one step at a time.",
      breathe: true,
      link: { type: "lesson", id: "coping-stress", label: "Coping with stress" }
    },
    {
      id: "sad", emoji: "😢", labelKey: "sad",
      message: "It's okay to feel sad. Sadness is a natural feeling, and it passes.",
      suggestion: "Be gentle with yourself today. Talking to someone you trust can make sadness lighter — you don't have to carry it alone.",
      affirmation: "My feelings matter, and it is okay to ask for comfort.",
      breathe: true,
      link: { type: "lesson", id: "handling-sadness", label: "Handling sadness" }
    },
    {
      id: "angry", emoji: "😠", labelKey: "angry",
      message: "Anger is a normal feeling — it tells you something feels unfair or wrong.",
      suggestion: "Before acting, try the breathing exercise below. When you're calmer, think about what the anger is trying to tell you.",
      affirmation: "I can feel angry and still choose my actions wisely.",
      breathe: true,
      link: { type: "lesson", id: "managing-anger", label: "Managing anger" }
    },
    {
      id: "tired", emoji: "😴", labelKey: "tired",
      message: "Your body is asking for rest — and rest is not laziness.",
      suggestion: "If you can, rest, drink water, and sleep early tonight. If you're tired every day, tell a trusted adult.",
      affirmation: "Taking care of my body helps me grow strong.",
      link: { type: "lesson", id: "emotional-wellbeing", label: "Emotional well-being" }
    },
    {
      id: "confused", emoji: "😕", labelKey: "confused",
      message: "Confusion means your brain is working on something new. That's okay.",
      suggestion: "Try writing down what confuses you in one sentence — then ask someone about it. Questions turn confusion into understanding.",
      affirmation: "It is okay not to know — asking is how I learn.",
      link: { type: "lesson", id: "asking-questions-comm", label: "Asking questions" }
    }
  ],

  /* ---- Daily encouragements (rotate by day) ---- */
  encouragements: [
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

  /* ---- Journal prompts (My Space) ---- */
  journalPrompts: [
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

  /* ---- Badges ----
     Earned automatically. "check" is handled in script.js by id. */
  badges: [
    { id: "first-steps", emoji: "👣", title: "First Steps", desc: "Opened your first lesson" },
    { id: "explorer", emoji: "🔭", title: "Explorer", desc: "Explored 5 lessons" },
    { id: "scholar", emoji: "🎓", title: "Scholar", desc: "Explored 15 lessons" },
    { id: "quiz-whiz", emoji: "🧠", title: "Quiz Whiz", desc: "Answered 10 quiz questions correctly" },
    { id: "game-on", emoji: "🎮", title: "Game On", desc: "Played your first game" },
    { id: "champion", emoji: "🏆", title: "Champion", desc: "Played all 10 games" },
    { id: "storyteller", emoji: "📖", title: "Story Lover", desc: "Read 3 stories" },
    { id: "reflector", emoji: "🪞", title: "Reflector", desc: "Wrote your first journal entry" },
    { id: "mood-aware", emoji: "🌈", title: "Feelings Friend", desc: "Checked in your mood 5 times" },
    { id: "goal-setter", emoji: "🎯", title: "Goal Setter", desc: "Completed the Goal Ladder activity" },
    { id: "grateful-heart", emoji: "💚", title: "Grateful Heart", desc: "Wrote 3 gratitude notes" },
    { id: "brave-one", emoji: "🦁", title: "Brave One", desc: "Completed the Confidence Journal" }
  ]
};
