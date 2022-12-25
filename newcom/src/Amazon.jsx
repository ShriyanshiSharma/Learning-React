import React from "react";
import Card from "./Card";
import Dataa from "./Sdataama";

function Ama(){
    return(
    <>
    <h1 className="heading__style">List of top Amazon Series</h1>
    {/* map method */}
    {Dataa.map((val,index) => {
    return(
        <Card
        key = {val.id}
        imgsrc = {val.imgsrc}
        title = {val.title}
        sname = {val.sname}
        link = {val.link}
        />
    );
    })}
    </>
    );
}
export default Ama;