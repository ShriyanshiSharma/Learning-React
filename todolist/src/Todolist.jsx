import React from "react";

const Todolist = (props) =>{
    
    return (<>   
    <div className="todo_style">
        <button className="fa-items" 
        onClick={() =>  {
            props.onSelect(props.id);
        }}>x</button>
        <li>{props.text}</li> 
    </div>
    </>) ;
};
export default Todolist;