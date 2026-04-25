'use strict';

// clock updates every 15 seconds
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('clock').textContent = h + ':' + m;
}
updateClock();
setInterval(updateClock, 15000);

// file system data for sarahs laptop
const FILE_SYSTEM = {
  name: 'Desktop',
  path: 'C:\\Users\\Sarah\\Desktop',
  type: 'folder',
  children: [
    {
      name: 'Pictures', type: 'folder', emoji: '📷',
      path: 'C:\\Users\\Sarah\\Desktop\\Pictures',
      children: [
        {
          name: 'cat.jpg', type: 'file', emoji: '📷',
          content: '[IMAGE — cat.jpg]\n\nOrange tabby cat sitting on a windowsill.\nSunlight coming through the curtains.\nSomeone wrote "mochi !!" in the filename.'
        },
        {
          name: 'my_room.jpg', type: 'file', emoji: '📷',
          content: '[IMAGE — my_room.jpg]\n\nA bedroom. Fairy lights above the bed.\nPink curtains. Posters on the wall.\nA desk covered in notebooks and pens.\nLooks lived-in.'
        },
        {
          name: 'alice_and_me.jpg', type: 'file', emoji: '📷',
          content: '[IMAGE — alice_and_me.jpg]\n\nTwo girls in school uniform making faces at the camera.\nOne is presumably Sarah.\nPhoto taken in what looks like a school corridor.'
        },
        {
          name: 'birthday_cake.jpg', type: 'file', emoji: '📷',
          content: '[IMAGE — birthday_cake.jpg]\n\nA chocolate cake with pink candles.\nA woman in the background is smiling at the camera.\nTable looks like a home kitchen.\nWarm photo.'
        },
        {
          // level 2 — the stalker folder, name looks boring on purpose
          name: 'misc_blurry', type: 'folder', emoji: '📁',
          path: 'C:\\Users\\Sarah\\Desktop\\Pictures\\misc_blurry',
          children: [
            {
              name: 'note.txt', type: 'file', emoji: '📄',
              levelKey: 'stalker',
              content: 'i keep seeing the same man.\n\nblue sedan. always parked different spots but same car, same man.\nhe looks professional. like he has somewhere to be.\nbut he never goes anywhere. he just watches.\n\ni took a photo once but it was too blurry to see the plate.\ndeleted it. didnt want anyone to find it.\n\nfeb 14 — outside school\nfeb 17 — end of my street\nfeb 20 — near the library\nfeb 22 — outside school again\n\ni told alice something felt off.\nshe said i was being paranoid.\nmaybe i am.\nbut i dont think so anymore.'
            },
            {
              name: 'blurry_car.jpg', type: 'file', emoji: '📷',
              content: '[IMAGE — blurry_car.jpg]\n\nA dark blue sedan parked on a residential street.\nThe shot is slightly shaky, taken quickly.\nThe number plate is out of focus.\nA figure is visible in the drivers seat but the face is unclear.\n\nThis was taken from a distance.'
            }
          ]
        }
      ]
    },
    {
      name: 'Documents', type: 'folder', emoji: '📁',
      path: 'C:\\Users\\Sarah\\Desktop\\Documents',
      children: [
        {
          name: 'diary.txt', type: 'file', emoji: '📄',
          content: 'feb 10\n\nalice came over after school. we watched that show she likes and ate all the snacks mom left.\nmom texted asking if we wanted dinner. she always does that.\n\nfeb 14\n\nvalentines day and nothing happened lol.\nsaw lilly give out cards to everyone except me. she is so obvious.\nalice said ignore her. probably right.\n\nfeb 18\n\nthere is this guy in the year above. i dont know his name yet.\nhe walked past my locker again today. third time this week.\ntold alice. she said maybe he just has classes that way.\nmaybe.\nbut the way he looks at me. it doesnt feel right.\n\nfeb 21\n\nfound some papers in dads study when i went to get the printer cable.\none said asset 07 at the top. looked like a list. some numbers, some names.\nthe other one had writing i dont fully understand.\nprobably some work file. texted alice about it.\n\nfeb 22\n\nhe was outside school again today. just standing there by the gates.\nnot waiting for anyone. just watching the crowd.\ni dont know why but i went a different way home.\n\nfeb 23\n\nthe guy walked past my locker again. this time he stopped and stared.\nnot at me. at something near me. like he was memorising the area.\nfelt weird all evening. told alice. she said i was overthinking.\nmaybe.\n\nfeb 24\n\nlilly made a comment in class today about my presentation.\nnot to my face, to the girl next to her. but loud enough.\ni pretended not to hear.\nmom asked how school was and i said fine.\nsome things are easier to keep to yourself.'
        },
        {
          name: 'homework_biology.txt', type: 'file', emoji: '📄',
          content: 'BIOLOGY — Chapter 9 Notes\n\nCell division: mitosis vs meiosis\n— mitosis: identical copies, growth and repair\n— meiosis: genetic variation, reproduction\n\nRemember for exam:\nPMAT — prophase, metaphase, anaphase, telophase\n\ntodo: finish diagram on page 112\nask alice if she has the textbook'
        }
      ]
    },
    {
      name: 'System', type: 'folder', emoji: '📁',
      path: 'C:\\Users\\Sarah\\Desktop\\System',
      children: [
        {
          // level 5 — forensic trail, wifi log
          name: 'wifi_history.log', type: 'file', emoji: '📄',
          levelKey: 'forensic_wifi',
          content: 'WIFI CONNECTION LOG\nDevice: SARAH-LAPTOP\n\n[2024-02-25]  07:52  Connected     Home_Router_5G\n[2024-02-25]  08:14  Disconnected  Home_Router_5G\n\n[2024-02-25]  15:58  Connected     Home_Router_5G\n[2024-02-25]  16:41  Disconnected  Home_Router_5G\n\nNOTE: Device showed as offline 08:14 to 15:58.\nMother reported she believed Sarah was at the school library all afternoon.\nPhone GPS also showed no movement during this window — battery reported as dead.'
        },
        {
          // level 5 — forensic trail, battery log
          name: 'battery_history.log', type: 'file', emoji: '📄',
          levelKey: 'forensic_battery',
          content: 'BATTERY HISTORY LOG\nDevice: SARAH-LAPTOP\n\n[2024-02-25]  07:50  Unplugged\n[2024-02-25]  07:50  Battery: 91%\n\n[2024-02-25]  15:59  Plugged in\n[2024-02-25]  16:41  Unplugged\n[2024-02-25]  16:41  Battery: 97%\n\nDevice charged to near-full before final disconnection.\nThis is consistent with preparation for extended offline use.\nSomeone who plans to return does not charge to 97% before leaving.'
        }
      ]
    },
    {
      name: 'Misc', type: 'folder', emoji: '📁',
      path: 'C:\\Users\\Sarah\\Desktop\\Misc',
      children: [
        {
          name: 'old_schoolwork', type: 'folder', emoji: '📁',
          path: 'C:\\Users\\Sarah\\Desktop\\Misc\\old_schoolwork',
          children: [
            {
              name: 'english_essay_draft.txt', type: 'file', emoji: '📄',
              content: 'The Great Gatsby — Theme of the American Dream\n\nDraft 1 — unfinished\n\nFitzgerald presents the American Dream as...\n\n[Sarah left this unfinished. Last edited Feb 12.]'
            },
            {
              // level 6 — the escape, name chosen to look boring
              name: 'archive_2022', type: 'folder', emoji: '📁',
              path: 'C:\\Users\\Sarah\\Desktop\\Misc\\old_schoolwork\\archive_2022',
              children: [
                {
                  name: 'ref_NL2024.txt', type: 'file', emoji: '📄',
                  levelKey: 'escape_ticket',
                  content: 'Northline Bus Services\nBooking Ref: NL-2024-00892\n\nPassenger: S. Khalid\nRoute: City Central → Havenport North\nDeparture: Friday 25 Feb — 9:00 PM\nSeat: 14A\nStatus: Confirmed\n\n---\n\n[also saved here for reference]\n\nNL Havenport North\nAvg walk from bus stop to shelter: 6 min\nCheck in after 10pm, no questions asked policy'
                },
                {
                  name: 'contract_scan.jpg', type: 'file', emoji: '📄',
                  levelKey: 'escape_contract',
                  content: '[IMAGE — contract_scan.jpg]\n\nA scanned document. Handwritten header at the top: ASSET 07.\nBelow it, a numbered list. Names and figures.\nOne line reads: "transfer to be completed no later than subject\'s 19th year."\nAt the bottom, two signatures. One appears to be D. Khalid.\n\nThe scan is slightly blurry. Sarah must have photographed it in a hurry.'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// browser pages
const PAGES = {
  'pixel://home': () => `
    <div class="br-page-header">
      <h1>PixelBrowser</h1>
    </div>
    <div class="br-card">
      <h2>Recent</h2>
      <p><span class="br-link" onclick="brGo('pixel://search/is-being-followed')">how to tell if someone is following you home</span></p>
      <p><span class="br-link" onclick="brGo('pixel://search/parent-care')">how to take care for your parents so they like you more!</span></p>
      <p><span class="br-link" onclick="brGo('pixel://search/cheap-hotel-uk')">cheap hotels in UK</span></p>
      <p><span class="br-link" onclick="brGo('pixel://search/asset07')">what is asset 07</span></p>
    </div>`,

  'pixel://search/is-being-followed': () => `
    <div class="br-page-header"><h1>Search results</h1></div>
    <div class="br-card">
      <h2>how to tell if someone is following you home</h2>
      <p>Top result: "10 signs you are being stalked" — visited twice.</p>
      <p>Second result: "What to do if you think you have a stalker" — visited. Spent 22 minutes on it.</p>
      <p>Third result: local police non-emergency contact page — visited.</p>
    </div>`,

  'pixel://search/parent-care': () => `
    <div class="br-page-header"><h1>Search results</h1></div>
    <div class="br-card">
      <h2>how to take care for your parents so they like you more!</h2>
      <p>Top result: "10 ways to improve your relationship with your parents" — visited.</p>
      <p>Second result: "Why does my parent seem distant? How to reconnect" — visited. Spent 18 minutes reading.</p>
      <p>Third result: forum thread — "my mom goes through my stuff, what do i do" — visited.</p>
    </div>`,

  'pixel://search/cheap-hotel-uk': () => `
    <div class="br-page-header"><h1>Search results</h1></div>
    <div class="br-card">
      <h2>cheap hotels in UK</h2>
      <p>Several budget listings. Havenport North, Leeds, Sheffield, Bristol.</p>
      <p>She clicked the Havenport North result.</p>
      <p>Avg nightly rate: £28–£45.</p>
    </div>`,

  'pixel://search/asset07': () => `
    <div class="br-page-header"><h1>Search results</h1></div>
    <div class="br-card">
      <h2>what is asset 07</h2>
      <p>No clear results. Search returned generic financial terminology pages.</p>
      <p>One result linked to a private equity firm glossary — she did not click it.</p>
      <p>She ran this search twice. No further results opened.</p>
    </div>`,

  'pixel://about': () => `
    <div class="br-page-header"><h1>About this device</h1></div>
    <div class="br-card">
      <h2>Device</h2>
      <p>Owner: Sarah Khalid</p>
      <p>OS: PixelOS 1.0</p>
      <p>Last login: Feb 25 2024 — 4:04 PM</p>
    </div>`,
};

// gmail data rebuilt for 6-level narrative
const GMAIL = {
  inbox: [
    {
      id: 'g1',
      from: 'alice.m.22@gmail.com',
      name: 'Alice',
      subject: 're: that guy again',
      date: 'Feb 23, 4:18 PM',
      unread: false,
      body: 'ok but three times in one week IS a lot sarah\nlike that is not a coincidence\n\nbut also maybe dont assume the worst yet\nhas he actually said anything to you\n\nalso can we talk about the bio homework later i am so lost\n\n— alice'
    },
    {
      id: 'g2',
      from: 'alice.m.22@gmail.com',
      name: 'Alice',
      subject: 're: asset 07 lol',
      date: 'Feb 21, 7:44 PM',
      unread: false,
      body: 'hahahaha asset 07\nok it sounds like a military thing\nor like a spreadsheet thing\nyour dad does finance right? probably just boring work stuff\n\ndont snoop further you will find his tax returns and that is worse\n\n— alice'
    },
    {
      // level 4 — the deadline, alice wishes happy 19th
      id: 'g3',
      from: 'alice.m.22@gmail.com',
      name: 'Alice',
      subject: 'happy early 19th bestie !!',
      date: 'Feb 22, 6:03 PM',
      unread: false,
      levelKey: 'deadline',
      body: 'SARAH!!!!\n\nhappy advance 19th birthday bestie !!\ni know its not for a few weeks but i saw this and thought of you\n\nyou are going to have the BEST year i just know it\nalso we need to plan something actually fun this time, last year was a disaster lol\n\nok bye love you\n— alice'
    },
    {
      id: 'g4',
      from: 'alice.m.22@gmail.com',
      name: 'Alice',
      subject: 'sarah??',
      date: 'Feb 25, 5:30 PM',
      unread: true,
      body: 'hey you never replied to my message after school\nare you home\n\nyour mom texted me which is weird\nshe asked if i knew where you were\n\nplease just reply\n\n— alice'
    },
    {
      // level 1 — the vanishing, mom tracking sarahs phone
      id: 'g5',
      from: 'mom.khalid@gmail.com',
      name: 'Mom',
      subject: 'your location is off again',
      date: 'Jan 14, 2:09 PM',
      unread: false,
      levelKey: 'tracking',
      body: 'sarah\n\nyour location sharing is turned off again on find my family\ni noticed it went dark around 1pm\n\nplease turn it back on, you know i worry\ni just like to know youre safe, thats all\n\nits not about not trusting you\ni just feel better when i can see the little dot\n\ncan you switch it back on before dinner\n\nlove you\n— mom'
    },
    {
      id: 'g6',
      from: 'mom.khalid@gmail.com',
      name: 'Mom',
      subject: 'dinner tonight',
      date: 'Feb 24, 1:14 PM',
      unread: false,
      body: 'hi sweetheart\n\ni am making the pasta you like tonight\ncome home on time please\n\nalso did you take your vitamin this morning\ni left it next to your water bottle\n\nlove you\n— mom'
    },
    {
      id: 'g7',
      from: 'mom.khalid@gmail.com',
      name: 'Mom',
      subject: 'where are you',
      date: 'Feb 25, 3:47 PM',
      unread: true,
      body: 'sarah you were supposed to be home at 2:30\ni have called three times\n\nplease reply or call me right now\ni am worried\n\n— mom'
    },
    {
      id: 'g8',
      from: 'steve.k@gmail.com',
      name: 'Steve (cousin)',
      subject: 'new years plans!!',
      date: 'Feb 19, 11:02 AM',
      unread: false,
      body: 'sarah\n\nmum wants to know if your family is coming for new years this year\nlet us know so she can sort out food and everything\n\nalso are you still doing that art project\nmy sister wants to see it\n\n— steve'
    },
    {
      id: 'g9',
      from: 'lilly.tw@gmail.com',
      name: 'Lilly',
      subject: 'group project',
      date: 'Feb 20, 3:55 PM',
      unread: false,
      body: 'Hi Sarah\n\nMr Hassan put us in the same group for the history project.\nI think we should divide the slides equally.\nI can do the intro and conclusion.\n\nLilly'
    }
  ],
  sent: [
    {
      id: 's1',
      from: 'sarah.k.os@gmail.com',
      name: 'me',
      subject: 'asset 07 lol',
      date: 'Feb 21, 7:31 PM',
      unread: false,
      body: 'alice do you know what asset 07 means\nfound it written on a paper in dads study when i went to get the printer cable\nit was like a list. numbers, some names underneath\nthe other paper said something weird too. looked official.\nno idea what it is. probably nothing\n\n— s'
    },
    {
      // level 3 — the deception, sarah tells alice her mom is chill
      id: 's2',
      from: 'sarah.k.os@gmail.com',
      name: 'me',
      subject: 're: your location is off again',
      date: 'Jan 14, 2:44 PM',
      unread: false,
      levelKey: 'deception',
      body: 'alice omg my mom just sent me this whole thing about location sharing lol\n\nshe is honestly so chill about everything though?? like she never restricts me\nshe just worries a bit but its sweet\nturned it back on\n\nalso are you free saturday\n\n— s'
    },
    {
      id: 's3',
      from: 'sarah.k.os@gmail.com',
      name: 'me',
      subject: 're: that guy again',
      date: 'Feb 23, 3:55 PM',
      unread: false,
      body: 'alice i am telling you it is weird\nhe doesnt have classes near my locker i checked the timetable\n\nhe stopped and looked at me today\nlike actually stopped and looked\nthen he was at the gate again when i left\n\nalso not related but mom found my diary last week\nor at least i think she did. pages were in a different order.\nshe didnt say anything but it felt off.\nidk. everything feels a bit off right now\n\n— s'
    },
    {
      id: 's4',
      from: 'sarah.k.os@gmail.com',
      name: 'me',
      subject: 're: group project',
      date: 'Feb 20, 5:02 PM',
      unread: false,
      body: 'Hi Lilly\n\nThat works for me.\nI will take slides 3 to 5.\n\n— Sarah'
    }
  ],
  drafts: []
};

// discovery tracker — tracks which level keys the player has found
// order doesnt matter, player can stumble in any sequence
const discovered = new Set();

// level definitions used by the hint system
const LEVEL_DEFS = {
  tracking: {
    label: 'Level 1 — The Vanishing',
    hmm: 'Think about who controls the information. Someone knew where Sarah was at all times. Where would that show up?',
    show: 'Check the Mail app. Look in her inbox — specifically emails from Mom.'
  },
  stalker: {
    label: 'Level 2 — The Stalker',
    hmm: 'Sarah noticed something wrong before she found the contract. Someone was watching her physically. Where would she keep evidence she was too scared to show anyone?',
    show: 'Open the Pictures folder in File Explorer. Look for a folder with a vague name — not the obvious ones.'
  },
  deception: {
    label: 'Level 3 — The Deception',
    hmm: 'Sarah told her friend one thing about her home life. The emails tell a different story. Find the contradiction.',
    show: 'Open Mail, go to Sent. Find the reply to the location tracking email. Compare it with what her mom actually wrote.'
  },
  deadline: {
    label: 'Level 4 — The Deadline',
    hmm: 'Something triggered Sarahs decision to run right now, not later. A date. A number. Something that made the timeline suddenly real.',
    show: 'Open Mail, check the inbox. Alice sent Sarah a birthday message. Read the date. Then think about the contract.'
  },
  forensic_wifi: {
    label: 'Level 5 — The Forensic Trail (WiFi)',
    hmm: 'The official story says Sarah was at the library all afternoon. The laptop disagrees. Where does the device log its own activity?',
    show: 'Open the System folder in File Explorer. The wifi_history.log tells you when she was actually home.'
  },
  forensic_battery: {
    label: 'Level 5 — The Forensic Trail (Battery)',
    hmm: 'Why would someone charge their laptop to 97% if they were just popping home for five minutes?',
    show: 'Check battery_history.log in the System folder. Read the timestamps carefully.'
  },
  escape_ticket: {
    label: 'Level 6 — The Escape (Bus Ticket)',
    hmm: 'Sarah had a plan. She knew exactly where she was going and when. She buried the evidence. Start digging through folders with unassuming names.',
    show: 'Go to Misc > old_schoolwork > archive_2022. She hid it three levels deep.'
  },
  escape_contract: {
    label: 'Level 6 — The Escape (Contract)',
    hmm: 'The document she photographed in her dads study is the key to everything. She kept a copy. She hid it with her exit plan.',
    show: 'Same folder as the bus ticket — Misc > old_schoolwork > archive_2022. Open contract_scan.jpg.'
  }
};

// discovery order gates what can be found
const DISCOVERY_ORDER = ['tracking', 'stalker', 'deception', 'deadline', 'forensic_wifi', 'forensic_battery', 'escape_ticket', 'escape_contract'];

function getNextUndiscoveredLevel() {
  return DISCOVERY_ORDER.find(k => !discovered.has(k)) || null;
}

function markDiscovered(levelKey) {
  if (!levelKey || discovered.has(levelKey)) return;
  const nextExpected = getNextUndiscoveredLevel();
  if (levelKey !== nextExpected) return;
  discovered.add(levelKey);
  showToast(LEVEL_DEFS[levelKey].title + ' discovered');
}

// load gemini key from env — paste your key here or set via .env
const GEMINI_KEY = window.ENV_GEMINI_KEY || 'your_gemini_key_here';

// tipster chat state
let tipsterOpen = false;
let tipsterMessages = [];
let tipsterTyping = false;

// tracks what the player has opened so we can send it to gemini as context
const sessionOpened = [];

function trackOpened(label, content) {
  // keep the last 5 opened items so the context doesnt get too long
  sessionOpened.push({ label, content: content.slice(0, 400) });
  if (sessionOpened.length > 5) sessionOpened.shift();
}

function buildTipsterSystemPrompt() {
  // builds a fresh system prompt each message with current session state injected
  const discoveredLabels = Array.from(discovered).map(k => LEVEL_DEFS[k]?.title || k);
  const openedSummary = sessionOpened.length > 0
    ? sessionOpened.map(o => `[${o.label}]:\n${o.content}`).join('\n\n')
    : 'nothing opened yet';

  return `You are an anonymous tipster in a detective mystery game called PixelOS. The player is investigating the disappearance of Sarah Khalid, age 18, reported missing February 25 2024.

THE TRUTH (known only to you):
Sarah was an adopted child raised by traffickers posing as her parents. She was labelled Asset 07 in a contract signed by her father David Khalid. The contract required her transfer before her 19th birthday. She found the contract in her dads study. She noticed her mother was tracking her phone via Find My Family. She faked her phone dying, came home while her mother thought she was at the library, packed, charged her laptop to 97%, and took the 9pm Northline bus to Havenport North. She ran. She was not kidnapped.

ALL EVIDENCE ON THE LAPTOP:
Level 1: inbox email from Mom asking Sarah to turn location sharing back on via Find My Family app
Level 2: a folder called misc_blurry inside Pictures containing a note about a man in a blue sedan following her for weeks, and a blurry photo
Level 3: a sent email where Sarah tells Alice her mom is so chill and never restricts her — directly contradicts the tracking email
Level 4: inbox email from Alice wishing Sarah a happy early 19th birthday — the 19th birthday is the contract deadline
Level 5: wifi_history.log and battery_history.log in the System folder — shows she was home 4pm to 4:39pm packing while her phone appeared dead
Level 6: folder called archive_2022 inside Misc > old_schoolwork — contains the bus ticket to Havenport North and the contract_scan.jpg showing ASSET 07 with D. Khalid signature

WHAT THE PLAYER HAS CURRENTLY DISCOVERED:
${discoveredLabels.length > 0 ? discoveredLabels.join(', ') : 'nothing yet'}

FILES THE PLAYER HAS OPENED THIS SESSION:
${openedSummary}

YOUR BEHAVIOR RULES:
1. You only talk about what the player has actually opened or discovered. If they ask about something they have not found, deflect cryptically without confirming or denying.
2. When a player opens something new, ask them what they think is wrong or suspicious about it. Do not tell them. Ask.
3. If the player gives a correct interpretation of evidence, confirm it briefly and nudge them toward the next thing. Say something like "you are seeing it. keep going."
4. If the player says they give up or asks for the answer directly, stop being cryptic. Give them a direct instruction like "go to the System folder. open wifi_history.log. look at the timestamps." then go back to cryptic mode.
5. Never reveal all 6 levels at once. Only discuss what they have opened.
6. Never break character. Never say you are an AI.
7. Sign off each message with just a single dot on its own line.
8. Keep responses short. Under 4 sentences unless the player has given up and needs a direct lead.
9. Never use em dashes or hyphens as punctuation.`;
}

function toggleTipster() {
  tipsterOpen = !tipsterOpen;
  const win = document.getElementById('tipster-window');
  if (!win) return;
  win.style.display = tipsterOpen ? 'flex' : 'none';
  if (tipsterOpen && tipsterMessages.length === 0) {
    setTimeout(() => {
      addTipsterMessage('tipster', 'you found her laptop.\n\nask me anything.\n\n.');
    }, 400);
  }
  if (tipsterOpen) {
    const inp = document.getElementById('tipster-input');
    if (inp) inp.focus();
  }
}

function addTipsterMessage(role, text) {
  tipsterMessages.push({ role, text });
  renderTipsterMessages();
}

function renderTipsterMessages() {
  const log = document.getElementById('tipster-log');
  if (!log) return;
  log.innerHTML = tipsterMessages.map(m => {
    const isUser = m.role === 'user';
    return `<div style="display:flex;flex-direction:column;align-items:${isUser ? 'flex-end' : 'flex-start'};margin-bottom:10px;">
      <div style="max-width:85%;padding:8px 10px;font-family:'Press Start 2P',monospace;font-size:6px;line-height:2;color:${isUser ? '#fdf0f8' : '#ff80bf'};background:${isUser ? 'rgba(155,89,182,0.3)' : 'rgba(255,77,166,0.08)'};border:1px solid ${isUser ? '#9b59b6' : 'rgba(255,77,166,0.3)'};white-space:pre-wrap;word-break:break-word;">${m.text}</div>
    </div>`;
  }).join('');
  log.scrollTop = log.scrollHeight;
}

function showTipsterTyping() {
  const log = document.getElementById('tipster-log');
  if (!log) return;
  const el = document.createElement('div');
  el.id = 'tipster-typing';
  el.style.cssText = "font-family:'Press Start 2P',monospace;font-size:6px;color:rgba(255,128,191,0.5);padding:4px 0;";
  el.textContent = '. . .';
  log.appendChild(el);
  log.scrollTop = log.scrollHeight;
}

function removeTipsterTyping() {
  const el = document.getElementById('tipster-typing');
  if (el) el.remove();
}

async function sendTipsterMessage() {
  if (tipsterTyping) return;
  const input = document.getElementById('tipster-input');
  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  addTipsterMessage('user', text);
  tipsterTyping = true;
  showTipsterTyping();

  // only send the last 3 exchanges to keep the context tight
  const recentMessages = tipsterMessages.slice(-6);
  const contents = recentMessages
    .filter(m => m.role === 'user' || m.role === 'tipster')
    .map(m => ({
      role: m.role === 'tipster' ? 'model' : 'user',
      parts: [{ text: m.text }]
    }));

  // make sure the last entry is always the user message we just sent
  if (contents.length === 0 || contents[contents.length - 1].role !== 'user') {
    contents.push({ role: 'user', parts: [{ text }] });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-preview:generateContent?key=${GEMINI_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: buildTipsterSystemPrompt() }] },
          contents: contents
        })
      }
    );

    const data = await response.json();
    removeTipsterTyping();
    tipsterTyping = false;

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text
      ?? 'the signal dropped. try again.';

    addTipsterMessage('tipster', reply);
  } catch (err) {
    removeTipsterTyping();
    tipsterTyping = false;
    addTipsterMessage('tipster', 'connection lost.\n\nthey might be watching.');
  }
}


let gmailCurrentFolder = 'inbox';
let gmailCurrentId = null;
let brHistory = ['pixel://home'];
let brIndex = 0;

let navHistory = [FILE_SYSTEM];
let currentFolder = FILE_SYSTEM;
let selectedItem = null;

let currentFilename = 'untitled.txt';

let dragging = null;
let dragOffsetX = 0;
let dragOffsetY = 0;

let toastTimer = null;

let zCounter = 100;

const minimized = {};

const DEFAULT_POS = {
  'window-files':    { left: '100px', top: '60px' },
  'window-editor':   { left: '320px', top: '80px' },
  'window-browser':  { left: '210px', top: '70px' },
  'window-gmail':    { left: '130px', top: '70px' },
  'window-notebook': { left: '760px', top: '60px' },
};

function bringToFront(id) {
  zCounter++;
  // cap at one below the taskbar z-index so windows never cover it
  const safeZ = Math.min(zCounter, 8990);
  document.getElementById(id).style.zIndex = safeZ;
}

function focusWindow(id) {
  document.querySelectorAll('.window').forEach(w => w.classList.remove('is-focused'));
  document.getElementById(id).classList.add('is-focused');
  bringToFront(id);
  closeStartMenu();
}

function openWin(id, tbId) {
  const win = document.getElementById(id);
  const tb  = document.getElementById(tbId);

  if (!win.style.left) {
    win.style.left = DEFAULT_POS[id].left;
    win.style.top  = DEFAULT_POS[id].top;
  }

  win.classList.add('is-open');
  win.classList.remove('is-minimized-win');
  minimized[id] = false;

  tb.classList.add('is-active');
  tb.classList.remove('is-minimized');

  focusWindow(id);
}

function closeWindow(id) {
  const tbMap = {
    'window-files':    'tb-files',
    'window-editor':   'tb-editor',
    'window-browser':  'tb-browser',
    'window-gmail':    'tb-gmail',
    'window-notebook': 'tb-notebook',
  };
  document.getElementById(id).classList.remove('is-open', 'is-focused');
  minimized[id] = false;
  const tb = document.getElementById(tbMap[id]);
  if (tb) { tb.classList.remove('is-active', 'is-minimized'); }
  updatePreviews();
}

function minimizeWindow(id) {
  const tbMap = {
    'window-files':    'tb-files',
    'window-editor':   'tb-editor',
    'window-browser':  'tb-browser',
    'window-gmail':    'tb-gmail',
    'window-notebook': 'tb-notebook',
  };
  document.getElementById(id).classList.remove('is-open', 'is-focused');
  minimized[id] = true;
  const tb = document.getElementById(tbMap[id]);
  if (tb) { tb.classList.add('is-minimized'); }
  updatePreviews();
}

function toggleWin(id, tbId) {
  const win = document.getElementById(id);
  const isOpen = win.classList.contains('is-open');
  const isFocused = win.classList.contains('is-focused');

  if (!isOpen) {
    openWin(id, tbId);
    if (id === 'window-files')    renderFolder(currentFolder);
    if (id === 'window-browser')  brRender(brHistory[brIndex]);
    if (id === 'window-notebook') renderNotebook();
  } else if (isFocused) {
    minimizeWindow(id);
  } else {
    focusWindow(id);
  }
}

function updatePreviews() {
  const filesOpen    = document.getElementById('window-files').classList.contains('is-open');
  const editorOpen   = document.getElementById('window-editor').classList.contains('is-open');
  const browserOpen  = document.getElementById('window-browser').classList.contains('is-open');
  const notebookOpen = document.getElementById('window-notebook').classList.contains('is-open');

  document.getElementById('prev-files').textContent =
    filesOpen ? currentFolder.name + ' — ' + (currentFolder.children || []).length + ' items'
    : minimized['window-files'] ? 'Minimized'
    : 'Not open';

  document.getElementById('prev-editor').textContent =
    editorOpen ? currentFilename
    : minimized['window-editor'] ? currentFilename
    : 'Not open';

  document.getElementById('prev-editor-title').textContent =
    minimized['window-editor'] ? 'Text Editor — ' + currentFilename : 'Text Editor';

  document.getElementById('prev-browser').textContent =
    browserOpen ? brHistory[brIndex]
    : minimized['window-browser'] ? brHistory[brIndex]
    : 'Not open';

  document.getElementById('prev-notebook').textContent =
    notebookOpen ? 'Case open'
    : minimized['window-notebook'] ? 'Case open'
    : 'Not open';
}

function openFileExplorer() {
  openWin('window-files', 'tb-files');
  renderFolder(currentFolder);
  updatePreviews();
}

function openEditor(file) {
  openWin('window-editor', 'tb-editor');

  if (file && file.content !== null) {
    document.getElementById('te-area').value = file.content;
    currentFilename = file.name;
  } else if (file === null) {
    document.getElementById('te-area').value = '';
    currentFilename = 'untitled.txt';
  }

  document.getElementById('editor-title').textContent = 'Text Editor — ' + currentFilename;
  document.getElementById('te-filename').textContent = currentFilename;
  updateTeStats();
  updatePreviews();
}

function openBrowser() {
  openWin('window-browser', 'tb-browser');
  brRender(brHistory[brIndex]);
  updatePreviews();
}

// builds the correct full path string by traversing navHistory
function buildCurrentPath() {
  if (navHistory.length === 0) return 'C:\\Users\\Sarah\\Desktop';
  const parts = navHistory.map(f => f.name);
  // reconstruct from Desktop root
  if (parts[0] === 'Desktop') {
    return 'C:\\Users\\Sarah\\Desktop' + (parts.length > 1 ? '\\' + parts.slice(1).join('\\') : '');
  }
  return parts.join('\\');
}

function renderFolder(folder) {
  currentFolder = folder;

  // use the stored path if available, otherwise build it from nav history
  const displayPath = folder.path || buildCurrentPath();
  document.getElementById('fe-path').value = displayPath;
  document.getElementById('btn-back').disabled = navHistory.length <= 1;

  const content = document.getElementById('fe-content');
  content.innerHTML = '';
  selectedItem = null;

  const items = folder.children || [];

  items.forEach(item => {
    const el = document.createElement('div');
    el.className = 'file-item';
    el.innerHTML = `
      <span class="file-item-emoji">${item.emoji}</span>
      <span class="file-item-name">${item.name}</span>
    `;
    el.addEventListener('click', () => {
      document.querySelectorAll('.file-item').forEach(i => i.classList.remove('selected'));
      el.classList.add('selected');
      selectedItem = item;
    });
    el.addEventListener('dblclick', () => {
      if (item.type === 'folder') openFolder(item);
      else openFile(item);
    });
    content.appendChild(el);
  });

  const count = items.length;
  document.getElementById('fe-statusbar').textContent = count + (count === 1 ? ' item' : ' items');
  updatePreviews();
}

function openFolder(folder) {
  navHistory.push(folder);
  renderFolder(folder);
}

function goBack() {
  if (navHistory.length > 1) {
    navHistory.pop();
    renderFolder(navHistory[navHistory.length - 1]);
  }
}

function goUp() { goBack(); }

function openFile(file) {
  if (file.content !== null && file.content !== undefined) {
    openEditor(file);
    showToast('Opened ' + file.name);
    // track for tipster context
    trackOpened(file.name, file.content);
    // mark discovery if this file is tied to a level
    if (file.levelKey) markDiscovered(file.levelKey);
  } else {
    showToast('No app for ' + file.name + ' yet');
  }
}

function teNew() {
  document.getElementById('te-area').value = '';
  currentFilename = 'untitled.txt';
  document.getElementById('editor-title').textContent = 'Text Editor — untitled.txt';
  document.getElementById('te-filename').textContent = 'untitled.txt';
  updateTeStats();
}

function teSave() { showToast('Saved ' + currentFilename + ' ✿'); }

function teClear() {
  document.getElementById('te-area').value = '';
  updateTeStats();
}

function updateTeStats() {
  const val = document.getElementById('te-area').value;
  const words = val.trim() ? val.trim().split(/\s+/).length : 0;
  document.getElementById('te-words').textContent = words + ' words';
  document.getElementById('te-chars').textContent = val.length + ' chars';
}

document.getElementById('te-area').addEventListener('input', updateTeStats);

function brRender(url) {
  const content = document.getElementById('br-content');
  const urlInput = document.getElementById('br-url');
  urlInput.value = url;
  document.getElementById('br-statusbar').textContent = url;
  document.getElementById('browser-title').textContent = 'PixelBrowser — ' + url;

  const pageFn = PAGES[url];
  if (pageFn) {
    content.innerHTML = pageFn();
  } else {
    content.innerHTML = `<div class="br-404">
      <p>✿ 404 ✿</p>
      <p>Page not found in the pixel realm.</p>
      <p><span class="br-link" onclick="brGo('pixel://home')">Go home</span></p>
    </div>`;
  }

  document.getElementById('br-back-btn').disabled = brIndex <= 0;
  document.getElementById('br-fwd-btn').disabled = brIndex >= brHistory.length - 1;
}

function brGo(url) {
  brHistory = brHistory.slice(0, brIndex + 1);
  brHistory.push(url);
  brIndex = brHistory.length - 1;
  brRender(url);
}

function brNavigate() {
  const url = document.getElementById('br-url').value.trim();
  brGo(url);
}

function brBack() {
  if (brIndex > 0) {
    brIndex--;
    brRender(brHistory[brIndex]);
  }
}

function brForward() {
  if (brIndex < brHistory.length - 1) {
    brIndex++;
    brRender(brHistory[brIndex]);
  }
}

function toggleStartMenu() {
  const menu = document.getElementById('start-menu');
  const btn = document.getElementById('start-btn');
  const isOpen = menu.classList.toggle('is-open');
  btn.classList.toggle('is-active', isOpen);
}

function closeStartMenu() {
  document.getElementById('start-menu').classList.remove('is-open');
  document.getElementById('start-btn').classList.remove('is-active');
}

function shutdown() {
  closeStartMenu();
  document.getElementById('shutdown-screen').classList.add('is-active');
}

function restart() {
  closeStartMenu();
  const s = document.getElementById('shutdown-screen');
  s.classList.add('is-active');
  setTimeout(() => {
    s.classList.remove('is-active');
    document.getElementById('boot-screen').classList.remove('is-hidden');
    document.getElementById('boot-bar').style.width = '0%';
    runBoot();
  }, 2000);
}

function showLogin() {
  document.getElementById('login-screen').classList.remove('is-hidden');
  document.getElementById('login-error').textContent = '';
  keypadValue = '';
  updateKeypadDisplay();
}

let keypadValue = '';

function keyPress(num) {
  if (keypadValue.length >= 6) return;
  keypadValue += num;
  updateKeypadDisplay();
}

function keyBack() {
  keypadValue = keypadValue.slice(0, -1);
  updateKeypadDisplay();
}

function updateKeypadDisplay() {
  const dots = '*'.repeat(keypadValue.length);
  document.getElementById('keypad-dots').textContent = dots;
}

function tryLogin() {
  if (keypadValue === '2010') {
    document.getElementById('login-screen').classList.add('is-hidden');
    document.getElementById('login-error').textContent = '';
    keypadValue = '';
    updateKeypadDisplay();
  } else {
    document.getElementById('login-error').textContent = 'incorrect';
    const box = document.getElementById('login-box');
    box.classList.remove('shake');
    void box.offsetWidth;
    box.classList.add('shake');
    keypadValue = '';
    updateKeypadDisplay();
  }
}

const BOOT_STEPS = [
  { msg: 'Initializing kernel...',      pct: 10,  delay: 300  },
  { msg: 'Loading drivers...',          pct: 25,  delay: 500  },
  { msg: 'Mounting filesystem...',      pct: 40,  delay: 600  },
  { msg: 'Starting services...',        pct: 58,  delay: 500  },
  { msg: 'Loading user profile...',     pct: 72,  delay: 400  },
  { msg: 'Applying pixel theme...',     pct: 86,  delay: 500  },
  { msg: 'Almost ready...',             pct: 96,  delay: 400  },
  { msg: 'Welcome to PixelOS',          pct: 100, delay: 600  },
];

function runBoot() {
  const bar    = document.getElementById('boot-bar');
  const status = document.getElementById('boot-status');
  let i = 0;

  function step() {
    if (i >= BOOT_STEPS.length) {
      setTimeout(() => {
        document.getElementById('boot-screen').classList.add('is-hidden');
        showLogin();
      }, 500);
      return;
    }
    const s = BOOT_STEPS[i];
    bar.style.width  = s.pct + '%';
    status.textContent = s.msg;
    i++;
    setTimeout(step, s.delay);
  }

  step();
}

let hintIndex = 0;
const HINTS = [
  'the password is a year.',
];

window.PIXELOS = {
  hint: () => {
    const msg = HINTS[hintIndex] || 'still stuck? try PIXELOS.igaveup()';
    if (hintIndex < HINTS.length) hintIndex++;
    console.log('%c' + msg, 'color: #c9a0dc; font-family: monospace; font-size: 13px;');
    return msg;
  },
  igaveup: () => {
    console.log('%c password: 2010', 'color: #ff80bf; font-family: monospace; font-size: 14px; font-weight: bold; background: #1a0f26; padding: 4px 8px;');
  },
  whoami: () => {
    console.log('%c You are a detective. This is the laptop of Sarah Khalid, age 18, reported missing Feb 25 2024.', 'color: #ff80bf; font-family: monospace; font-size: 13px;');
  },
  help: () => {
    console.log('%c PIXELOS commands\n\n PIXELOS.hint()      get a hint\n PIXELOS.igaveup()   show the password\n PIXELOS.whoami()    context', 'color: #e8d5f5; font-family: monospace; font-size: 13px; line-height: 2;');
  }
};

console.log('%c PIXELOS INVESTIGATOR MODE ', 'color: #ff4da6; font-family: monospace; font-size: 15px; font-weight: bold; background: #0f0a1a; padding: 4px 8px;');
console.log('%c Stuck on the password? Type PIXELOS.hint()\n If you give up, type PIXELOS.igaveup()', 'color: #c9a0dc; font-family: monospace; font-size: 12px;');

function openGmail() {
  openWin('window-gmail', 'tb-gmail');
  gmailFolder('inbox');
}

function gmailFolder(folder) {
  gmailCurrentFolder = folder;
  document.querySelectorAll('.gmail-folder').forEach(el => {
    el.classList.remove('active');
    const match = el.getAttribute('onclick').match(/gmailFolder\('(\w+)'\)/);
    if (match && match[1] === folder) el.classList.add('active');
  });
  gmailRenderList(folder);
  document.getElementById('gmail-view').innerHTML = '<p class="gmail-empty">Select an email to read it.</p>';
}

function gmailRenderList(folder) {
  const list = document.getElementById('gmail-list');
  const emails = GMAIL[folder] || [];
  list.innerHTML = '';

  if (emails.length === 0) {
    list.innerHTML = '<p class="gmail-empty">Nothing here.</p>';
    return;
  }

  emails.forEach(email => {
    const el = document.createElement('div');
    el.className = 'gmail-item' + (email.unread ? ' unread' : '') + (gmailCurrentId === email.id ? ' active' : '');
    el.innerHTML = `
      <div class="gmail-item-from">${email.name}</div>
      <div class="gmail-item-subject">${email.subject}</div>
      <div class="gmail-item-date">${email.date}</div>
    `;
    el.addEventListener('click', () => gmailOpen(email));
    list.appendChild(el);
  });
}

function gmailOpen(email) {
  gmailCurrentId = email.id;
  email.unread = false;
  gmailRenderList(gmailCurrentFolder);

  const view = document.getElementById('gmail-view');
  view.innerHTML = `
    <div class="gmail-view-subject">${email.subject}</div>
    <div class="gmail-view-meta">
      From: ${email.from}<br>
      To: sarah.k.os@gmail.com<br>
      Date: ${email.date}
    </div>
    <div class="gmail-view-body">${email.body}</div>
  `;

  // track for tipster context
  trackOpened('email: ' + email.subject + ' from ' + email.name, email.body);
  // mark discovery if this email is tied to a level
  if (email.levelKey) markDiscovered(email.levelKey);
}

// static case notes — cold case header only, no interactive clue system
function openNotebook() {
  openWin('window-notebook', 'tb-notebook');
  renderNotebook();
  updatePreviews();
}

function renderNotebook() {
  const el = document.getElementById('nb-content');
  if (!el) return;

  const foundCount = discovered.size;
  const totalCount = Object.keys(LEVEL_DEFS).length;

  el.innerHTML = `
    <div class="nb-case-header">
      <div class="nb-case-stamp">COLD CASE</div>
      <div class="nb-case-grid">
        <div class="nb-case-row"><span class="nb-case-label">FILE NO.</span><span class="nb-case-value">2024-02-25 / MIS / 0047</span></div>
        <div class="nb-case-row"><span class="nb-case-label">NAME</span><span class="nb-case-value">Sarah Khalid</span></div>
        <div class="nb-case-row"><span class="nb-case-label">DOB</span><span class="nb-case-value">March 2005 — age 18 at time of disappearance</span></div>
        <div class="nb-case-row"><span class="nb-case-label">LAST SEEN</span><span class="nb-case-value">Feb 25, 2024 — approx 2:00 PM, Harlow Academy gates</span></div>
        <div class="nb-case-row"><span class="nb-case-label">ADDRESS</span><span class="nb-case-value">14 Elmwood Drive, Harlow, UK</span></div>
        <div class="nb-case-row"><span class="nb-case-label">REPORTED BY</span><span class="nb-case-value">David Khalid (father) and Helen Khalid (mother)</span></div>
        <div class="nb-case-row"><span class="nb-case-label">STATUS</span><span class="nb-case-value nb-case-status">OPEN — no suspect charged</span></div>
      </div>
    </div>

    <div class="nb-divider"></div>

    <div class="nb-section-label">INVESTIGATOR NOTES</div>
    <div class="nb-static-note">
      Laptop recovered from subject's bedroom. No signs of struggle at residence.
      Parents cooperative. No known history of running away.
      Father in finance. Mother works from home. Sarah adopted at age 3.
      Device password-protected. Contents under forensic review.
    </div>

    <div class="nb-divider"></div>

    <div class="nb-section-label">DISCOVERY PROGRESS</div>
    <div class="nb-progress-bar-wrap">
      <div class="nb-progress-bar" style="width: ${Math.round((foundCount / totalCount) * 100)}%"></div>
    </div>
    <div class="nb-progress-label">${foundCount} of ${totalCount} evidence items located</div>

    ${foundCount > 0 ? `
    <div class="nb-found-list">
      ${Array.from(discovered).map(k => `
        <div class="nb-found-item">
          <span class="nb-found-dot">◆</span>
          <span>${LEVEL_DEFS[k] ? LEVEL_DEFS[k].label : k}</span>
        </div>
      `).join('')}
    </div>` : '<div class="nb-no-finds">no evidence items located yet. start investigating.</div>'}
  `;
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.cursor = 'default';
  t.onclick = null;
  t.style.display = 'block';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.style.display = 'none'; }, 2200);
}

function startDrag(e, id) {
  const win = document.getElementById(id);
  focusWindow(id);
  dragging = win;
  dragOffsetX = e.clientX - win.offsetLeft;
  dragOffsetY = e.clientY - win.offsetTop;
  e.preventDefault();
}

document.addEventListener('mousemove', e => {
  if (!dragging) return;
  let x = e.clientX - dragOffsetX;
  let y = e.clientY - dragOffsetY;
  // clamp so window cannot escape viewport edges
  x = Math.max(0, Math.min(x, window.innerWidth - dragging.offsetWidth));
  // clamp so window cannot drag behind the taskbar at the bottom
  y = Math.max(0, Math.min(y, window.innerHeight - 60 - dragging.offsetHeight));
  dragging.style.left = x + 'px';
  dragging.style.top = y + 'px';
});

document.addEventListener('mouseup', () => { dragging = null; });

document.querySelectorAll('.window').forEach(win => {
  win.addEventListener('mousedown', () => focusWindow(win.id));
});

// close start menu and hint bulb when clicking on the desktop background
document.getElementById('desktop').addEventListener('click', e => {
  if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn')) {
    closeStartMenu();
  }
});

window.addEventListener('load', () => {
  renderFolder(FILE_SYSTEM);
  renderNotebook();
  runBoot();
});