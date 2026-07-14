/* ==========================================================================
   I MATTER — SESSION PLANS (public "Session Plans" tab)
   --------------------------------------------------------------------------
   Safe to edit. These are the full life-skills session plans, written to be
   easy to read and follow for teenagers as well as facilitators.

   STRUCTURE
   Each plan has: id, emoji, color (a c-* palette name), title, duration,
   tagline, and an array of `sections`. Each section has a title, an optional
   `time`, and an array of `blocks`.

   BLOCK TYPES (each block is one object with ONE of these keys):
     { p: "paragraph text" }
     { h: "sub-heading" }
     { ul: [ item, ... ] }            bullet list
     { ol: [ item, ... ] }            numbered list
     { activity: "Title", time: "5 min", body: [ ...blocks ] }
     { scenario: "text" | ["p1","p2"], title: "Story time" }
     { dialogue: [ { who: "Name", line: "..." }, ... ], title: "..." }
     { table: { headers: [...], rows: [ [...], ... ] } }
     { note: "highlighted key point", emoji: "💡" }
     { pledge: "text said together" }

   A list item is a string, OR { b: "Bold label", t: "rest of the text" },
   optionally with { sub: [ item, ... ] } for a nested list.
   ========================================================================== */

window.IM_SESSION_PLANS = [

  /* ====================================================================
     1. SELF-AWARENESS AND BUILDING CONFIDENCE
     ==================================================================== */
  {
    id: "self-awareness-confidence",
    emoji: "🌟",
    color: "yellow",
    title: "Self-Awareness & Building Confidence",
    duration: "90 min",
    tagline: "Get to know the real you, grow your confidence, and quiet self-doubt.",
    sections: [
      {
        title: "Introduction",
        time: "10 min",
        blocks: [
          { h: "Welcome & icebreaker (7 min)" },
          { ul: [
            "Facilitators introduce themselves, explain the organisation they represent, and share the topics for the session.",
            "Start with an icebreaker so the group feels comfortable."
          ] },
          { activity: "Two truths and a lie", body: [
            { p: "Think of three statements about yourself — two true and one false. Invite 3 volunteers to share their statements while the group guesses which one is the lie." },
            { p: "Tip: the facilitator can share their own statements first to get things started." }
          ] },
          { note: "This encourages self-expression and helps start the conversation.", emoji: "🎯" },
          { h: "Ground rules (2 min)" },
          { p: "Set rules together to create a safe and respectful space. Ask participants to suggest ground rules first, then add any that were missed." },
          { ul: [
            "Listen when someone is speaking.",
            "Let everyone share their thoughts.",
            "What is shared in the group stays in the group.",
            "Respect different opinions and experiences.",
            "Everyone participates."
          ] },
          { h: "Purpose of the session (1 min)" },
          { p: "Today you'll learn how knowing yourself better (self-awareness) can help you build confidence and overcome self-doubt." }
        ]
      },
      {
        title: "What is self-awareness?",
        time: "20 min",
        blocks: [
          { note: "Self-awareness is the ability to understand ourselves — our personality, thoughts, feelings, behaviours, strengths, and weaknesses.", emoji: "🧠" },
          { h: "Discussion (5 min)" },
          { p: "Ask the group: What are some things you know about yourself? Encourage answers like hobbies, strengths, things you enjoy, and things you don't like." },
          { activity: "The self-awareness circle", time: "10 min", body: [
            { ul: [
              "Divide the group into smaller teams.",
              "Draw a large circle on manilla paper, divided into five sections: strengths, weaknesses, goals, values, and one adjective to describe yourself.",
              "Each participant fills in the sections (if there is enough time).",
              "Invite one volunteer from each group to share what they wrote."
            ] }
          ] },
          { note: "Purpose: to help you learn more about one another and reflect on your strengths, goals, and areas for growth.", emoji: "🎯" }
        ]
      },
      {
        title: "Building confidence",
        time: "25 min",
        blocks: [
          { note: "Confidence is the belief in our abilities and self-worth — believing in yourself.", emoji: "💪" },
          { h: "Discussion (5 min)" },
          { ul: [
            "Can you think of a time when you felt confident?",
            "What helped you feel that way?"
          ] },
          { p: "Positive self-talk is your inner dialogue — talking to yourself with kindness, compassion, and care. Confidence grows through practice and positive self-talk." },
          { activity: "Positive affirmations", time: "15 min", body: [
            { ul: [
              "Divide the group into smaller teams.",
              "Write down three things you like about yourself — strengths, personality traits, appearance, things you're proud of, or things you've achieved.",
              "Invite one volunteer from each team to share their affirmations."
            ] },
            { h: "Examples" },
            { ul: [
              "\"I am kind.\"",
              "\"I am good at mathematics.\"",
              "\"I take good care of my siblings.\"",
              "\"I am a leader in my class.\"",
              "\"I am smart.\""
            ] }
          ] },
          { note: "Purpose: this builds your confidence and self-esteem, and reminds you of your strengths.", emoji: "🎯" }
        ]
      },
      {
        title: "Overcoming self-doubt",
        time: "20 min",
        blocks: [
          { p: "Self-doubt is the feeling that we're not good enough or capable. It is completely normal. The facilitator can share a personal example of a time they doubted themselves and what helped them get through it." },
          { h: "Discussion (5 min)" },
          { p: "Common causes of self-doubt include comparing yourself to others, fear of failure, negative comments from peers, perfectionism, past failures or disappointments, bullying, and poor grades." },
          { ul: [
            "Have you ever felt unsure about something? What caused it?"
          ] },
          { activity: "From self-doubt to self-belief", time: "10 min", body: [
            { ul: [
              "Divide the group into smaller teams.",
              "Take a paper divided into two columns: label the left \"Self-doubt\" and the right \"Self-belief\".",
              "In the left column, write a situation where you felt self-doubt (public speaking, an exam, trying something new, sharing an opinion in class) and how it made you feel.",
              "In the right column, write what you could tell yourself to overcome it and feel better.",
              "Share your example with the group."
            ] },
            { h: "Example" },
            { p: "Self-doubt: \"I feel self-doubt when I sit an exam. I think I will fail, and I feel nervous and sad.\"" },
            { p: "Self-belief: \"I can try my best. I attended all the classes, so I have the knowledge. I revised at the library, so I am well prepared. Even if I make a mistake, I am still learning and can do better next time.\"" }
          ] },
          { note: "Purpose: practise shifting negative thoughts into positive self-talk. Self-doubt is common, but you can overcome it with self-awareness, a positive mindset, and positive self-talk.", emoji: "🎯" }
        ]
      },
      {
        title: "Personal action plan & closing",
        time: "15 min",
        blocks: [
          { h: "Individual reflection (5 min)" },
          { p: "Reflect on a challenge you are currently facing. Think about one personal strength and one specific action you can take to address that challenge." },
          { h: "Sharing (5 min)" },
          { p: "Invite two or three volunteers to share their reflection with the group." },
          { note: "Summary: remember the importance of self-awareness and positive self-talk.", emoji: "🌟" }
        ]
      }
    ]
  },

  /* ====================================================================
     2. EFFECTIVE COMMUNICATION AND HEALTHY RELATIONSHIPS
     ==================================================================== */
  {
    id: "communication-relationships",
    emoji: "💬",
    color: "teal",
    title: "Effective Communication & Healthy Relationships",
    duration: "70 min",
    tagline: "Listen well, speak up kindly, set boundaries, and build healthy relationships.",
    sections: [
      {
        title: "Introduction",
        time: "10 min",
        blocks: [
          { activity: "Welcome & icebreaker: the memory line", body: [
            { p: "Five volunteers stand in a line. Each person shares two things about themselves — their age and their favourite thing to do. Before sharing their own, each person repeats everything the people before them said. The last person recalls everyone's answers!" },
            { p: "The group can help anyone who gets stuck. Afterwards, ask: What was the most challenging part? Emphasise how important active listening is when we interact with others." }
          ] },
          { note: "Purpose: this builds active listening skills and connection between participants.", emoji: "🎯" },
          { h: "Purpose of the session" },
          { p: "Today you'll practise active listening, learn the basics of effective communication, and recognise the qualities of healthy and unhealthy relationships." }
        ]
      },
      {
        title: "What is communication?",
        time: "20 min",
        blocks: [
          { h: "Verbal and non-verbal communication" },
          { ul: [
            { b: "Verbal:", t: "using words, spoken or written — conversations, speeches, phone calls, emails, texts." },
            { b: "Non-verbal:", t: "signals or gestures that carry meaning without words — facial expressions, body language, eye contact, posture." }
          ] },
          { activity: "Non-verbal charades", body: [
            { p: "Five volunteers each act out a reaction to a scenario using non-verbal communication only — no words, just facial expressions, body language, and gestures. The group tries to guess the scenario." },
            { ol: [
              "You are very excited about a surprise.",
              "You are embarrassed in front of your crush.",
              "You are angry but trying to stay calm.",
              "You are nervous before an important test.",
              "You see your best friend after a long time."
            ] },
            { p: "By reading body language and facial expressions, we can better understand what others feel and respond with empathy and care." }
          ] },
          { h: "Hearing vs listening" },
          { ul: [
            { b: "Hearing", t: "is passive — it happens automatically when sound reaches your ears (you hear classmates talking while studying)." },
            { b: "Listening", t: "is active — it needs attention and concentration (you listen carefully to a friend sharing a challenge so you can give advice)." },
            { b: "Active listening", t: "means staying fully focused, engaged, and empathetic while someone talks:", sub: [
              "Pay full attention.",
              "Make eye contact.",
              "Don't interrupt the speaker.",
              "Ask questions and give feedback.",
              "Show empathy."
            ] }
          ] },
          { h: "Barriers to communication" },
          { ul: [
            { b: "Stress, anxiety, or low self-esteem", t: "— a student too nervous to ask questions in class." },
            { b: "Language and vocabulary or jargon", t: "— using technical terms or sheng others don't understand." },
            { b: "Cultural barriers", t: "— greeting someone with a hug when their culture values personal space." },
            { b: "Strong emotions", t: "— anger can cloud your judgement and block communication." },
            { b: "Assumptions and biases", t: "— judging someone by their appearance instead of listening to them." },
            { b: "Lack of attention", t: "— chatting to a neighbour while the teacher speaks, so you miss the topic." }
          ] }
        ]
      },
      {
        title: "Assertive communication",
        time: "15 min",
        blocks: [
          { note: "Assertive communication is expressing your thoughts, feelings, and needs clearly and confidently, while respecting the rights and opinions of others.", emoji: "🗣️" },
          { p: "It asks you to be direct but respectful (no rude words), and to keep calm body language: confident posture, steady eye contact, and a calm tone of voice." },
          { h: "Three communication styles" },
          { ul: [
            { b: "Passive:", t: "you don't express or stand up for your feelings and needs. Someone keeps taking your seat, but you don't react." },
            { b: "Aggressive:", t: "you express your needs in a way that hurts or disrespects others. When someone takes your seat, you yell and insult them." },
            { b: "Assertive:", t: "you express your needs without disrespecting others. \"I prefer to sit here. Can you please move?\" or \"I don't like being interrupted. Please let me finish before you speak.\"" }
          ] },
          { activity: "Role-play the three styles", body: [
            { p: "Three volunteers act out the same situation using each style. Scenario: \"A friend is pressuring you to skip class and go somewhere else.\"" },
            { ul: [
              { b: "Passive:", t: "\"Ok. I'm coming with you.\"" },
              { b: "Aggressive:", t: "\"Leave me alone! Stop telling me what to do! You are always looking for problems!\"" },
              { b: "Assertive:", t: "\"No, thanks. I want to stay in class because I don't want to miss this lesson. We can spend time together after school.\"" }
            ] }
          ] }
        ]
      },
      {
        title: "Building healthy relationships",
        time: "15 min",
        blocks: [
          { h: "Healthy relationships" },
          { p: "In healthy relationships people feel valued, respected, and supported. Whether with family, friends, or classmates, they help you navigate challenges and bring joy to your life." },
          { ul: [
            { b: "Trust:", t: "keeping promises and being honest with each other." },
            { b: "Mutual respect:", t: "valuing the other person's opinions, feelings, and boundaries." },
            { b: "Communication:", t: "listening well and talking about problems openly, without blaming or yelling." },
            { b: "Support:", t: "being there when things get tough and celebrating each other's successes." }
          ] },
          { h: "Unhealthy relationships" },
          { p: "Here the interactions are harmful, negative, or toxic. They can create emotional, mental, and physical stress that affects your school performance and your future." },
          { ul: [
            { b: "Lack of trust:", t: "doubts and suspicion about each other." },
            { b: "Disrespect:", t: "mocking, name-calling, insulting, or ignoring the other person." },
            { b: "Poor communication:", t: "raising your voice, silent treatment, not listening, rude words." },
            { b: "Control and manipulation:", t: "guilt-tripping, threats, and controlling the other person's actions." },
            { b: "Emotional or physical abuse:", t: "intimidation or actions that harm someone physically or emotionally." },
            { b: "Constant conflict:", t: "endless arguments and fights over small things." },
            { b: "Lack of support:", t: "ignoring or laughing at the other person's needs or concerns." }
          ] }
        ]
      },
      {
        title: "Personal boundaries",
        time: "15 min",
        blocks: [
          { p: "Boundaries are the limits and rules we set in our relationships to feel safe, respected, and comfortable. They tell others what is okay and what is not okay when interacting with us." },
          { note: "Everyone should have personal boundaries!", emoji: "🛑" },
          { ul: [
            { b: "Physical:", t: "\"I don't feel comfortable with you being too close.\"" },
            { b: "Emotional:", t: "\"I don't want to talk about this subject right now.\"" },
            { b: "Time:", t: "\"I need to study this evening. Can we talk tomorrow?\"" },
            { b: "Social:", t: "\"I need some time alone.\"" },
            { b: "Privacy:", t: "\"Please don't read my diary or go through my phone.\"" }
          ] },
          { activity: "Green or Red?", body: [
            { p: "The facilitator reads each scenario. Respond aloud: shout \"Green!\" if the person's boundaries are being respected, or \"Red!\" if they are not." },
            { ul: [
              "A friend asks to borrow your book and waits for your permission. (Green)",
              "A classmate keeps asking you to share answers during a test, even after you said \"No.\" (Red)",
              "A friend reads your diary without permission. (Red)",
              "A friend understands when you say you need time alone and doesn't complain. (Green)",
              "Someone keeps texting you after you said you don't want to talk. (Red)",
              "A friend listens when you say their joke hurt you and apologises. (Green)",
              "A friend keeps trying to convince you to smoke or drink. (Red)",
              "A friend insists, \"If you were a real friend, you would do this for me.\" (Red)"
            ] }
          ] },
          { h: "What to do when someone doesn't respect your boundaries" },
          { ul: [
            "Use assertive communication.",
            "Stay consistent — calmly repeat your boundary.",
            "Don't feel guilty for saying no. Setting boundaries is healthy self-care.",
            "Walk away if necessary.",
            "Talk to a trusted adult."
          ] }
        ]
      }
    ]
  },

  /* ====================================================================
     3. DECISION-MAKING AND PROBLEM-SOLVING
     ==================================================================== */
  {
    id: "decision-making-problem-solving",
    emoji: "🧭",
    color: "blue",
    title: "Decision-Making & Problem-Solving",
    duration: "75 min",
    tagline: "Make smart choices and solve problems step by step, instead of reacting.",
    sections: [
      {
        title: "What is decision-making?",
        time: "10 min",
        blocks: [
          { p: "Adolescence is a time of more freedom and independence — and with that freedom comes greater responsibility. Teenagers face many situations where they must make decisions:" },
          { ul: [
            "How to respond to peer pressure.",
            "Whether or not to try alcohol or drugs.",
            "How to navigate relationships and dating.",
            "How to manage school and career choices.",
            "How to respond to conflict."
          ] },
          { note: "Poor choices can have serious consequences for teenagers, their families, and their communities.", emoji: "⚠️" },
          { p: "Decision-making is the process of choosing the best option among several alternatives. Good decision-making means thinking about the consequences, considering your values, and taking responsibility for your actions." }
        ]
      },
      {
        title: "What is problem-solving?",
        time: "10 min",
        blocks: [
          { p: "Problems are a normal part of life — everyone faces challenges that require them to think and find solutions." },
          { note: "Problem-solving is the ability to recognise a challenge, think about possible solutions, and choose the best way to respond.", emoji: "🧩" },
          { p: "Good problem-solving skills help you manage everyday issues like:" },
          { ul: [
            "Conflict with family and friends.",
            "Peer pressure.",
            "Academic difficulties.",
            "Stress and anxiety."
          ] },
          { p: "Instead of reacting impulsively, you step back, assess the situation, weigh your options, and make a well-thought decision. This makes you more confident, resilient, and in control of your life." }
        ]
      },
      {
        title: "What influences our decisions?",
        time: "5 min",
        blocks: [
          { ul: [
            { b: "Friends and peers:", t: "we may decide things to fit in or be accepted." },
            { b: "Personal values:", t: "they help us tell right from wrong." },
            { b: "Emotions:", t: "anger, fear, sadness, or excitement can lead to impulsive decisions." },
            { b: "Family, culture, tradition, community:", t: "our environment shapes our beliefs and choices." },
            { b: "Social media and the internet:", t: "what we see online can shape our opinions and behaviour." },
            { b: "Difficulties or financial struggles:", t: "the need for money can lead to risky decisions." },
            { b: "Past experiences:", t: "previous mistakes and successes affect how we respond." }
          ] }
        ]
      },
      {
        title: "The 7-step model",
        time: "15 min",
        blocks: [
          { ol: [
            "Identify the problem or decision you need to make.",
            "Consider all the possible options.",
            "Write down the positive and negative consequences of each option.",
            "Choose the best option for you.",
            "Implement the solution or decision.",
            "Monitor your progress and the results.",
            "Reflect on your decision and learn from the experience."
          ] },
          { h: "Example: a peer-pressure scenario" },
          { scenario: "Some of my friends have started smoking bhang. They keep telling me to try it, saying it will help me relax. I don't want to lose my friends, but I'm not sure I should try it." },
          { h: "1. Identify the decision" },
          { p: "Should I listen to my friends and try bhang, or say no and risk losing them?" },
          { h: "2. Consider the options" },
          { ul: [
            "A) Try the drugs.",
            "B) Say no.",
            "C) Find an excuse not to try, but still hang out with them.",
            "D) Talk to one friend in the group and share my concerns.",
            "E) Walk away and find other friends with values similar to mine."
          ] },
          { h: "3. Weigh up each option" },
          { table: {
            headers: ["Option", "Positive", "Negative"],
            rows: [
              ["A – Try the bhang", "Stay in the group; feel accepted", "Risk of addiction; trouble with parents/police; problems in school"],
              ["B – Say no & walk away", "Protect my health; stay focused", "Might lose friends; feel lonely"],
              ["C – Make excuses & stay", "I keep my friends", "They may keep pressuring me"],
              ["D – Talk to one friend", "I might convince them to stop", "They may get mad; conflict with the group"],
              ["E – Find new friends", "People who respect my choices; protect my health", "Hard to find new friends"]
            ]
          } },
          { h: "4. Choose the best option" },
          { p: "Option B combined with D and E: say no to drugs, talk to a friend from the group in private, and if that doesn't go well, find new friends who don't use drugs or pressure me." },
          { h: "5. Implement the decision" },
          { p: "Next time they offer, say: \"No, I don't want to take that.\" Then talk to one friend in private. If they keep using, join a football team to meet new friends." },
          { h: "6. Monitor progress" },
          { p: "Notice how the friend reacts and how I feel afterwards, and whether I'm doing enough to build new friendships." },
          { h: "7. Reflect and learn" },
          { p: "Saying no was hard, but now I feel in control of my life. Real friends respect your choices, and I'll be confident next time I face pressure." }
        ]
      },
      {
        title: "Group activity",
        time: "20 min",
        blocks: [
          { p: "Split into 3 groups. Each group takes a scenario, works through the full 7-step model, and one person presents the group's thinking and decision." },
          { ol: [
            "You just ate lunch with a friend and realise neither of you has any cash. Your friend suggests leaving without paying because the server has gone to the kitchen. What do you do?",
            "You're at a party. Your friend Mark is meant to drive you home, but you saw him drinking. Your mum told you never to ride with someone driving drunk. What do you do?",
            "A man in your neighbourhood asks you to deliver a bag of bhang for 3,000 KSh. You are scared, but you need the money. What do you do?"
          ] },
          { note: "Facilitators walk with each group through the 7 steps, giving encouragement when the model is used well and support when a group is stuck.", emoji: "🤝" }
        ]
      },
      {
        title: "Discussion",
        time: "10 min",
        blocks: [
          { p: "Invite questions about the session or real-life decisions participants are facing. If the group is quiet, start with:" },
          { ul: [
            "Do you find it easy or difficult to make good decisions?",
            "What makes it challenging to make good decisions?",
            "Have you made a decision in the past you learned from?"
          ] }
        ]
      },
      {
        title: "Closing circle",
        time: "5 min",
        blocks: [
          { p: "Stand together in a circle. Each person shares one word they are taking from today — something new they learned, something to remember, or how they feel now." },
          { p: "Examples: confidence, choices, responsibility, courage, plan, think." }
        ]
      }
    ]
  },

  /* ====================================================================
     4. CONFLICT RESOLUTION AND NEGOTIATION SKILLS
     ==================================================================== */
  {
    id: "conflict-resolution-negotiation",
    emoji: "🤝",
    color: "purple",
    title: "Conflict Resolution & Negotiation Skills",
    duration: "70 min",
    tagline: "Turn conflict into understanding and work towards win-win solutions.",
    sections: [
      {
        title: "What is conflict?",
        time: "5 min",
        blocks: [
          { activity: "Word association", body: [
            { ul: [
              "What words come to mind when you hear the word conflict? (anger, shouting, misunderstanding…)",
              "Are these words positive or negative? Can conflict ever be good?"
            ] }
          ] },
          { note: "Conflict is a disagreement between two or more people caused by incompatible goals, needs, values, interests, or opinions.", emoji: "⚡" },
          { h: "Key ideas" },
          { ul: [
            "Conflict is a natural part of life and not necessarily bad — what matters is how you handle it.",
            "Conflict is like fire: it can cook and bring warmth, but it can also harm if it gets out of control.",
            "Handled well, conflict helps us learn about ourselves and others, and can even build stronger relationships.",
            "Handled badly, it can escalate quickly and lead to serious consequences or even violence."
          ] },
          { h: "Types of conflict" },
          { ul: [
            { b: "Interpersonal:", t: "between two or more people (an argument between two friends)." },
            { b: "Intragroup:", t: "within a group (an argument between members of a football team)." },
            { b: "Intergroup:", t: "between two or more groups (a clash between two different gangs)." }
          ] }
        ]
      },
      {
        title: "Why conflict happens",
        time: "10 min",
        blocks: [
          { ul: [
            { b: "Unmet needs:", t: "when our needs are not met we can feel angry, hurt, or stressed.", sub: [
              "Physical needs: food, rest, water, shelter.",
              "Belonging: love, friendship, connection.",
              "Security: feeling safe, financial stability.",
              "Recognition: feeling seen, appreciated, respected."
            ] },
            { b: "Limited resources:", t: "not enough of something people need or want (equipment in a game, time, money at home)." },
            { b: "Communication problems:", t: "differences in how we communicate cause misunderstandings (interrupting, a dismissive \"Fine, whatever\")." },
            { b: "Clashing values:", t: "people see the world differently.", sub: [
              "Trust: a friend shares your secret, and you feel betrayed.",
              "Patience: a classmate rushes you and you both get frustrated.",
              "Loyalty: you defend someone and are accused of being fake.",
              "Spirituality: someone mocks you for praying before lunch."
            ] }
          ] }
        ]
      },
      {
        title: "How conflict grows: the downward spiral",
        time: "10 min",
        blocks: [
          { ol: [
            { b: "Blame:", t: "people attack each other and think \"YOU are the problem\" instead of focusing on the issue." },
            { b: "Tension:", t: "small issues grow; people bring up the past and things get out of control." },
            { b: "Communication breaks down:", t: "people stop talking to each other and start talking about each other." },
            { b: "Emotions take over:", t: "anger rises, and staying calm becomes hard." },
            { b: "The original problem is forgotten:", t: "now people are mad about new things, or everything." },
            { b: "Sides start to form:", t: "friends pick sides and feel they must fight the \"enemy\"." }
          ] },
          { note: "The longer a conflict is avoided or left to escalate, the worse it becomes. The best approach is to resolve it as early as possible.", emoji: "💡" }
        ]
      },
      {
        title: "Activity: Where did things go wrong?",
        time: "5 min",
        blocks: [
          { p: "In 3 groups, read the scene below and discuss: What communication mistakes are making the conflict worse?" },
          { dialogue: [
            { who: "Brian", line: "Where were you yesterday? You never showed up to help me with the assignment." },
            { who: "Kevin", line: "So what? I had better things to do." },
            { who: "Brian", line: "You are so selfish. You only care about yourself." },
            { who: "Kevin", line: "That's not true! You are always complaining about everything!" },
            { who: "Brian", line: "Whatever. I don't even want to talk to you anymore." },
            { who: "Kevin", line: "Go ahead and cry about it." }
          ] },
          { h: "Some things that went wrong" },
          { ul: [
            "Brian attacked Kevin (\"You are so selfish\") instead of focusing on the problem.",
            "Kevin was rude and dismissed Brian's feelings.",
            "Both became defensive and let their emotions take over.",
            "Neither tried to understand the other's point of view.",
            "Neither took responsibility or apologised."
          ] }
        ]
      },
      {
        title: "Personal conflict styles",
        time: "10 min",
        blocks: [
          { ul: [
            { b: "Competing:", t: "you focus on winning no matter what. \"I must win.\"" },
            { b: "Avoiding:", t: "you stay out of the drama and walk away. \"If I ignore it, it'll go away.\"" },
            { b: "Accommodating:", t: "you do what others want and neglect your own needs. \"I'll do what you want to keep the peace.\"" },
            { b: "Compromising:", t: "you meet in the middle and give up a little if the other person does too. \"Let's meet in the middle.\"" },
            { b: "Collaborating (win-win):", t: "you care about both your goals and theirs, so you talk, listen, and work together. \"Let's solve this so we both get what we need.\" This is the most respectful and effective style — it just takes time and practice." }
          ] }
        ]
      },
      {
        title: "Conflict negotiation skills",
        time: "10 min",
        blocks: [
          { p: "Negotiating a conflict doesn't mean fighting or giving up — it means building bridges towards a peaceful resolution. It needs self-respect and respect for the other person, communication, and cooperation." },
          { h: "Skills you can use" },
          { ul: [
            { b: "Critical thinking:", t: "don't jump to conclusions — pause and understand the full picture, and be open to changing your opinion." },
            { b: "Active listening:", t: "pay attention instead of waiting for your turn. People feel less angry when they feel heard." },
            { b: "Empathy:", t: "see the situation from the other person's point of view and understand how they feel." },
            { b: "Ask for clarification:", t: "\"Can you explain that again?\" or \"What did you mean by that?\" shows you care." },
            { b: "Speak clearly and respectfully:", t: "watch your tone, words, and body language — no eye-rolling or crossed arms." },
            { b: "Take turns:", t: "let the other person finish before you respond." },
            { b: "Use \"I\" statements:", t: "\"I feel frustrated when you don't listen, because it feels like what I say doesn't matter,\" instead of \"You never listen.\"" }
          ] },
          { h: "Extra ground rules" },
          { ul: [
            "No threats, insults, attacking, or mocking. No violence.",
            "Focus on the problem you're facing now — avoid bringing up past mistakes.",
            "Shift the focus to the future: what do you both want to happen next?",
            "Separate the person from the behaviour — avoid labelling anyone a \"bad person\"."
          ] }
        ]
      },
      {
        title: "Anger",
        time: "5 min",
        blocks: [
          { scenario: [
            "There was a little boy with a bad temper. His father gave him a bag of nails and told him that every time he lost his temper, he should hammer a nail into the fence. On the first day the boy drove in 10 nails. Over the next days the number went down — he discovered it was easier to hold his temper than to hammer nails.",
            "Finally, a day came when he didn't lose his temper at all. His father then told him to pull out one nail for each day he held his temper. When all the nails were gone, the father led him to the fence and said: \"You have done well, my son, but look at the holes in the fence. The fence will never be the same.\""
          ], title: "Story time" },
          { p: "Ask: What is the message of the story? Have you ever said or done something in anger that you regretted later?" },
          { note: "Words said in anger leave a scar. Avoid reacting when you're angry, and avoid arguing with someone who is angry.", emoji: "💛" },
          { h: "Recognising anger — in yourself and others" },
          { ul: [
            { b: "Physical signs:", t: "red face, sweating, clenched fists, fast heartbeat, heavy breathing, tense jaw." },
            { b: "Behaviour signs:", t: "yelling, restless movements, slamming doors, throwing things." }
          ] },
          { h: "Strategies to deal with anger" },
          { ul: [
            "Acknowledge the feeling: \"This is making me feel really angry.\"",
            "Take a time-out: step away and think about what's happening.",
            "Talk after you've cooled down."
          ] }
        ]
      },
      {
        title: "Role-play: the mango tree dispute",
        time: "15 min",
        blocks: [
          { scenario: "The Owino and Ontingana families have been neighbours for two years but haven't been very friendly. Recently the mango tree the Owino family planted started to bear fruit, and two big branches now hang into the Ontingana family's garden. The Ontingana family says the mangoes are theirs because the branches hang on their side. The Owino family says the mangoes are theirs because they planted the tree. The problem has become serious and they need outside help." },
          { activity: "Mediate the dispute", body: [
            { p: "In 3 groups, each group chooses one person to be the mediator. Using the conflict-resolution skills from today, role-play the dispute and try to help the families reach a solution." }
          ] },
          { h: "Debrief" },
          { ul: [
            "How did your group pick the mediator?",
            "What qualities made that person a good choice?",
            "What helped solve the conflict?"
          ] }
        ]
      }
    ]
  },

  /* ====================================================================
     5. SUBSTANCE ABUSE AND PEER PRESSURE
     ==================================================================== */
  {
    id: "substance-abuse-peer-pressure",
    emoji: "🛡️",
    color: "coral",
    title: "Substance Abuse & Peer Pressure",
    duration: "70 min",
    tagline: "Know the facts, resist pressure, and choose a healthy, drug-free life.",
    sections: [
      {
        title: "Ice breaker",
        time: "5 min",
        blocks: [
          { p: "Introduce the topic and remind everyone this is a safe space with no wrong answers." },
          { scenario: "Some of us might know people who have used drugs, and some have even tried them. That's okay. You don't have to share anything personal — only what you feel comfortable talking about. And remember, what we share here stays here." },
          { activity: "Agree or Disagree", body: [
            { p: "Read each statement. Raise your hand if you agree. This helps everyone share opinions without judgement and opens up discussion." },
            { ul: [
              "Most young people have tried alcohol.",
              "Boys are under more pressure than girls to try drugs.",
              "Once someone starts using drugs, it is not possible to stop.",
              "Having hobbies (sports, art, music) can help young people stay away from drugs.",
              "Taking drugs makes you more popular with friends.",
              "Saying no to drugs makes you look weak."
            ] }
          ] }
        ]
      },
      {
        title: "Case study: David",
        time: "20 min",
        blocks: [
          { scenario: [
            "David, a 16-year-old, started skipping school to hang out with older boys. They introduced him to sniffing glue and smoking bhang. At first he thought it was fun and it helped him forget his problems at home. But soon he lost interest in school, fought with his family, and even stole from his parents to buy drugs. After a few months he started losing weight, feeling weak, and having trouble sleeping.",
            "One day David got into a serious fight with his friends while high, and the police were called. He wasn't arrested, but the incident scared him and made him realise the path he was on could ruin his life. With support from his family, he joined a youth rehabilitation and mentorship programme where he received counselling, life-skills training, and peer support. He gradually reduced his drug use and began exploring vocational training to become a mechanic."
          ] },
          { activity: "Small group discussion", body: [
            { p: "In 4 groups, discuss one question for 5 minutes, then present your conclusions." },
            { ol: [
              "What helped David in his recovery journey?",
              "What drugs do young people in your community use? Are some used more by boys or girls?",
              "Are some drugs considered normal or acceptable in your community?",
              "How are drug problems treated in your community?"
            ] }
          ] }
        ]
      },
      {
        title: "Understanding drugs & addiction",
        time: "20 min",
        blocks: [
          { h: "What are drugs?" },
          { ul: [
            "Substances that change how your body and mind work.",
            "Unpredictable and dangerous, especially for teenagers whose brains are still developing."
          ] },
          { h: "Common drugs and their effects" },
          { ul: [
            { b: "Narcotics (heroin, morphine):", t: "make you drowsy; high risk of overdose (slowed breathing, coma, death)." },
            { b: "Stimulants (cocaine):", t: "make you feel \"high\"; can cause aggression, panic attacks, hallucinations, anxiety, depression." },
            { b: "Depressants (alcohol):", t: "affect your ability to think and decide, damage your liver, cause accidents, and in large amounts can cause coma and death." },
            { b: "Bhang / cannabis:", t: "affects judgement, lowers IQ and school performance, and harms the developing adolescent brain; high risk of psychosis." },
            { b: "Tobacco:", t: "yes, it's a drug (even though legal); causes respiratory problems, lung cancer, and heart disease." },
            { b: "Inhalants (glue, paint, petrol):", t: "cause respiratory problems, nosebleeds, and brain and kidney damage." },
            { b: "Date-rape drugs:", t: "found at some clubs and parties; mixed with alcohol they can make a victim black out. Never leave your drink unattended or accept drinks from strangers." }
          ] },
          { h: "What is addiction?" },
          { p: "Addiction is when your body and brain get so used to a drug that you feel you can't live without it, making it very hard to stop on your own. Young people can get addicted very quickly — but recovery is possible with support." }
        ]
      },
      {
        title: "Activity: Myth or Fact",
        time: "5 min",
        blocks: [
          { p: "The facilitator reads each statement. Decide: is it a myth or a fact? Then reveal the truth." },
          { ul: [
            { b: "\"Weed is natural, so it's safe.\"", t: "Myth — it can damage memory, concentration, attention, and brain development." },
            { b: "\"Alcohol helps you forget your problems.\"", t: "Myth — it may change how you feel for a moment, but it often makes problems worse." },
            { b: "\"Miraa is not addictive.\"", t: "Myth — it contains substances harmful to your physical and mental health." },
            { b: "\"Only weak people become addicted.\"", t: "Myth — addiction can happen to anyone." },
            { b: "\"I can always control how much I use.\"", t: "Myth — drugs change how your brain works and most people lose control." },
            { b: "\"Drugs make you brave and confident.\"", t: "Myth — that feeling is temporary. Real confidence comes from skills and self-respect." }
          ] }
        ]
      },
      {
        title: "Risk & protective factors",
        time: "5 min",
        blocks: [
          { p: "Ask the group: Why do some young people start using drugs? (peer pressure, curiosity, boredom, poverty, stress, family conflict, easy access, wanting to escape problems, low self-esteem, lack of knowledge.)" },
          { h: "Risk factors" },
          { ul: [
            "Being impulsive.",
            "Having a family member or friend who uses drugs.",
            "A history of abuse or maltreatment.",
            "Family conflict or lack of support.",
            "Seeing drugs as harmless (lack of knowledge)."
          ] },
          { h: "Protective factors" },
          { ul: [
            "Supportive family and friends, and positive role models.",
            "Sports, hobbies, and clear academic goals.",
            "Strong self-esteem and good refusal skills.",
            "Accurate knowledge about drugs, and trusted adults to talk to."
          ] }
        ]
      },
      {
        title: "Peer pressure",
        time: "5 min",
        blocks: [
          { p: "Peer pressure is influence from friends and age-mates. It can be positive (encouraging you to study) or negative (pushing you to drink or smoke)." },
          { activity: "Role-play", body: [
            { p: "A group of 3 offers a student a cigarette, saying: \"Just try it once, don't be a child.\" How will the student react?" }
          ] }
        ]
      },
      {
        title: "Refusal skills",
        time: "5 min",
        blocks: [
          { ul: [
            { b: "Say NO firmly:", t: "\"I said no, please respect my decision.\"" },
            { b: "Repeat it", t: "if people keep pushing." },
            { b: "Use strong body language:", t: "keep your head up, look them in the eye, use a firm voice." },
            { b: "Give a reason:", t: "\"I don't want to mess up my exam tomorrow.\"" },
            { b: "Suggest an alternative:", t: "\"Let's play football instead.\"" },
            { b: "Blame your parents:", t: "\"No way, my mother would kill me.\"" },
            { b: "Use personal experience:", t: "\"No thanks — I see what smoking has done to my dad.\"" },
            { b: "Walk away", t: "when everything else fails, and avoid people who use drugs." }
          ] }
        ]
      },
      {
        title: "Takeaways & pledge",
        time: "5 min",
        blocks: [
          { ul: [
            "Addiction can make life very hard, so prevention is better than cure.",
            "Peer pressure is difficult, but you can say NO.",
            "Recovery is hard, but possible with support."
          ] },
          { pledge: "I CHOOSE TO LIVE A DRUG-FREE LIFE AND SUPPORT MY FRIENDS TO DO THE SAME." }
        ]
      }
    ]
  },

  /* ====================================================================
     6. GOAL SETTING, TIME MANAGEMENT, AND OVERCOMING PROCRASTINATION
     ==================================================================== */
  {
    id: "goals-time-procrastination",
    emoji: "🎯",
    color: "green",
    title: "Goal Setting, Time Management & Overcoming Procrastination",
    duration: "90 min",
    tagline: "Set clear goals, own your time, and stop putting things off.",
    sections: [
      {
        title: "Introduction",
        time: "5 min",
        blocks: [
          { h: "Welcome & icebreaker" },
          { activity: "My Future Self", body: [
            { ul: [
              "Ask participants to imagine themselves ten years from now: Where are you living? What are you studying or doing for work? What are you most proud of?",
              "Invite 2 or 3 volunteers to share."
            ] }
          ] },
          { note: "Purpose: this encourages participants to think about their future and introduces the importance of setting goals.", emoji: "🎯" },
          { p: "Explain that achieving goals rarely happens by chance. It requires planning, managing your time, and taking consistent action." }
        ]
      },
      {
        title: "Goal setting",
        time: "15 min",
        blocks: [
          { h: "What are goals and why are they important?" },
          { ul: [
            "Goals are things we want to achieve.",
            "They give us direction, help us stay focused, and motivate us to keep working even when we encounter challenges."
          ] },
          { note: "What happens when you don't have goals: lack of direction, loss of purpose, failure, stress.", emoji: "⚠️" },
          { h: "Different types of goals" },
          { ul: [
            { b: "Short-term:", t: "can be completed within a brief period of time (days, weeks, months).", sub: [
              "Ex: reading a chapter, attending all the classes this semester."
            ] },
            { b: "Long-term:", t: "need extended periods to be completed (years or decades).", sub: [
              "Ex: studying abroad, getting a degree, buying a house."
            ] },
            "Goals can be about education, family, health, career, money, art, and more."
          ] },
          { h: "Setting goals: step by step" },
          { ol: [
            { b: "Identify your goal.", t: "What do you want to achieve?" },
            { b: "Make a plan to reach your goal.", t: "Decide what steps you need to follow and what actions you need to take to get where you want to be." },
            { b: "Take action", t: "and follow your plan." },
            { b: "Keep track of your progress.", t: "Is your plan working or do you need to change something? Be flexible — sometimes the path to your goal may be a little bumpy, and you may need to find another route." },
            { b: "Seek help or guidance", t: "if what you are doing is not working." },
            { b: "Stay positive.", t: "Don't give up if it takes longer to achieve." }
          ] },
          { h: "Tips" },
          { ul: [
            { b: "Be clear about your goal.", sub: [
              "❌ \"I want to perform better in school.\"",
              "✅ \"I want to improve my mathematics grade from a C to a B.\""
            ] },
            { b: "Think about why you want to achieve your goal.", sub: [
              "\"I want to improve my grades so I can join a course I like after high school.\""
            ] },
            { b: "Think about the obstacles you might face and how you will deal with them.", sub: [
              "\"I can improve my grades if I go to the library and study every afternoon.\""
            ] },
            { b: "Set a deadline.", t: "It helps you stay focused and avoid procrastination.", sub: [
              "\"I want to improve my mathematics grade by the end of this term.\""
            ] }
          ] }
        ]
      },
      {
        title: "Activity: My goals",
        time: "10 min",
        blocks: [
          { activity: "My goals", time: "10 min", body: [
            { ul: [
              "Divide the group into 3 or 4 teams.",
              { b: "Ask participants to think about:", sub: [
                "One short-term goal (next 6 months).",
                "One long-term goal (next 5 years)."
              ] },
              { b: "For each goal, answer the following:", sub: [
                "Why is this goal important to you?",
                "What resources or support will you need to achieve it?",
                "What steps do you need to take to achieve this?",
                "What are the potential obstacles you will find, and how will you overcome them?"
              ] },
              "Ask one representative from each group to present one goal discussed and the key insights from the conversation."
            ] }
          ] }
        ]
      },
      {
        title: "Time management",
        time: "15 min",
        blocks: [
          { note: "Time management means planning how you use your time so you can get important things done and achieve your goals.", emoji: "⏰" },
          { p: "Time is a limited resource: we need to own it and control it!" },
          { h: "Time robbers" },
          { p: "Activities that make us waste our time:" },
          { ul: [
            "Texting — people spend 2–4 hours per day on their phone.",
            "Endless chatting with friends and neighbours.",
            "Surfing the internet without a goal.",
            "Social media (Facebook, Instagram, TikTok).",
            "Watching TV.",
            "Procrastination.",
            "Not being able to say No."
          ] },
          { h: "Strategies to manage your time effectively" },
          { ul: [
            { b: "Plan your day.", t: "At the beginning of the day, think about what you need to do. You can also make a to-do list the night before." },
            { b: "Do the most important tasks first.", t: "Finish first the tasks that are urgent or have the nearest deadline." },
            { b: "Set aside time for each task.", t: "Decide when you will do something and stick to your plan. (Ex: from 6 pm to 7 pm I will complete my Kiswahili homework.)" },
            { b: "Break big tasks into smaller steps.", t: "Large tasks can feel overwhelming. Completing one small step at a time makes them easier. (Ex: today I will write the introduction of my essay. Tomorrow I will write the next section.)" },
            { b: "Focus on one task at a time.", t: "It is easier to do your best work when you focus on one activity instead of trying to do several things at once." },
            { b: "Avoid distractions.", t: "Put the phone away and find a quiet place to study." },
            { b: "Use reminders.", t: "A calendar, notebook, or phone reminder can help you remember important tasks and deadlines." },
            { b: "Take short breaks.", t: "If you have been studying for a long time, take a 10-minute break. Stretch, go for a short walk, or drink some water before getting back to work." },
            { b: "Get enough sleep.", t: "Sleeping well helps you manage your time better." }
          ] }
        ]
      },
      {
        title: "Activity: Time-robber scenarios",
        time: "10 min",
        blocks: [
          { activity: "What could this student do differently?", time: "10 min", body: [
            { ul: [
              "Divide the group into 4 teams. Each team receives a card with a scenario on it:",
              { b: "Team 1:", t: "\"John is watching TV when he should be doing his homework.\"" },
              { b: "Team 2:", t: "\"Mary spends 10 minutes searching for a pencil, then another 10 minutes finding her notebook, wasting time that she could have used to study.\"" },
              { b: "Team 3:", t: "\"Peter has homework for tomorrow, but he keeps watching videos and memes on the phone.\"" },
              { b: "Team 4:", t: "\"Irene starts her homework late because she spent too much time talking with her friends.\"" },
              "Ask the groups to discuss: What could this student do differently?",
              "One representative from each team shares their insights."
            ] }
          ] }
        ]
      },
      {
        title: "Procrastination & how to overcome it",
        time: "10 min",
        blocks: [
          { h: "What is procrastination?" },
          { ul: [
            "Postponing tasks, decisions, or activities.",
            "It is a learned habit: the more you do it, the worse it becomes."
          ] },
          { h: "How to identify procrastination" },
          { ul: [
            "\"I will do this tomorrow.\"",
            "\"Someone else can do it.\"",
            "\"I am too tired now.\"",
            "\"This is not the right time to do it.\"",
            "\"I can't do it right, so why start it anyway.\""
          ] },
          { h: "Why do people procrastinate?" },
          { note: "Before introducing the reasons, ask participants why they think people procrastinate. Write the responses on the board, then introduce the reasons that were not mentioned.", emoji: "💡" },
          { ul: [
            { b: "Fear of failure:", t: "you avoid starting a task because you are afraid you won't do it well." },
            { b: "Wanting everything to be perfect:", t: "you don't start because you feel your work has to be perfect and you are not ready." },
            { b: "The task feels too difficult:", t: "you don't know where to begin, so you keep postponing." },
            { b: "Distractions:", t: "other things keep taking your attention away from what you should be doing." },
            { b: "Trying to do many things at the same time." },
            { b: "Poor time management:", t: "you leave important tasks until the last minute, then feel overwhelmed." },
            { b: "Dependency:", t: "you think you can't do it alone." },
            { b: "Pleasure-seeking:", t: "\"life is too short to do boring things.\"" }
          ] },
          { note: "Consequences of procrastination: poor academic performance, low productivity, low self-esteem, failure to achieve goals.", emoji: "⚠️" },
          { h: "Strategies to overcome procrastination" },
          { ul: [
            "Set goals every day.",
            "Break tasks into small steps.",
            "Start with the most urgent task.",
            "Remove distractions."
          ] }
        ]
      },
      {
        title: "Activity: Beat procrastination",
        time: "10 min",
        blocks: [
          { activity: "One task I keep postponing", time: "10 min", body: [
            { ul: [
              "Divide the group into 3 or 4 teams.",
              { b: "Ask the students to think about a task they've been procrastinating on, and about:", sub: [
                "The benefits of completing the task.",
                "3 steps they need to take to complete the task."
              ] },
              "Invite one representative per group to share their examples."
            ] }
          ] }
        ]
      },
      {
        title: "Questions & closing the session",
        time: "5 min",
        blocks: [
          { ul: [
            "Give the students the opportunity to ask questions.",
            "Ask them to write down (individually) one goal they want to focus on during the next week, and one strategy they will use to manage their time better."
          ] }
        ]
      }
    ]
  }

];
