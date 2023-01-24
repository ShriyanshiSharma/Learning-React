import React from 'react';
import { useState } from 'react';
import Sresult from './Sreault';
import './style.css';

const Search = () => {
    const [img,setImg] = useState();
     const inputEvent = (event) => {
        const data = event.target.value;
        setImg(data);
     }
    return(
        <>
        <h1>Search Page</h1>
        <div className="container-fluid p-5">
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" onChange={inputEvent} value={img}/>
        </form>
        </div>
        { img === "" ? null:<Sresult name = {img}/>}
        </>
    );
}
export default Search; 