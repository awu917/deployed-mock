import '../styles/main.css';
import { Dispatch, SetStateAction, useState} from 'react';


interface REPLHistoryProps{
    // TODO: Fill with some shared state tracking all the pushed commands
    // CHANGED
    history: string[],
    mode: String,
    setMode: Dispatch<SetStateAction<String>>,
    file: String,
    setFile: Dispatch<SetStateAction<String>>

    
}
export function REPLHistory(props : REPLHistoryProps) {

    if (props.mode == "verbose"){
    return (
        <div className="repl-history">
            {/* This is where command history will go */}
            {/* TODO: To go through all the pushed commands... try the .map() function! */}
            {/* CHANGED */}
             {props.history.map((command, index) => <p> command: {command}</p>)}
        </div>
    );
    }
    if (props.mode == "brief"){
        return (
            <div className="repl-history">
                {/* This is where command history will go */}
                {/* TODO: To go through all the pushed commands... try the .map() function! */}
                {/* CHANGED */}
                {props.history.map((command, index) => <p> {command}</p>)}
            </div>
        );
    } 

    return (
        <div className="repl-history">
            <table>
                <thead>
                    <tr>
                        <th>Command</th>
                    </tr>
                </thead>
                <tbody>
                    {props.history.map((command, index) => (
                        <tr key={index}>
                            <td>{command}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    return null

}