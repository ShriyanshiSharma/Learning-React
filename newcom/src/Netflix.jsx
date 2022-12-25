import React from "react";
import Card from "./Card";
import Sdata from "./Sdatanet";

function Net(){
    return(
    <>
    <h1 className="heading__style">List of top Netflix Series</h1>
    {/* map method */}
    {Sdata.map((val,index) => {
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
export default Net;