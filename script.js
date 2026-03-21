'use strict';

// clock update
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('clock').textContent = h + ':' + m;
}
updateClock();
setInterval(updateClock, 15000);

// fake file system
const FILE_SYSTEM = {
  name: 'Desktop',
  path: 'C:\\Users\\Pixel\\Desktop',
  children: [
    {
      name: 'Documents', type: 'folder', emoji: '📁',
      children: [
        { name: 'diary.txt',  type: 'file', emoji: '📄', content: 'Its 3 15 am right now' },
        { name: 'notes.txt',  type: 'file', emoji: '📄', content: 'NOTES\n\n Made the file explorer ' },
        { name: 'todo.txt',   type: 'file', emoji: '📄', content: 'TODO\n\n[ ] Make Editor' },
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
    { name: 'diary.txt',  type: 'file', emoji: '📄', content: 'I want to sleep' },
    { name: 'README.txt', type: 'file', emoji: '📄', content: 'Welcome to PixelOS!\n\nVersion 1.0.\nEnjoy your stay.' },
  ]
};

// nav state
let history = [FILE_SYSTEM];
let currentFolder = FILE_SYSTEM;
let selectedItem = null;

// drag state
let dragging = null;
let dragOffsetX = 0;
let dragOffsetY = 0;

function openFileExplorer() {
  const win = document.getElementById('window-files');
  win.classList.add('is-open', 'is-focused');
  if (!win.style.left) {
    win.style.left = '140px';
    win.style.top = '60px';
  }
  document.getElementById('tb-files').classList.add('is-active');
  renderFolder(currentFolder);
}

function closeWindow(id) {
  document.getElementById(id).classList.remove('is-open', 'is-focused');
  if (id === 'window-files') {
    document.getElementById('tb-files').classList.remove('is-active');
  }
}

function minimizeWindow(id) {
  document.getElementById(id).classList.remove('is-open');
}

function renderFolder(folder) {
  currentFolder = folder;
  document.getElementById('fe-path').value = folder.path || 'C:\\Users\\Pixel\\' + folder.name;
  document.getElementById('btn-back').disabled = history.length <= 1;

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
  history.push(folder);
  renderFolder(folder);
}

function goBack() {
  if (history.length > 1) {
    history.pop();
    renderFolder(history[history.length - 1]);
  }
}

function goUp() {
  goBack();
}

function openFile(file) {
  if (file.content !== null && file.content !== undefined) {
    alert('File: ' + file.name + '\n\n' + file.content);
  } else {
    alert('Cannot open ' + file.name + ' yet.');
  }
}

// drag window by titlebar
function startDrag(e, id) {
  const win = document.getElementById(id);
  win.classList.add('is-focused');
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
  win.addEventListener('mousedown', () => {
    document.querySelectorAll('.window').forEach(w => w.classList.remove('is-focused'));
    win.classList.add('is-focused');
  });
});

// render files on load so they show immediately when window opens
window.addEventListener('load', () => {
  renderFolder(FILE_SYSTEM);
});