/* ==========================================================================
   I MATTER — LEARNING CONTENT (Knowledge Centre)
   --------------------------------------------------------------------------
   This file is safe to edit. Each category has lessons. Each lesson has:
     id        - unique name (letters, numbers, dashes; do not repeat)
     title     - lesson name
     intro     - short introduction (1-2 sentences)
     key       - the key lesson
     example   - a real-life example
     reflection- a question to think about
     activity  - a small activity to try
     quiz      - one quick question: { q, options[], answer (index from 0), tf (true/false mode) }
     takeaway  - the message to remember
     related   - ids of related lessons
   Words in [square brackets] inside "hard" are explained in simple terms.
   ========================================================================== */

window.IM_CONTENT = {
  categories: [

    /* ================= 1. KNOWING MYSELF ================= */
    {
      id: "knowing-myself",
      title: "Knowing Myself",
      emoji: "🌟",
      color: "teal",
      blurb: "Discover what makes you special, strong, and unique.",
      lessons: [
        {
          id: "unique-me",
          title: "What makes me unique",
          intro: "No one in the whole world is exactly like you. That is a wonderful thing.",
          key: "Being unique means having your own mix of looks, talents, ideas, and dreams. You do not need to be like anyone else to matter.",
          example: "Wanjiru is quiet in class but tells amazing stories. Her friend Baraka is loud and funny. Both are valuable in different ways.",
          reflection: "What is one thing about you that makes you different from your friends?",
          activity: "Write down three things about yourself that make you 'you'. They can be big or small.",
          quiz: { q: "Being unique means...", options: ["Being better than others", "Having your own special mix of qualities", "Copying popular people"], answer: 1 },
          takeaway: "You are one of a kind, and that is your strength.",
          related: ["my-strengths", "my-identity"]
        },
        {
          id: "my-strengths",
          title: "My strengths",
          intro: "A strength is something you are good at or something good inside you, like kindness or courage.",
          key: "Everyone has strengths, even if they are hard to see at first. Knowing your strengths helps you feel confident and choose good goals.",
          example: "Kioko thought he had no strengths. Then he noticed he always helps younger kids with homework. Patience and helping are strengths!",
          reflection: "What do people thank you for? That is often a clue to your strengths.",
          activity: "Ask a friend or family member: 'What is one thing I am good at?' Write down what they say.",
          quiz: { q: "True or false: Only talents like sports or singing count as strengths.", tf: true, answer: 1, options: ["True", "False"] },
          takeaway: "Your strengths are already inside you. Use them every day.",
          related: ["unique-me", "self-confidence", "positive-self-talk"]
        },
        {
          id: "my-values",
          title: "My values",
          intro: "Values are the things you believe are most important, like honesty, family, or fairness.",
          key: "Your values are like a compass. When you know them, it is easier to make choices you can be proud of.",
          example: "Amina values honesty. When her friend asked her to lie to a teacher, she said no, because lying goes against what she believes.",
          reflection: "Which is more important to you: being popular or being honest? Why?",
          activity: "From this list, pick your top three: honesty, kindness, family, learning, courage, fairness, faith, friendship.",
          quiz: { q: "Values help you...", options: ["Make choices you can be proud of", "Win every argument", "Avoid all problems"], answer: 0 },
          takeaway: "When your choices match your values, you feel strong inside.",
          related: ["safe-decisions", "my-identity"]
        },
        {
          id: "my-feelings",
          title: "My feelings",
          intro: "Feelings are signals from inside you. Happy, sad, angry, excited — they all carry a message.",
          key: "All feelings are okay to have. What matters is what you do with them. Noticing your feelings is the first step to managing them.",
          example: "Before a big exam, Njeri felt her heart beating fast. She noticed: 'I am nervous.' Naming the feeling helped her calm down.",
          reflection: "What feeling have you felt the most this week?",
          activity: "Right now, stop and ask yourself: 'What am I feeling?' Try to give it a name.",
          quiz: { q: "True or false: Some feelings are bad and you should never have them.", tf: true, answer: 1, options: ["True", "False"] },
          takeaway: "Feelings are messengers, not bosses. Listen to them, then choose your action.",
          related: ["naming-feelings", "emotional-wellbeing"]
        },
        {
          id: "my-interests",
          title: "My interests",
          intro: "Interests are things you enjoy doing or learning about — football, drawing, animals, music, numbers.",
          key: "Your interests give you energy and can grow into skills, hobbies, and even careers. Exploring them helps you learn who you are.",
          example: "Sifa loved fixing radios at home. Years later, that interest helped her choose to study electrical work.",
          reflection: "What activity makes you forget the time because you enjoy it so much?",
          activity: "List three things you love doing. Circle one you could do more of this month.",
          quiz: { q: "Interests are important because they...", options: ["Waste your time", "Can grow into skills and dreams", "Are only for rich people"], answer: 1 },
          takeaway: "Follow what makes you curious — it is pointing to your future.",
          related: ["career-explore", "my-dreams"]
        },
        {
          id: "my-identity",
          title: "My identity",
          intro: "Your identity is your answer to the question 'Who am I?' It includes your name, family, culture, beliefs, strengths, and dreams.",
          key: "Your identity is yours to build. Other people's opinions are not your identity. You can be proud of where you come from and still grow into something new.",
          example: "Lekishon is Maasai, a footballer, a big brother, and a science lover. All of these are parts of his identity.",
          reflection: "If you had to describe yourself in five words, what would they be?",
          activity: "Draw a circle. Inside, write words that describe who you are: your roles, culture, strengths, and dreams.",
          quiz: { q: "Who decides your identity?", options: ["Your classmates", "Social media", "You, as you grow"], answer: 2 },
          takeaway: "You are the author of your own story.",
          related: ["unique-me", "my-values"]
        },
        {
          id: "boundaries",
          title: "My personal boundaries",
          intro: "A boundary is a line that protects you. It says what is okay and what is not okay for you.",
          key: "You are allowed to say no to things that make you feel unsafe or uncomfortable. Healthy boundaries protect your body, your feelings, and your time.",
          example: "A classmate kept taking Pendo's pen without asking. Pendo said kindly but firmly: 'Please ask me first.' That is a boundary.",
          reflection: "Is there something you wish you could say no to?",
          activity: "Practice saying this out loud: 'No, I am not comfortable with that.' Say it kindly and firmly.",
          quiz: { q: "A personal boundary is...", options: ["A wall that keeps all people away", "A line that protects what is okay for you", "A rule made by your friends"], answer: 1 },
          takeaway: "Saying no to what feels wrong is saying yes to yourself.",
          related: ["saying-no", "rel-boundaries", "personal-safety"]
        },
        {
          id: "self-confidence",
          title: "Building self-confidence",
          intro: "Self-confidence means believing in yourself — trusting that you can learn, try, and grow.",
          key: "Confidence is not something you are born with. It grows every time you try something, practice, and keep going after mistakes.",
          example: "Mumbi was afraid to answer questions in class. She started with one answer a week. Each time it got easier. Now she speaks up often.",
          reflection: "What is one small brave thing you could try this week?",
          activity: "Stand tall, shoulders back, and say: 'I can learn anything with practice.' Do this every morning for a week.",
          quiz: { q: "Confidence grows when you...", options: ["Avoid anything difficult", "Try, practice, and keep going", "Wait until you feel ready"], answer: 1 },
          takeaway: "Every small brave step makes your confidence stronger.",
          related: ["my-strengths", "positive-self-talk", "building-courage"]
        }
      ]
    },

    /* ================= 2. UNDERSTANDING EMOTIONS ================= */
    {
      id: "emotions",
      title: "Understanding Emotions",
      emoji: "💛",
      color: "yellow",
      blurb: "Name your feelings and learn healthy ways to handle them.",
      lessons: [
        {
          id: "naming-feelings",
          title: "Naming feelings",
          intro: "When you can name a feeling, it becomes easier to handle. 'Name it to tame it.'",
          key: "There are many feelings: happy, sad, angry, worried, excited, jealous, proud, embarrassed. The more feeling words you know, the better you understand yourself.",
          example: "Instead of saying 'I feel bad', Otieno learned to say 'I feel disappointed because we lost the match.' Naming it helped him talk about it.",
          reflection: "How many feeling words can you think of? Try to count five.",
          activity: "Today, each time you notice a feeling, silently name it: 'This is worry.' 'This is joy.'",
          quiz: { q: "Naming your feelings helps you...", options: ["Hide them better", "Understand and manage them", "Make them go away forever"], answer: 1 },
          takeaway: "A feeling you can name is a feeling you can handle.",
          related: ["my-feelings", "managing-anger"]
        },
        {
          id: "managing-anger",
          title: "Managing anger",
          intro: "Anger is a normal feeling. Everyone feels it. But what we do when angry can help or hurt.",
          key: "When anger rises, your body gives signs: hot face, fast heart, tight fists. Pause, breathe, and step away before you act. Anger is okay; hurting people is not.",
          example: "When Juma's brother broke his toy, Juma wanted to shout. Instead, he took five deep breaths and walked outside first. Then he could talk calmly.",
          reflection: "What happens in your body when you get angry?",
          activity: "Practice the 'STOP' plan: Stop. Take a breath. Observe your body. Proceed calmly.",
          quiz: { q: "When you feel very angry, the best first step is to...", options: ["Say everything you feel immediately", "Pause and take slow breaths", "Keep it secret forever"], answer: 1 },
          takeaway: "You cannot always control anger arriving, but you can control what you do next.",
          related: ["calming-exercises", "handling-disagreements"]
        },
        {
          id: "handling-sadness",
          title: "Handling sadness",
          intro: "Sadness comes when we lose something or when things do not go our way. It is a natural feeling.",
          key: "It is okay to cry and okay to feel sad. Sadness becomes lighter when you share it with someone you trust. It usually passes with time, rest, and care.",
          example: "When Achieng's best friend moved away, she felt sad for weeks. Talking to her aunt and writing letters to her friend helped her heal.",
          reflection: "Who is one person you could talk to when you feel sad?",
          activity: "Make a 'comfort list': three things that gently lift your mood, like music, a walk, or talking to a friend.",
          quiz: { q: "True or false: Crying means you are weak.", tf: true, answer: 1, options: ["True", "False"] },
          takeaway: "Sadness shared is sadness halved.",
          related: ["asking-support", "emotional-wellbeing"]
        },
        {
          id: "managing-fear",
          title: "Managing fear",
          intro: "Fear tries to protect you from danger. But sometimes fear shows up even when you are safe, like before a class presentation.",
          key: "Ask yourself: 'Is this real danger, or just discomfort?' If it is real danger, get help. If it is discomfort, breathe slowly and take one small step forward.",
          example: "Baraka feared reading aloud. He practiced at home, then read one paragraph in class. The fear got smaller each time he tried.",
          reflection: "What is something you fear that is actually safe to try?",
          activity: "Write down one fear. Next to it, write one tiny step you could take toward facing it.",
          quiz: { q: "If fear shows up but you are actually safe, you can...", options: ["Run away every time", "Breathe slowly and take one small step", "Pretend you feel nothing"], answer: 1 },
          takeaway: "Courage is not having no fear. Courage is moving forward with fear beside you.",
          related: ["building-courage", "calming-exercises"]
        },
        {
          id: "coping-stress",
          title: "Coping with stress",
          intro: "Stress is the feeling of being under pressure — too much homework, family duties, or worries all at once.",
          key: "You can lower stress by breaking big tasks into small steps, taking breaks, moving your body, sleeping enough, and talking to someone.",
          example: "Nasieku felt stressed by exams and chores. She made a simple plan: study one subject a day, help at home in the evening, and sleep by 10. The pressure eased.",
          reflection: "What is causing you the most pressure right now?",
          activity: "Take a big worry and split it into three small steps. Do just the first step today.",
          quiz: { q: "A good way to handle stress is to...", options: ["Ignore it until it disappears", "Break big tasks into small steps", "Stay up all night working"], answer: 1 },
          takeaway: "You do not have to carry everything at once. One small step at a time.",
          related: ["school-stress", "time-management", "calming-exercises"]
        },
        {
          id: "asking-support",
          title: "Asking for support",
          intro: "Everyone needs help sometimes — even adults, even teachers, even heroes.",
          key: "Asking for help is a skill and a strength. Choose a person you trust, find a calm time, and say clearly what is troubling you.",
          example: "Kip was being troubled by older boys on the way home. He told his uncle, who helped change his route and spoke to the school. The problem stopped.",
          reflection: "What makes it hard to ask for help? What would make it easier?",
          activity: "Practice this sentence: 'I need to talk to you about something important. Can you help me?'",
          quiz: { q: "Asking for help shows that you are...", options: ["Weak", "Smart and strong", "A bother to others"], answer: 1 },
          takeaway: "Strong people ask for help. You never have to struggle alone.",
          related: ["trusted-adults", "asking-help"]
        },
        {
          id: "calming-exercises",
          title: "Calming exercises",
          intro: "When feelings get too big, calming exercises help your body and mind settle down.",
          key: "Try belly breathing: breathe in slowly for 4 counts, hold for 4, breathe out for 4. Or try 5-4-3-2-1: notice 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.",
          example: "Before her music performance, Zawadi did belly breathing backstage. Her hands stopped shaking and she performed well.",
          reflection: "When was the last time you needed to calm down quickly?",
          activity: "Try belly breathing right now: in for 4... hold for 4... out for 4. Repeat three times.",
          quiz: { q: "Slow, deep breathing helps because it...", options: ["Tells your body it is safe to relax", "Makes problems disappear", "Is only for adults"], answer: 0 },
          takeaway: "Your breath is a calm-down tool you carry everywhere.",
          related: ["managing-anger", "managing-fear", "coping-stress"]
        },
        {
          id: "emotional-wellbeing",
          title: "Emotional well-being",
          intro: "Emotional well-being means taking care of your feelings the same way you care for your body.",
          key: "Feed your well-being daily: enough sleep, kind self-talk, time with good friends, movement, helping others, and talking about feelings instead of hiding them.",
          example: "Mwikali noticed she felt happier in weeks when she slept well, played with friends, and wrote in her journal. She made those her habits.",
          reflection: "What is one habit that makes you feel good inside?",
          activity: "Pick one well-being habit (sleep, journaling, play, gratitude) and try it every day for one week.",
          quiz: { q: "Emotional well-being grows from...", options: ["Ignoring feelings", "Daily healthy habits and talking about feelings", "Being happy all the time"], answer: 1 },
          takeaway: "Caring for your feelings every day keeps your mind strong.",
          related: ["my-feelings", "handling-sadness", "celebrating-progress"]
        }
      ]
    },

    /* ================= 3. COMMUNICATION ================= */
    {
      id: "communication",
      title: "Communication",
      emoji: "💬",
      color: "coral",
      blurb: "Listen well, speak clearly, and connect with respect.",
      lessons: [
        {
          id: "listening-well",
          title: "Listening well",
          intro: "Listening is more than hearing. It means giving someone your full attention.",
          key: "Good listeners face the speaker, keep eye contact, do not interrupt, and check they understood: 'So you mean...?' Listening well makes people feel respected.",
          example: "When Halima's friend was upset, Halima put her phone away, listened, and said, 'That sounds really hard.' Her friend felt truly heard.",
          reflection: "Do you listen to understand, or just wait for your turn to speak?",
          activity: "Today, in one conversation, listen without interrupting even once. Notice what changes.",
          quiz: { q: "A good listener...", options: ["Interrupts with advice quickly", "Gives full attention and checks understanding", "Looks at their phone while listening"], answer: 1 },
          takeaway: "Listening is a gift you can give anyone.",
          related: ["speaking-clearly", "supporting-others"]
        },
        {
          id: "speaking-clearly",
          title: "Speaking clearly",
          intro: "Speaking clearly helps people understand your ideas, needs, and feelings.",
          key: "Think first, then speak calmly and simply. Use 'I' statements: 'I think...', 'I feel...', 'I need...'. Speak loud enough to be heard, but not shouting.",
          example: "Instead of mumbling, Saitoti practiced: 'I did not understand the homework. Can you explain question two?' His teacher gladly helped.",
          reflection: "When is it hardest for you to say what you mean?",
          activity: "Practice one clear sentence starting with 'I need...' or 'I think...' and say it to someone today.",
          quiz: { q: "An 'I' statement sounds like...", options: ["'You always ignore me!'", "'I feel ignored when no one answers me.'", "Saying nothing at all"], answer: 1 },
          takeaway: "Clear words open doors. Speak so others can understand you.",
          related: ["expressing-feelings", "asking-questions-comm"]
        },
        {
          id: "expressing-feelings",
          title: "Expressing feelings",
          intro: "Sharing your feelings in words helps others understand you and helps you feel lighter.",
          key: "Use the pattern: 'I feel [feeling] when [situation] because [reason].' This shares your heart without blaming anyone.",
          example: "'I feel left out when you make plans without me, because I like being included.' Rehema's friends had not realized — and they changed.",
          reflection: "What feeling have you been keeping inside that you could share?",
          activity: "Complete this out loud: 'I feel ____ when ____ because ____.'",
          quiz: { q: "True or false: Keeping all feelings hidden is the healthiest choice.", tf: true, answer: 1, options: ["True", "False"] },
          takeaway: "Feelings spoken kindly build bridges, not walls.",
          related: ["naming-feelings", "speaking-clearly"]
        },
        {
          id: "asking-questions-comm",
          title: "Asking questions",
          intro: "Questions are how we learn. There is no such thing as a stupid question.",
          key: "Good questions start with what, why, how, when, and who. Asking questions shows you are thinking, not that you are slow.",
          example: "Chebet did not understand a maths step. She asked, 'How did you get from step two to step three?' Half the class was quietly wondering the same thing.",
          reflection: "Has fear of looking silly ever stopped you from asking something?",
          activity: "Ask one question in class or at home today that you would normally keep inside.",
          quiz: { q: "Asking questions in class shows that you are...", options: ["Not clever", "Thinking and wanting to learn", "Wasting time"], answer: 1 },
          takeaway: "The person who asks learns more than the person who stays silent.",
          related: ["asking-questions-school", "asking-advice"]
        },
        {
          id: "saying-no",
          title: "Saying no respectfully",
          intro: "You have the right to say no. Saying no respectfully protects you and keeps respect between people.",
          key: "Be short, clear, and kind: 'No, thank you.' 'No, I am not comfortable with that.' You do not need to give long excuses. You can repeat your no if pushed.",
          example: "Friends asked Tumaini to skip class. He smiled and said, 'No, I am staying. Catch you later.' He said it twice, calmly, and they left him alone.",
          reflection: "What would help you feel braver about saying no?",
          activity: "Practice in a mirror: 'No, thank you. I am not doing that.' Calm voice, head up.",
          quiz: { q: "A respectful 'no' is...", options: ["Short, clear, and kind", "A long list of excuses", "Impossible with friends"], answer: 0 },
          takeaway: "'No' is a complete sentence. Use it to protect what matters.",
          related: ["boundaries", "resisting-pressure", "peer-pressure"]
        },
        {
          id: "handling-disagreements",
          title: "Handling disagreements",
          intro: "People do not always agree — that is normal. Disagreements can be handled without fighting.",
          key: "Stay calm, listen to the other side, speak your view with 'I' statements, and look for a fair solution. Attack the problem, not the person.",
          example: "Two friends both wanted the ball at break. Instead of fighting, they agreed: ten minutes each, then a game together. Problem solved.",
          reflection: "Think of a recent disagreement. What could have made it calmer?",
          activity: "Next disagreement, try this: first repeat the other person's view in your own words before giving yours.",
          quiz: { q: "In a disagreement it helps to...", options: ["Shout louder to win", "Listen first, then share your view calmly", "Never talk to the person again"], answer: 1 },
          takeaway: "You can disagree with someone and still respect them.",
          related: ["conflict", "listening-well"]
        },
        {
          id: "nonverbal",
          title: "Non-verbal communication",
          intro: "We speak with more than words. Our face, hands, posture, and tone all send messages.",
          key: "A smile, crossed arms, rolling eyes, or a warm tone can say more than words. Make sure your body says the same thing as your mouth.",
          example: "Naliaka said 'I'm fine' but her slumped shoulders and quiet voice said something else. Her teacher gently asked again, and she opened up.",
          reflection: "What does your body language say when you are upset?",
          activity: "Watch a conversation (with permission!) and count how many messages are sent without words.",
          quiz: { q: "Non-verbal communication includes...", options: ["Only spoken words", "Face, posture, gestures, and tone", "Only written notes"], answer: 1 },
          takeaway: "Your body speaks. Help it say what you mean.",
          related: ["listening-well", "speaking-clearly"]
        },
        {
          id: "online-communication",
          title: "Communicating online safely",
          intro: "Messages, chats, and posts are communication too — and they can be seen by more people than you think.",
          key: "Before sending, THINK: is it True, Helpful, Inspiring, Necessary, Kind? Never share personal details, photos, or passwords with strangers. Screens hide feelings, so be extra kind.",
          example: "Jabali almost posted an angry comment about a classmate. He remembered posts can spread and never disappear, so he talked to the classmate in person instead.",
          reflection: "Would you be happy if your parents or teacher read your last messages?",
          activity: "Make your own rule: 'Before I post or send, I will always ____.'",
          quiz: { q: "Before posting something online, it is smart to...", options: ["Post fast before you change your mind", "Think: is it true, necessary, and kind?", "Share your home address so friends find you"], answer: 1 },
          takeaway: "Type as kindly as you would speak face to face — and keep private things private.",
          related: ["online-safety", "saying-no"]
        }
      ]
    },

    /* ================= 4. DECISION-MAKING ================= */
    {
      id: "decisions",
      title: "Decision-Making",
      emoji: "🧭",
      color: "purple",
      blurb: "Learn to make choices that are safe, smart, and true to you.",
      lessons: [
        {
          id: "understanding-choices",
          title: "Understanding choices",
          intro: "Every day you make choices: what to say, who to walk with, how to spend time. Choices shape your life.",
          key: "Even small choices matter. You always have more options than you first see. Stop and ask: 'What are ALL my choices here?'",
          example: "When friends started a risky dare game, Nyokabi realized she had choices: join, watch, walk away, or suggest a different game. She chose to suggest football.",
          reflection: "What choice did you make today without even noticing?",
          activity: "Pick one decision you face this week. List at least three different options.",
          quiz: { q: "When facing a decision, you usually have...", options: ["Only one option", "More options than you first see", "No control at all"], answer: 1 },
          takeaway: "Seeing your choices clearly is the first step to choosing well.",
          related: ["consequences", "safe-decisions"]
        },
        {
          id: "consequences",
          title: "Thinking about consequences",
          intro: "A consequence is what happens after a choice — good or bad, now or later.",
          key: "Before deciding, ask: 'What could happen next? And after that? Who else is affected?' Thinking one step ahead protects you from many problems.",
          example: "Mwangi was invited to skip school for a day in town. He thought ahead: missed lessons, worried parents, trouble at school. He chose not to go.",
          reflection: "Think of a good choice you made. What good things followed?",
          activity: "For your next decision, draw two arrows: 'If I do this → then...' and 'If I don't → then...'",
          quiz: { q: "A consequence is...", options: ["Only a punishment", "What happens after a choice, good or bad", "Something only adults face"], answer: 1 },
          takeaway: "Choose with your future self in mind.",
          related: ["understanding-choices", "learning-mistakes-dm"]
        },
        {
          id: "safe-decisions",
          title: "Making safe decisions",
          intro: "A safe decision protects your body, your feelings, your future, and other people.",
          key: "Use the 3-question test: Is it safe? Is it fair? Would a trusted adult approve? If any answer is no, choose differently.",
          example: "Older boys offered Sankale a ride on an overloaded motorbike. He used the test: not safe. He said no and walked with a friend instead.",
          reflection: "Who is a person whose advice helps you decide safely?",
          activity: "Memorize the test: Safe? Fair? Approved? Try it on your next decision.",
          quiz: { q: "Which question belongs in the safe-decision test?", options: ["Will it make me look cool?", "Is it safe?", "Will everyone like me?"], answer: 1 },
          takeaway: "When in doubt, choose the option that keeps you safe.",
          related: ["personal-safety", "consequences", "resisting-pressure"]
        },
        {
          id: "resisting-pressure",
          title: "Resisting pressure",
          intro: "Pressure is when someone pushes you to do something. It can come from friends, older youth, or even adults.",
          key: "You can resist pressure by: saying no firmly, repeating your no, suggesting something else, walking away, or getting help. Real friends respect your no.",
          example: "'Everyone is trying it,' they told Makena about sniffing glue. She said, 'Not me,' twice, then walked to where other friends were playing.",
          reflection: "Why do you think people pressure others to join them?",
          activity: "Practice with a friend: one pressures (kindly!), the other says no three different ways.",
          quiz: { q: "If someone keeps pressuring you after you say no, you can...", options: ["Give in to stop the pressure", "Repeat your no and walk away", "Fight them"], answer: 1 },
          takeaway: "Your no belongs to you. No one can take it without your permission.",
          related: ["saying-no", "peer-pressure", "safe-decisions"]
        },
        {
          id: "asking-advice",
          title: "Asking for advice",
          intro: "Big decisions are easier with wise input. Asking for advice is a smart move, not a weak one.",
          key: "Choose someone with experience who cares about you. Explain the situation honestly. Listen. Then remember: advice helps you decide, but the decision is still yours.",
          example: "Choosing subjects for next year, Wafula asked his teacher, his mother, and an older cousin. Their advice helped him pick with confidence.",
          reflection: "Who gives you advice that has helped you before?",
          activity: "Think of one decision you face. Write down two people you could ask about it.",
          quiz: { q: "After getting advice, the final decision belongs to...", options: ["The adviser", "You", "Whoever is oldest"], answer: 1 },
          takeaway: "Wise people borrow wisdom. Ask, listen, then choose.",
          related: ["asking-support", "trusted-adults"]
        },
        {
          id: "learning-mistakes-dm",
          title: "Learning from mistakes",
          intro: "Everyone makes wrong choices sometimes. Mistakes are painful, but they are also powerful teachers.",
          key: "When a choice goes wrong: admit it, fix what you can, apologize if needed, and ask 'What will I do differently next time?' Then let it go.",
          example: "Kadzo lent her textbook to someone she barely knew and never got it back. Next time, she lent books only to people who returned things before.",
          reflection: "What has a past mistake taught you?",
          activity: "Finish this sentence: 'A mistake I learned from was ____, and now I ____.'",
          quiz: { q: "True or false: Making a mistake means you are a failure.", tf: true, answer: 1, options: ["True", "False"] },
          takeaway: "A mistake is a lesson in work clothes.",
          related: ["trying-again", "learning-mistakes-cr"]
        },
        {
          id: "setting-priorities",
          title: "Setting priorities",
          intro: "A priority is what matters most right now. When everything feels important, priorities show you where to start.",
          key: "List your tasks, then mark: Must do, Should do, Could do. Do the 'must' items first. Saying yes to everything means doing nothing well.",
          example: "Exam week: Neema wanted to revise, attend choir, and visit friends. She chose revision first, choir second, and moved the visit to after exams.",
          reflection: "What is your number one priority this week?",
          activity: "Write today's tasks. Mark each one: Must / Should / Could. Start with a Must.",
          quiz: { q: "Setting priorities means...", options: ["Doing everything at once", "Choosing what matters most first", "Ignoring school work"], answer: 1 },
          takeaway: "When you know what matters most, deciding becomes easier.",
          related: ["time-management", "goals-lesson"]
        }
      ]
    },

    /* ================= 5. PROBLEM-SOLVING ================= */
    {
      id: "problem-solving",
      title: "Problem-Solving",
      emoji: "🧩",
      color: "green",
      blurb: "Face challenges step by step, like a puzzle you can solve.",
      lessons: [
        {
          id: "understand-problem",
          title: "Understanding the problem",
          intro: "You cannot solve a problem you do not understand. The first step is always to see it clearly.",
          key: "Ask: What exactly is the problem? When does it happen? Who is involved? What do I want to be different? Write it in one clear sentence.",
          example: "'School is terrible' became clearer when Owino wrote: 'I keep arriving late because I sleep late, and I get punished.' Now the real problem could be solved.",
          reflection: "What is one problem in your life you have never described in a single clear sentence?",
          activity: "Take a problem and write it in one sentence: 'The problem is ____ because ____.'",
          quiz: { q: "The first step in solving a problem is to...", options: ["Panic", "Understand it clearly", "Blame someone"], answer: 1 },
          takeaway: "A problem well described is a problem half solved.",
          related: ["possible-solutions", "choose-solution"]
        },
        {
          id: "possible-solutions",
          title: "Looking at possible solutions",
          intro: "Most problems have more than one solution. Brainstorming means listing many ideas before judging them.",
          key: "Write every idea, even funny ones — quantity first, quality later. Then look at each: What would happen? Is it safe? Is it fair? Can I actually do it?",
          example: "Problem: no quiet place to study at home. Ideas: study early morning, use the school library, ask neighbours, study with a friend, use headphones. Several could work!",
          reflection: "Do you usually stop at the first idea, or look for more?",
          activity: "Pick a small problem and list five possible solutions in two minutes. Don't judge until the list is done.",
          quiz: { q: "When brainstorming solutions, you should first...", options: ["List many ideas without judging", "Pick the first idea", "Give up if it is hard"], answer: 0 },
          takeaway: "More ideas mean better choices.",
          related: ["understand-problem", "choose-solution"]
        },
        {
          id: "asking-help-ps",
          title: "Asking for help",
          intro: "Some problems are too big to solve alone — and that is completely normal.",
          key: "Signs you need help: the problem involves danger, it keeps repeating, it is about adults, or it makes you feel scared or hopeless. Choose a trusted person and tell them clearly.",
          example: "Money was disappearing from the class fund and some students blamed Musa unfairly. He could not fix it alone, so he asked the class teacher to help investigate.",
          reflection: "How do you know when a problem is too big for you alone?",
          activity: "Write the names of three people you could go to with a big problem.",
          quiz: { q: "You should definitely ask for help when a problem...", options: ["Is a little boring", "Involves danger or feels too big", "Can be solved in one minute"], answer: 1 },
          takeaway: "Asking for help is part of solving, not giving up.",
          related: ["asking-support", "trusted-adults"]
        },
        {
          id: "choose-solution",
          title: "Choosing a safe solution",
          intro: "After listing ideas, it is time to choose. The best solution is safe, fair, and possible.",
          key: "Test each idea: Is it safe for me and others? Is it fair? Do I have what I need to do it? What could go wrong? Choose the strongest one and make a simple plan.",
          example: "To stop being late, Owino compared ideas: sleeping earlier was safe, free, and fully in his control. He chose it and set a bedtime.",
          reflection: "Have you ever chosen a quick fix that caused a bigger problem later?",
          activity: "Take your five brainstormed ideas and give each a score out of 5 for safety, fairness, and possibility.",
          quiz: { q: "The best solution is usually the one that is...", options: ["Fastest, no matter the risk", "Safe, fair, and possible", "Most popular with friends"], answer: 1 },
          takeaway: "Choose the solution your future self will thank you for.",
          related: ["safe-decisions", "review-solution"]
        },
        {
          id: "review-solution",
          title: "Reviewing what happened",
          intro: "After trying a solution, look back. Did it work? This is how problem-solvers get better every time.",
          key: "Ask: What went well? What was hard? What would I do differently? If the problem is not solved, that is okay — pick the next idea from your list and try again.",
          example: "Owino's earlier bedtime worked for school days but not weekends. He reviewed and added a weekend alarm. Now his plan works every day.",
          reflection: "Think of something you tried recently. What did you learn from how it went?",
          activity: "After your next solved (or unsolved!) problem, answer: went well / was hard / next time I will...",
          quiz: { q: "If your first solution does not work, you should...", options: ["Give up — the problem cannot be solved", "Review, learn, and try another idea", "Pretend it worked"], answer: 1 },
          takeaway: "Every attempt teaches you something. Review, adjust, and go again.",
          related: ["trying-again", "learning-mistakes-dm"]
        },
        {
          id: "working-with-others",
          title: "Working with others",
          intro: "Two heads are often better than one. Many problems are solved faster and better together.",
          key: "Good teamwork means sharing ideas, listening to everyone, dividing tasks fairly, and encouraging each other. Different views make solutions stronger.",
          example: "The school compound was littered. One class made teams: some collected, some made bins from boxes, some drew posters. Together they fixed what no one could alone.",
          reflection: "What do you bring to a team — ideas, energy, organization, humour?",
          activity: "Next group task, make sure every member speaks before any decision is made.",
          quiz: { q: "Teams solve problems better when...", options: ["One person decides everything", "Everyone's ideas are heard", "Members compete against each other"], answer: 1 },
          takeaway: "Together, ordinary people solve extraordinary problems.",
          related: ["group-work", "supporting-others"]
        }
      ]
    },
    /* ================= 6. HEALTHY RELATIONSHIPS ================= */
    {
      id: "relationships",
      title: "Healthy Relationships",
      emoji: "🤝",
      color: "pink",
      blurb: "Build friendships based on respect, trust, and kindness.",
      lessons: [
        {
          id: "friendship",
          title: "Friendship",
          intro: "Good friends make life brighter. Friendship is something you build, like a house, brick by brick.",
          key: "Real friends listen, share, keep their word, celebrate your wins, and stand by you in hard times. To have a good friend, be a good friend.",
          example: "When Zuri was sick for two weeks, her friend Nia brought her class notes every day. That is friendship in action.",
          reflection: "What kind of friend are you? What kind of friend do you want to be?",
          activity: "Do one small kind thing for a friend today without being asked.",
          quiz: { q: "A real friend is someone who...", options: ["Only appears when they need something", "Listens, shares, and stands by you", "Makes fun of you in front of others"], answer: 1 },
          takeaway: "Friendship grows where kindness is planted.",
          related: ["respect", "trust"]
        },
        {
          id: "respect",
          title: "Respect",
          intro: "Respect means treating people as valuable — their feelings, their things, their choices, and their differences.",
          key: "Respect is shown in small ways: greeting people, listening, not laughing at differences, asking before borrowing, keeping promises. Respect given usually comes back.",
          example: "A new student spoke with a different accent. Instead of laughing, Katana asked about her home town and learned three new words in her language.",
          reflection: "How do you feel when someone respects you? When someone doesn't?",
          activity: "Today, show respect to one person younger than you and one person older than you.",
          quiz: { q: "Respect means...", options: ["Fearing people", "Treating people as valuable", "Only obeying the strongest"], answer: 1 },
          takeaway: "Every person you meet deserves basic respect — including you.",
          related: ["friendship", "rel-boundaries"]
        },
        {
          id: "trust",
          title: "Trust",
          intro: "Trust is believing someone will do what they say and keep you safe. It is earned slowly and lost quickly.",
          key: "Build trust by being honest, keeping promises, keeping secrets that are safe to keep, and admitting mistakes. Notice who has earned YOUR trust before sharing private things.",
          example: "Simiyu told Barasa a private worry. Barasa never repeated it and checked on him kindly. Simiyu learned Barasa could be trusted.",
          reflection: "Who has earned your trust? How did they earn it?",
          activity: "Keep every promise you make this week — even tiny ones.",
          quiz: { q: "Trust is built by...", options: ["Big promises", "Honesty and kept promises over time", "Buying gifts"], answer: 1 },
          takeaway: "Be the person others can count on.",
          related: ["friendship", "secrets"]
        },
        {
          id: "rel-boundaries",
          title: "Boundaries in relationships",
          intro: "Even in close friendships, you are allowed to have limits — things that are yours alone.",
          key: "Healthy relationships respect boundaries: your body, your time, your things, your privacy. A friend who ignores your no again and again is not treating you well.",
          example: "Chiku's friend read her private journal without asking. Chiku said: 'I like you, but my journal is private. Please never do that again.'",
          reflection: "What boundaries matter most to you in a friendship?",
          activity: "Complete: 'In my friendships, it is not okay for anyone to ____.'",
          quiz: { q: "If a friend keeps ignoring your 'no'...", options: ["That is normal friendship", "That is a warning sign to take seriously", "You must accept it to keep the friend"], answer: 1 },
          takeaway: "Real friends respect your limits.",
          related: ["boundaries", "unhealthy-behaviour"]
        },
        {
          id: "peer-pressure",
          title: "Peer pressure",
          intro: "Peer pressure is when people your age push you to act like them — in good ways or risky ways.",
          key: "Notice the push: 'Everyone does it', 'Don't be a coward', 'Just this once'. You can say no, suggest something else, leave, or find friends who respect your choices.",
          example: "Boys dared Lemayian to throw stones at passing cars. He laughed it off — 'Not my game' — and went to join the football match instead.",
          reflection: "Have you ever done something just because others were doing it? How did it feel after?",
          activity: "Prepare two exit lines, like 'Not for me' and 'I have somewhere to be', and practice them.",
          quiz: { q: "Which is a peer pressure phrase?", options: ["'Take your time to decide.'", "'Everyone is doing it, don't be slow!'", "'It is okay to say no.'"], answer: 1 },
          takeaway: "Standing alone for a moment is better than falling with the crowd.",
          related: ["resisting-pressure", "saying-no"]
        },
        {
          id: "conflict",
          title: "Conflict",
          intro: "Conflict is a serious disagreement. Handled well, it can even make relationships stronger.",
          key: "Cool down first. Talk in private, not in front of a crowd. Use 'I' statements, listen to their side, and look for a solution both can accept. If it stays stuck, ask a fair adult to help.",
          example: "Two friends stopped speaking over a rumour. Finally one said, 'Can we talk? I want to understand what happened.' The rumour turned out to be false.",
          reflection: "Is there a conflict in your life that needs a calm conversation?",
          activity: "Think of a current conflict. Write the other person's side of the story as fairly as you can.",
          quiz: { q: "A good first step in conflict is to...", options: ["Gather friends to your side", "Cool down, then talk in private", "Post about it online"], answer: 1 },
          takeaway: "The goal of conflict is understanding, not winning.",
          related: ["handling-disagreements", "bullying"]
        },
        {
          id: "bullying",
          title: "Bullying",
          intro: "Bullying is when someone repeatedly hurts, frightens, or leaves out another person on purpose. It is never okay.",
          key: "If you are bullied: it is NOT your fault. Do not face it alone — tell a trusted adult and keep telling until it stops. If you see bullying, do not join or laugh; support the person and report it.",
          example: "Students kept hiding Mueni's bag and mocking her. She told her class teacher, who acted quickly. Two classmates started walking with her. The bullying stopped.",
          reflection: "Why do you think some people bully others?",
          activity: "Write what you would say to support a classmate who is being bullied.",
          quiz: { q: "If you are being bullied, you should...", options: ["Keep it secret", "Tell a trusted adult and keep telling until it stops", "Believe it is your fault"], answer: 1 },
          takeaway: "Nobody deserves bullying. Speaking up protects you and others.",
          related: ["reporting-harm", "supporting-others", "trusted-adults"]
        },
        {
          id: "supporting-others",
          title: "Supporting others",
          intro: "A kind word at the right time can change someone's whole day — or life.",
          key: "Support looks like: listening without judging, sitting with someone who is alone, encouraging someone who failed, and telling an adult when a friend is in danger — even if the friend asked you not to.",
          example: "When Taji failed his exam and hid at break, Dari sat next to him and said, 'One exam doesn't decide your future. Let's revise together next time.'",
          reflection: "Who around you might need support right now?",
          activity: "Notice one person today who seems down. Offer a kind word or invite them to join you.",
          quiz: { q: "If a friend tells you they are in danger but says 'don't tell anyone', you should...", options: ["Keep the secret no matter what", "Tell a trusted adult — safety comes first", "Ignore it"], answer: 1 },
          takeaway: "Being there for others is a quiet superpower.",
          related: ["listening-well", "friendship"]
        },
        {
          id: "unhealthy-behaviour",
          title: "Recognizing unhealthy behaviour",
          intro: "Some relationships hurt instead of help. Learning the warning signs protects you and your friends.",
          key: "Warning signs: constant insults or put-downs, controlling who you talk to, threats, forcing secrets, taking your things, making you afraid. A relationship that makes you feel small or scared is not healthy.",
          example: "An older friend kept telling Nekesa she was 'nothing without him' and demanded to know where she was at all times. Her aunt helped her see this was controlling behaviour — and helped her step away.",
          reflection: "How does a healthy friendship make you feel? How should you never feel?",
          activity: "Write two lists: 'A healthy friend makes me feel...' and 'Warning signs I will watch for...'",
          quiz: { q: "Which is a warning sign of an unhealthy relationship?", options: ["They encourage your dreams", "They control and frighten you", "They respect your no"], answer: 1 },
          takeaway: "You deserve relationships that make you feel safe and valued.",
          related: ["rel-boundaries", "reporting-harm", "trusted-adults"]
        }
      ]
    },

    /* ================= 7. CONFIDENCE AND RESILIENCE ================= */
    {
      id: "resilience",
      title: "Confidence & Resilience",
      emoji: "💪",
      color: "orange",
      blurb: "Bounce back from setbacks and believe in your own strength.",
      lessons: [
        {
          id: "trying-again",
          title: "Trying again",
          intro: "Falling down is part of learning. Getting up again is what makes the difference.",
          key: "Resilience means trying again after failing — maybe in a new way. Every expert was once a beginner who refused to quit.",
          example: "Jela failed her cycling test twice. She practiced turns every evening for two weeks. The third time, she passed with a smile.",
          reflection: "What is something you gave up on that might deserve another try?",
          activity: "Choose one thing you failed at before. Plan one small new attempt this week.",
          quiz: { q: "True or false: Failing once means you should stop trying.", tf: true, answer: 1, options: ["True", "False"] },
          takeaway: "Fall seven times, stand up eight.",
          related: ["learning-mistakes-cr", "facing-challenges"]
        },
        {
          id: "learning-mistakes-cr",
          title: "Learning from mistakes",
          intro: "Mistakes feel bad, but hidden inside every mistake is a lesson waiting to be found.",
          key: "Instead of 'I am useless', ask 'What can this teach me?' Champions study their losses more than their wins.",
          example: "Dala's team lost the debate. Instead of sulking, they rewatched their arguments, fixed the weak points, and won the next round.",
          reflection: "What is the most useful mistake you have ever made?",
          activity: "After your next mistake, write one sentence: 'Next time, I will ____.'",
          quiz: { q: "The smartest response to a mistake is to...", options: ["Hide it and hope", "Find the lesson inside it", "Blame someone else"], answer: 1 },
          takeaway: "Mistakes are proof that you are trying.",
          related: ["learning-mistakes-dm", "trying-again"]
        },
        {
          id: "handling-criticism",
          title: "Handling criticism",
          intro: "Criticism is when someone points out what you did wrong. It stings — but sometimes it helps you grow.",
          key: "Ask: is this criticism trying to help me or hurt me? Helpful criticism, take the lesson and say thanks. Hurtful mockery, let it pass — it says more about them than about you.",
          example: "The coach said Sudi's passing was weak. It hurt, but Sudi practiced passing drills. A month later he set up the winning goal.",
          reflection: "Think of criticism you received. Was it meant to help or to hurt?",
          activity: "Next time you are corrected, breathe, say 'thank you', and look for one useful point.",
          quiz: { q: "Helpful criticism...", options: ["Should always be ignored", "Can show you how to improve", "Means you are a bad person"], answer: 1 },
          takeaway: "Take the lesson, leave the sting.",
          related: ["positive-self-talk", "learning-mistakes-cr"]
        },
        {
          id: "coping-change",
          title: "Coping with change",
          intro: "New school, new home, new baby in the family — change can feel exciting and scary at the same time.",
          key: "Change is easier when you: accept your mixed feelings, keep small routines the same, ask questions about what is coming, and give yourself time to adjust.",
          example: "When Panya's family moved towns, she kept her habit of morning runs. That one familiar routine helped everything else feel less strange.",
          reflection: "What change are you facing now or soon?",
          activity: "For a change you face, write one thing that will stay the same and one good thing the change might bring.",
          quiz: { q: "During big changes, it helps to...", options: ["Panic about everything", "Keep some familiar routines", "Refuse to accept anything new"], answer: 1 },
          takeaway: "You have survived every change so far. You can handle this one too.",
          related: ["coping-stress", "facing-challenges"]
        },
        {
          id: "facing-challenges",
          title: "Facing challenges",
          intro: "A challenge is anything hard: a tough subject, a big competition, a difficult situation at home.",
          key: "Break the mountain into steps. Start with the smallest one. Ask for support. Celebrate each bit of progress. Hard does not mean impossible.",
          example: "Maths felt like a mountain to Tabu. She started with ten minutes a day on one topic. In a term, her grade rose two levels.",
          reflection: "What challenge would you attempt if you knew you could not fail?",
          activity: "Name a current challenge. Write the smallest possible first step. Do it within 24 hours.",
          quiz: { q: "When facing something hard, it helps to...", options: ["Wait for it to disappear", "Break it into small steps and start", "Decide you were born unable"], answer: 1 },
          takeaway: "Big things are done in small steps.",
          related: ["goals-lesson", "trying-again"]
        },
        {
          id: "positive-self-talk",
          title: "Positive self-talk",
          intro: "Self-talk is the voice in your head. It can be your harshest critic or your best coach.",
          key: "Catch unkind thoughts like 'I always fail' and replace them with true, kind ones: 'I am still learning' or 'I have solved hard things before.' Speak to yourself like you would to a good friend.",
          example: "Before exams, Isika's mind said 'You will fail like last time.' She answered it: 'I prepared better this time. I will do my best.' Her calm improved her focus.",
          reflection: "What does your inner voice usually say when things go wrong?",
          activity: "Write three kind-but-true sentences about yourself. Read them each morning.",
          quiz: { q: "Positive self-talk means...", options: ["Lying to yourself", "Speaking to yourself with kindness and truth", "Never admitting mistakes"], answer: 1 },
          takeaway: "Be your own coach, not your own bully.",
          related: ["self-confidence", "handling-criticism"]
        },
        {
          id: "building-courage",
          title: "Building courage",
          intro: "Courage is doing the right or needed thing even when you feel afraid.",
          key: "Courage grows with practice, like a muscle. Start small: raise your hand, greet someone new, admit a mistake. Each brave act makes the next one easier.",
          example: "Naserian was terrified of the school talent show. She first performed for her family, then her class, then the whole school. Step by step, courage grew.",
          reflection: "What would 'one size braver' look like for you?",
          activity: "Do one small brave act today and write down how you felt after.",
          quiz: { q: "Courage means...", options: ["Never feeling fear", "Acting well even when afraid", "Doing dangerous dares"], answer: 1 },
          takeaway: "Bravery is built one small brave step at a time.",
          related: ["managing-fear", "self-confidence"]
        },
        {
          id: "celebrating-progress",
          title: "Celebrating progress",
          intro: "Progress is moving forward, even a little. Noticing it keeps you motivated.",
          key: "Do not wait for the finish line to feel proud. Compare yourself to your past self, not to others. Small wins deserve small celebrations.",
          example: "Last term Odhis could barely swim a width. Now he swims two. He is not the fastest in class — but he is far ahead of his old self.",
          reflection: "What can you do now that you could not do a year ago?",
          activity: "Write down three things you have improved at this year, however small.",
          quiz: { q: "The best person to compare yourself with is...", options: ["The top student", "Your past self", "Famous people online"], answer: 1 },
          takeaway: "Small steps forward are still steps forward. Celebrate them.",
          related: ["emotional-wellbeing", "goals-lesson"]
        }
      ]
    },

    /* ================= 8. SCHOOL AND LEARNING ================= */
    {
      id: "school",
      title: "School & Learning",
      emoji: "📚",
      color: "blue",
      blurb: "Study smarter, manage your time, and enjoy learning.",
      lessons: [
        {
          id: "study-habits",
          title: "Study habits",
          intro: "How you study matters as much as how long you study. Good habits make learning stick.",
          key: "Strong habits: study at the same time daily, remove distractions, take short breaks, test yourself instead of just re-reading, and teach what you learned to someone else.",
          example: "Instead of reading notes five times, Wairimu covered them and tried to explain the topic aloud. Her marks improved because her brain worked harder.",
          reflection: "Which of your study habits helps you most? Which hurts you?",
          activity: "Tonight, study one topic, close the book, and write everything you remember. Then check what you missed.",
          quiz: { q: "Which study method makes learning stick best?", options: ["Reading notes many times", "Testing yourself and explaining aloud", "Studying only the night before"], answer: 1 },
          takeaway: "Small daily study beats big last-minute panic.",
          related: ["time-management", "exam-prep"]
        },
        {
          id: "time-management",
          title: "Time management",
          intro: "Everyone gets the same 24 hours. Managing time means using yours on purpose.",
          key: "Plan your day the night before. Do the hardest task when your mind is freshest. Use small pieces of time — 15 minutes counts. Leave time for rest and play too.",
          example: "Mutua wrote a simple evening plan: chores, 40 minutes study, 20 minutes football talk with friends, sleep by 9:30. Less stress, better marks, still fun.",
          reflection: "Where does most of your free time actually go?",
          activity: "Tonight, write tomorrow's plan with just three main things. Tick them off as you go.",
          quiz: { q: "A good time plan includes...", options: ["Only studying, no rest", "Study, chores, rest, and play", "No plan — just react"], answer: 1 },
          takeaway: "Control your time, or it will control you.",
          related: ["setting-priorities", "study-habits"]
        },
        {
          id: "asking-questions-school",
          title: "Asking questions",
          intro: "In class, the question you are afraid to ask is often the one many others need answered too.",
          key: "If you do not understand, ask — in class, after class, or through a note. Teachers respect students who want to understand. Confusion left alone grows; confusion asked about shrinks.",
          example: "Rispa never understood fractions but stayed silent for a term. When she finally asked after class, her teacher explained it in five minutes. 'Why did I wait so long?' she wondered.",
          reflection: "What topic are you silently confused about right now?",
          activity: "Write down one question about school work and ask it tomorrow.",
          quiz: { q: "If you do not understand a lesson, the best move is to...", options: ["Stay quiet and hope", "Ask the teacher, even after class", "Copy homework from a friend"], answer: 1 },
          takeaway: "Every question you ask buys back your understanding.",
          related: ["asking-questions-comm", "study-habits"]
        },
        {
          id: "group-work",
          title: "Working in groups",
          intro: "Group work teaches skills you will use your whole life: sharing, leading, listening, and delivering your part.",
          key: "Good group members: do their share, meet deadlines, listen to quiet voices, and disagree politely. If someone struggles, help them instead of mocking them.",
          example: "In a science project, each member took one section — research, drawing, writing, presenting. They rehearsed together and got the best mark in class.",
          reflection: "In groups, are you usually a leader, helper, ideas person, or quiet worker? All are valuable.",
          activity: "Next group task, invite the quietest member to share their idea first.",
          quiz: { q: "A strong group member...", options: ["Does nothing but takes credit", "Does their share and listens to others", "Argues about everything"], answer: 1 },
          takeaway: "Teamwork divides the work and multiplies the result.",
          related: ["working-with-others", "listening-well"]
        },
        {
          id: "exam-prep",
          title: "Preparing for exams",
          intro: "Exams test what you know — and preparation is what puts knowledge there.",
          key: "Start early, make a revision timetable, practice past questions, sleep well the night before, and eat before the exam. In the room: read instructions twice, do easy questions first, watch the time.",
          example: "Three weeks before exams, Kirui revised one subject a day and did past papers on weekends. He walked into the exam room calm instead of panicked.",
          reflection: "How early do you usually start preparing? How early would be ideal?",
          activity: "Draw a two-week revision timetable for your next exams. One subject per day.",
          quiz: { q: "The night before an exam it is best to...", options: ["Stay up all night cramming", "Review lightly and sleep well", "Not think about it at all"], answer: 1 },
          takeaway: "Exams are won in the weeks before, not the night before.",
          related: ["study-habits", "school-stress"]
        },
        {
          id: "school-stress",
          title: "Managing school stress",
          intro: "School can pile pressure: exams, homework, expectations. You can handle pressure without breaking.",
          key: "Watch for signs: headaches, bad sleep, worry that won't stop. Ease it by planning your work, moving your body, talking about it, breathing exercises, and remembering: your worth is more than your marks.",
          example: "Exam pressure gave Dama stomach aches. Her facilitator taught her belly breathing and helped her make a study plan. The aches faded as her control grew.",
          reflection: "What does school stress feel like in your body?",
          activity: "Before homework today, do one minute of slow breathing. Notice if focusing becomes easier.",
          quiz: { q: "True or false: Your exam marks decide your full worth as a person.", tf: true, answer: 1, options: ["True", "False"] },
          takeaway: "Work hard, breathe deep, and remember you are more than a grade.",
          related: ["coping-stress", "calming-exercises", "exam-prep"]
        },
        {
          id: "learning-goals",
          title: "Setting learning goals",
          intro: "A learning goal turns 'I wish I were better at maths' into a plan you can actually follow.",
          key: "Make goals SMART: Specific, Measurable, Achievable, Relevant, Time-bound. 'Improve maths' becomes 'Practice 5 algebra questions every school day this month.'",
          example: "Goal: 'Raise my English grade one level this term by reading 20 minutes daily and writing one composition weekly.' Sila hit it — because he could measure it.",
          reflection: "What is one school subject where a clear goal could help you?",
          activity: "Write one SMART learning goal: what, how much, by when.",
          quiz: { q: "Which is a SMART goal?", options: ["'Be smarter'", "'Read 20 minutes daily this month'", "'Maybe study sometime'"], answer: 1 },
          takeaway: "A goal with a plan and a date becomes real.",
          related: ["goals-lesson", "action-plan"]
        }
      ]
    },

    /* ================= 9. DREAMS AND FUTURE PLANNING ================= */
    {
      id: "future",
      title: "Dreams & Future Planning",
      emoji: "🚀",
      color: "indigo",
      blurb: "Dream big, set goals, and build your path step by step.",
      lessons: [
        {
          id: "my-dreams",
          title: "My dreams",
          intro: "A dream is a picture of the future you hope for. Dreams give direction and energy to your life.",
          key: "Your dreams are allowed to be big. Where you start does not decide where you can finish. Write dreams down — a written dream is the first step to a plan.",
          example: "A girl from a small village dreamed of becoming a pilot. She wrote it down, worked hard in maths and physics, found sponsors — today she flies.",
          reflection: "If nothing could stop you, what would you become?",
          activity: "Write or draw your biggest dream. Keep it somewhere you see daily.",
          quiz: { q: "True or false: Only children from rich families are allowed big dreams.", tf: true, answer: 1, options: ["True", "False"] },
          takeaway: "Every big achievement started as someone's dream.",
          related: ["goals-lesson", "role-models"]
        },
        {
          id: "goals-lesson",
          title: "My goals",
          intro: "A goal is a dream with a deadline. Goals turn hopes into plans.",
          key: "Break big goals into small steps you can start now. Write them down, track progress, and adjust when needed. Reaching small goals builds power for big ones.",
          example: "Dream: become a nurse. Goals: pass science this term → join health club → finish secondary school → apply for training. Each step is climbable.",
          reflection: "What is one goal you could reach within one month?",
          activity: "Take one dream and write three stepping-stone goals under it.",
          quiz: { q: "A goal is different from a dream because a goal has...", options: ["No purpose", "Steps and a deadline", "To be secret"], answer: 1 },
          takeaway: "Dream big, plan small, start today.",
          related: ["my-dreams", "action-plan", "learning-goals"]
        },
        {
          id: "career-explore",
          title: "Career exploration",
          intro: "There are hundreds of careers — many you have never heard of. Exploring helps you find your fit.",
          key: "Explore by asking workers about their jobs, noticing what you enjoy and do well, trying clubs and activities, and learning what education each career needs. Your interests are clues.",
          example: "Sayo loved drawing and buildings. A visiting engineer told her about architecture — a career she had never heard of. Now it is her goal.",
          reflection: "What jobs do people in your community do? Which ones interest you?",
          activity: "Interview one adult about their work: What do you do? How did you get here? What do you enjoy?",
          quiz: { q: "A good way to explore careers is to...", options: ["Wait for a career to find you", "Ask workers about their jobs and try activities", "Pick only what friends pick"], answer: 1 },
          takeaway: "The more you explore, the more doors you discover.",
          related: ["my-interests", "education-pathways"]
        },
        {
          id: "education-pathways",
          title: "Education pathways",
          intro: "There are many roads to a good future: universities, colleges, technical training, apprenticeships, and more.",
          key: "University is one path, not the only one. Technical and vocational training (learning hands-on job skills) leads to strong careers too — electricians, chefs, designers, mechanics. Choose the path that fits your strengths and dream.",
          example: "Two friends finished school. One went to university for teaching; the other trained as a solar technician. Five years later, both had good work they loved.",
          reflection: "Which pathways have people around you taken? What can you learn from them?",
          activity: "List three different education pathways that could lead toward your dream.",
          quiz: { q: "True or false: University is the only path to a successful life.", tf: true, answer: 1, options: ["True", "False"] },
          takeaway: "Many roads lead to a bright future. Find yours.",
          related: ["career-explore", "skills-to-build"]
        },
        {
          id: "skills-to-build",
          title: "Skills I want to build",
          intro: "Skills are abilities you grow through practice: speaking, computing, cooking, coding, leading, farming.",
          key: "The best time to build skills is now. Pick skills that match your dream and start small: practice, ask people to teach you, use school clubs, borrow books. Skills stack up like savings.",
          example: "Kilonzo wanted business skills. He started by helping at his aunt's shop on weekends — counting stock, serving customers, keeping records. Real skills, built early.",
          reflection: "What skill would move you closer to your dream?",
          activity: "Choose one skill. Write how you will practice it 15 minutes each week.",
          quiz: { q: "Skills grow mainly through...", options: ["Wishing", "Practice over time", "Luck"], answer: 1 },
          takeaway: "Every hour of practice is a brick in your future.",
          related: ["goals-lesson", "career-explore"]
        },
        {
          id: "action-plan",
          title: "Creating a personal action plan",
          intro: "An action plan is your personal map: where you are, where you are going, and the steps between.",
          key: "A simple plan answers five questions: What is my goal? What steps will I take? What do I need? Who can help me? When will I check my progress?",
          example: "Goal: join the debate team. Steps: practice speaking aloud daily, attend club meetings, ask the patron for tips, try out next term. Helper: sister. Check: end of month.",
          reflection: "What would the first line of your action plan say?",
          activity: "Use the Goal Ladder activity in this app to build your own action plan.",
          quiz: { q: "A personal action plan should include...", options: ["Only the dream", "Goal, steps, needs, helpers, and check dates", "Other people's goals"], answer: 1 },
          takeaway: "A plan turns 'someday' into 'starting now'.",
          related: ["goals-lesson", "learning-goals"]
        },
        {
          id: "role-models",
          title: "Finding positive role models",
          intro: "A role model is someone whose good example shows you what is possible.",
          key: "Choose role models for their character and effort, not just fame or money. They can be near — a teacher, nurse, or businesswoman in your community. Learn their habits, not just their success.",
          example: "Mbeki admired a local carpenter known for honest work and training youth for free. He learned from him every Saturday — skills and character together.",
          reflection: "Who do you look up to, and what exactly do you admire about them?",
          activity: "Name one role model. Write two of their habits you want to copy.",
          quiz: { q: "The best role models are people with...", options: ["The most money", "Good character and real effort", "The most followers"], answer: 1 },
          takeaway: "Show me your role models, and I will show you your future.",
          related: ["my-dreams", "my-values"]
        }
      ]
    },

    /* ================= 10. SAFETY AND SUPPORT ================= */
    {
      id: "safety",
      title: "Safety & Support",
      emoji: "🛡️",
      color: "red",
      blurb: "Know how to stay safe and where to find help when you need it.",
      lessons: [
        {
          id: "personal-safety",
          title: "Personal safety",
          intro: "Your body and your safety belong to you. Learning safety rules helps you protect yourself.",
          key: "Trust your feelings — if a place, person, or situation feels wrong, leave and tell a trusted adult. Move in groups when possible, let family know where you are, and avoid isolated places, especially after dark.",
          example: "A stranger offered Mokeira a lift 'as a favour'. It felt wrong. She refused, walked to a nearby shop, and told the shopkeeper and later her mother.",
          reflection: "What safety rules do you already follow every day?",
          activity: "Agree on a family plan: what you will do and who you will call if you ever feel unsafe.",
          quiz: { q: "If a situation feels wrong, you should...", options: ["Stay to be polite", "Leave and tell a trusted adult", "Keep it to yourself"], answer: 1 },
          takeaway: "Your safety comes before politeness. Always.",
          related: ["trusted-adults", "safe-decisions"]
        },
        {
          id: "trusted-adults",
          title: "Trusted adults",
          intro: "A trusted adult is a grown-up who listens to you, respects you, and acts to keep you safe.",
          key: "Trusted adults can be parents, guardians, teachers, facilitators, faith leaders, or relatives. Choose at least three, so you always have someone to turn to. A trusted adult never asks you to keep unsafe secrets.",
          example: "Kanini listed her three: her mother, her class teacher, and her I Matter facilitator. When trouble came, she knew exactly who to go to.",
          reflection: "Who are YOUR three trusted adults?",
          activity: "Use the Trusted Adults Map activity in this app to record your support circle.",
          quiz: { q: "A trusted adult is someone who...", options: ["Gives you gifts to keep secrets", "Listens, respects, and keeps you safe", "Is simply the oldest person around"], answer: 1 },
          takeaway: "Know your three trusted adults before you need them.",
          related: ["asking-help", "reporting-harm"]
        },
        {
          id: "reporting-harm",
          title: "Reporting harm",
          intro: "If someone hurts you or another child — in body, words, or in ways that feel wrong — reporting it is the right thing to do.",
          key: "Harm is never the child's fault. Tell a trusted adult clearly what happened. If the first person does not help, tell another, and keep telling until someone acts. Reporting protects you and other children too.",
          example: "An older youth kept threatening younger boys for money. One boy told his teacher. The school acted, and the threats stopped — for everyone.",
          reflection: "Why do you think some people stay silent about harm? What could help them speak?",
          activity: "Memorize this: 'Tell. And if they don't act, tell someone else. Never stop telling.'",
          quiz: { q: "If you report harm and the adult does not act, you should...", options: ["Give up", "Tell another trusted adult and keep telling", "Decide it was your fault"], answer: 1 },
          takeaway: "Speaking up about harm is brave, right, and never your fault.",
          related: ["bullying", "trusted-adults", "secrets"]
        },
        {
          id: "online-safety",
          title: "Online safety",
          intro: "The internet is useful and fun, but it needs the same care as a busy street.",
          key: "Keep private things private: full name, school, address, photos, passwords. People online are not always who they claim. Never agree to meet an online stranger. If anything online scares or confuses you, show a trusted adult.",
          example: "Someone online asked Mumo for photos and said 'keep it our secret'. Mumo blocked them and told his older sister — exactly the right move.",
          reflection: "What personal information should never be shared online?",
          activity: "Check with an adult: review privacy settings on any accounts or apps you use.",
          quiz: { q: "If a stranger online asks to meet you or keep secrets, you should...", options: ["Agree if they seem nice", "Block them and tell a trusted adult", "Send them a photo first"], answer: 1 },
          takeaway: "Online strangers are still strangers. Guard your private world.",
          related: ["online-communication", "secrets"]
        },
        {
          id: "secrets",
          title: "Safe and unsafe secrets",
          intro: "Some secrets are fun — like a surprise gift. Others are heavy and hurtful. Learn to tell the difference.",
          key: "A safe secret is happy and will soon be told (a surprise party). An unsafe secret makes you feel scared, confused, or asks you to hide harm. Unsafe secrets should ALWAYS be told to a trusted adult — even if you promised.",
          example: "'Don't tell anyone or you'll be in trouble' — that sentence itself is a warning sign. When Atieno heard it, she knew this was an unsafe secret, and she told her mother.",
          reflection: "How does your body feel with a fun secret? How about a heavy one?",
          activity: "Practice this rule aloud: 'Secrets that scare me or hide harm — I always tell.'",
          quiz: { q: "Which secret should you always tell a trusted adult?", options: ["A surprise birthday party", "A secret that scares you or hides harm", "A friend's favourite colour"], answer: 1 },
          takeaway: "No secret is more important than your safety.",
          related: ["reporting-harm", "trusted-adults"]
        },
        {
          id: "asking-help",
          title: "Asking for help",
          intro: "Knowing how and when to ask for help is one of the most important life skills of all.",
          key: "Ask for help when you feel unsafe, overwhelmed, or stuck. Be direct: 'Something happened and I need your help.' If you cannot say it, write it in a note. Help-seekers are problem-solvers.",
          example: "Ngala could not say the words out loud, so he wrote his problem in a note and gave it to his teacher after class. The teacher understood and helped.",
          reflection: "If speaking felt too hard, what other ways could you ask for help?",
          activity: "Write a short 'help sentence' you could use or adapt anytime: 'I need to talk to you about something important.'",
          quiz: { q: "If it feels too hard to say a problem out loud, you can...", options: ["Give up on getting help", "Write it in a note to a trusted adult", "Wait years until it fixes itself"], answer: 1 },
          takeaway: "Help is always closer than it feels. Reach for it.",
          related: ["asking-support", "trusted-adults"]
        },
        {
          id: "emergency-info",
          title: "Emergency support information",
          intro: "In an emergency, knowing who to contact — fast — can protect you and others.",
          key: "Know your emergency contacts: a parent or guardian's number, your school's contact, and the support numbers in this app's Help section. Ask your teacher or facilitator to confirm the right local numbers.",
          example: "When a neighbour was badly injured, Sokorte stayed calm, called her mother, and alerted a nearby adult. Knowing exactly who to call saved precious minutes.",
          reflection: "Do you know the numbers you would need in an emergency? Who can help you confirm them?",
          activity: "Open the Help section of this app with a teacher or parent and fill in your local support contacts together.",
          quiz: { q: "The best time to learn emergency contacts is...", options: ["During the emergency", "Before any emergency happens", "Never"], answer: 1 },
          takeaway: "Prepared today, protected tomorrow.",
          related: ["personal-safety", "trusted-adults"]
        },
        {
          id: "child-protection",
          title: "Child protection basics",
          intro: "Children and young people have the right to be safe, cared for, and heard. This is protected by law.",
          key: "You have the right to: safety from harm, food, shelter, education, medical care, and to be heard. No one — not even family — has the right to abuse you. Schools and communities have people whose job is to protect children.",
          example: "During an I Matter session, students learned that their school has a child protection teacher. Knowing this, Sialo helped a friend get support she badly needed.",
          reflection: "Who in your school or community is responsible for protecting children?",
          activity: "Find out the name of your school's child protection or guidance teacher this week.",
          quiz: { q: "Which of these is a child's right?", options: ["Safety, education, and being heard", "Only what adults decide to give", "Nothing until age 18"], answer: 0 },
          takeaway: "Your safety and your voice are your rights — know them, use them.",
          related: ["reporting-harm", "trusted-adults", "emergency-info"]
        }
      ]
    }
  ]
};
