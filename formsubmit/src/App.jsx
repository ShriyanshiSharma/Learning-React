import React from "react";
import { useState } from "react";

const App = () => {
    const [name,setName] = useState();
    const [full,setFull] = useState();

    const [pass,setPass] = useState();
    const [fullpass,setFullpass] = useState();

    const inputEvent = (event) => {
        setName(event.target.value);
    };
    const inputPass = (event) => {
        console.log(event.target.value)
        setPass(event.target.value);
    };
    const onSubmit = (event) =>{
        event.preventDefault();
        setFull(name);
        setFullpass(pass);
    }
    return(
        <>
        <div>
            <form onSubmit={onSubmit}>
            <h1>Hello {full} {fullpass}</h1>
            <input type="text" placeholder="Enter your Name" 
            onChange={inputEvent} value={name}/>
            <input type="text" placeholder="Enter your Password" 
            onChange={inputPass} value={pass}/>
            <button> Click Me</button>
            </form>
        </div>
        </>
    );
};
export default App;