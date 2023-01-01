import React from "react";
import { useState } from "react";

const App = () => {
    const [name,setName] = useState();
    const [full,setFull] = useState();

    const inputEvent = (event) => {
        setName(event.target.value);
    };
    const onSubmit = () =>{
        setFull(name);
    }
    return(
        <>
        <div>
            <h1>Hello {full}</h1>
            <input type="text" placeholder="Enter your Name" 
            onChange={inputEvent} value={name}/>
            <button onClick={onSubmit}> Click Me</button>
        </div>
        </>
    );
};
export default App;