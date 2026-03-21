'use strict';

// clock
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('clock').textContent = h + ':' + m;
}
updateClock();
setInterval(updateClock, 15000);

// file system
const FILE_SYSTEM = {
  name: 'Desktop',
  path: 'C:\\Users\\Pixel\\Desktop',
  children: [
    {
      name: 'Documents', type: 'folder', emoji: '📁',
      children: [
        { name: 'diary.txt',  type: 'file', emoji: '📄', content: 'Dear Diary,\n\nToday I booted PixelOS.\nIt is so pink and pretty\nI could cry. ✿\n\n— A pixel girl' },
        { name: 'notes.txt',  type: 'file', emoji: '📄', content: 'NOTES\n\n• Buy pixel art tools\n• Redecorate desktop\n• Learn 8-bit music' },
        { name: 'todo.txt',   type: 'file', emoji: '📄', content: 'TODO\n\n[ ] Make wallpaper\n[ ] Write pixel poem\n[x] Install PixelOS\n[x] Smile at screen' },
      ]
    },
    {
      name: 'Pictures', type: 'folder', emoji: '📷',
      children: [
        { name: 'wallpaper.jpg', type: 'file', emoji: '🖼️', content: null },
        { name: 'pixel-cat.png', type: 'file', emoji: '🖼️', content: null },
        { name: 'sakura.png',    type: 'file', emoji: '🖼️', content: null },
      ]
    },
    {
      name: 'Music', type: 'folder', emoji: '🎵',
      children: [
        { name: 'star_waltz.mod',  type: 'file', emoji: '🎵', content: null },
        { name: 'lilac_dream.mp3', type: 'file', emoji: '🎵', content: null },
      ]
    },
    { name: 'diary.txt',  type: 'file', emoji: '📄', content: 'Dear Diary,\n\nToday I booted PixelOS.\nIt is so pink I could cry. ✿' },
    { name: 'README.txt', type: 'file', emoji: '📄', content: 'Welcome to PixelOS!\n\nVersion 1.0 Pink Edition.\nEnjoy your stay. ✿' },
  ]
};

// nav state
let navHistory = [FILE_SYSTEM];
let currentFolder = FILE_SYSTEM;
let selectedItem = null;

// current open filename in editor
let currentFilename = 'untitled.txt';

// drag state
let dragging = null;
let dragOffsetX = 0;
let dragOffsetY = 0;

// toast timer
let toastTimer = null;


function openFileExplorer() {
  const win = document.getElementById('window-files');
  win.classList.add('is-open', 'is-focused');
  focusWindow('window-files');
  if (!win.style.left) {
    win.style.left = '100px';
    win.style.top = '60px';
  }
  document.getElementById('tb-files').classList.add('is-active');
  renderFolder(currentFolder);
}

// open editor with optional file content
function openEditor(file) {
  const win = document.getElementById('window-editor');
  win.classList.add('is-open');
  focusWindow('window-editor');
  if (!win.style.left) {
    win.style.left = '320px';
    win.style.top = '80px';
  }
  document.getElementById('tb-editor').classList.add('is-active');

  if (file && file.content !== null) {
    document.getElementById('te-area').value = file.content;
    currentFilename = file.name;
  } else if (file === null) {
    // opened blank from taskbar or desktop icon
    document.getElementById('te-area').value = '';
    currentFilename = 'untitled.txt';
  }

  document.getElementById('editor-title').textContent = 'Text Editor — ' + currentFilename;
  document.getElementById('te-filename').textContent = currentFilename;
  updateTeStats();
}

function closeWindow(id) {
  document.getElementById(id).classList.remove('is-open', 'is-focused');
  if (id === 'window-files') document.getElementById('tb-files').classList.remove('is-active');
  if (id === 'window-editor') document.getElementById('tb-editor').classList.remove('is-active');
}

function minimizeWindow(id) {
  document.getElementById(id).classList.remove('is-open');
}

function focusWindow(id) {
  document.querySelectorAll('.window').forEach(w => w.classList.remove('is-focused'));
  document.getElementById(id).classList.add('is-focused');
}

function renderFolder(folder) {
  currentFolder = folder;
  document.getElementById('fe-path').value = folder.path || 'C:\\Users\\Pixel\\' + folder.name;
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
      if (item.type === 'folder') {
        openFolder(item);
      } else {
        openFile(item);
      }
    });

    content.appendChild(el);
  });

  const count = items.length;
  document.getElementById('fe-statusbar').textContent = count + (count === 1 ? ' item' : ' items');
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

function goUp() {
  goBack();
}

// open file in editor if it has text, otherwise show toast
function openFile(file) {
  if (file.content !== null && file.content !== undefined) {
    openEditor(file);
    showToast('Opened ' + file.name);
  } else {
    showToast('No app for ' + file.name + ' yet');
  }
}

// editor toolbar actions
function teNew() {
  document.getElementById('te-area').value = '';
  currentFilename = 'untitled.txt';
  document.getElementById('editor-title').textContent = 'Text Editor — untitled.txt';
  document.getElementById('te-filename').textContent = 'untitled.txt';
  updateTeStats();
}

function teSave() {
  showToast('Saved ' + currentFilename + ' ✿');
}

function teClear() {
  document.getElementById('te-area').value = '';
  updateTeStats();
}

// live word and char count
function updateTeStats() {
  const val = document.getElementById('te-area').value;
  const words = val.trim() ? val.trim().split(/\s+/).length : 0;
  document.getElementById('te-words').textContent = words + ' words';
  document.getElementById('te-chars').textContent = val.length + ' chars';
}

document.getElementById('te-area').addEventListener('input', updateTeStats);

// toast pop up
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.display = 'block';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.style.display = 'none'; }, 2200);
}

// drag windows by titlebar
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
  x = Math.max(0, Math.min(x, window.innerWidth - dragging.offsetWidth));
  y = Math.max(0, Math.min(y, window.innerHeight - 60 - dragging.offsetHeight));
  dragging.style.left = x + 'px';
  dragging.style.top = y + 'px';
});

document.addEventListener('mouseup', () => { dragging = null; });

document.querySelectorAll('.window').forEach(win => {
  win.addEventListener('mousedown', () => focusWindow(win.id));
});

// prerender files so window shows content immediately
window.addEventListener('load', () => {
  renderFolder(FILE_SYSTEM);
});


