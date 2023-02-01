import React from 'react';
import { useState } from 'react';

const Weather   = () => {
    const [city, setCity] = useState("");
    return(
        <>
        <div className='box'>
            <div className='inputData'>
                <input type="search" className="inputField" 
                onClick={(event) => {
                     
                } }/>
            </div>
        <div className='info'>
            <h2 className='location'>
                Pune
            </h2>
            <h1>5.52*Cel</h1>
            <h3>Min : 5.25*Cel | Max : 5.25*Cel </h3>
        </div>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
        </div>

        </>
    );
}
export default Weather;