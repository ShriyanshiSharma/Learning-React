import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";

const CreateNotes = (props) => {

    const [expand,setExpand] = useState(false);

    const [note,setNote] = useState({
        title:"",
        content:"",
    });

    const inputEvent =(event)=>{
        // const value = event.target.value;
        // const name = event.target.name
        const {name,value} = event.target;

        setNote((preData) =>{
            return{
                ...preData,
                [name]:value,
            };
        })
    }

    const addEvent = () =>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });
    };

    const showAll = () => {
        setExpand(true);
    };

    const backNormal = () => {
        setExpand(false);
    };

    return (
        <>
        <div className="main_note"  onDoubleClick={backNormal}>
            <form>
                {expand ?
                <input type= "text" name="title" value={note.title} onChange={inputEvent} placeholder="Title" autoComplete="off"/>
                : null}
                <textarea rows="" column = "" name="content" value={note.content} onChange={inputEvent} placeholder="Write a note... " onClick= {showAll}/>
                {expand ?
                    <Button onClick={addEvent}>
                    <AddIcon className = "plus_sign"/>
                </Button>:null}
            </form>
        </div>
        </>
    );
};
export default CreateNotes;