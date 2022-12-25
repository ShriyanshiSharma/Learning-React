import React from "react";
import './App.css';

function App(){
    let curdate = new Date(2022,12,12,1);
    curdate = curdate.getHours();
    let greet = "";
    const css = { };
    const a ={color:" rgb(173, 0, 61)"};
    
    if(curdate >= 1 && curdate < 12){
        greet = "Good Morning";
        css.color = 'green';
    }else if(curdate >=12 && curdate <19){
        greet = "Good Evening";
        css.color = 'orange';
    }else{
        greet = "Good Night";
        css.color = 'black';
    }
    return (
        <>
        <div>
            <h1><span style={a}>Hello Sir, </span><snap style = {css}>{greet}</snap></h1>
        </div>
        </>  
    );
}
export default App;