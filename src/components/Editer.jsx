import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { EditorView, lineNumbers } from "@codemirror/view";
import { material } from "@uiw/codemirror-theme-material";

const Editor = ({ displayName, language, value, onChange }) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`flex flex-col  border-4 border-red-400  rounded-md overflow-hidden transition-all duration-300 
        ${open ? "flex-1 min-w-[200px]" : "flex-none w-16"}`}
    >
      <div className="flex items-center justify-between px-2 py-2 bg-gray-900 text-white">
        <span className={`truncate ${open ? "block" : "hidden"}`}>
          {displayName}
        </span>
        <button
          onClick={() => setOpen((s) => !s)}
          className="ml-2 px-2 py-1 rounded bg-gray-700 hover:bg-gray-600"
        >
          {open ? "◀" : "▶"}
        </button>
      </div>

      <div
        className={`transition-all duration-300 ${
          open ? "opacity-100 w-full" : "opacity-0 w-0"
        } overflow-hidden`}
      >
        <CodeMirror
          value={value}
          theme={material}
          height="50vh"
          extensions={[
            language,
            lineNumbers(),
            EditorView.lineWrapping,
          ]}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Editor;
