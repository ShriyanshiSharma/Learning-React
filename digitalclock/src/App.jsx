import React from "react";
import { useState } from "react";
// using hooks
const App =() => {
    let time = new Date().toLocaleTimeString();
    const [ctime,setCtime] = useState(time);

    const Up = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(Up,1000);
    return(
        <>
        <h1>{ctime}</h1>
        </>
    );
};
export default App;