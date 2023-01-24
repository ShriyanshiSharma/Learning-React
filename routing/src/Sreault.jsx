import React from 'react';
import './style.css';

const Sresult = (props) => {
    const img = `https://source.unsplash.com/featured?${props.name}/500x200`;
    return(
        <>
        <div className='main-img'>
            <img src={img}/>
        </div>
        </>
    );
}
export default Sresult;