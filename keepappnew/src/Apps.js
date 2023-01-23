import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer'
import CreateNotes from './CreateNotes';
import Note from './Note';


const Apps = ()=> {

    const [addItems,setAddItem] = useState([]);
    const [ num,setNum] = useState(1);

    useEffect(() => {
        document.title = `Clicked ${num}`;
    })

    const addNote  = (note) => {
        // alert("I M CLICKED");
        setAddItem((preData)=>{
            return[...preData,note];
        });
    };

    const onDelete = (id) => {
        setAddItem((oldItems)=>{
            return oldItems.filter((arrElem,index) =>{return index !==id;})
        })
    }
    return(
        <>
        <Header/>
        <CreateNotes passNote = {addNote}/>
        {addItems.map((val,index) => {
            return (<Note
            key={index}
            id= {index}
            title = {val.title}
            content = {val.content}
            deleteItem = {onDelete}
            />);
        })}
        <button onClick={()=>{
            setNum(num+1);
        }}>Clicked</button>
        <Footer/>
        </>
    );

}
export default Apps;