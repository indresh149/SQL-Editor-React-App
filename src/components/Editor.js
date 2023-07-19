import React, { useState, memo } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import "./Editor.css";
import DropDown from "../components/selector";

const Editor = ({ setQuery, query, executeQuery, setTableName,tableName }) => {
   
    
   
  const [content, setContent] = useState(`SELECT * from ${tableName}`);

  const handleClear = () => {
    setContent("");
    setQuery("");
  };
 

  const handleRun = () => {
    setQuery(content);
    executeQuery(query);
  };
  const handleDropDownChange = (selectedOption) => {
    setTableName(selectedOption.label);
    setQuery(selectedOption.value);
    setContent(`SELECT * from ${tableName}`);
  };

  return (
    <div className="editor">
    <DropDown
    query={query}
    setQuery={setQuery}
    tableName={tableName}
    setTableName={setTableName}
    onChange={handleDropDownChange}
    />
      <CodeMirror
        value={`SELECT * from ${tableName}`}
        tableName={tableName}
        extensions={[sql()]}
        onChange={(value, viewUpdate) => {
          setContent(value);
        }}
      />
      {console.log(content)}
      <div className="buttons">
        <button className="clear button" onClick={handleClear}>
          Clear
        </button>
        <button className="run button" onClick={handleRun}>
          Run
        </button>
      </div>
    </div>
  );
};

export default memo(Editor);
