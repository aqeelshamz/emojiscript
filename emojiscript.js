
const data = {
  "⚡": ";",
  "😎": "const",
  "😇": "var",
  "😊": "let",
  "😮": "for",
  "🙂": "while",
  "👍": "do",
  "👉": "=",
  "👆": ">",
  "👇": "<",
  "🪵": "console.log",
  "🗣️": "alert",
  "💬": "alert",
  "🚨": "alert",
  "⏭️": "\\n",
  "🆕": "new",
  "🆖": "NG",
  "🆗": "ok",
  "🆙": "up",
  "🆒": "cool",
  "🆓": "free",
  "🅰️": "a",
  "🅱️": "b",
  "🆎": "ab",
  "🆑": "cl",
  "🆘": "sos",
  "🆔": "id",
  "#️⃣": "#",
  "➕": "+",
  "➖": "-",
  "➗": "/",
  "✖️": "false",
  "❌": "false",
  "❎": "false",
  "✔️": "true",
  "☑️": "true",
  "✅": "true",
  "0️⃣": "0",
  "1️⃣": "1",
  "2️⃣": "2",
  "3️⃣": "3",
  "4️⃣": "4",
  "5️⃣": "5",
  "6️⃣": "6",
  "7️⃣": "7",
  "8️⃣": "8",
  "9️⃣": "9",
  "🔟": "10",
  "🟰": "=",
  "💯": "100",
  "❕": "!",
  "❔": "?",
  "❓": "?",
  "❗": "!",
  "‼️": "!!",
  "⁉️": "!?",
  "➡️": "=>",
  "⬅️": "<=",
  "🔴": "#ff0000",
  "🟠": "#ffa500",
  "🟡": "#ffff00",
  "🟢": "#00ff00",
  "🔵": "#0000ff",
  "🟣": "#a020f0",
  "🟤": "#964b00",
  "⚫": "#000000",
  "⚪": "#ffffff",
  "🟥": "#ff0000",
  "🟧": "#ffa500",
  "🟨": "#ffff00",
  "🟩": "#00ff00",
  "🟦": "#0000ff",
  "🟪": "#a020f0",
  "🟫": "#964b00",
  "⬛": "#000000",
  "⬜": "#ffffff",
  "❤️": "#ff0000",
  "❤": "#ff0000",
  "🧡": "#ffa500",
  "💛": "#ffff00",
  "💚": "#00ff00",
  "💙": "#0000ff",
  "💜": "#a020f0",
  "🤎": "#964b00",
  "🖤": "#000000",
  "🤍": "#ffffff",
};

function replaceKeyWithValue(str, obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      str = str.replace(new RegExp(key, "g"), value);
    }
  }
  return str;
}

function compileScripts() {
  const scripts = document.getElementsByTagName("script");
  for (const script of scripts) {
    if (script.type == "text/emojiscript") {
      const str = script.innerText;
      eval(replaceKeyWithValue(str, data));
    }
  }
}

if (typeof window != "undefined")
  window.addEventListener("DOMContentLoaded", compileScripts);
