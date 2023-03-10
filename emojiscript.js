
const data = {
  "โก": ";",
  "๐": "const",
  "๐": "var",
  "๐": "let",
  "๐ฎ": "for",
  "๐": "while",
  "๐": "do",
  "๐": "=",
  "๐": ">",
  "๐": "<",
  "๐ชต": "console.log",
  "๐ฃ๏ธ": "alert",
  "๐ฌ": "alert",
  "๐จ": "alert",
  "โญ๏ธ": "\\n",
  "๐": "new",
  "๐": "NG",
  "๐": "ok",
  "๐": "up",
  "๐": "cool",
  "๐": "free",
  "๐ฐ๏ธ": "a",
  "๐ฑ๏ธ": "b",
  "๐": "ab",
  "๐": "cl",
  "๐": "sos",
  "๐": "id",
  "#๏ธโฃ": "#",
  "โ": "+",
  "โ": "-",
  "โ": "/",
  "โ๏ธ": "false",
  "โ": "false",
  "โ": "false",
  "โ๏ธ": "true",
  "โ๏ธ": "true",
  "โ": "true",
  "0๏ธโฃ": "0",
  "1๏ธโฃ": "1",
  "2๏ธโฃ": "2",
  "3๏ธโฃ": "3",
  "4๏ธโฃ": "4",
  "5๏ธโฃ": "5",
  "6๏ธโฃ": "6",
  "7๏ธโฃ": "7",
  "8๏ธโฃ": "8",
  "9๏ธโฃ": "9",
  "๐": "10",
  "๐ฐ": "=",
  "๐ฏ": "100",
  "โ": "!",
  "โ": "?",
  "โ": "?",
  "โ": "!",
  "โผ๏ธ": "!!",
  "โ๏ธ": "!?",
  "โก๏ธ": "=>",
  "โฌ๏ธ": "<=",
  "๐ด": "#ff0000",
  "๐ ": "#ffa500",
  "๐ก": "#ffff00",
  "๐ข": "#00ff00",
  "๐ต": "#0000ff",
  "๐ฃ": "#a020f0",
  "๐ค": "#964b00",
  "โซ": "#000000",
  "โช": "#ffffff",
  "๐ฅ": "#ff0000",
  "๐ง": "#ffa500",
  "๐จ": "#ffff00",
  "๐ฉ": "#00ff00",
  "๐ฆ": "#0000ff",
  "๐ช": "#a020f0",
  "๐ซ": "#964b00",
  "โฌ": "#000000",
  "โฌ": "#ffffff",
  "โค๏ธ": "#ff0000",
  "โค": "#ff0000",
  "๐งก": "#ffa500",
  "๐": "#ffff00",
  "๐": "#00ff00",
  "๐": "#0000ff",
  "๐": "#a020f0",
  "๐ค": "#964b00",
  "๐ค": "#000000",
  "๐ค": "#ffffff",
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
