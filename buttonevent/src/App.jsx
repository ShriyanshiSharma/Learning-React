import React from "react";
import { useState } from "react";
// using hooks
const App =() => {
    let purple = "#8e44ad";
    const [bg,setBg] = useState(purple);
    const [ incon,setCon] = useState("Click Me");

    const oneClick = () => {
        let newBg= "rgb(35, 52, 126)";
        setBg(newBg);
        setCon("hello");
    };
    const Updateall = () => {
        let newBr = "red";
        setBg(newBr);
        setCon("bye");
    }
    return(
        <>
        <div style={{backgroundColor:bg}}>
            <button onClick={oneClick} onDoubleClick= {Updateall}> {incon}</button>
        </div>
        </>
    );
};
export default App;