📝 Code Editor (React + Vite + Tailwind + CodeMirror 6)

A simple web-based code editor built with React, CodeMirror 6, TailwindCSS, and Vite.
It allows you to write HTML, CSS, and JavaScript in separate editor panels and preview the live output in real-time inside an iframe (with a 500ms debounce to avoid excessive refresh).

🚀 Features

✍️ Three editors: HTML, CSS, and JavaScript.

🎨 CodeMirror 6 with syntax highlighting, line numbers, and Material theme.

⚡ Debounced live preview (updates after 500ms of inactivity).

🔀 Collapsible panels for each editor.

🖤 Dark UI powered by TailwindCSS.

📂 Project Structure
src/
 ├── App.jsx         # Main app with 3 editors + output iframe
 ├── Editer.jsx      # (Editor component - collapsible CodeMirror panel)
 └── index.css       # TailwindCSS styles

🛠️ Tech Stack

React 18+ (with hooks)

Vite (fast dev environment)

TailwindCSS (for styling)

CodeMirror 6 (@uiw/react-codemirror)