import "../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { viewHash, testHash } from "../mockedJson";
import { searchHash, testSearch } from "../MockSearch";

interface REPLHistoryProps {
  // TODO: Fill with some shared state tracking all the pushed commands
  // CHANGED
  history: string[];
  mode: String;
  setMode: Dispatch<SetStateAction<String>>;
  file: String;
  setFile: Dispatch<SetStateAction<String>>;
  view: boolean;
  setView: Dispatch<SetStateAction<boolean>>;
  search: boolean;
  setSearch: Dispatch<SetStateAction<boolean>>;
}
export function REPLHistory(props: REPLHistoryProps) {
  var fileArr: String[][];
  fileArr = [[]];
  if (props.file !== "" && props.view) {
    fileArr = viewHash.get(props.file)!;
  }
  if (props.file !== "" && props.search) {
    fileArr = searchHash.get(props.file)!;
  }

  if (props.mode == "verbose") {
    return (
      <div className="repl-history">
        {props.history.map((command, index) => (
          <p>
            {" "}
            Command: {command} {"\n"} Output:{" "}
          </p>
        ))}
        <table>
          <tbody>
            {fileArr.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (props.mode == "brief") {
    return (
      <div className="repl-history">
        <table>
          <tbody>
            {fileArr.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}
