import { useState } from 'react';
import '../styles/main.css';
import { REPLHistory } from './REPLHistory';
import { REPLInput } from './REPLInput';

/* 
  You'll want to expand this component (and others) for the sprints! Remember 
  that you can pass "props" as function arguments. If you need to handle state 
  at a higher level, just move up the hooks and pass the state/setter as a prop.
  
  This is a great top level component for the REPL. It's a good idea to have organize all components in a component folder.
  You don't need to do that for this gearup.
*/

export default function REPL() {
  // TODO: Add some kind of shared state that holds all the commands submitted.
  // CHANGED
  const [history, setHistory] = useState<string[]>([])
  const [mode, setMode] = useState<String>("brief")
  const [file, setFile] = useState<String>("");
  const [load, setLoad] = useState<boolean>(false);
  const [view, setView] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);


  return (
    <div className="repl">  
      {/*This is where your REPLHistory might go... You also may choose to add it within your REPLInput 
      component or somewhere else depending on your component organization. What are the pros and cons of each? */}
      {/* CHANGED */}
      <REPLHistory history={history} mode={mode} setMode={setMode} file={file} setFile={setFile} load={load} setLoad={setLoad} view={view} setView={setView} search={search} 
      setSearch={setSearch} />
      <hr></hr>
      {/* CHANGED */}
      <REPLInput history={history} setHistory={setHistory} mode={mode} setMode={setMode} file={file} setFile={setFile} load={load} setLoad={setLoad} view={view} setView={setView} 
      search={search} setSearch={setSearch}/>
    </div>
  );
}