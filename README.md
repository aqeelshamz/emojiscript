# EmojiScript
 
Code using emojis instead of keywords and symbols 😁
 
To use EmojiScript in your code, add this to the bottom of your `<body>` tag:
```html
<script src="emojiscript.js"></script>
```

Now you can start writing EmojiScript code as:
```javascript
<script type="text/emojiscript">
        🪵("hello world❗")⚡
</script>
```

Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>EmojiScript Demo</title>
</head>
<body>
    <script type="text/emojiscript">
        😎 value 👉 "✅"⚡
        😎 color 👉 "❤️"⚡

        🪵("color is " + color + ". and value is " + value)⚡

        😇 count⚡

        🪵("numbers from 1️⃣ to 🔟:⏭️")⚡
        😮(count 👉 1️⃣⚡ count 👇👉 🔟⚡ count➕➕){
            🪵(count)⚡
        }
    </script>
    <script src="emojiscript.js"></script>
</body>
</html>
```

Dictionary:
```json
{
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
}
```
