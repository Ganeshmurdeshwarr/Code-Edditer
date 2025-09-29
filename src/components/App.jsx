import React, { useState, useEffect } from "react";
import Editor from "./Editer";
import { javascript } from "@codemirror/lang-javascript";
import { xml } from "@codemirror/lang-xml";
import { css } from "@codemirror/lang-css";

export default function App() {
  const [html, setHtml] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [js, setJs] = useState("");

  const [srcDoc, setSrcDoc] = useState(""); // 👈 iframe content

  // Debounce: update iframe only after 500ms pause
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body style="color: white;">
            ${html}
          </body>
          <style>${cssCode}</style>
          <script>${js}<\/script>
        </html>
      `);
    }, 500);

    return () => clearTimeout(timeout); // cleanup old timer
  }, [html, cssCode, js]);

  return (
    <div className="h-screen bg-gray-800 flex flex-col">
      <h1 className="text-white text-6xl text-center m-2.5 font-bold">CODE EDITOR</h1>

      <div className="flex gap-2 p-2" style={{ height: "50vh" }}>
        <Editor displayName="HTML" language={xml()} value={html} onChange={setHtml} />
        <Editor displayName="CSS" language={css()} value={cssCode} onChange={setCssCode} />
        <Editor displayName="JS" language={javascript()} value={js} onChange={setJs} />
      </div>

      <div className="flex-1 p-2 border-4 border-amber-700">
        <h2 className="text-white text-xl text-center m-2.5 font-bold">Output</h2>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          className="w-full h-[85%] "
        />
      </div>
    </div>
  );
}
