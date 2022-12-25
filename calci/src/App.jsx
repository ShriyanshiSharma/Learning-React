import React from "react";
import { add,sub,multi,div } from "./Cal";

function App(){
    return(
    <ul>
        <li>The sum is {add(25,2)}</li>
        <li>The difference is {sub(25,2)}</li>
        <li>The product is {multi(25,2)}</li>
        <li>The division is {div(25,3)}</li>
    </ul>);
}
export default App;