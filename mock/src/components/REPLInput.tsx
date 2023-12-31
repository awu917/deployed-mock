import "../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { ControlledInput } from "./ControlledInput";

interface REPLInputProps {
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
  // CHANGED
  history: string[];
  setHistory: Dispatch<SetStateAction<string[]>>;
  mode: String;
  setMode: Dispatch<SetStateAction<String>>;
  file: String;
  setFile: Dispatch<SetStateAction<String>>;
  load: boolean;
  setLoad: Dispatch<SetStateAction<boolean>>;
  view: boolean;
  setView: Dispatch<SetStateAction<boolean>>;
  search: boolean;
  setSearch: Dispatch<SetStateAction<boolean>>;
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props: REPLInputProps) {
  // Remember: let React manage state in your webapp.
  // Manages the contents of the input box
  const [commandString, setCommandString] = useState<string>("");
  // Manages the current amount of times the button is clicked
  const [count, setCount] = useState<number>(0);
  // manage the mode???
  // const [file, setFile] = useState<String>("");

  // This function is triggered when the button is clicked.
  function handleSubmit(commandString: string) {
    setCount(count + 1);
    // CHANGED
    props.setHistory([...props.history, commandString]);
    props.setMode(props.mode);
    props.setLoad(false);
    props.setView(false);
    props.setSearch(false);
    setCommandString("");
    if (commandString == "mode" && props.mode == "brief") {
      props.setMode("verbose");
    }
    if (commandString == "mode" && props.mode == "verbose") {
      props.setMode("brief");
    }
    const strArr = commandString.split(" ");
    if (strArr[0] == "load_csv") {
      props.setFile(strArr[1]);
      props.setLoad(true)
    }
    if (commandString == "view") {
      props.setView(true);
    }
    if (strArr[0] == "search") {
      props.setSearch(true);
    }
  }
  /**
   * We suggest breaking down this component into smaller components, think about the individual pieces
   * of the REPL and how they connect to each other...
   */
  return (
    <div className="repl-input">
      {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
            braces, so that React knows it should be interpreted as TypeScript */}
      {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
            into a single unit, which makes it easier for screenreaders to navigate. */}
      <fieldset>
        <legend>Enter a command:</legend>
        <ControlledInput
          value={commandString}
          setValue={setCommandString}
          ariaLabel={"Command input"}
        />
        <label>mode: {props.mode}</label>
      </fieldset>
      {/* TODO: Currently this button just counts up, can we make it push the contents of the input box to the history?*/}
      <button onClick={() => handleSubmit(commandString)}>
        Submitted {count} times
      </button>
    </div>
  );
}
