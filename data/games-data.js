/* ==========================================================================
   I MATTER — GAMES DATA
   --------------------------------------------------------------------------
   Safe to edit. Each game has an id, title, emoji, type, instructions and
   its question/round data. Game types are handled by script.js:
     "choice"  - pick the best answer for each round
     "memory"  - flip cards and match pairs
     "order"   - arrange steps in the correct order
     "select"  - select all statements that apply
     "sort"    - sort items into groups (safe / unsafe / not sure)
     "path"    - branching story: choices lead to different scenes
   ========================================================================== */

window.IM_GAMES = [

  /* 1 — FEELINGS MATCH */
  {
    id: "feelings-match",
    title: "Feelings Match",
    emoji: "😊",
    type: "choice",
    blurb: "Match each situation to the feeling it describes.",
    instructions: "Read each situation. Tap the feeling that matches best. There are no penalties — every answer helps you learn.",
    rounds: [
      { prompt: "Your team just won the inter-school football final! 🏆", options: ["Excited", "Bored", "Angry"], answer: 0, why: "Winning something you worked for brings excitement and joy." },
      { prompt: "Your best friend is moving to another town. 😢", options: ["Excited", "Sad", "Proud"], answer: 1, why: "Losing time with someone we love brings sadness — and that is okay." },
      { prompt: "You studied hard and passed the exam you feared. 🎉", options: ["Jealous", "Proud", "Worried"], answer: 1, why: "Achieving something through effort makes us feel proud." },
      { prompt: "Someone took your pencil without asking — again. 😠", options: ["Angry", "Calm", "Happy"], answer: 0, why: "Being treated unfairly often brings anger. Naming it helps you respond calmly." },
      { prompt: "You have a big presentation tomorrow and can't stop thinking about it. 😰", options: ["Relaxed", "Worried", "Cheerful"], answer: 1, why: "Worry often visits before big moments. Breathing exercises can help." },
      { prompt: "Everyone laughed when you tripped in the hallway. 😳", options: ["Embarrassed", "Excited", "Grateful"], answer: 0, why: "Feeling embarrassed after tripping is normal — the moment passes faster than it feels." },
      { prompt: "You do not understand the homework at all and don't know where to start. 😕", options: ["Confused", "Proud", "Joyful"], answer: 0, why: "Confusion is a signal to ask questions, not a sign of failure." },
      { prompt: "You helped a younger student find their classroom. 😊", options: ["Guilty", "Happy", "Afraid"], answer: 1, why: "Helping others is one of the most reliable ways to feel happy." }
    ]
  },

  /* 2 — DECISION PATH */
  {
    id: "decision-path",
    title: "Decision Path",
    emoji: "🧭",
    type: "path",
    blurb: "Choose what to do in a real-life situation and see where it leads.",
    instructions: "Read the story. Choose what you would do. Every path teaches something — you can replay and try other choices.",
    start: "s1",
    scenes: {
      s1: {
        text: "It is Saturday morning. Your friend Jomo appears at your door: 'Forget your chores! Some older boys found a way into the old quarry. Everyone is going swimming there. Come on!' The quarry is deep, fenced off, and has warning signs.",
        choices: [
          { label: "Go with Jomo — everyone will be there", to: "s2" },
          { label: "Say no and suggest something safer", to: "s3" },
          { label: "Ask an adult about the quarry first", to: "s4" }
        ]
      },
      s2: {
        text: "At the quarry, the water is dark and cold, and there is no adult anywhere. One boy dares you to jump from the high rock. Your stomach says this is wrong.",
        choices: [
          { label: "Jump — you don't want to look scared", to: "e1" },
          { label: "Listen to your stomach and leave", to: "e2" }
        ]
      },
      s3: {
        text: "You tell Jomo: 'Not the quarry — it's dangerous. Let's get a football game going at the field instead.' Jomo hesitates... then shrugs: 'Fine, football it is.' Later you hear an older boy got hurt at the quarry.",
        choices: [ { label: "See what this path teaches", to: "e3" } ]
      },
      s4: {
        text: "You ask your uncle about the quarry. His face turns serious: 'That place has taken lives. The signs are there for a reason.' He offers to take you and Jomo to the public pool next weekend instead.",
        choices: [ { label: "See what this path teaches", to: "e4" } ]
      },
      e1: { ending: true, tone: "warn", text: "You jump and hit the water hard. You are lucky — only bruises and a fright. But the danger was real: hidden rocks, cold deep water, and no adult to help if things went wrong.", lesson: "Doing something dangerous to avoid looking scared is trading your safety for a moment of approval. Real courage is saying no." },
      e2: { ending: true, tone: "good", text: "You say 'This isn't for me' and walk home. It feels awkward for ten minutes. That evening you learn someone was injured there. Your 'no' protected you.", lesson: "Your inner warning feelings are there to protect you. Trusting them is a life skill." },
      e3: { ending: true, tone: "good", text: "Your suggestion gave Jomo a safe way out too — he later admits he was also nervous about the quarry. Being the one who suggests a better option is real leadership.", lesson: "Saying no is easier when you offer a better idea. Your good choices can protect your friends too." },
      e4: { ending: true, tone: "good", text: "Asking first cost you nothing and may have saved your life. Next weekend you swim safely at the pool — with more fun and no fear.", lesson: "When unsure, asking a trusted adult is one of the smartest decisions you can make." }
    }
  },

  /* 3 — COMMUNICATION CHALLENGE */
  {
    id: "communication-challenge",
    title: "Communication Challenge",
    emoji: "💬",
    type: "choice",
    blurb: "Choose the clearest and most respectful response.",
    instructions: "For each situation, tap the response that is clear, honest, AND respectful.",
    rounds: [
      { prompt: "Your friend borrowed your book two weeks ago and hasn't returned it.", options: ["'You're a thief! Give back my book!'", "'Hey, I need my book back for revision. Could you bring it tomorrow?'", "Say nothing and stay quietly angry forever."], answer: 1, why: "Clear + kind: say what you need and when, without attacking." },
      { prompt: "A classmate keeps talking while you're trying to hear the teacher.", options: ["'Shhh! Some of us actually want to learn!'", "'Could we talk at break? I'm missing what the teacher is saying.'", "Give them an angry stare all lesson."], answer: 1, why: "State the problem and offer a solution — no insult needed." },
      { prompt: "Your parent asks you to do chores just as your favourite show starts.", options: ["'Ugh! You ALWAYS ruin everything!'", "'May I do it right after this show ends in 20 minutes? I promise.'", "Pretend you didn't hear."], answer: 1, why: "Respectfully proposing an alternative shows maturity — and often works." },
      { prompt: "Your friend's feelings are hurt because you cancelled plans.", options: ["'You're too sensitive.'", "'I'm sorry I cancelled late. Your time matters to me. Can we plan for Saturday?'", "Avoid them until they forget."], answer: 1, why: "Acknowledge their feelings, apologize sincerely, offer a repair." },
      { prompt: "You disagree with your group's idea for the class project.", options: ["'That idea is stupid.'", "'I see it differently — can I share another option and we compare?'", "Go along with it but complain to others later."], answer: 1, why: "Disagree with the idea, not the people — and invite comparison." },
      { prompt: "A friend asks to copy your homework.", options: ["'Sure, whatever.'", "'I can't let you copy, but I can explain how I solved it after school.'", "'Do your own work, lazy!'"], answer: 1, why: "You can refuse AND still be a helpful friend." }
    ]
  },

  /* 4 — STRENGTH FINDER */
  {
    id: "strength-finder",
    title: "Strength Finder",
    emoji: "🌟",
    type: "select",
    blurb: "Discover your personal strengths.",
    instructions: "Tap every statement that sounds like you. Be honest — there are no wrong answers. At the end, see your strength profile!",
    items: [
      { text: "Friends come to me when they have problems", strength: "Caring listener" },
      { text: "I keep trying even when things are difficult", strength: "Perseverance" },
      { text: "I love asking questions and finding out how things work", strength: "Curiosity" },
      { text: "I can make people laugh", strength: "Humour" },
      { text: "I tell the truth even when it is hard", strength: "Honesty" },
      { text: "I notice when someone is left out", strength: "Kindness" },
      { text: "I like organizing games, tasks, or events", strength: "Leadership" },
      { text: "I can stay calm when others panic", strength: "Calm under pressure" },
      { text: "I enjoy creating things — drawings, stories, crafts, music", strength: "Creativity" },
      { text: "I share what I have, even when it is little", strength: "Generosity" },
      { text: "I stand up for people treated unfairly", strength: "Courage" },
      { text: "I finish what I start", strength: "Responsibility" }
    ],
    resultIntro: "Look at these strengths — they are already inside you:"
  },

  /* 5 — PROBLEM-SOLVING PUZZLE */
  {
    id: "problem-puzzle",
    title: "Problem-Solving Puzzle",
    emoji: "🧩",
    type: "order",
    blurb: "Arrange the problem-solving steps in the correct order.",
    instructions: "Tap the steps in the correct order, from first to last. Tap a chosen step to remove it if you change your mind.",
    puzzles: [
      {
        title: "The Problem-Solving Path",
        steps: [
          "Understand the problem clearly",
          "List possible solutions",
          "Think about what could happen with each",
          "Choose the safest, fairest solution",
          "Try your solution",
          "Review what happened and learn"
        ]
      },
      {
        title: "Handling Big Anger",
        steps: [
          "Notice the anger signs in your body",
          "Stop before acting",
          "Take slow, deep breaths",
          "Step away if you need to",
          "Talk about it calmly"
        ]
      },
      {
        title: "Asking for Help",
        steps: [
          "Notice the problem is too big for you alone",
          "Choose a trusted adult",
          "Find a calm moment",
          "Explain clearly what happened",
          "If they don't act, tell someone else"
        ]
      }
    ]
  },

  /* 6 — PEER PRESSURE ESCAPE */
  {
    id: "peer-pressure-escape",
    title: "Peer Pressure Escape",
    emoji: "🚪",
    type: "choice",
    blurb: "Choose safe responses to pressure and escape each situation.",
    instructions: "In each situation, someone is pressuring you. Pick the response that keeps you safe AND true to yourself.",
    rounds: [
      { prompt: "'Just take one puff. Nobody will know.'", options: ["'Okay, just once...'", "'No thanks. I'm good.' (and change the subject)", "Take it but don't inhale."], answer: 1, why: "A short, calm no plus changing the subject is a classic escape move." },
      { prompt: "'Let's skip class. Only boring people stay.'", options: ["'Call me boring then — see you after class!'", "'Maybe just this once.'", "Skip, but feel bad about it."], answer: 0, why: "Humour + standing firm deflates pressure without a fight." },
      { prompt: "'Send me your photo. Everyone shares photos. Don't be childish.'", options: ["Send it to avoid drama", "Refuse, block if needed, and tell a trusted adult", "Ask them to promise not to share it"], answer: 1, why: "Never let 'everyone does it' push you into unsafe sharing. Promises can't protect a sent photo." },
      { prompt: "'If you're really our friend, you'll steal the exam paper with us.'", options: ["'Real friends don't test friendship with danger. I'm out.'", "Help them 'just as lookout'", "Say yes but plan to back out later"], answer: 0, why: "Friendship that demands wrongdoing isn't friendship — naming that is powerful." },
      { prompt: "'Drink this, everyone at the party is doing it.'", options: ["Hold the cup and pretend to sip all night", "'No thanks' — get a soda, stay near friends you trust", "Drink a little to fit in"], answer: 1, why: "A confident no plus a safe alternative works. Position yourself near people who respect your choices." },
      { prompt: "Your friends dare you to mock the new student to join their group.", options: ["Do it — it's just a joke", "'Not my style.' Then go greet the new student", "Laugh along but don't say anything yourself"], answer: 1, why: "Refusing AND doing the kind thing shows real strength. Laughing along still joins the harm." }
    ]
  },

  /* 7 — GOAL BUILDER */
  {
    id: "goal-builder",
    title: "Goal Builder",
    emoji: "🎯",
    type: "order",
    blurb: "Break big goals into the right small steps.",
    instructions: "A big dream is shown. Tap the smaller steps in the best order — from the first step to the final one.",
    puzzles: [
      {
        title: "Dream: Become a doctor 🩺",
        steps: [
          "Work hard in science subjects now",
          "Join the school health or science club",
          "Finish secondary school with strong grades",
          "Apply to study medicine",
          "Train and qualify as a doctor"
        ]
      },
      {
        title: "Goal: Read 12 books this year 📖",
        steps: [
          "Pick the first book you'll enjoy",
          "Set a time — 20 minutes daily",
          "Finish one book each month",
          "Track each finished book on a list",
          "Celebrate book number 12!"
        ]
      },
      {
        title: "Goal: Make the school team ⚽",
        steps: [
          "Practice basic skills every evening",
          "Join practice matches at break",
          "Ask the coach what to improve",
          "Attend the team trials",
          "Keep training whether you make it or not"
        ]
      }
    ]
  },

  /* 8 — MEMORY MATCH */
  {
    id: "memory-match",
    title: "Memory Match",
    emoji: "🃏",
    type: "memory",
    blurb: "Flip cards to match life skills words with their meanings.",
    instructions: "Tap two cards to flip them. Match each life skills word to its meaning. Fewer flips = more stars!",
    pairs: [
      { a: "Empathy", b: "Feeling with another person" },
      { a: "Resilience", b: "Bouncing back after hard times" },
      { a: "Boundary", b: "A limit that protects you" },
      { a: "Integrity", b: "Doing right even when no one sees" },
      { a: "Confidence", b: "Believing you can learn and grow" },
      { a: "Respect", b: "Treating others as valuable" }
    ]
  },

  /* 9 — CONFIDENCE BUILDER */
  {
    id: "confidence-builder",
    title: "Confidence Builder",
    emoji: "💪",
    type: "choice",
    blurb: "Complete each positive self-talk statement.",
    instructions: "Finish each sentence with the choice a good coach would say. Train your inner voice!",
    rounds: [
      { prompt: "When I make a mistake, it means...", options: ["...I am a failure.", "...I am learning something new.", "...I should stop trying."], answer: 1, why: "Mistakes are steps in learning, not proof of failure." },
      { prompt: "When something is difficult, I tell myself...", options: ["'I can't do this.'", "'I can't do this YET.'", "'Difficult things are not for people like me.'"], answer: 1, why: "That little word 'yet' turns a wall into a door." },
      { prompt: "Before a big challenge, I remind myself...", options: ["'I have prepared, and I will do my best.'", "'I will probably embarrass myself.'", "'Everyone else is better than me.'"], answer: 0, why: "Focus on your preparation and effort — the things you control." },
      { prompt: "When someone else wins, I think...", options: ["'I'm worthless compared to them.'", "'Well done to them — and I can learn from how they did it.'", "'They probably cheated.'"], answer: 1, why: "Others' success can be your classroom, not your shame." },
      { prompt: "When I look at my progress, I compare myself to...", options: ["...the best student in the country.", "...who I was last month.", "...people on the internet."], answer: 1, why: "Your past self is the only fair comparison." },
      { prompt: "If my inner voice says 'You always fail', I answer...", options: ["'That's not true — I have succeeded before, and I am still growing.'", "'You're right.'", "Nothing. I just feel bad."], answer: 0, why: "Talk back to the inner critic with true, kind evidence." }
    ]
  },

  /* 10 — SAFE OR UNSAFE */
  {
    id: "safe-or-unsafe",
    title: "Safe or Unsafe",
    emoji: "🛡️",
    type: "sort",
    blurb: "Identify safe, unsafe, and uncertain situations.",
    instructions: "Read each situation and tap: Safe, Unsafe, or Not Sure. 'Not Sure' is a smart answer when you would check with a trusted adult first!",
    groups: ["Safe ✅", "Unsafe ⛔", "Not sure 🤔"],
    items: [
      { text: "Walking home with a group of classmates in daylight", answer: 0, why: "Groups and daylight are protective. Well done." },
      { text: "Accepting a lift from a stranger who 'knows your mother'", answer: 1, why: "Classic trick. Never go with strangers, whatever story they tell." },
      { text: "A new app asks for your school name and home address", answer: 1, why: "Apps don't need your address. Keep private details private." },
      { text: "An adult you just met online wants to meet you 'somewhere quiet'", answer: 1, why: "Major danger sign. Block and tell a trusted adult immediately." },
      { text: "Your auntie asks you to help carry shopping from the market", answer: 0, why: "Helping trusted family with everyday tasks is safe and kind." },
      { text: "An older student offers you a 'medicine' to help you study", answer: 1, why: "Never take pills or substances except from a parent/guardian or medical worker." },
      { text: "A neighbour invites you in when no one else is home, and it feels odd", answer: 2, why: "Trust that odd feeling — politely refuse and check with your parent or guardian first." },
      { text: "Swimming at a pool with a lifeguard and your class", answer: 0, why: "Supervised swimming in a proper place is a safe way to have fun." },
      { text: "A shortcut through an empty building site at dusk", answer: 1, why: "Isolated + dark + hazardous = choose the longer, safer route." },
      { text: "Someone you don't know well offers you a free phone 'as a gift'", answer: 2, why: "Unusually big gifts can carry hidden expectations. Check with a trusted adult before accepting." }
    ]
  }
];
