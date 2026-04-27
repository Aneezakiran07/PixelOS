﻿# PixelOS

A browser-based detective mystery game disguised as a retro operating system. You are handed a kidnaped girl's laptop. Figure out what happened.

---

## Play It

demo link: https://pixel-os-woad.vercel.app/

demo video link: https://drive.google.com/file/d/1oXJNCq0buNGMcFJXMV2Xquk60hl_5HqE/view?usp=sharing

Stuck on the password? Open the browser console and type `PIXELOS.hint()`
Stuck on the game? Open chat bot and ask about the clues!

---

## What It Is

PixelOS simulates a fictional operating system called PixelOS 1.0 belonging to Sarah Khalid, age 18, reported missing February 25 2024. You get her laptop. You investigate.

The game is fully diegetic, every clue lives inside an app on the desktop. You explore the file system, read her emails, check her browser history, and talk to an anonymous tipster if you get stuck. When you think you know the truth, you submit your theory. If you are right, you make a choice about what to do with it.

---

## The Setup

Sarah went missing on a Tuesday afternoon. Her parents reported it. Her laptop was recovered from her bedroom.

Everything else you figure out yourself.

---

## Apps on the Desktop

**Files** : browse Sarah's file system. folders are organized like a real laptop. some things are buried on purpose.

**Mail** : her full inbox and sent folder. read everything. the sent folder matters as much as the inbox.

**Browser** : her recent search history. what someone searches for when they are scared tells you a lot.

**Text Editor** : opens any file from the file explorer. read the contents carefully.

**Case Notes** : static cold case file with Sarah's details. you can add your own notes here and save them.

**Submit Theory** : when you think you know what happened, open this. type your theory. the game uses AI to verify whether you found the truth. if you are right, you get a choice. If you are wrong, then It just tells you to go away and keep searching.

---

## The Tipster

A glowing pink chat button sits in the bottom right corner above the taskbar. Click it to open a chat with an anonymous source who knows more than they say.

The tipster will not tell you anything directly. It asks you questions. You tell it what you found, it asks what you think that means. If you are completely stuck, say "i give up" and it will point you toward the next thing to open.

Powered by GROQ. Requires an API key in `.env`.

---

## The Ending (SPOILERS)

There are three choices once you crack the case.

- **Do your job** : file the report. see what happens.
- **Hide the truth** : close the laptop. walk away.
- **Call the police** : it might not be safe. but it might be right.

Each ending plays out differently. The third one has consequences.

---

## Setup

1. Clone or download the repo
2. Create `env` in the root folder:

```js
GROQ_API_KEY  = 'your_GROQ_key'
```

3. Open `index.html` in a browser

The game works without API keys but the tipster and theory verification will not function. Everything else is fully playable offline.

`env` is in `.gitignore` and will never be committed.

---

## File Structure

```
PIXELOS/
  index.html        main game file
  script.js         all game logic
  style.css         all styles
  .env         your api keys (gitignored, create this yourself)
  assets/
    wallpaper.jpg
    tab_bg.jpg
    chat_bg.jpg
    icon-files.svg
    icon-editor.svg
    icon-browser.svg
    icon-mail.svg
    start-logo.svg
    start-btn-icon.svg
    ping.wav
```
Note: I used same background for all tabs and as wallpaper, if someone want to customize, just drop yours in assets!
---

## Console Commands

Open the browser console (F12) and type:

```
PIXELOS.hint()       get a password hint
PIXELOS.igaveup()    show the password
PIXELOS.whoami()     see your role in the game
PIXELOS.help()       list all commands
```

---

## Technical Notes

Vanilla HTML, CSS, and JavaScript. No frameworks. 

All game state lives in memory. Refreshing resets the game.

The tipster chat keeps only the last 3 message exchanges as context to stay within token limits. The system prompt rebuilds on every message and includes what files and emails you have opened in that session, so the AI always knows what evidence you have seen.

(spoilers) The final theory submission uses a GROQ call with a structured JSON prompt. It checks three things: that the player identified Sarah ran away herself, that her parents were involved in something harmful, and that she was not kidnapped. Players do not need perfect detail to pass.

---

## A Note on the Story

The full truth is not hard to find if you read carefully.( Even in real life, it's like this so stop running away!!!)
