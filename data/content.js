/* ==========================================================================
   I MATTER — PILLAR LESSONS (English + Kiswahili)
   --------------------------------------------------------------------------
   Safe to edit. Six pillars, each with four short lessons that follow the
   I Matter Positive Youth Development Framework (2026).

   STRUCTURE
   window.IM_CONTENT = { en: { categories: [...] }, sw: { categories: [...] } }
   Both language trees must keep the SAME ids, order, emoji, colours, and
   quiz answer indexes — only the text changes.

   Each lesson: id, title, intro, key, example, reflection, activity,
   quiz { q, options[4], answer (0-based index) }, takeaway, related [ids].
   ========================================================================== */

window.IM_CONTENT = {

  en: { categories: [

    /* ================= PILLAR 1 — I KNOW MYSELF ================= */
    {
      id: "know-myself", emoji: "🌟", color: "yellow",
      title: "I Know Myself",
      blurb: "Understanding who I am and recognizing my strengths, values, and potential.",
      outcome: "I know who I am and I value myself.",
      lessons: [
        {
          id: "self-awareness",
          title: "Self-awareness",
          intro: "Self-awareness is the ability to understand ourselves — our personality, thoughts, feelings, behaviours, strengths, and weaknesses.",
          key: "Knowing yourself is the first step of the journey. When you understand what you feel, what you value, and what you are good at, you can make choices that truly fit you.",
          example: "Amina notices that she works best in the morning and gets frustrated when rushed. She starts doing her hardest homework before school — and her grades improve.",
          reflection: "What are three things you know about yourself — something you enjoy, something you are good at, and something you find hard?",
          activity: "Draw a circle and divide it into five parts: my strengths, my weaknesses, my goals, my values, and one word that describes me. Fill it in.",
          quiz: {
            q: "What is self-awareness?",
            options: [
              "Knowing everything about other people",
              "Understanding your own thoughts, feelings, strengths, and weaknesses",
              "Always being happy with yourself",
              "Never making mistakes"
            ],
            answer: 1
          },
          takeaway: "The better you know yourself, the better you can guide yourself.",
          related: ["self-esteem", "my-strengths"]
        },
        {
          id: "self-esteem",
          title: "Self-esteem & confidence",
          intro: "Confidence is the belief in our abilities and self-worth — believing in yourself. Self-esteem is how much you value yourself.",
          key: "Confidence grows through practice and positive self-talk — talking to yourself with kindness, compassion, and care. You do not need to be perfect to be valuable.",
          example: "Before a class presentation, Baraka tells himself: \"I prepared well. Even if I make a mistake, I am still learning.\" His hands still shake a little — but he speaks up, and it goes well.",
          reflection: "What would you say to a friend who feels they are not good enough? Now — can you say the same kind words to yourself?",
          activity: "Write three positive affirmations about yourself, such as \"I am kind\" or \"I take good care of my siblings.\" Say them out loud.",
          quiz: {
            q: "Which of these helps confidence grow?",
            options: [
              "Waiting until you feel no fear at all",
              "Comparing yourself to others",
              "Practice and positive self-talk",
              "Avoiding every challenge"
            ],
            answer: 2
          },
          takeaway: "Talk to yourself like someone you love.",
          related: ["self-awareness", "resilience"]
        },
        {
          id: "my-strengths",
          title: "My strengths",
          intro: "Everyone has strengths — things we do well, qualities that help us and others. Some are easy to see; others are hidden.",
          key: "Strengths can be hidden: the things people thank you for are clues. Knowing your strengths builds confidence and guides your goals.",
          example: "Neema thought she had no talents because she wasn't the best in class. Then she noticed classmates always came to her with their problems — being a good listener is a real strength.",
          reflection: "What has a friend, teacher, or family member thanked you for recently? What does that say about your strengths?",
          activity: "Ask two people who know you well: \"What do you think I am good at?\" Write down what they say.",
          quiz: {
            q: "Which of these is a clue to a hidden strength?",
            options: [
              "Things people often thank you for",
              "Only school grades",
              "What others say you cannot do",
              "Being the best in everything"
            ],
            answer: 0
          },
          takeaway: "You have strengths — some you haven't even discovered yet.",
          related: ["self-awareness", "goal-setting"]
        },
        {
          id: "my-values",
          title: "My values",
          intro: "Values are the beliefs that matter most to us — like honesty, respect, family, faith, or fairness. They shape our decisions every day.",
          key: "When your actions match your values, you feel at peace with yourself. When they don't, you feel uncomfortable — that feeling is a signal worth listening to.",
          example: "Juma values honesty. When a friend asks him to lie to a teacher, he feels a knot in his stomach. He says: \"I can't do that — but I can help you explain what happened.\"",
          reflection: "Think of a moment you felt proud of yourself. Which of your values were you living in that moment?",
          activity: "From this list — honesty, respect, family, friendship, learning, faith, courage, kindness — choose your top three values and explain why.",
          quiz: {
            q: "What are values?",
            options: [
              "Things that cost a lot of money",
              "The beliefs that matter most to us and guide our choices",
              "Rules made by other people",
              "Feelings that change every day"
            ],
            answer: 1
          },
          takeaway: "Know what you stand for — it makes hard choices easier.",
          related: ["decision-making", "self-awareness"]
        }
      ]
    },

    /* ================= PILLAR 2 — I BELONG ================= */
    {
      id: "belong", emoji: "💬", color: "teal",
      title: "I Belong",
      blurb: "Building healthy relationships through effective communication, empathy, and mutual respect.",
      outcome: "I build positive relationships with others.",
      lessons: [
        {
          id: "communication-basics",
          title: "How we communicate",
          intro: "We communicate with words (verbal) and without words (non-verbal) — facial expressions, body language, eye contact, and tone of voice.",
          key: "Assertive communication means expressing your thoughts, feelings, and needs clearly and confidently, while respecting others. It is different from being passive (staying silent) or aggressive (hurting others).",
          example: "Someone keeps taking Zawadi's seat. Instead of saying nothing (passive) or shouting (aggressive), she says calmly: \"I prefer to sit here. Can you please move?\"",
          reflection: "When something bothers you, do you usually stay quiet, get angry, or speak calmly? What would you like to change?",
          activity: "Practise saying one assertive sentence for this situation: a friend keeps interrupting you. Start with \"I\" — for example, \"I don't like being interrupted. Please let me finish.\"",
          quiz: {
            q: "Which response is assertive?",
            options: [
              "Saying nothing and feeling upset inside",
              "\"No thanks, I want to stay in class. We can meet after school.\"",
              "\"Leave me alone! You are always causing problems!\"",
              "Agreeing to everything to avoid conflict"
            ],
            answer: 1
          },
          takeaway: "Be direct but respectful — your voice deserves to be heard.",
          related: ["active-listening", "peer-pressure"]
        },
        {
          id: "active-listening",
          title: "Active listening",
          intro: "Hearing is passive — it happens automatically. Listening is active — it needs attention, concentration, and care.",
          key: "Active listening means staying fully focused while someone talks: pay attention, make eye contact, don't interrupt, ask questions, and show empathy. People feel less angry and more valued when they feel heard.",
          example: "Mary tells Wanjiru about a problem at home. Wanjiru puts her phone away, looks at her, and asks: \"How did that make you feel?\" Mary later says that talk helped her more than any advice.",
          reflection: "When you talk, how do you know if someone is really listening to you? How do you feel when they are not?",
          activity: "Today, in one conversation, practise listening without interrupting even once. Then ask one caring question.",
          quiz: {
            q: "Which of these is part of active listening?",
            options: [
              "Planning your reply while the other person talks",
              "Checking your phone",
              "Paying full attention and asking questions",
              "Finishing the other person's sentences"
            ],
            answer: 2
          },
          takeaway: "Listening well is one of the kindest things you can do.",
          related: ["communication-basics", "empathy"]
        },
        {
          id: "empathy",
          title: "Empathy",
          intro: "Empathy is the ability to understand and share what another person is feeling — to see the situation through their eyes.",
          key: "Empathy does not mean agreeing with everything. It means trying to understand before judging. It builds trust and makes relationships stronger.",
          example: "A classmate snaps at Otieno for no clear reason. Instead of snapping back, Otieno remembers the boy's mother is unwell. Later he asks quietly: \"Are you okay?\" — and the boy apologises.",
          reflection: "Think of someone who annoyed you recently. What might have been happening in their life that you couldn't see?",
          activity: "Watch people around you today. Try to name what they might be feeling from their face and body language — without judging.",
          quiz: {
            q: "What is empathy?",
            options: [
              "Feeling sorry for someone from far away",
              "Trying to understand what another person feels, from their point of view",
              "Agreeing with everything others say",
              "Telling people what they should feel"
            ],
            answer: 1
          },
          takeaway: "Before judging, ask yourself: what might they be going through?",
          related: ["active-listening", "perspective-taking"]
        },
        {
          id: "teamwork",
          title: "Healthy relationships & teamwork",
          intro: "In healthy relationships people feel valued, respected, and supported. Healthy teams work the same way — everyone matters.",
          key: "Healthy relationships are built on trust, mutual respect, open communication, and support. Unhealthy ones show disrespect, control, constant conflict, or fear. Boundaries — the limits we set to feel safe and respected — protect every relationship.",
          example: "Achieng's friend reads her diary without permission. Achieng says: \"Please don't go through my things — that's my boundary.\" A real friend listens and apologises.",
          reflection: "Think about your closest friendships. Do you feel valued, respected, and supported? Do your friends feel the same with you?",
          activity: "Write one boundary that matters to you (for example: \"I need time to study in the evening\") and practise saying it kindly and clearly.",
          quiz: {
            q: "Which is a sign of a healthy relationship?",
            options: [
              "One person controls the other's choices",
              "Mocking and name-calling as \"jokes\"",
              "Trust, respect, and support in both directions",
              "Being afraid to say no"
            ],
            answer: 2
          },
          takeaway: "You deserve relationships where you feel safe, valued, and free to be yourself.",
          related: ["empathy", "understanding-conflict"]
        }
      ]
    },

    /* ================= PILLAR 3 — I TAKE ACTION ================= */
    {
      id: "take-action", emoji: "🎯", color: "green",
      title: "I Take Action",
      blurb: "Turning aspirations into action through planning, perseverance, and personal responsibility.",
      outcome: "I take action to achieve my goals.",
      lessons: [
        {
          id: "goal-setting",
          title: "Setting goals",
          intro: "Goals are things we want to achieve. They give us direction, help us stay focused, and motivate us to keep working even when we meet challenges.",
          key: "Be clear about your goal, know why it matters to you, plan the steps, expect obstacles, and set a deadline. \"I want to improve my mathematics grade from a C to a B by the end of this term\" beats \"I want to do better in school.\"",
          example: "Chebet wants to become a nurse. Her short-term goal: pass this term's science exams. Her plan: study in the library every afternoon and ask her teacher when she is stuck.",
          reflection: "What is one goal for the next six months — and one for the next five years? Why do they matter to you?",
          activity: "Write one clear goal using this pattern: \"I want to [what] by [when], because [why]. My first step is [step].\"",
          quiz: {
            q: "Which goal is the clearest?",
            options: [
              "\"I want to perform better in school.\"",
              "\"I want to be successful someday.\"",
              "\"I want to improve my maths grade from a C to a B by the end of term.\"",
              "\"I will try harder.\""
            ],
            answer: 2
          },
          takeaway: "A goal with a plan and a deadline becomes a journey you can start today.",
          related: ["time-management", "motivation"]
        },
        {
          id: "time-management",
          title: "Time management",
          intro: "Time management means planning how you use your time so you can get important things done and achieve your goals. Time is a limited resource — own it!",
          key: "Plan your day, do the most important tasks first, break big tasks into small steps, focus on one thing at a time, avoid distractions, use reminders, take short breaks, and sleep enough.",
          example: "Peter has homework for tomorrow but keeps watching videos on the phone. He puts the phone in another room, finishes his homework in an hour, and still has time to relax — without the guilt.",
          reflection: "What are your biggest \"time robbers\" — texting, endless chatting, social media, TV? What could you do differently this week?",
          activity: "Tonight, write tomorrow's to-do list with the three most important tasks first. Tick them off as you go.",
          quiz: {
            q: "What is the best first move when a task feels too big?",
            options: [
              "Wait until you feel ready",
              "Break it into small steps and start with one",
              "Do several other things at the same time",
              "Ask someone else to do it"
            ],
            answer: 1
          },
          takeaway: "You cannot make more time — but you can decide what your time is for.",
          related: ["goal-setting", "beat-procrastination"]
        },
        {
          id: "beat-procrastination",
          title: "Overcoming procrastination",
          intro: "Procrastination is postponing tasks, decisions, or activities. It is a learned habit — the more you do it, the worse it becomes.",
          key: "People procrastinate out of fear of failure, perfectionism, distraction, or feeling overwhelmed. Beat it by setting daily goals, breaking tasks into small steps, starting with the most urgent task, and removing distractions.",
          example: "\"I'll do it tomorrow,\" Sifa kept saying about her essay. The night before the deadline she panicked. Next time, she wrote just the introduction on day one — and starting made the rest easier.",
          reflection: "What is one task you have been postponing? What would be the benefit of finishing it?",
          activity: "Pick one postponed task. Write the three smallest steps to complete it — and do the first step today.",
          quiz: {
            q: "Which of these is a sign of procrastination?",
            options: [
              "\"I will start with the hardest part now.\"",
              "\"This is not the right time — I'll do it tomorrow.\"",
              "\"Let me remove distractions first.\"",
              "\"I'll break this into small steps.\""
            ],
            answer: 1
          },
          takeaway: "Starting is the hardest step — make it small enough to take today.",
          related: ["time-management", "motivation"]
        },
        {
          id: "motivation",
          title: "Motivation & perseverance",
          intro: "Motivation gets you started; perseverance keeps you going. Every goal worth reaching has moments when you want to give up.",
          key: "Keep track of your progress, be flexible when the path gets bumpy, seek help when what you're doing isn't working, and stay positive. Don't give up if it takes longer than expected.",
          example: "Kiprop failed his first driving-school test. Instead of quitting, he asked what went wrong, practised the weak parts, and passed the second time. The setback became a lesson.",
          reflection: "Think of something hard you did not give up on. What kept you going?",
          activity: "Write your goal on a card. Under it, write: \"When it gets hard, I will remember...\" and finish the sentence.",
          quiz: {
            q: "Your plan is not working. What does perseverance look like?",
            options: [
              "Giving up — it was not meant to be",
              "Doing exactly the same thing and hoping",
              "Adjusting the plan, seeking help, and continuing",
              "Blaming other people"
            ],
            answer: 2
          },
          takeaway: "Where you start does not decide where you finish.",
          related: ["goal-setting", "resilience"]
        }
      ]
    },

    /* ================= PILLAR 4 — I CHOOSE WISELY ================= */
    {
      id: "choose-wisely", emoji: "🧭", color: "blue",
      title: "I Choose Wisely",
      blurb: "Making informed decisions and solving problems with confidence.",
      outcome: "I make informed decisions that support my wellbeing and future.",
      lessons: [
        {
          id: "decision-making",
          title: "Decision-making",
          intro: "Decision-making is the process of choosing the best option among several alternatives. With more freedom comes greater responsibility.",
          key: "Good decision-making means thinking about the consequences, considering your values, and taking responsibility for your actions — instead of reacting impulsively.",
          example: "At a party, Musa's ride home has been drinking. Musa remembers his rule — never ride with a drunk driver — and calls his older sister instead, even though it's embarrassing.",
          reflection: "What decisions are you facing right now? Which one matters most for your future?",
          activity: "For one real decision you face, list your options and write one positive and one negative consequence for each.",
          quiz: {
            q: "What does good decision-making include?",
            options: [
              "Choosing whatever your friends choose",
              "Deciding as fast as possible",
              "Thinking about consequences and your values",
              "Avoiding all decisions"
            ],
            answer: 2
          },
          takeaway: "Your choices have power — use them on purpose.",
          related: ["consequences", "critical-thinking"]
        },
        {
          id: "critical-thinking",
          title: "Critical thinking",
          intro: "Critical thinking means examining information carefully before believing or acting on it — asking: Is this true? Who says so? What is missing?",
          key: "Friends, emotions, social media, and money pressures all influence our decisions. Critical thinking helps you notice those influences and think for yourself.",
          example: "A post claims a famous person said something shocking. Before sharing, Nyokabi checks other sources — the quote was invented. She saves herself from spreading a lie.",
          reflection: "Think of the last thing you believed because \"everyone\" said it. Did you check it yourself?",
          activity: "Take one message or post you saw today and ask three questions: Who created this? Why? What evidence supports it?",
          quiz: {
            q: "What is the critical-thinking response to a shocking online claim?",
            options: [
              "Share it quickly before others do",
              "Believe it if many people liked it",
              "Check the source and look for evidence first",
              "Ignore all information forever"
            ],
            answer: 2
          },
          takeaway: "Don't just swallow information — chew it first.",
          related: ["decision-making", "peer-pressure"]
        },
        {
          id: "problem-solving",
          title: "Problem-solving step by step",
          intro: "Problems are a normal part of life. Problem-solving is the ability to recognise a challenge, think about possible solutions, and choose the best way to respond.",
          key: "Use the 7 steps: identify the problem, consider all options, weigh the consequences of each, choose the best option, act, monitor the results, and reflect on what you learned.",
          example: "Wafula keeps failing maths quizzes. Instead of deciding \"I'm just bad at maths,\" he identifies the real problem (he never practises), tries a solution (three practice questions daily), and his marks slowly rise.",
          reflection: "Think of a problem you solved well. Which of the 7 steps did you use without realising?",
          activity: "Take one current problem and walk it through the first four steps on paper: problem, options, consequences, choice.",
          quiz: {
            q: "What is the FIRST step of good problem-solving?",
            options: [
              "Act immediately",
              "Identify the real problem",
              "Blame someone",
              "Choose the easiest option"
            ],
            answer: 1
          },
          takeaway: "Step back, assess, weigh your options — then act. That is control.",
          related: ["decision-making", "consequences"]
        },
        {
          id: "consequences",
          title: "Evaluating consequences",
          intro: "Every choice carries consequences — for you, your family, and your community. Some appear immediately; others show up much later.",
          key: "Before deciding, write down the positive and negative consequences of each option. A choice that feels good today can cost you tomorrow — and a hard choice today can protect your future.",
          example: "A man offers Dennis 3,000 shillings to deliver a mysterious package. Quick money now — but Dennis weighs the risk: trouble with the police, danger, his family's trust. He refuses.",
          reflection: "Think of a choice you regret. Which consequences did you not consider at the time?",
          activity: "Draw a table with two columns — Positive and Negative — and fill it in for a decision you are facing this week.",
          quiz: {
            q: "Why weigh consequences before deciding?",
            options: [
              "To make deciding slower for no reason",
              "Because choices that feel good now can cost you later",
              "So you can blame others if it fails",
              "Because all options are always equal"
            ],
            answer: 1
          },
          takeaway: "Think past today — your future self is counting on you.",
          related: ["problem-solving", "substance-abuse"]
        }
      ]
    },

    /* ================= PILLAR 5 — I BUILD BRIDGES ================= */
    {
      id: "build-bridges", emoji: "🤝", color: "purple",
      title: "I Build Bridges",
      blurb: "Managing disagreements constructively and strengthening relationships.",
      outcome: "I navigate conflict with respect and understanding.",
      lessons: [
        {
          id: "understanding-conflict",
          title: "Understanding conflict",
          intro: "Conflict is a disagreement between people caused by incompatible goals, needs, values, or opinions. It is a natural part of life.",
          key: "Conflict is like fire: it can cook and bring warmth, but it can harm if it gets out of control. Handled well, conflict helps us understand each other and can even strengthen relationships.",
          example: "Two teammates argue about who plays striker. Handled badly, the team splits into sides. Handled well — they talk, take turns, and the team grows stronger.",
          reflection: "What words come to mind when you hear \"conflict\"? Can you think of a conflict that ended with a stronger friendship?",
          activity: "Recall one small conflict from this week. Write down what each side actually needed (not what they said — what they needed).",
          quiz: {
            q: "Which statement about conflict is true?",
            options: [
              "Conflict always means a relationship is broken",
              "Conflict is natural — what matters is how you handle it",
              "The best response is always to fight back",
              "Only bad people have conflicts"
            ],
            answer: 1
          },
          takeaway: "Conflict handled early and with respect becomes understanding.",
          related: ["negotiation", "teamwork"]
        },
        {
          id: "negotiation",
          title: "Negotiation skills",
          intro: "Negotiating a conflict doesn't mean fighting or giving up — it means building bridges towards a peaceful resolution.",
          key: "Use \"I\" statements (\"I feel frustrated when...\"), listen actively, ask for clarification, take turns, focus on the problem (not the person), and aim for win-win — where both sides get what they truly need.",
          example: "Brian is angry that Kevin missed their study session. Instead of \"You are so selfish!\", he tries: \"I felt let down when you didn't come, because I was counting on you.\" Kevin apologises — and explains what happened.",
          reflection: "Think about your last argument. What would it sound like if you replaced \"You always...\" with \"I feel... when... because...\"?",
          activity: "Rewrite these as \"I\" statements: \"You never listen!\" and \"You always leave me out!\"",
          quiz: {
            q: "Which is an \"I\" statement?",
            options: [
              "\"You never listen to me!\"",
              "\"You are the problem here.\"",
              "\"I feel ignored when I'm interrupted, because my ideas matter too.\"",
              "\"Everyone knows you are wrong.\""
            ],
            answer: 2
          },
          takeaway: "Attack the problem, never the person.",
          related: ["understanding-conflict", "communication-basics"]
        },
        {
          id: "perspective-taking",
          title: "Seeing the other side",
          intro: "Perspective-taking means stepping into the other person's shoes — trying to see the situation as they see it.",
          key: "Most conflicts grow because each side is sure they are completely right. Pausing to ask \"How does this look from their side?\" cools the conflict and often reveals a solution.",
          example: "The Owino family planted a mango tree; its branches now hang over the Ontingana family's garden — both claim the mangoes. A mediator asks each family to state the other's view. Suddenly, sharing the fruit doesn't sound so impossible.",
          reflection: "In your current or most recent disagreement — can you honestly describe the other person's point of view?",
          activity: "With a friend, each of you argues the OTHER person's side of a small disagreement for one minute. What did you learn?",
          quiz: {
            q: "What is perspective-taking?",
            options: [
              "Agreeing with whoever is loudest",
              "Trying to see the situation through the other person's eyes",
              "Giving up your own opinion",
              "Waiting for the other person to apologise first"
            ],
            answer: 1
          },
          takeaway: "Understanding the other side doesn't weaken you — it makes you wiser.",
          related: ["empathy", "negotiation"]
        },
        {
          id: "cooperation",
          title: "Managing anger & cooperating",
          intro: "Anger is a normal feeling — it tells you something feels unfair or wrong. But words said in anger leave scars, like nail holes in a fence.",
          key: "Recognise anger early (fast heartbeat, clenched fists, heat). Acknowledge it: \"This is making me really angry.\" Take a time-out, cool down, then talk. Avoid reacting while angry — and avoid arguing with someone who is angry.",
          example: "A boy hammered a nail into the fence each time he lost his temper. As he learned self-control, the nails stopped — but his father showed him the holes that remained: \"The fence will never be the same.\"",
          reflection: "Have you ever said or done something in anger that you regretted later? What could you do differently next time?",
          activity: "Make your personal \"cool-down plan\": three things you will do before responding when you feel very angry.",
          quiz: {
            q: "You feel rage rising during an argument. What is the wisest next step?",
            options: [
              "Say everything you feel immediately",
              "Take a time-out and talk after cooling down",
              "Get louder so you win",
              "Bring up the person's past mistakes"
            ],
            answer: 1
          },
          takeaway: "You can feel angry and still choose your actions wisely.",
          related: ["understanding-conflict", "resilience"]
        }
      ]
    },

    /* ================= PILLAR 6 — I PROTECT MY FUTURE ================= */
    {
      id: "protect-future", emoji: "🛡️", color: "coral",
      title: "I Protect My Future",
      blurb: "Making healthy choices that support my wellbeing and future aspirations.",
      outcome: "I make healthy choices that protect my wellbeing and my future.",
      lessons: [
        {
          id: "peer-pressure",
          title: "Peer pressure & refusal skills",
          intro: "Peer pressure is influence from friends and age-mates. It can be positive (encouraging you to study) or negative (pushing you to drink, smoke, or skip school).",
          key: "You can refuse without losing yourself: say NO firmly and repeat it, use strong body language, give a reason, suggest an alternative, or walk away. Real friends respect your choices.",
          example: "\"Just try it once, don't be a child,\" the boys tell Simiyu, offering a cigarette. He looks them in the eye: \"No thanks — I've seen what smoking did to my uncle. Let's go play football instead.\"",
          reflection: "Where in your life do you feel pressure to do things that don't match your values? What could you say next time?",
          activity: "Practise saying \"No\" three ways to one risky invitation: (1) No + reason, (2) No + alternative, (3) No + walk away.",
          quiz: {
            q: "Which is an effective refusal skill?",
            options: [
              "Saying \"maybe later\" so they stop asking",
              "Saying no firmly, giving a reason, and suggesting an alternative",
              "Going along with it once to keep the peace",
              "Laughing and hoping they forget"
            ],
            answer: 1
          },
          takeaway: "Saying no to the wrong thing is saying yes to your future.",
          related: ["substance-abuse", "communication-basics"]
        },
        {
          id: "substance-abuse",
          title: "Drugs & addiction: the facts",
          intro: "Drugs are substances that change how your body and mind work. They are unpredictable and especially dangerous for teenagers, whose brains are still developing.",
          key: "Addiction is when your body and brain get so used to a drug that you feel you can't live without it — and young people can get addicted very quickly. \"Natural,\" \"legal,\" or \"everyone does it\" does not mean safe. Recovery is possible with support, but prevention is far better.",
          example: "David started sniffing glue with older boys to forget his problems. Within months he lost interest in school and stole from his parents. With counselling and family support he recovered — but he says: \"I wish I had never started.\"",
          reflection: "Why do you think some young people start using drugs — and what protects those who don't?",
          activity: "Myth or fact? Discuss: \"Weed is natural, so it's safe.\" \"Alcohol helps you forget problems.\" \"Only weak people get addicted.\" (All myths.)",
          quiz: {
            q: "Which statement is TRUE?",
            options: [
              "Drugs that are legal or natural are safe",
              "Addiction only happens to weak people",
              "Teenagers can become addicted very quickly because their brains are still developing",
              "You can always control how much you use"
            ],
            answer: 2
          },
          takeaway: "Your developing brain is your greatest asset — protect it.",
          related: ["peer-pressure", "consequences"]
        },
        {
          id: "resilience",
          title: "Resilience",
          intro: "Resilience is the ability to recover from setbacks, adapt to change, and keep going when life gets hard.",
          key: "Resilience is built, not born: supportive relationships, hobbies and goals, self-care, asking for help, and remembering that failure is a teacher — not the end of the story.",
          example: "When Akinyi's family had to move towns mid-year, she lost her friends and her marks dropped. She joined the drama club, found new friends, asked teachers for help — and finished the year stronger than she started.",
          reflection: "You have survived 100% of your hardest days so far. What helped you get through the hardest one?",
          activity: "Draw your \"resilience shield\": four things that keep you strong — a person, an activity, a strength, and a hope.",
          quiz: {
            q: "What is resilience?",
            options: [
              "Never having any problems",
              "Hiding your feelings so no one knows",
              "Recovering from setbacks and continuing towards your goals",
              "Refusing to ever ask for help"
            ],
            answer: 2
          },
          takeaway: "Falling is human. Rising again is resilience.",
          related: ["motivation", "healthy-lifestyle"]
        },
        {
          id: "healthy-lifestyle",
          title: "Healthy lifestyles",
          intro: "Your body and mind are the vehicle for every dream you have. Healthy habits — sleep, food, movement, and rest — power everything else.",
          key: "Protecting your future includes daily choices: sleep enough, eat what strengthens you, move your body, limit screen time, and take care of your mental health. Small habits, repeated daily, shape who you become.",
          example: "Tumaini kept falling asleep in class after late nights on the phone. She set a rule — phone off by 9 pm — and within two weeks her energy, mood, and marks all improved.",
          reflection: "Which daily habit is building your future — and which one is quietly working against you?",
          activity: "Choose one small healthy habit for this week (sleep by 10 pm, a daily walk, one hour less scrolling). Track it for seven days.",
          quiz: {
            q: "Which choice best supports both body and mind?",
            options: [
              "Skipping sleep to do more",
              "Regular sleep, healthy food, and movement",
              "Energy drinks instead of rest",
              "Keeping worries secret"
            ],
            answer: 1
          },
          takeaway: "Take care of your body — you live your whole future in it.",
          related: ["resilience", "time-management"]
        }
      ]
    }
  ] },

  /* ==================================================================== */
  /* KISWAHILI                                                            */
  /* ==================================================================== */
  sw: { categories: [

    /* ================= NGUZO 1 — NINAJIJUA ================= */
    {
      id: "know-myself", emoji: "🌟", color: "yellow",
      title: "Ninajijua",
      blurb: "Kuelewa mimi ni nani na kutambua uwezo wangu, maadili yangu, na vipaji vyangu.",
      outcome: "Ninajua mimi ni nani na ninajithamini.",
      lessons: [
        {
          id: "self-awareness",
          title: "Kujitambua",
          intro: "Kujitambua ni uwezo wa kujielewa — tabia zetu, mawazo yetu, hisia zetu, mienendo yetu, uwezo wetu, na udhaifu wetu.",
          key: "Kujijua ni hatua ya kwanza ya safari. Unapoelewa unachohisi, unachothamini, na unachokiweza, unaweza kufanya maamuzi yanayokufaa kweli.",
          example: "Amina anagundua kwamba anasoma vizuri zaidi asubuhi na hukasirika anapoharakishwa. Anaanza kufanya kazi ngumu za nyumbani kabla ya shule — na alama zake zinapanda.",
          reflection: "Ni mambo gani matatu unayojijua — kitu unachofurahia, kitu unachokiweza vizuri, na kitu kinachokuwia kigumu?",
          activity: "Chora duara na uligawe sehemu tano: uwezo wangu, udhaifu wangu, malengo yangu, maadili yangu, na neno moja linalonielezea. Jaza sehemu zote.",
          quiz: {
            q: "Kujitambua ni nini?",
            options: [
              "Kujua kila kitu kuhusu watu wengine",
              "Kuelewa mawazo yako, hisia zako, uwezo wako, na udhaifu wako",
              "Kufurahia kila kitu kukuhusu kila wakati",
              "Kutokosea kamwe"
            ],
            answer: 1
          },
          takeaway: "Kadiri unavyojijua zaidi, ndivyo unavyoweza kujiongoza vizuri zaidi.",
          related: ["self-esteem", "my-strengths"]
        },
        {
          id: "self-esteem",
          title: "Kujithamini na kujiamini",
          intro: "Kujiamini ni imani katika uwezo wetu na thamani yetu — kuamini nafsi yako. Kujithamini ni kiasi unachojiona una thamani.",
          key: "Kujiamini hukua kupitia mazoezi na maneno mazuri kwa nafsi yako — kujisemesha kwa wema, huruma, na upendo. Huhitaji kuwa mkamilifu ili uwe na thamani.",
          example: "Kabla ya kuwasilisha darasani, Baraka anajiambia: \"Nimejiandaa vizuri. Hata nikikosea, bado najifunza.\" Mikono yake bado inatetemeka kidogo — lakini anaongea, na inaenda vizuri.",
          reflection: "Ungemwambia nini rafiki anayehisi hafai? Sasa — unaweza kujisemea maneno hayo hayo mazuri?",
          activity: "Andika kauli tatu chanya kuhusu nafsi yako, kama \"Mimi ni mwema\" au \"Ninawatunza vizuri wadogo zangu.\" Zisome kwa sauti.",
          quiz: {
            q: "Kipi kati ya hivi husaidia kujiamini kukua?",
            options: [
              "Kusubiri hadi usiwe na hofu kabisa",
              "Kujilinganisha na wengine",
              "Mazoezi na maneno mazuri kwa nafsi yako",
              "Kuepuka kila changamoto"
            ],
            answer: 2
          },
          takeaway: "Jisemeshe kama mtu unayempenda.",
          related: ["self-awareness", "resilience"]
        },
        {
          id: "my-strengths",
          title: "Uwezo wangu",
          intro: "Kila mtu ana uwezo — mambo tunayoyafanya vizuri, sifa zinazotusaidia sisi na wengine. Baadhi huonekana kwa urahisi; mengine yamejificha.",
          key: "Uwezo unaweza kujificha: mambo ambayo watu hukushukuru kwayo ni dalili. Kujua uwezo wako hujenga kujiamini na huongoza malengo yako.",
          example: "Neema alidhani hana kipaji kwa sababu hakuwa wa kwanza darasani. Kisha akagundua wanafunzi wenzake huja kwake kila mara na matatizo yao — kuwa msikilizaji mzuri ni uwezo wa kweli.",
          reflection: "Rafiki, mwalimu, au mtu wa familia amekushukuru kwa nini hivi karibuni? Hilo linasema nini kuhusu uwezo wako?",
          activity: "Waulize watu wawili wanaokujua vizuri: \"Unadhani mimi ni hodari wa nini?\" Andika wanachosema.",
          quiz: {
            q: "Kipi kati ya hivi ni dalili ya uwezo uliojificha?",
            options: [
              "Mambo ambayo watu hukushukuru kwayo mara kwa mara",
              "Alama za shule pekee",
              "Yale wengine wanasema huwezi",
              "Kuwa bora katika kila kitu"
            ],
            answer: 0
          },
          takeaway: "Una uwezo — mwingine bado hujaugundua.",
          related: ["self-awareness", "goal-setting"]
        },
        {
          id: "my-values",
          title: "Maadili yangu",
          intro: "Maadili ni imani zinazotujali zaidi — kama uaminifu, heshima, familia, imani, au haki. Huunda maamuzi yetu kila siku.",
          key: "Matendo yako yanapolingana na maadili yako, unahisi amani na nafsi yako. Yasipolingana, unahisi wasiwasi — hisia hiyo ni ishara inayostahili kusikilizwa.",
          example: "Juma anathamini uaminifu. Rafiki anapomwomba amdanganyie mwalimu, anahisi fundo tumboni. Anasema: \"Siwezi kufanya hivyo — lakini naweza kukusaidia kueleza kilichotokea.\"",
          reflection: "Fikiria wakati ulijivunia nafsi yako. Ulikuwa unaishi maadili yapi wakati huo?",
          activity: "Kutoka kwenye orodha hii — uaminifu, heshima, familia, urafiki, kujifunza, imani, ujasiri, wema — chagua maadili yako matatu makuu na ueleze kwa nini.",
          quiz: {
            q: "Maadili ni nini?",
            options: [
              "Vitu vinavyogharimu pesa nyingi",
              "Imani zinazotujali zaidi na zinazoongoza maamuzi yetu",
              "Sheria zilizotungwa na watu wengine",
              "Hisia zinazobadilika kila siku"
            ],
            answer: 1
          },
          takeaway: "Jua unachosimamia — hufanya maamuzi magumu kuwa rahisi.",
          related: ["decision-making", "self-awareness"]
        }
      ]
    },

    /* ================= NGUZO 2 — NINA MAHALI PANGU ================= */
    {
      id: "belong", emoji: "💬", color: "teal",
      title: "Nina Mahali Pangu",
      blurb: "Kujenga mahusiano yenye afya kupitia mawasiliano bora, huruma, na heshima kwa wote.",
      outcome: "Najenga mahusiano chanya na wengine.",
      lessons: [
        {
          id: "communication-basics",
          title: "Jinsi tunavyowasiliana",
          intro: "Tunawasiliana kwa maneno (mazungumzo) na bila maneno — sura ya uso, lugha ya mwili, kutazamana machoni, na sauti.",
          key: "Mawasiliano thabiti ni kueleza mawazo yako, hisia zako, na mahitaji yako kwa uwazi na kujiamini, huku ukiheshimu wengine. Ni tofauti na kunyamaza (unyonge) au kuumiza wengine (ukali).",
          example: "Mtu anaendelea kuchukua kiti cha Zawadi. Badala ya kunyamaza (unyonge) au kupiga kelele (ukali), anasema kwa utulivu: \"Napendelea kukaa hapa. Tafadhali unaweza kuhama?\"",
          reflection: "Kitu kinapokusumbua, huwa unanyamaza, unakasirika, au unaongea kwa utulivu? Ungependa kubadilisha nini?",
          activity: "Fanyia mazoezi sentensi moja thabiti kwa hali hii: rafiki anaendelea kukukatiza. Anza na \"Mimi\" — kwa mfano, \"Sipendi kukatizwa. Tafadhali niache nimalize.\"",
          quiz: {
            q: "Jibu lipi ni thabiti?",
            options: [
              "Kunyamaza na kuumia ndani",
              "\"Hapana asante, nataka kubaki darasani. Tunaweza kukutana baada ya shule.\"",
              "\"Niache! Wewe huleta matatizo kila wakati!\"",
              "Kukubali kila kitu ili kuepuka mgogoro"
            ],
            answer: 1
          },
          takeaway: "Kuwa wazi lakini mwenye heshima — sauti yako inastahili kusikika.",
          related: ["active-listening", "peer-pressure"]
        },
        {
          id: "active-listening",
          title: "Usikilizaji makini",
          intro: "Kusikia ni jambo la kawaida — hutokea lenyewe. Kusikiliza ni tendo — linahitaji umakini, utulivu, na kujali.",
          key: "Usikilizaji makini ni kubaki umezingatia kikamilifu mtu anapoongea: zingatia, mtazame machoni, usimkatize, uliza maswali, na onyesha huruma. Watu huhisi hasira kidogo na thamani zaidi wanaposikilizwa.",
          example: "Mary anamweleza Wanjiru tatizo la nyumbani. Wanjiru anaweka simu mbali, anamtazama, na kuuliza: \"Hilo lilikufanya uhisije?\" Baadaye Mary anasema mazungumzo hayo yalimsaidia kuliko ushauri wowote.",
          reflection: "Unapoongea, unajuaje kama mtu anakusikiliza kweli? Unahisije asipokusikiliza?",
          activity: "Leo, katika mazungumzo mamoja, fanyia mazoezi kusikiliza bila kukatiza hata mara moja. Kisha uliza swali moja la kujali.",
          quiz: {
            q: "Kipi kati ya hivi ni sehemu ya usikilizaji makini?",
            options: [
              "Kupanga jibu lako wakati mwingine anaongea",
              "Kuangalia simu yako",
              "Kuzingatia kikamilifu na kuuliza maswali",
              "Kumalizia sentensi za mwingine"
            ],
            answer: 2
          },
          takeaway: "Kusikiliza vizuri ni mojawapo ya matendo ya wema zaidi unayoweza kufanya.",
          related: ["communication-basics", "empathy"]
        },
        {
          id: "empathy",
          title: "Huruma",
          intro: "Huruma ni uwezo wa kuelewa na kushiriki hisia za mtu mwingine — kuona hali kupitia macho yake.",
          key: "Huruma haimaanishi kukubaliana na kila kitu. Inamaanisha kujaribu kuelewa kabla ya kuhukumu. Hujenga uaminifu na kuimarisha mahusiano.",
          example: "Mwanafunzi mwenzake anamfokea Otieno bila sababu wazi. Badala ya kufoka naye, Otieno anakumbuka mama wa kijana huyo ni mgonjwa. Baadaye anauliza kwa upole: \"Uko sawa?\" — na kijana anaomba msamaha.",
          reflection: "Fikiria mtu aliyekuudhi hivi karibuni. Huenda kulikuwa na nini katika maisha yake ambacho hukukiona?",
          activity: "Watazame watu wanaokuzunguka leo. Jaribu kutaja wanachoweza kuwa wanahisi kutokana na sura na lugha ya mwili — bila kuhukumu.",
          quiz: {
            q: "Huruma ni nini?",
            options: [
              "Kumwonea mtu huruma kwa mbali",
              "Kujaribu kuelewa mtu mwingine anahisi nini, kwa mtazamo wake",
              "Kukubaliana na kila kitu wengine wanasema",
              "Kuwaambia watu wanapaswa kuhisi nini"
            ],
            answer: 1
          },
          takeaway: "Kabla ya kuhukumu, jiulize: huenda anapitia nini?",
          related: ["active-listening", "perspective-taking"]
        },
        {
          id: "teamwork",
          title: "Mahusiano yenye afya na kazi ya pamoja",
          intro: "Katika mahusiano yenye afya watu huhisi kuthaminiwa, kuheshimiwa, na kuungwa mkono. Timu zenye afya hufanya kazi vivyo hivyo — kila mtu ni muhimu.",
          key: "Mahusiano yenye afya hujengwa juu ya uaminifu, heshima kwa wote, mawasiliano wazi, na msaada. Yasiyo na afya huonyesha dharau, udhibiti, migogoro isiyoisha, au hofu. Mipaka — vikomo tunavyoweka ili tuhisi salama na kuheshimiwa — hulinda kila uhusiano.",
          example: "Rafiki wa Achieng anasoma shajara yake bila ruhusa. Achieng anasema: \"Tafadhali usipekue vitu vyangu — huo ni mpaka wangu.\" Rafiki wa kweli husikiliza na kuomba msamaha.",
          reflection: "Fikiria urafiki wako wa karibu. Unahisi kuthaminiwa, kuheshimiwa, na kuungwa mkono? Marafiki zako wanahisi vivyo hivyo nawe?",
          activity: "Andika mpaka mmoja unaokujali (kwa mfano: \"Nahitaji muda wa kusoma jioni\") na ufanyie mazoezi kuusema kwa upole na uwazi.",
          quiz: {
            q: "Ipi ni ishara ya uhusiano wenye afya?",
            options: [
              "Mtu mmoja anadhibiti maamuzi ya mwingine",
              "Dhihaka na majina mabaya kama \"utani\"",
              "Uaminifu, heshima, na msaada kwa pande zote",
              "Kuogopa kusema hapana"
            ],
            answer: 2
          },
          takeaway: "Unastahili mahusiano ambapo unahisi salama, unathaminiwa, na uko huru kuwa wewe.",
          related: ["empathy", "understanding-conflict"]
        }
      ]
    },

    /* ================= NGUZO 3 — NINACHUKUA HATUA ================= */
    {
      id: "take-action", emoji: "🎯", color: "green",
      title: "Ninachukua Hatua",
      blurb: "Kugeuza ndoto kuwa vitendo kupitia mipango, uvumilivu, na uwajibikaji binafsi.",
      outcome: "Nachukua hatua kufikia malengo yangu.",
      lessons: [
        {
          id: "goal-setting",
          title: "Kuweka malengo",
          intro: "Malengo ni mambo tunayotaka kufikia. Hutupa mwelekeo, hutusaidia kuzingatia, na hutupa motisha ya kuendelea hata tunapokutana na changamoto.",
          key: "Kuwa wazi kuhusu lengo lako, jua kwa nini linakujali, panga hatua, tarajia vikwazo, na weka tarehe ya mwisho. \"Nataka kupandisha alama yangu ya hisabati kutoka C hadi B kufikia mwisho wa muhula\" ni bora kuliko \"Nataka kufanya vizuri shuleni.\"",
          example: "Chebet anataka kuwa muuguzi. Lengo lake la muda mfupi: kufaulu mitihani ya sayansi muhula huu. Mpango wake: kusoma maktabani kila alasiri na kumuuliza mwalimu anapokwama.",
          reflection: "Lengo lako moja la miezi sita ijayo ni lipi — na moja la miaka mitano ijayo? Kwa nini yanakujali?",
          activity: "Andika lengo moja wazi kwa mtindo huu: \"Nataka [nini] kufikia [lini], kwa sababu [kwa nini]. Hatua yangu ya kwanza ni [hatua].\"",
          quiz: {
            q: "Lengo lipi liko wazi zaidi?",
            options: [
              "\"Nataka kufanya vizuri shuleni.\"",
              "\"Nataka kufanikiwa siku moja.\"",
              "\"Nataka kupandisha alama yangu ya hisabati kutoka C hadi B kufikia mwisho wa muhula.\"",
              "\"Nitajitahidi zaidi.\""
            ],
            answer: 2
          },
          takeaway: "Lengo lenye mpango na tarehe ya mwisho huwa safari unayoweza kuanza leo.",
          related: ["time-management", "motivation"]
        },
        {
          id: "time-management",
          title: "Usimamizi wa muda",
          intro: "Usimamizi wa muda ni kupanga jinsi unavyotumia muda wako ili ukamilishe mambo muhimu na kufikia malengo yako. Muda ni rasilimali yenye kikomo — umiliki!",
          key: "Panga siku yako, fanya kazi muhimu zaidi kwanza, gawa kazi kubwa katika hatua ndogo, zingatia jambo moja kwa wakati, epuka vishawishi, tumia vikumbusho, pumzika mara kwa mara, na lala vya kutosha.",
          example: "Peter ana kazi ya nyumbani ya kesho lakini anaendelea kutazama video kwenye simu. Anaweka simu chumba kingine, anamaliza kazi yake kwa saa moja, na bado ana muda wa kupumzika — bila hatia.",
          reflection: "\"Wezi wa muda\" wako wakubwa ni wapi — kutuma meseji, soga zisizoisha, mitandao ya kijamii, TV? Ungefanya nini tofauti wiki hii?",
          activity: "Usiku wa leo, andika orodha ya kazi za kesho ukianza na kazi tatu muhimu zaidi. Weka alama unapozimaliza.",
          quiz: {
            q: "Hatua ipi bora ya kwanza kazi inapoonekana kubwa mno?",
            options: [
              "Kusubiri hadi ujisikie tayari",
              "Kuigawa katika hatua ndogo na kuanza na moja",
              "Kufanya mambo mengine mengi kwa wakati mmoja",
              "Kumwomba mtu mwingine aifanye"
            ],
            answer: 1
          },
          takeaway: "Huwezi kutengeneza muda zaidi — lakini unaweza kuamua muda wako ni wa nini.",
          related: ["goal-setting", "beat-procrastination"]
        },
        {
          id: "beat-procrastination",
          title: "Kushinda uchelewaji",
          intro: "Uchelewaji (kuahirisha) ni kusogeza mbele kazi, maamuzi, au shughuli. Ni tabia inayojifunzwa — kadiri unavyoifanya, ndivyo inavyozidi kuwa mbaya.",
          key: "Watu huahirisha kwa hofu ya kushindwa, kutaka ukamilifu, vishawishi, au kuhisi kulemewa. Ishinde kwa kuweka malengo ya kila siku, kugawa kazi katika hatua ndogo, kuanza na kazi ya haraka zaidi, na kuondoa vishawishi.",
          example: "\"Nitafanya kesho,\" Sifa aliendelea kusema kuhusu insha yake. Usiku wa kabla ya mwisho alipatwa na wasiwasi mkubwa. Safari iliyofuata, aliandika utangulizi tu siku ya kwanza — na kuanza kulifanya lililobaki kuwa rahisi.",
          reflection: "Ni kazi gani moja umekuwa ukiahirisha? Faida ya kuimaliza ingekuwa nini?",
          activity: "Chagua kazi moja uliyoahirisha. Andika hatua tatu ndogo zaidi za kuikamilisha — na fanya hatua ya kwanza leo.",
          quiz: {
            q: "Kipi kati ya hivi ni dalili ya uchelewaji?",
            options: [
              "\"Nitaanza na sehemu ngumu zaidi sasa.\"",
              "\"Huu si wakati mzuri — nitafanya kesho.\"",
              "\"Ngoja niondoe vishawishi kwanza.\"",
              "\"Nitaigawa hii katika hatua ndogo.\""
            ],
            answer: 1
          },
          takeaway: "Kuanza ni hatua ngumu zaidi — ifanye ndogo kiasi cha kuichukua leo.",
          related: ["time-management", "motivation"]
        },
        {
          id: "motivation",
          title: "Motisha na uvumilivu",
          intro: "Motisha hukuanzisha; uvumilivu hukuendeleza. Kila lengo linalofaa kufikiwa lina nyakati unazotaka kukata tamaa.",
          key: "Fuatilia maendeleo yako, kuwa tayari kubadilika njia inapokuwa na mashimo, tafuta msaada pale unachofanya hakifanyi kazi, na baki na matumaini. Usikate tamaa ikichukua muda mrefu kuliko ulivyotarajia.",
          example: "Kiprop alifeli mtihani wake wa kwanza wa udereva. Badala ya kuacha, aliuliza nini kilienda vibaya, akafanyia mazoezi sehemu dhaifu, na akafaulu mara ya pili. Kikwazo kikawa somo.",
          reflection: "Fikiria jambo gumu ambalo hukukata tamaa nalo. Nini kilikuendeleza?",
          activity: "Andika lengo lako kwenye kadi. Chini yake, andika: \"Litakapokuwa gumu, nitakumbuka...\" na umalize sentensi.",
          quiz: {
            q: "Mpango wako haufanyi kazi. Uvumilivu unaonekanaje?",
            options: [
              "Kukata tamaa — haikukusudiwa kuwa",
              "Kufanya kitu kile kile na kutumaini",
              "Kurekebisha mpango, kutafuta msaada, na kuendelea",
              "Kuwalaumu watu wengine"
            ],
            answer: 2
          },
          takeaway: "Unapoanzia hakuamui unapomalizia.",
          related: ["goal-setting", "resilience"]
        }
      ]
    },

    /* ================= NGUZO 4 — NINACHAGUA KWA BUSARA ================= */
    {
      id: "choose-wisely", emoji: "🧭", color: "blue",
      title: "Ninachagua kwa Busara",
      blurb: "Kufanya maamuzi sahihi na kutatua matatizo kwa kujiamini.",
      outcome: "Nafanya maamuzi sahihi yanayolinda ustawi wangu na maisha yangu ya baadaye.",
      lessons: [
        {
          id: "decision-making",
          title: "Kufanya maamuzi",
          intro: "Kufanya maamuzi ni mchakato wa kuchagua chaguo bora kati ya njia kadhaa. Uhuru zaidi huja na uwajibikaji mkubwa zaidi.",
          key: "Kufanya maamuzi mazuri ni kufikiria madhara, kuzingatia maadili yako, na kuwajibika kwa matendo yako — badala ya kutenda kwa msukumo wa haraka.",
          example: "Kwenye sherehe, dereva wa Musa amekunywa pombe. Musa anakumbuka kanuni yake — kamwe asipande gari la dereva mlevi — na anampigia dada yake mkubwa badala yake, ingawa inamwaibisha.",
          reflection: "Unakabiliwa na maamuzi gani sasa hivi? Lipi ni muhimu zaidi kwa maisha yako ya baadaye?",
          activity: "Kwa uamuzi mmoja halisi unaoukabili, orodhesha njia zako na uandike faida moja na hasara moja kwa kila njia.",
          quiz: {
            q: "Kufanya maamuzi mazuri kunajumuisha nini?",
            options: [
              "Kuchagua kile marafiki zako wanachagua",
              "Kuamua haraka iwezekanavyo",
              "Kufikiria madhara na maadili yako",
              "Kuepuka maamuzi yote"
            ],
            answer: 2
          },
          takeaway: "Maamuzi yako yana nguvu — yatumie kwa makusudi.",
          related: ["consequences", "critical-thinking"]
        },
        {
          id: "critical-thinking",
          title: "Fikra makini",
          intro: "Fikra makini ni kuchunguza taarifa kwa umakini kabla ya kuamini au kutenda — kuuliza: Je, hii ni kweli? Nani anasema? Nini kinakosekana?",
          key: "Marafiki, hisia, mitandao ya kijamii, na shinikizo la pesa vyote huathiri maamuzi yetu. Fikra makini hukusaidia kutambua ushawishi huo na kufikiri mwenyewe.",
          example: "Chapisho linadai mtu maarufu alisema jambo la kushtua. Kabla ya kushiriki, Nyokabi anaangalia vyanzo vingine — nukuu ilikuwa ya kubuni. Anajiepusha kueneza uongo.",
          reflection: "Fikiria kitu cha mwisho ulichoamini kwa sababu \"kila mtu\" alisema. Ulikichunguza mwenyewe?",
          activity: "Chukua ujumbe au chapisho moja ulioona leo na uulize maswali matatu: Nani aliitengeneza? Kwa nini? Ushahidi gani unaiunga mkono?",
          quiz: {
            q: "Jibu la fikra makini kwa dai la kushtua mtandaoni ni lipi?",
            options: [
              "Kulishiriki haraka kabla ya wengine",
              "Kuliamini kama watu wengi wamelipenda",
              "Kuangalia chanzo na kutafuta ushahidi kwanza",
              "Kupuuza taarifa zote milele"
            ],
            answer: 2
          },
          takeaway: "Usimeze taarifa tu — itafune kwanza.",
          related: ["decision-making", "peer-pressure"]
        },
        {
          id: "problem-solving",
          title: "Kutatua matatizo hatua kwa hatua",
          intro: "Matatizo ni sehemu ya kawaida ya maisha. Utatuzi wa matatizo ni uwezo wa kutambua changamoto, kufikiria suluhisho, na kuchagua njia bora ya kujibu.",
          key: "Tumia hatua 7: tambua tatizo, fikiria njia zote, pima madhara ya kila njia, chagua njia bora, tenda, fuatilia matokeo, na tafakari ulichojifunza.",
          example: "Wafula anaendelea kufeli majaribio ya hisabati. Badala ya kuamua \"mimi ni mbaya tu kwa hisabati,\" anatambua tatizo halisi (hafanyi mazoezi), anajaribu suluhisho (maswali matatu ya mazoezi kila siku), na alama zake zinapanda taratibu.",
          reflection: "Fikiria tatizo ulilolitatua vizuri. Ulitumia hatua zipi kati ya 7 bila kujua?",
          activity: "Chukua tatizo moja la sasa na ulipitishe kwenye hatua nne za kwanza kwenye karatasi: tatizo, njia, madhara, chaguo.",
          quiz: {
            q: "Hatua ya KWANZA ya utatuzi mzuri wa matatizo ni ipi?",
            options: [
              "Kutenda mara moja",
              "Kutambua tatizo halisi",
              "Kumlaumu mtu",
              "Kuchagua njia rahisi zaidi"
            ],
            answer: 1
          },
          takeaway: "Rudi nyuma, tathmini, pima njia zako — kisha tenda. Huo ndio udhibiti.",
          related: ["decision-making", "consequences"]
        },
        {
          id: "consequences",
          title: "Kupima madhara",
          intro: "Kila chaguo lina madhara — kwako, kwa familia yako, na kwa jamii yako. Mengine huonekana mara moja; mengine hujitokeza baadaye sana.",
          key: "Kabla ya kuamua, andika faida na hasara za kila njia. Chaguo linalopendeza leo linaweza kukugharimu kesho — na chaguo gumu leo linaweza kulinda maisha yako ya baadaye.",
          example: "Mtu anampa Dennis shilingi 3,000 apeleke kifurushi cha kutatanisha. Pesa ya haraka sasa — lakini Dennis anapima hatari: matatizo na polisi, hatari, uaminifu wa familia yake. Anakataa.",
          reflection: "Fikiria chaguo unalojutia. Madhara yapi hukuyazingatia wakati huo?",
          activity: "Chora jedwali la safu mbili — Faida na Hasara — na ulijaze kwa uamuzi unaoukabili wiki hii.",
          quiz: {
            q: "Kwa nini tupime madhara kabla ya kuamua?",
            options: [
              "Ili kufanya maamuzi kuwa ya polepole bila sababu",
              "Kwa sababu machaguo yanayopendeza sasa yanaweza kukugharimu baadaye",
              "Ili uweze kuwalaumu wengine ikishindikana",
              "Kwa sababu njia zote huwa sawa kila wakati"
            ],
            answer: 1
          },
          takeaway: "Fikiria zaidi ya leo — nafsi yako ya kesho inakutegemea.",
          related: ["problem-solving", "substance-abuse"]
        }
      ]
    },

    /* ================= NGUZO 5 — NINAJENGA MADARAJA ================= */
    {
      id: "build-bridges", emoji: "🤝", color: "purple",
      title: "Ninajenga Madaraja",
      blurb: "Kushughulikia kutokubaliana kwa njia ya kujenga na kuimarisha mahusiano.",
      outcome: "Napitia migogoro kwa heshima na uelewa.",
      lessons: [
        {
          id: "understanding-conflict",
          title: "Kuelewa migogoro",
          intro: "Mgogoro ni kutokubaliana kati ya watu kunakosababishwa na malengo, mahitaji, maadili, au maoni yasiyolingana. Ni sehemu ya kawaida ya maisha.",
          key: "Mgogoro ni kama moto: unaweza kupika na kuleta joto, lakini unaweza kudhuru ukitoka nje ya udhibiti. Ukishughulikiwa vizuri, mgogoro hutusaidia kuelewana na unaweza hata kuimarisha mahusiano.",
          example: "Wachezaji wenzawili wanabishana nani acheze mshambuliaji. Ukishughulikiwa vibaya, timu inagawanyika pande mbili. Ukishughulikiwa vizuri — wanazungumza, wanapokezana, na timu inakuwa imara zaidi.",
          reflection: "Maneno gani yanakujia unaposikia neno \"mgogoro\"? Unaweza kufikiria mgogoro uliomalizika na urafiki imara zaidi?",
          activity: "Kumbuka mgogoro mmoja mdogo wa wiki hii. Andika kila upande ulihitaji nini hasa (si walichosema — walichohitaji).",
          quiz: {
            q: "Kauli ipi kuhusu migogoro ni kweli?",
            options: [
              "Mgogoro daima humaanisha uhusiano umevunjika",
              "Mgogoro ni wa kawaida — muhimu ni jinsi unavyoushughulikia",
              "Jibu bora daima ni kupigana",
              "Watu wabaya tu ndio huwa na migogoro"
            ],
            answer: 1
          },
          takeaway: "Mgogoro unaoshughulikiwa mapema na kwa heshima huwa uelewa.",
          related: ["negotiation", "teamwork"]
        },
        {
          id: "negotiation",
          title: "Stadi za majadiliano",
          intro: "Kujadili mgogoro hakumaanishi kupigana wala kukata tamaa — kunamaanisha kujenga madaraja kuelekea suluhisho la amani.",
          key: "Tumia kauli za \"Mimi\" (\"Nahisi kuvunjika moyo unapo...\"), sikiliza kwa makini, omba ufafanuzi, pokezaneni zamu, zingatia tatizo (si mtu), na lenga ushindi kwa wote — ambapo pande zote zinapata zinachohitaji hasa.",
          example: "Brian amekasirika kwamba Kevin hakuja kwenye kipindi chao cha kusoma. Badala ya \"Wewe ni mbinafsi sana!\", anajaribu: \"Nilihisi kuachwa uliponikosa, kwa sababu nilikuwa nakutegemea.\" Kevin anaomba msamaha — na kueleza kilichotokea.",
          reflection: "Fikiria ubishi wako wa mwisho. Ungesikikaje kama ungebadilisha \"Wewe daima...\" kuwa \"Nahisi... unapo... kwa sababu...\"?",
          activity: "Andika upya hizi kama kauli za \"Mimi\": \"Hunisikilizi kamwe!\" na \"Unaniacha nje kila wakati!\"",
          quiz: {
            q: "Ipi ni kauli ya \"Mimi\"?",
            options: [
              "\"Hunisikilizi kamwe!\"",
              "\"Wewe ndiye tatizo hapa.\"",
              "\"Nahisi kupuuzwa ninapokatizwa, kwa sababu mawazo yangu pia ni muhimu.\"",
              "\"Kila mtu anajua umekosea.\""
            ],
            answer: 2
          },
          takeaway: "Shambulia tatizo, kamwe si mtu.",
          related: ["understanding-conflict", "communication-basics"]
        },
        {
          id: "perspective-taking",
          title: "Kuona upande wa pili",
          intro: "Kuona mtazamo wa mwingine ni kuingia katika viatu vya mtu mwingine — kujaribu kuona hali kama anavyoiona yeye.",
          key: "Migogoro mingi hukua kwa sababu kila upande una uhakika uko sahihi kabisa. Kusimama na kuuliza \"Hii inaonekanaje kwa upande wake?\" hupoza mgogoro na mara nyingi hufunua suluhisho.",
          example: "Familia ya Owino ilipanda mwembe; matawi yake sasa yanaingia kwenye shamba la familia ya Ontingana — wote wanadai maembe. Msuluhishi anaomba kila familia ieleze mtazamo wa nyingine. Ghafla, kugawana matunda hakusikiki tena kuwa jambo lisilowezekana.",
          reflection: "Katika kutokubaliana kwako kwa sasa au kwa karibuni — unaweza kueleza kwa uaminifu mtazamo wa mtu mwingine?",
          activity: "Na rafiki, kila mmoja wenu atetee upande wa MWENZAKE katika kutokubaliana kudogo kwa dakika moja. Mlijifunza nini?",
          quiz: {
            q: "Kuona mtazamo wa mwingine ni nini?",
            options: [
              "Kukubaliana na mwenye sauti kubwa zaidi",
              "Kujaribu kuona hali kupitia macho ya mtu mwingine",
              "Kuachana na maoni yako",
              "Kusubiri mwingine aombe msamaha kwanza"
            ],
            answer: 1
          },
          takeaway: "Kuelewa upande wa pili hakukudhoofishi — kunakufanya mwenye busara zaidi.",
          related: ["empathy", "negotiation"]
        },
        {
          id: "cooperation",
          title: "Kudhibiti hasira na kushirikiana",
          intro: "Hasira ni hisia ya kawaida — inakwambia kitu kinaonekana si haki au si sawa. Lakini maneno yaliyosemwa kwa hasira huacha makovu, kama mashimo ya misumari kwenye ua.",
          key: "Tambua hasira mapema (moyo kwenda kasi, ngumi kukazwa, joto). Ikubali: \"Hii inanikasirisha sana.\" Chukua muda wa kupumzika, tulia, kisha zungumza. Epuka kutenda ukiwa na hasira — na epuka kubishana na mtu mwenye hasira.",
          example: "Mvulana aligonga msumari kwenye ua kila alipokasirika. Alipojifunza kujizuia, misumari ilikoma — lakini baba yake alimwonyesha mashimo yaliyobaki: \"Ua hautakuwa kama zamani.\"",
          reflection: "Umewahi kusema au kufanya jambo kwa hasira ambalo ulijutia baadaye? Ungefanya nini tofauti wakati ujao?",
          activity: "Tengeneza \"mpango wako wa kutulia\": mambo matatu utakayofanya kabla ya kujibu unapohisi hasira kali.",
          quiz: {
            q: "Unahisi hasira kali ikipanda wakati wa ubishi. Hatua ipi ya busara zaidi?",
            options: [
              "Kusema kila unachohisi mara moja",
              "Kuchukua muda wa kupumzika na kuzungumza baada ya kutulia",
              "Kupaza sauti zaidi ili ushinde",
              "Kutaja makosa ya zamani ya mtu"
            ],
            answer: 1
          },
          takeaway: "Unaweza kuhisi hasira na bado ukachagua matendo yako kwa busara.",
          related: ["understanding-conflict", "resilience"]
        }
      ]
    },

    /* ================= NGUZO 6 — NINALINDA KESHO YANGU ================= */
    {
      id: "protect-future", emoji: "🛡️", color: "coral",
      title: "Ninalinda Kesho Yangu",
      blurb: "Kufanya maamuzi yenye afya yanayolinda ustawi wangu na ndoto zangu za baadaye.",
      outcome: "Nafanya maamuzi yenye afya yanayolinda ustawi wangu na kesho yangu.",
      lessons: [
        {
          id: "peer-pressure",
          title: "Shinikizo la marafiki na stadi za kukataa",
          intro: "Shinikizo la marafiki ni ushawishi kutoka kwa marafiki na rika. Linaweza kuwa chanya (kukuhimiza kusoma) au hasi (kukusukuma kunywa, kuvuta, au kuruka masomo).",
          key: "Unaweza kukataa bila kujipoteza: sema HAPANA kwa msisitizo na urudie, tumia lugha ya mwili imara, toa sababu, pendekeza mbadala, au ondoka. Marafiki wa kweli huheshimu maamuzi yako.",
          example: "\"Jaribu mara moja tu, usiwe mtoto,\" wavulana wanamwambia Simiyu, wakimpa sigara. Anawatazama machoni: \"Hapana asante — nimeona uvutaji ulivyomfanya mjomba wangu. Twende tukacheze mpira badala yake.\"",
          reflection: "Ni wapi katika maisha yako unahisi shinikizo la kufanya mambo yasiyolingana na maadili yako? Ungeweza kusema nini wakati ujao?",
          activity: "Fanyia mazoezi kusema \"Hapana\" kwa njia tatu kwa mwaliko mmoja wa hatari: (1) Hapana + sababu, (2) Hapana + mbadala, (3) Hapana + kuondoka.",
          quiz: {
            q: "Ipi ni stadi bora ya kukataa?",
            options: [
              "Kusema \"labda baadaye\" ili waache kuuliza",
              "Kusema hapana kwa msisitizo, kutoa sababu, na kupendekeza mbadala",
              "Kukubali mara moja ili kudumisha amani",
              "Kucheka na kutumaini watasahau"
            ],
            answer: 1
          },
          takeaway: "Kusema hapana kwa jambo baya ni kusema ndiyo kwa maisha yako ya baadaye.",
          related: ["substance-abuse", "communication-basics"]
        },
        {
          id: "substance-abuse",
          title: "Dawa za kulevya na uraibu: ukweli",
          intro: "Dawa za kulevya ni vitu vinavyobadilisha jinsi mwili na akili yako vinavyofanya kazi. Hazitabiriki na ni hatari hasa kwa vijana, ambao ubongo wao bado unakua.",
          key: "Uraibu ni pale mwili na ubongo wako vinapozoea dawa kiasi cha kuhisi huwezi kuishi bila hiyo — na vijana wanaweza kupata uraibu haraka sana. \"Asili,\" \"halali,\" au \"kila mtu anafanya\" haimaanishi salama. Kupona kunawezekana kwa msaada, lakini kinga ni bora zaidi.",
          example: "David alianza kunusa gundi na wavulana wakubwa ili kusahau matatizo yake. Ndani ya miezi michache alipoteza hamu ya shule na kuiba kwa wazazi wake. Kwa ushauri nasaha na msaada wa familia alipona — lakini anasema: \"Laiti nisingeanza kamwe.\"",
          reflection: "Unadhani kwa nini baadhi ya vijana huanza kutumia dawa za kulevya — na nini kinawalinda wasioanza?",
          activity: "Uongo au ukweli? Jadilini: \"Bangi ni ya asili, kwa hiyo ni salama.\" \"Pombe hukusaidia kusahau matatizo.\" \"Watu dhaifu tu ndio hupata uraibu.\" (Zote ni uongo.)",
          quiz: {
            q: "Kauli ipi ni ya KWELI?",
            options: [
              "Dawa halali au za asili ni salama",
              "Uraibu huwapata watu dhaifu tu",
              "Vijana wanaweza kupata uraibu haraka sana kwa sababu ubongo wao bado unakua",
              "Unaweza kudhibiti kiasi unachotumia kila wakati"
            ],
            answer: 2
          },
          takeaway: "Ubongo wako unaokua ndio mali yako kubwa zaidi — ulinde.",
          related: ["peer-pressure", "consequences"]
        },
        {
          id: "resilience",
          title: "Ustahimilivu",
          intro: "Ustahimilivu ni uwezo wa kuinuka baada ya vikwazo, kuzoea mabadiliko, na kuendelea maisha yanapokuwa magumu.",
          key: "Ustahimilivu hujengwa, hauzaliwi nao: mahusiano yenye msaada, michezo na malengo, kujitunza, kuomba msaada, na kukumbuka kwamba kushindwa ni mwalimu — si mwisho wa hadithi.",
          example: "Familia ya Akinyi ilipohamia mji mwingine katikati ya mwaka, alipoteza marafiki zake na alama zake zikashuka. Alijiunga na klabu ya maigizo, akapata marafiki wapya, akaomba msaada kwa walimu — na akamaliza mwaka akiwa imara kuliko alivyoanza.",
          reflection: "Umenusurika asilimia 100 ya siku zako ngumu zaidi hadi sasa. Nini kilikusaidia kupita ile ngumu zaidi?",
          activity: "Chora \"ngao yako ya ustahimilivu\": mambo manne yanayokufanya imara — mtu, shughuli, uwezo, na tumaini.",
          quiz: {
            q: "Ustahimilivu ni nini?",
            options: [
              "Kutokuwa na matatizo kamwe",
              "Kuficha hisia zako ili mtu asijue",
              "Kuinuka baada ya vikwazo na kuendelea kuelekea malengo yako",
              "Kukataa kabisa kuomba msaada"
            ],
            answer: 2
          },
          takeaway: "Kuanguka ni ubinadamu. Kuinuka tena ni ustahimilivu.",
          related: ["motivation", "healthy-lifestyle"]
        },
        {
          id: "healthy-lifestyle",
          title: "Maisha yenye afya",
          intro: "Mwili na akili yako ni gari la kila ndoto uliyo nayo. Mazoea yenye afya — usingizi, chakula, mazoezi, na mapumziko — huendesha kila kitu kingine.",
          key: "Kulinda maisha yako ya baadaye kunajumuisha maamuzi ya kila siku: lala vya kutosha, kula kinachokuimarisha, fanya mazoezi, punguza muda wa skrini, na tunza afya yako ya akili. Mazoea madogo, yakirudiwa kila siku, huunda unavyokuwa.",
          example: "Tumaini alikuwa akisinzia darasani baada ya usiku wa manane kwenye simu. Aliweka kanuni — simu izimwe saa tatu usiku — na ndani ya wiki mbili nguvu zake, hisia zake, na alama zake zote ziliboreka.",
          reflection: "Zoea lipi la kila siku linajenga maisha yako ya baadaye — na lipi linafanya kazi kimyakimya dhidi yako?",
          activity: "Chagua zoea moja dogo lenye afya kwa wiki hii (kulala kufikia saa nne usiku, matembezi ya kila siku, saa moja pungufu ya kuskrolu). Lifuatilie kwa siku saba.",
          quiz: {
            q: "Chaguo lipi linasaidia zaidi mwili na akili?",
            options: [
              "Kuruka usingizi ili ufanye zaidi",
              "Usingizi wa kawaida, chakula chenye afya, na mazoezi",
              "Vinywaji vya kuongeza nguvu badala ya kupumzika",
              "Kuficha wasiwasi wako"
            ],
            answer: 1
          },
          takeaway: "Tunza mwili wako — unaishi maisha yako yote ya baadaye ndani yake.",
          related: ["resilience", "time-management"]
        }
      ]
    }
  ] }
};
