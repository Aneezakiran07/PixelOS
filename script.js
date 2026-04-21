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

const FILE_SYSTEM = {
  name: 'Desktop',
  path: 'C:\\Users\\Sarah\\Desktop',
  children: [
    {
      name: 'Pictures', type: 'folder', emoji: '📷',
      path: 'C:\\Users\\Sarah\\Desktop\\Pictures',
      children: [
        {
          name: 'cat.jpg', type: 'file', emoji: '📷', clue: null,
          content: '[IMAGE — cat.jpg]\n\nOrange tabby cat sitting on a windowsill.\nSunlight coming through the curtains.\nSomeone wrote "mochi !!" in the filename.'
        },
        {
          name: 'my_room.jpg', type: 'file', emoji: '📷', clue: null,
          content: '[IMAGE — my_room.jpg]\n\nA bedroom. Fairy lights above the bed.\nPink curtains. Posters on the wall.\nA desk covered in notebooks and pens.\nLooks lived-in.'
        },
        {
          name: 'alice_and_me.jpg', type: 'file', emoji: '📷', clue: null,
          content: '[IMAGE — alice_and_me.jpg]\n\nTwo girls in school uniform making faces at the camera.\nOne is presumably Sarah.\nPhoto taken in what looks like a school corridor.'
        },
        {
          name: 'birthday_cake.jpg', type: 'file', emoji: '📷', clue: null,
          content: '[IMAGE — birthday_cake.jpg]\n\nA chocolate cake with pink candles.\nA woman in the background is smiling at the camera.\nTable looks like a home kitchen.\nWarm photo.'
        }
      ]
    },
    {
      name: 'Documents', type: 'folder', emoji: '📁',
      path: 'C:\\Users\\Sarah\\Desktop\\Documents',
      children: [
        {
          name: 'diary.txt', type: 'file', emoji: '📄', clue: 'diary',
          content: 'feb 10\n\nalice came over after school. we watched that show she likes and ate all the snacks mom left.\nmom texted asking if we wanted dinner. she always does that.\n\nfeb 14\n\nvalentines day and nothing happened lol.\nsaw lilly give out cards to everyone except me. she is so obvious.\nalice said ignore her. probably right.\n\nfeb 18\n\nthere is this guy in the year above. i dont know his name yet.\nhe walked past my locker again today. third time this week.\ntold alice. she said maybe he just has classes that way.\nmaybe.\nbut the way he looks at me. it doesnt feel right.\n\nfeb 21\n\nfound some papers in dads study when i went to get the printer cable.\none said asset 07 at the top. looked like a list. some numbers, some names.\nthe other one had writing i dont fully understand.\nprobably some work file. texted alice about it.\n\nfeb 22\n\nhe was outside school again today. just standing there by the gates.\nnot waiting for anyone. just watching the crowd.\ni dont know why but i went a different way home.\n\nfeb 23\n\nthe guy walked past my locker again. this time he stopped and stared.\nnot at me. at something near me. like he was memorising the area.\nfelt weird all evening. told alice. she said i was overthinking.\nmaybe.\n\nfeb 24\n\nlilly made a comment in class today about my presentation.\nnot to my face, to the girl next to her. but loud enough.\ni pretended not to hear.\nmom asked how school was and i said fine.\nsome things are easier to keep to yourself.'
        },
        {
          name: 'homework_biology.txt', type: 'file', emoji: '📄', clue: null,
          content: 'BIOLOGY — Chapter 9 Notes\n\nCell division: mitosis vs meiosis\n— mitosis: identical copies, growth and repair\n— meiosis: genetic variation, reproduction\n\nRemember for exam:\nPMAT — prophase, metaphase, anaphase, telophase\n\ntodo: finish diagram on page 112\nask alice if she has the textbook'
        }
      ]
    },
    {
      name: 'System', type: 'folder', emoji: '📁',
      path: 'C:\\Users\\Sarah\\Desktop\\System',
      children: [
        {
          name: 'wifi_history.log', type: 'file', emoji: '📄', clue: 'wifi',
          content: 'WIFI CONNECTION LOG\nDevice: SARAH-LAPTOP\n\n[2024-02-25]  07:52  Connected     Home_Router_5G\n[2024-02-25]  08:14  Disconnected  Home_Router_5G\n\n[2024-02-25]  16:04  Connected     Home_Router_5G\n[2024-02-25]  16:39  Disconnected  Home_Router_5G'
        },
        {
          name: 'battery_history.log', type: 'file', emoji: '📄', clue: 'battery',
          content: 'BATTERY HISTORY LOG\nDevice: SARAH-LAPTOP\n\n[2024-02-25]  07:50  Unplugged\n[2024-02-25]  07:50  Battery: 91%\n\n[2024-02-25]  16:02  Plugged in\n[2024-02-25]  16:39  Unplugged\n[2024-02-25]  16:39  Battery: 97%'
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
              name: 'english_essay_draft.txt', type: 'file', emoji: '📄', clue: null,
              content: 'The Great Gatsby — Theme of the American Dream\n\nDraft 1 — unfinished\n\nFitzgerald presents the American Dream as...\n\n[Sarah left this unfinished. Last edited Feb 12.]'
            },
            {
              // boring folder name that hides the critical evidence
              name: 'backup', type: 'folder', emoji: '📁',
              path: 'C:\\Users\\Sarah\\Desktop\\Misc\\old_schoolwork\\backup',
              children: [
                {
                  name: 'ref_NL2024.txt', type: 'file', emoji: '📄', clue: 'ticket',
                  content: 'Northline Bus Services\nBooking Ref: NL-2024-00892\n\nPassenger: S. Khalid\nRoute: City Central → Havenport North\nDeparture: Friday 25 Feb — 9:00 PM\nSeat: 14A\nStatus: Confirmed\n\n---\n\n[also saved here for reference]\n\nNL Havenport North\nAvg walk from bus stop to shelter: 6 min\nCheck in after 10pm, no questions asked policy'
                },
                {
                  name: 'contract_scan.jpg', type: 'file', emoji: '📄', clue: 'contract',
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

// gmail data
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
      id: 'g3',
      from: 'alice.m.22@gmail.com',
      name: 'Alice',
      subject: 'sarah??',
      date: 'Feb 25, 5:30 PM',
      unread: true,
      clue: 'alice_worried',
      body: 'hey you never replied to my message after school\nare you home\n\nyour mom texted me which is weird\nshe asked if i knew where you were\n\nplease just reply\n\n— alice'
    },
    {
      id: 'g4',
      from: 'steve.k@gmail.com',
      name: 'Steve (cousin)',
      subject: 'new years plans!!',
      date: 'Feb 19, 11:02 AM',
      unread: false,
      body: 'sarah\n\nmum wants to know if your family is coming for new years this year\nlet us know so she can sort out food and everything\n\nalso are you still doing that art project\nmy sister wants to see it\n\n— steve'
    },
    {
      id: 'g5',
      from: 'lilly.tw@gmail.com',
      name: 'Lilly',
      subject: 'group project',
      date: 'Feb 20, 3:55 PM',
      unread: false,
      body: 'Hi Sarah\n\nMr Hassan put us in the same group for the history project.\nI think we should divide the slides equally.\nI can do the intro and conclusion.\n\nLilly'
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
      clue: 'mom_panic',
      body: 'sarah you were supposed to be home at 2:30\ni have called three times\n\nplease reply or call me right now\ni am worried\n\n— mom'
    },
    {
      id: 'g8',
      from: 'alice.m.22@gmail.com',
      name: 'Alice',
      subject: 'happy early birthday!!',
      date: 'Feb 22, 6:03 PM',
      unread: false,
      clue: 'birthday_email',
      body: 'SARAH!!!!\n\nhappy advance 19th birthday bestie !!\ni know its not for a few weeks but i saw this and thought of you\n\nyou are going to have the BEST year i just know it\nalso we need to plan something actually fun this time, last year was a disaster lol\n\nok bye love you\n— alice 🎂'
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
      id: 's2',
      from: 'sarah.k.os@gmail.com',
      name: 'me',
      subject: 're: new years plans!!',
      date: 'Feb 20, 6:12 PM',
      unread: false,
      body: 'steve\n\nyes probably coming, ill ask mom\n\nalso — is it weird if your mom starts acting really different\nlike suddenly asking where you are all the time, going through your stuff\nthen acting totally normal the next hour\nidk shes been off lately. probably nothing\n\nyeah still doing the art thing, its due march 3\n\n— sarah'
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
  document.getElementById(id).style.zIndex = zCounter;
}

function focusWindow(id) {
  document.querySelectorAll('.window').forEach(w => w.classList.remove('is-focused'));
  document.getElementById(id).classList.add('is-focused');
  bringToFront(id);
  // close the start menu whenever a window is focused
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
    notebookOpen ? NOTEBOOK_ENTRIES.length + ' entries'
    : minimized['window-notebook'] ? NOTEBOOK_ENTRIES.length + ' entries'
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

function renderFolder(folder) {
  currentFolder = folder;

  // build the correct path from folder data or fall back to a constructed one
  const displayPath = folder.path || ('C:\\Users\\Sarah\\' + folder.name);
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
    if (file.clue) triggerClueDiscovery(file.clue, file.name);
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

  if (email.clue) triggerClueDiscovery(email.clue, email.subject);
}

// pre-filled notebook entries shown from the start
const NOTEBOOK_ENTRIES = [
  {
    time: 'Case opened — Feb 25, 2024',
    text: 'MISSING PERSON\n\nName: Sarah Khalid, age 18\nResidence: 14 Elmwood Drive, Harlow, UK\nLast seen: Feb 25 approx 2:00 PM\nLocation: Left school gates on foot\nDid not arrive home\n\nReported by: Parents (David and Helen Khalid)\nDevice recovered: Personal laptop, found in her room',
    clue: false
  },
  {
    time: 'Initial observations',
    text: 'Laptop handed over by parents.\nNo signs of struggle at home.\nParents appear cooperative.\nFriends not yet contacted by police.\n\nLaptop password-protected.\nContents under review.',
    clue: false
  },
  {
    time: 'Background — from parents',
    text: 'Sarah is a Year 13 student at Harlow Academy.\nDescribed as quiet, responsible, good student.\nNo known history of running away.\nParents report no recent arguments at home.\n\nFather works in finance. Long hours.\nMother works from home.\n\nSarah was adopted at age 3.',
    clue: false
  }
];

// pending clues waiting for player interaction in the notebook
const pendingClues = {};

// clue definitions with hint text and full answer for each discoverable item
const CLUE_DEFS = {
  wifi: {
    filename: 'wifi_history.log',
    hint: 'Look at the timestamps carefully. When did she connect and disconnect? What does that tell you about where she was and when?',
    answer: {
      time: 'wifi_history.log — analysed',
      text: 'Device connected at 07:52 — before school.\nDisconnected at 08:14 — left home.\n\nReconnected at 16:04 — came home after school.\nDisconnected again at 16:39.\n\nShe was home briefly on Feb 25 between 4:04 and 4:39 PM.\nShe left again before her mother expected her at 2:30.\nShe came back, then left a second time.',
      clue: true
    }
  },
  battery: {
    filename: 'battery_history.log',
    hint: 'She unplugged at 91% in the morning. Then plugged in and unplugged again. Why would she charge the laptop if she was just coming home briefly?',
    answer: {
      time: 'battery_history.log — analysed',
      text: 'Battery at 91% when she left in the morning.\nShe plugged in at 16:02 and unplugged at 16:39.\n\nShe came home, charged the laptop to 97%, then left.\nThis was deliberate. She was preparing for something.\nSomeone who plans to come back does not top up their battery.',
      clue: true
    }
  },
  diary: {
    filename: 'diary.txt',
    hint: 'This is just the surface. The diary mentions a guy, papers in her dad\'s study, and her mom going through her things. None of these are explained here. Keep exploring — check her emails, her browser history, and every folder in the file system.',
    answer: {
      time: 'diary.txt — reviewed',
      text: 'Sarah noticed someone following her from Feb 18 onward.\nShe found documents in her father\'s study on Feb 21.\nHer mother searched her diary at some point before Feb 23.\n\nThree things happening at once: surveillance, discovery, privacy violation.\nThe diary does not explain what she found.\nThe full picture is elsewhere.\n\nStill to explore: emails, browser history, all file system folders.',
      clue: true
    }
  },
  ticket: {
    filename: 'ref_NL2024.txt',
    hint: 'This is a bus booking. Where is she going, and when? Look at where this file was saved — buried inside a folder with no obvious name. She hid it deliberately.',
    answer: {
      time: 'ref_NL2024.txt — found',
      text: 'Bus booking confirmed under S. Khalid.\nRoute: City Central to Havenport North.\nDeparture: Feb 25 — 9:00 PM.\n\nThis was not an impulsive decision.\nShe researched hotels in Havenport North before booking.\nShe buried the confirmation three folders deep under a meaningless name.\n\nShe planned this. She knew she was leaving.',
      clue: true
    }
  },
  contract: {
    filename: 'contract_scan.jpg',
    hint: 'This is the document she photographed in her father\'s study. Read it carefully. Look at the name at the top and the line about age 19. Then think about who Asset 07 might be.',
    answer: {
      time: 'contract_scan.jpg — critical evidence',
      text: 'Document header: ASSET 07.\nLists names and figures — appears to be a transfer agreement.\nKey line: "transfer to be completed no later than subject\'s 19th year."\nOne signature matches: D. Khalid.\n\nSarah turns 19 in a matter of weeks.\nShe is Asset 07.\n\nHer father signed a document agreeing to hand her over.\nThis is not a missing persons case.\nSarah found this and ran.',
      clue: true
    }
  },
  alice_worried: {
    filename: 'sarah?? (email)',
    hint: 'Alice sent this on the evening of Feb 25. She says Sarah\'s mother texted her asking where Sarah was. Why would a mother contact her daughter\'s friend before calling the police?',
    answer: {
      time: 'Email — Alice (Feb 25, 5:30 PM) — reviewed',
      text: 'Alice texted Sarah after school and got no reply.\nSarah\'s mother contacted Alice directly asking her location.\n\nThis is unusual. A parent whose child is simply late does not immediately contact friends.\nThe mother knew something was wrong before the expected time had passed.\n\nPossible explanation: she was monitoring Sarah and lost track of her.',
      clue: true
    }
  },
  mom_panic: {
    filename: 'where are you (email)',
    hint: 'Sarah was supposed to be home at 2:30. This email was sent at 3:47. Look at the wifi log — Sarah was actually home at 4:04. The mother sent a panic email before Sarah had even come back.',
    answer: {
      time: 'Email — Mom (Feb 25, 3:47 PM) — reviewed',
      text: 'Mother emailed at 3:47 PM saying Sarah missed her 2:30 curfew.\nWifi log shows Sarah connected at 4:04 PM — she came home.\n\nThe mother knew the exact expected time. She monitored it closely.\nSarah came home, charged her laptop, and left again by 4:39.\nHer mother did not mention this second departure to investigators.\n\nWhy not?',
      clue: true
    }
  },
  birthday_email: {
    filename: 'happy early birthday!! (email)',
    hint: 'This looks like a normal message from a friend. But look at the date Alice sent it — Feb 22. Then remember what the contract in the hidden folder says about age 19. Alice is innocent. She had no idea.',
    answer: {
      time: 'Email — Alice (Feb 22) — reviewed',
      text: 'Alice wished Sarah a happy advance 19th birthday on Feb 22.\nShe mentions it is "a few weeks away."\n\nCross-referenced with the contract: transfer to be completed before the subject\'s 19th year.\n\nAlice did not know. But this email arriving days after Sarah found the documents may have confirmed the timeline in her mind.\n\nSarah\'s 19th birthday is the deadline.\nShe had weeks, not months.',
      clue: true
    }
  }
};

function triggerClueDiscovery(clueKey, sourceName) {
  // do nothing if this clue was already found or is already pending
  if (foundClues.has(clueKey)) return;
  if (pendingClues[clueKey]) return;

  pendingClues[clueKey] = true;

  const pendingEntry = {
    time: 'new discovery — ' + sourceName,
    text: null,
    clue: false,
    pending: true,
    clueKey: clueKey
  };

  NOTEBOOK_ENTRIES.push(pendingEntry);

  // show the toast with a click handler that opens case notes
  showToastWithAction('Something to note — check Case Notes', () => {
    openNotebook();
  });

  // play the ping sound to signal a new discovery
  playPing();
}

const foundClues = new Set();

function submitNotebookInput(clueKey, inputEl) {
  const val = inputEl.value.trim().toLowerCase();
  if (!val) return;

  const def = CLUE_DEFS[clueKey];
  if (!def) return;

  if (val === 'help') {
    inputEl.value = '';
    // show only the hint for this specific clue, nothing else
    showNotebookHint(clueKey, def.hint);
    return;
  }

  if (val === 'ans') {
    inputEl.value = '';
    resolvePendingClue(clueKey, def.answer);
    return;
  }

  inputEl.value = '';
  showNotebookHint(clueKey, 'type help for a hint or ans when you are ready to record your finding');
}

function showNotebookHint(clueKey, hintText) {
  // only reveals the hint box for the matching clue entry
  const el = document.getElementById('nb-hint-' + clueKey);
  if (!el) return;
  el.textContent = hintText;
  el.style.display = 'block';
}

function resolvePendingClue(clueKey, answerEntry) {
  foundClues.add(clueKey);
  delete pendingClues[clueKey];

  const idx = NOTEBOOK_ENTRIES.findIndex(e => e.clueKey === clueKey);
  if (idx !== -1) {
    NOTEBOOK_ENTRIES[idx] = answerEntry;
  }

  playPing();
  renderNotebook();
  showToast('New entry added to Case Notes ✿');
}

function playPing() {
  try {
    const audio = new Audio('assets/ping.wav');
    audio.volume = 0.6;
    audio.play().catch(() => {});
  } catch (e) {}
}

function openNotebook() {
  openWin('window-notebook', 'tb-notebook');
  renderNotebook();
  updatePreviews();
}

function renderNotebook() {
  const el = document.getElementById('nb-content');
  if (!el) return;
  el.innerHTML = '';

  NOTEBOOK_ENTRIES.forEach(entry => {
    const div = document.createElement('div');

    if (entry.pending) {
      div.className = 'nb-entry nb-entry-pending';
      const def = CLUE_DEFS[entry.clueKey];
      div.innerHTML = `
        <div class="nb-entry-time">${entry.time}</div>
        <div class="nb-pending-question">What did you discover in <span class="nb-filename">${def ? def.filename : entry.clueKey}</span> ?</div>
        <div class="nb-hint-text" id="nb-hint-${entry.clueKey}"></div>
        <div class="nb-input-row">
          <input
            class="nb-input"
            type="text"
            placeholder="type help or ans..."
            onkeydown="if(event.key==='Enter') submitNotebookInput('${entry.clueKey}', this)"
          />
          <button class="nb-submit-btn" onclick="submitNotebookInput('${entry.clueKey}', this.previousElementSibling)">→</button>
        </div>
        <div class="nb-input-hint">type <span class="nb-cmd">help</span> for a hint · type <span class="nb-cmd">ans</span> to record your finding</div>
      `;
    } else {
      div.className = 'nb-entry' + (entry.clue ? ' clue' : '');
      div.innerHTML = `
        <div class="nb-entry-time">${entry.time}</div>
        <div class="nb-entry-text">${entry.text}</div>
      `;
    }

    el.appendChild(div);
  });

  el.scrollTop = el.scrollHeight;
  updatePreviews();
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

function showToastWithAction(msg, callback) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  // make the toast look and behave like a button when it has an action
  t.style.cursor = 'pointer';
  t.onclick = () => {
    t.style.display = 'none';
    clearTimeout(toastTimer);
    callback();
  };
  t.style.display = 'block';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.style.display = 'none';
    t.onclick = null;
    t.style.cursor = 'default';
  }, 4000);
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
  // clamp horizontally within the viewport
  x = Math.max(0, Math.min(x, window.innerWidth - dragging.offsetWidth));
  // clamp vertically so the window cannot go below the taskbar
  y = Math.max(0, Math.min(y, window.innerHeight - 60 - dragging.offsetHeight));
  dragging.style.left = x + 'px';
  dragging.style.top = y + 'px';
});

document.addEventListener('mouseup', () => { dragging = null; });

document.querySelectorAll('.window').forEach(win => {
  win.addEventListener('mousedown', () => focusWindow(win.id));
});

window.addEventListener('load', () => {
  renderFolder(FILE_SYSTEM);
  renderNotebook();
  runBoot();
});

document.getElementById('desktop').addEventListener('click', e => {
  if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn')) {
    closeStartMenu();
  }
});