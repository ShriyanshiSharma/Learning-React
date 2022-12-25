import React from "react";
import Slot from "./Slot";
import './index.css';


const App = () => {
    return(
        <>
        <h1 className="heading_style">
            Welcome to the Slot Game
        </h1>
        <div className="slot_inner">
            <Slot x = '😡' y = '😡' z = '😡'/>
            <hr/>
            <Slot x = '🤬' y = '🤥' z = '🥺'/>
            <hr/>
            <Slot x = '🥶' y = '🥶' z = '🥶'/>
            <hr/>
            <Slot x = '🥶' y = '🙄' z = '🤥'/>
        </div>
        </>
    );
}

export default App;