/* ==========================================================================
   I MATTER — STORIES (English + Kiswahili)
   --------------------------------------------------------------------------
   Safe to edit. Six short stories — one for each pillar of the framework.
   All characters are fictional. Do not add real participant names or
   personal stories without written consent.

   STRUCTURE
   window.IM_STORIES = { en: [...], sw: [...] }
   Both language trees must keep the SAME ids, order, emoji, and pillar.
   Each story: id, pillar (category id), title, emoji, theme,
   text (paragraphs array), discussion, whatWouldYouDo { q, options[4] },
   lesson.
   ========================================================================== */

window.IM_STORIES = {

  en: [
    {
      id: "quiet-champion",
      pillar: "know-myself",
      title: "The Quiet Champion",
      emoji: "🌟",
      theme: "Discovering hidden strengths",
      text: [
        "Wanja was sure she had no talent. She wasn't the fastest runner, the best singer, or the top of her class. On prize-giving day she clapped for everyone else and felt invisible.",
        "One afternoon, her teacher asked her to help organise the class debate. Wanja made a list of speakers, calmed the nervous ones, and quietly reminded the loud ones to let others finish. The debate ran perfectly.",
        "Afterwards, the teacher said something Wanja never forgot: \"Did you see what you just did? Half of leadership is helping others shine. That is a talent.\"",
        "Wanja started noticing it everywhere. Friends came to her with problems because she listened without judging. Group work went better when she was in the group. She wasn't invisible — she was the glue.",
        "At the next prize-giving day, Wanja still didn't win a trophy. But when the debate club was named the best in the county, everyone turned and clapped — for her."
      ],
      discussion: "Why did Wanja believe she had no talent? What finally helped her see her strengths?",
      whatWouldYouDo: {
        q: "If you felt you had no special talent, what would you do?",
        options: [
          "Decide talents are only for other people",
          "Ask people who know me well what they see in me",
          "Copy whatever talent is most popular",
          "Notice what people thank me for and build on it"
        ]
      },
      lesson: "Strengths can be quiet. The things people thank you for are clues to talents you may not see yourself."
    },
    {
      id: "two-friends-one-rumour",
      pillar: "belong",
      title: "Two Friends, One Rumour",
      emoji: "👭",
      theme: "Communication and friendship",
      text: [
        "Wambui and Njoki had been best friends since Class 4. They shared lunches, secrets, and dreams of starting a bakery together one day.",
        "Then, one Monday, everything changed. Someone told Njoki that Wambui had called her 'a show-off' behind her back. Njoki was so hurt that she stopped talking to Wambui completely.",
        "For a whole week, they walked past each other in silence. Wambui didn't even know what she had done. Their other friends started taking sides, and the class felt divided.",
        "Finally, Wambui wrote a note: 'I don't know what happened, but I miss my friend. Can we talk at break?' Under the mango tree, Njoki explained what she had heard. Wambui was shocked: 'I never said that. Who told you?'",
        "They traced the rumour back and discovered it had been twisted as it passed from person to person — like a broken telephone. The original comment wasn't even about Njoki. The two friends made a pact: 'If we ever hear something about each other, we come and ask directly — before believing it.'"
      ],
      discussion: "Why do rumours grow and change as they spread? What damage can they do to relationships?",
      whatWouldYouDo: {
        q: "If you heard a rumour that your friend said something bad about you, what would you do first?",
        options: [
          "Stop talking to them immediately",
          "Ask them directly about it, calmly",
          "Spread a rumour back",
          "Ask others to take your side"
        ]
      },
      lesson: "Check the facts with the person directly before believing a rumour. A five-minute honest conversation can save a friendship."
    },
    {
      id: "tomorrow-juma",
      pillar: "take-action",
      title: "'Tomorrow' Juma",
      emoji: "🎯",
      theme: "Goals and procrastination",
      text: [
        "Everyone called him 'Tomorrow' Juma. Homework? Tomorrow. Revision? Tomorrow. Fixing the puncture on his bicycle? Definitely tomorrow.",
        "Juma had a big dream — he wanted to become an engineer. But dreams, he was discovering, do not build themselves. The end-of-term exams were four weeks away, and the pile of unrevised work grew taller each day, until just looking at it made him tired.",
        "His grandmother watched him one evening staring hopelessly at his books. \"Juma,\" she said, \"how do you eat an elephant?\" He laughed. \"One bite at a time, Bibi.\" She nodded at the books. \"So take one bite.\"",
        "That night Juma made a plan. Not a heroic plan — a small one. One topic per evening, phone in the kitchen drawer, hardest subject first. Some evenings he only managed twenty minutes. But twenty minutes, every day, four weeks in a row, is a mountain of minutes.",
        "When the results came, Juma hadn't just passed — he had climbed higher than ever before. Taped above his desk was a new note in his own handwriting: 'Tomorrow is where dreams go to sleep. Start today.'"
      ],
      discussion: "What made Juma keep postponing things? What actually changed — his dream, or his habits?",
      whatWouldYouDo: {
        q: "You have a huge task and four weeks. What would you do?",
        options: [
          "Wait until you feel motivated",
          "Break it into small daily steps and start today",
          "Plan to do it all in the final week",
          "Decide the goal was too big anyway"
        ]
      },
      lesson: "Big goals are reached through small, consistent steps. Starting — even small — beats waiting for the perfect moment."
    },
    {
      id: "the-ride-home",
      pillar: "choose-wisely",
      title: "The Ride Home",
      emoji: "🧭",
      theme: "Decisions under pressure",
      text: [
        "The party was the best Sifa had been to all year — music, dancing, half her class there. She had permission to stay until nine, and her cousin Mark had promised to drive her home.",
        "At half past eight she found Mark by the gate, laughing loudly, a bottle in his hand. It wasn't his first. \"We'll leave soon,\" he grinned, jingling the car keys. \"Relax, I drive better after a few!\"",
        "Sifa felt the pull of the easy choice. Everyone was getting into the car. Refusing would look childish. And how else would she get home?",
        "Then she remembered her mother's words — never, ever ride with a driver who has been drinking — and did the maths in her head: a few minutes of embarrassment, against everything she could lose. She stepped back. \"I'll find another way.\"",
        "She called her neighbour, Mama Achieng, who was picking up her own daughter. In the car, nobody laughed at her. The next morning she learned Mark had scraped a matatu at the junction. Everyone was fine — but nobody was calling her choice childish anymore."
      ],
      discussion: "What made this decision hard for Sifa? What helped her choose well under pressure?",
      whatWouldYouDo: {
        q: "Your ride home has been drinking. What would you do?",
        options: [
          "Get in — it's probably fine",
          "Find another safe way home, even if it's awkward",
          "Ask the driver to drive slowly",
          "Wait and hope someone else decides for you"
        ]
      },
      lesson: "Good decisions weigh consequences, not just comfort. A moment of awkwardness is a small price for your safety."
    },
    {
      id: "the-desk-war",
      pillar: "build-bridges",
      title: "The Desk War",
      emoji: "🤝",
      theme: "Conflict resolution",
      text: [
        "It started with a line drawn in chalk down the middle of a shared desk. \"Your books keep invading my side,\" said Baraka. \"Your elbow lives on mine,\" replied Otieno. By Friday they weren't speaking — they were just shoving.",
        "The class began picking sides. Team Baraka. Team Otieno. Old, unrelated grudges got dragged in. Nobody even remembered the desk anymore.",
        "Their teacher didn't punish them. Instead she sat them down with one rule: each boy had to explain the problem as the OTHER one saw it, and he couldn't speak until he'd done it fairly.",
        "Baraka went first, slowly: \"Otieno is left-handed... so he needs the left side, and my books were pushing into his writing space.\" Otieno blinked. \"And Baraka carries books for two subjects because he shares with his brother... so he needs more space, not less.\" The silence after that was different.",
        "The solution took two minutes: swap sides so Otieno's left hand had room, and one shared shelf for the extra books. The chalk line faded within a week. The friendship — oddly — came out stronger than before the war."
      ],
      discussion: "What made the conflict grow? What changed when each boy had to explain the other's side?",
      whatWouldYouDo: {
        q: "You are stuck in a conflict where both sides feel right. What would you do?",
        options: [
          "Keep arguing until the other person gives up",
          "Try to state the other person's view fairly, then look for a win-win",
          "Get your friends to back you up",
          "Stay silent and stay angry"
        ]
      },
      lesson: "Most conflicts shrink the moment each side truly understands the other. Attack the problem, not the person."
    },
    {
      id: "the-new-crew",
      pillar: "protect-future",
      title: "The New Crew",
      emoji: "🛡️",
      theme: "Peer pressure and healthy choices",
      text: [
        "When Dan moved to the estate, the first boys to welcome him were older, loud, and generous. They called themselves a crew. For a lonely newcomer, it felt like belonging.",
        "The first weeks were football and jokes. Then one evening, behind the kiosk, a bottle went around. Then something to sniff. \"Family shares everything,\" said the leader, holding it out. \"Don't be a child.\"",
        "Dan's heart pounded. He wanted these friends. But he also remembered his cousin Musa — how the same words had started Musa's story, and how that story had ended: dropped out, sick, stealing from his own mother, fighting his way back one hard day at a time.",
        "\"No thanks,\" Dan said, standing up. \"I'm good.\" They laughed at him. Someone called him a baby. Walking home alone that night, he felt like he'd lost everything all over again.",
        "He hadn't. The school football team needed a defender; the coach needed commitment. Within a month Dan had a new crew — one that ran drills instead of risks. Years later he would tell his little brother: \"Real friends never charge an entrance fee to your future.\""
      ],
      discussion: "Why was the crew's offer so hard to refuse? What protected Dan in that moment?",
      whatWouldYouDo: {
        q: "A group you want to join pressures you to try drugs. What would you do?",
        options: [
          "Try it once so they accept you",
          "Say no firmly and find belonging somewhere healthier",
          "Pretend to try it",
          "Keep quiet and hope they forget about you"
        ]
      },
      lesson: "Belonging that costs your health and future is too expensive. Real friends respect your NO."
    }
  ],

  /* ==================================================================== */
  sw: [
    {
      id: "quiet-champion",
      pillar: "know-myself",
      title: "Bingwa wa Kimya",
      emoji: "🌟",
      theme: "Kugundua uwezo uliojificha",
      text: [
        "Wanja alikuwa na uhakika hana kipaji. Hakuwa mkimbiaji mwepesi zaidi, mwimbaji bora, wala wa kwanza darasani. Siku ya tuzo aliwapigia makofi wengine wote na kujihisi haonekani.",
        "Alasiri moja, mwalimu wake alimwomba asaidie kupanga mdahalo wa darasa. Wanja aliandika orodha ya wazungumzaji, akawatuliza wenye woga, na kwa upole akawakumbusha wenye sauti kubwa kuwaacha wengine wamalize. Mdahalo ulienda kikamilifu.",
        "Baadaye, mwalimu alisema jambo ambalo Wanja hakulisahau kamwe: \"Umeona ulichofanya sasa hivi? Nusu ya uongozi ni kuwasaidia wengine kung'aa. Hicho ni kipaji.\"",
        "Wanja alianza kukiona kila mahali. Marafiki walimjia na matatizo yao kwa sababu alisikiliza bila kuhukumu. Kazi za vikundi zilienda vizuri zaidi alipokuwa ndani ya kikundi. Hakuwa haonekani — alikuwa gundi inayounganisha.",
        "Siku ya tuzo iliyofuata, Wanja bado hakushinda kombe. Lakini klabu ya midahalo ilipotangazwa kuwa bora zaidi kaunti nzima, kila mtu aligeuka na kupiga makofi — kwa ajili yake."
      ],
      discussion: "Kwa nini Wanja aliamini hana kipaji? Nini hatimaye kilimsaidia kuona uwezo wake?",
      whatWouldYouDo: {
        q: "Kama ungehisi huna kipaji maalum, ungefanya nini?",
        options: [
          "Kuamua vipaji ni vya watu wengine tu",
          "Kuwauliza watu wanaonijua vizuri wanaona nini ndani yangu",
          "Kuiga kipaji kinachopendwa zaidi",
          "Kutambua watu hunishukuru kwa nini na kukijenga"
        ]
      },
      lesson: "Uwezo unaweza kuwa wa kimya. Mambo ambayo watu hukushukuru kwayo ni dalili za vipaji ambavyo huenda huvioni mwenyewe."
    },
    {
      id: "two-friends-one-rumour",
      pillar: "belong",
      title: "Marafiki Wawili, Uvumi Mmoja",
      emoji: "👭",
      theme: "Mawasiliano na urafiki",
      text: [
        "Wambui na Njoki walikuwa marafiki wa karibu tangu darasa la nne. Walishirikiana chakula cha mchana, siri, na ndoto za kufungua duka la mikate pamoja siku moja.",
        "Kisha, Jumatatu moja, kila kitu kilibadilika. Mtu alimwambia Njoki kwamba Wambui alimwita 'mwenye majivuno' mgongoni mwake. Njoki aliumia sana hata akaacha kuongea na Wambui kabisa.",
        "Kwa wiki nzima, walipishana kwa ukimya. Wambui hakujua hata alichokifanya. Marafiki zao wengine walianza kuchagua pande, na darasa likahisi limegawanyika.",
        "Hatimaye, Wambui aliandika barua ndogo: 'Sijui kilichotokea, lakini namkumbuka rafiki yangu. Tunaweza kuongea wakati wa mapumziko?' Chini ya mwembe, Njoki alieleza alichokisikia. Wambui alishtuka: 'Sikusema hivyo kamwe. Nani alikwambia?'",
        "Walifuatilia uvumi na kugundua ulipotoshwa ulivyopita kutoka mtu hadi mtu — kama simu iliyoharibika. Maneno ya awali hayakuwa hata kuhusu Njoki. Marafiki hao wawili waliweka ahadi: 'Tukisikia jambo lolote kuhusu mwenzetu, tunakuja kuuliza moja kwa moja — kabla ya kuamini.'"
      ],
      discussion: "Kwa nini uvumi hukua na kubadilika unavyoenea? Unaweza kuleta madhara gani kwa mahusiano?",
      whatWouldYouDo: {
        q: "Ukisikia uvumi kwamba rafiki yako alisema jambo baya kukuhusu, ungefanya nini kwanza?",
        options: [
          "Kuacha kuongea naye mara moja",
          "Kumuuliza moja kwa moja, kwa utulivu",
          "Kueneza uvumi wa kulipiza",
          "Kuwaomba wengine wachague upande wako"
        ]
      },
      lesson: "Hakiki ukweli na mtu mwenyewe moja kwa moja kabla ya kuamini uvumi. Mazungumzo ya dakika tano ya uaminifu yanaweza kuokoa urafiki."
    },
    {
      id: "tomorrow-juma",
      pillar: "take-action",
      title: "Juma wa 'Kesho'",
      emoji: "🎯",
      theme: "Malengo na uchelewaji",
      text: [
        "Kila mtu alimwita Juma wa 'Kesho'. Kazi ya nyumbani? Kesho. Marudio? Kesho. Kutengeneza pancha ya baiskeli yake? Hakika kesho.",
        "Juma alikuwa na ndoto kubwa — alitaka kuwa mhandisi. Lakini ndoto, alikuwa anagundua, hazijijengi zenyewe. Mitihani ya mwisho wa muhula ilikuwa wiki nne mbele, na rundo la kazi ambazo hajazipitia lilikua refu kila siku, hadi kuliangalia tu kulimchosha.",
        "Bibi yake alimtazama jioni moja akikodolea vitabu vyake bila matumaini. \"Juma,\" alisema, \"tembo huliwaje?\" Alicheka. \"Kidogo kidogo, Bibi.\" Bibi akatikisa kichwa kuelekea vitabu. \"Basi anza kidogo.\"",
        "Usiku huo Juma alipanga mpango. Si mpango wa kishujaa — mdogo tu. Mada moja kila jioni, simu ndani ya droo jikoni, somo gumu zaidi kwanza. Jioni nyingine aliweza dakika ishirini tu. Lakini dakika ishirini, kila siku, wiki nne mfululizo, ni mlima wa dakika.",
        "Matokeo yalipokuja, Juma hakufaulu tu — alipanda juu kuliko wakati wowote. Juu ya meza yake kulibandikwa ujumbe mpya kwa mwandiko wake mwenyewe: 'Kesho ndiko ndoto huenda kulala. Anza leo.'"
      ],
      discussion: "Nini kilimfanya Juma aendelee kuahirisha mambo? Nini hasa kilibadilika — ndoto yake, au mazoea yake?",
      whatWouldYouDo: {
        q: "Una kazi kubwa sana na wiki nne. Ungefanya nini?",
        options: [
          "Kusubiri hadi upate motisha",
          "Kuigawa katika hatua ndogo za kila siku na kuanza leo",
          "Kupanga kuifanya yote wiki ya mwisho",
          "Kuamua lengo lilikuwa kubwa mno hata hivyo"
        ]
      },
      lesson: "Malengo makubwa hufikiwa kwa hatua ndogo za kudumu. Kuanza — hata kidogo — ni bora kuliko kusubiri wakati mkamilifu."
    },
    {
      id: "the-ride-home",
      pillar: "choose-wisely",
      title: "Safari ya Kurudi Nyumbani",
      emoji: "🧭",
      theme: "Maamuzi chini ya shinikizo",
      text: [
        "Sherehe ilikuwa bora zaidi ambayo Sifa amewahi kuhudhuria mwaka huo — muziki, dansi, nusu ya darasa lake wapo. Alikuwa na ruhusa ya kukaa hadi saa tatu, na binamu yake Mark alikuwa ameahidi kumrudisha nyumbani.",
        "Saa mbili na nusu alimkuta Mark langoni, akicheka kwa sauti, chupa mkononi. Haikuwa yake ya kwanza. \"Tutaondoka hivi karibuni,\" alitabasamu, akitikisa funguo za gari. \"Tulia, mimi huendesha vizuri zaidi baada ya chupa chache!\"",
        "Sifa alihisi mvuto wa chaguo rahisi. Kila mtu alikuwa anaingia kwenye gari. Kukataa kungeonekana kitoto. Na angerudije nyumbani vinginevyo?",
        "Kisha alikumbuka maneno ya mama yake — kamwe, kamwe usipande gari la dereva aliyekunywa — na akapiga hesabu kichwani: dakika chache za aibu, dhidi ya kila kitu angeweza kupoteza. Alirudi nyuma. \"Nitatafuta njia nyingine.\"",
        "Alimpigia jirani yake, Mama Achieng, aliyekuwa anamchukua binti yake mwenyewe. Ndani ya gari, hakuna aliyemcheka. Asubuhi iliyofuata alisikia Mark aligonga matatu kwenye makutano. Wote walikuwa salama — lakini hakuna aliyekuwa akiita tena chaguo lake kitoto."
      ],
      discussion: "Nini kilifanya uamuzi huu kuwa mgumu kwa Sifa? Nini kilimsaidia kuchagua vizuri chini ya shinikizo?",
      whatWouldYouDo: {
        q: "Dereva wako wa kurudi nyumbani amekunywa pombe. Ungefanya nini?",
        options: [
          "Kuingia — labda ni sawa tu",
          "Kutafuta njia nyingine salama ya kurudi, hata kama ni aibu",
          "Kumwomba dereva aendeshe polepole",
          "Kusubiri na kutumaini mtu mwingine ataamua kwa niaba yako"
        ]
      },
      lesson: "Maamuzi mazuri hupima madhara, si starehe tu. Dakika ya aibu ni bei ndogo kwa usalama wako."
    },
    {
      id: "the-desk-war",
      pillar: "build-bridges",
      title: "Vita vya Deski",
      emoji: "🤝",
      theme: "Utatuzi wa migogoro",
      text: [
        "Ilianza na mstari wa chaki uliochorwa katikati ya deski la kushirikiana. \"Vitabu vyako vinaendelea kuvamia upande wangu,\" alisema Baraka. \"Kiwiko chako kinaishi upande wangu,\" alijibu Otieno. Kufikia Ijumaa hawakuwa wanaongea — walikuwa wanasukumana tu.",
        "Darasa lilianza kuchagua pande. Timu ya Baraka. Timu ya Otieno. Visasi vya zamani visivyohusiana vikaburutwa ndani. Hakuna aliyekumbuka hata deski tena.",
        "Mwalimu wao hakuwaadhibu. Badala yake aliwakalisha chini na kanuni moja: kila mvulana lazima aeleze tatizo kama MWENZAKE anavyoliona, na hawezi kuongea hadi amefanya hivyo kwa haki.",
        "Baraka alianza, polepole: \"Otieno anaandika kwa mkono wa kushoto... kwa hiyo anahitaji upande wa kushoto, na vitabu vyangu vilikuwa vinaingia kwenye nafasi yake ya kuandika.\" Otieno alipepesa macho. \"Na Baraka hubeba vitabu vya masomo mawili kwa sababu anashirikiana na kaka yake... kwa hiyo anahitaji nafasi zaidi, si pungufu.\" Ukimya uliofuata ulikuwa tofauti.",
        "Suluhisho lilichukua dakika mbili: kubadilishana pande ili mkono wa kushoto wa Otieno upate nafasi, na rafu moja ya kushirikiana kwa vitabu vya ziada. Mstari wa chaki ulififia ndani ya wiki. Urafiki — kwa ajabu — ulitoka imara zaidi kuliko kabla ya vita."
      ],
      discussion: "Nini kilifanya mgogoro ukue? Nini kilibadilika kila mvulana alipolazimika kueleza upande wa mwenzake?",
      whatWouldYouDo: {
        q: "Umekwama kwenye mgogoro ambapo pande zote zinahisi ziko sahihi. Ungefanya nini?",
        options: [
          "Kuendelea kubishana hadi mwingine akate tamaa",
          "Kujaribu kueleza mtazamo wa mwingine kwa haki, kisha kutafuta ushindi kwa wote",
          "Kuwaita marafiki zangu waniunge mkono",
          "Kunyamaza na kubaki na hasira"
        ]
      },
      lesson: "Migogoro mingi hupungua pale kila upande unapoelewa mwingine kweli. Shambulia tatizo, si mtu."
    },
    {
      id: "the-new-crew",
      pillar: "protect-future",
      title: "Kundi Jipya",
      emoji: "🛡️",
      theme: "Shinikizo la marafiki na maamuzi yenye afya",
      text: [
        "Dan alipohamia mtaani, wavulana wa kwanza kumkaribisha walikuwa wakubwa, wenye kelele, na wakarimu. Walijiita 'crew'. Kwa mgeni mpweke, ilihisi kama kupata mahali pa kuwa.",
        "Wiki za kwanza zilikuwa mpira na vichekesho. Kisha jioni moja, nyuma ya kiosk, chupa ilizunguka. Kisha kitu cha kunusa. \"Familia hushirikiana kila kitu,\" alisema kiongozi, akikinyoosha. \"Usiwe mtoto.\"",
        "Moyo wa Dan ulienda mbio. Alitaka marafiki hawa. Lakini pia alimkumbuka binamu yake Musa — jinsi maneno yale yale yalivyoanza hadithi ya Musa, na jinsi hadithi hiyo ilivyoishia: kuacha shule, kuugua, kuiba kwa mama yake mwenyewe, akipigana kurudi siku ngumu moja baada ya nyingine.",
        "\"Hapana asante,\" Dan alisema, akisimama. \"Niko sawa.\" Walimcheka. Mmoja alimwita mtoto mchanga. Akitembea nyumbani peke yake usiku ule, alihisi kama amepoteza kila kitu tena.",
        "Hakuwa amepoteza. Timu ya mpira ya shule ilihitaji beki; kocha alihitaji kujituma. Ndani ya mwezi mmoja Dan alikuwa na kundi jipya — linalofanya mazoezi badala ya hatari. Miaka baadaye angemwambia mdogo wake: \"Marafiki wa kweli kamwe hawatozi kiingilio cha maisha yako ya baadaye.\""
      ],
      discussion: "Kwa nini ofa ya kundi ilikuwa ngumu kukataa? Nini kilimlinda Dan wakati ule?",
      whatWouldYouDo: {
        q: "Kundi unalotaka kujiunga nalo linakushinikiza kujaribu dawa za kulevya. Ungefanya nini?",
        options: [
          "Kujaribu mara moja ili wanikubali",
          "Kusema hapana kwa msisitizo na kutafuta mahali pa kuwa penye afya zaidi",
          "Kujifanya najaribu",
          "Kunyamaza na kutumaini watanisahau"
        ]
      },
      lesson: "Mahali pa kuwa panapogharimu afya yako na kesho yako ni ghali mno. Marafiki wa kweli huheshimu HAPANA yako."
    }
  ]
};
