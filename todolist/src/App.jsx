import React from "react";
import { useState } from "react";
import Todolist from "./Todolist";

const App = () => {
    const [inputList ,setInputList] = useState();
    const [items,setItems] = useState([]);

    const itemEvents = (event)=>{
        setInputList(event.target.value);
        
    };
    const listOfItems = () =>{
         setItems((oldItems) =>{
            return[...oldItems,inputList];
         });
         setInputList("");
    };
    const deleteItems = (id ) => {
        setItems((oldItems)  => {
            return oldItems.filter((arrElem,index) =>{
                return index !== id;
            });
        });
    };
    


    return(
        <>
        <div>
            <div className="main_div">
                <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type = "type" placeholder = "Add a Item" 
                value={inputList}
                onChange={itemEvents}/>
                <button onClick={listOfItems}>+</button>
                <ol>
                    {items.map((itemval,index) =>{
                        return <Todolist 
                        key = {index}
                        id = {index}
                        text={itemval}
                        onSelect = {deleteItems}/>;
                    })}               
                    </ol>
                </div>
            </div>
        </div>
        </>
    );
};
export default App; 