import React from "react";
import Net from "./Netflix";
import Ama from "./Amazon";

// If else statement
const chooise = "Amazon";

const App = () =>{
    if(chooise === "Netflix"){
        return (<Net/>);
    }
    else {
        return(<Ama/>);
    }
    // {chooise === "Netflix" ? <Net /> : <Ama/>}
}

export default App;
