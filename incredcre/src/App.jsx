import React from "react";
import { useState } from "react";

const App =() => {
    const [count,setCount] = useState(0);

    const incre = () => {
        setCount(count + 1);
    };

    const decre = () => {
        if(count > 0 ){
        setCount(count - 1);}
        else {
            alert("Cant go beyond 0");
            setCount(0);
        }
    };
    return(
    <>
    <div className="main_div">
        <div className="center_div">
            <h1>{count}</h1>
            <button onClick={incre}>Increment</button>
            <button onClick={decre}>Decrement</button>
        </div>
    </div>
    </>);
};

export default App;