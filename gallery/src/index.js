import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const i1 = 'https://picsum.photos/200/300';
const i2 = 'https://picsum.photos/250/300';
const i3 = 'https://picsum.photos/300/300';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <h1 className='heading'>My Name is Shriyanshi Sharma</h1>
    <div className='img_div'>
    <img src = {i1} alt='ran'></img>
    <img src = {i2} alt='ran'></img>
    <img src = {i3} alt='ran'></img>
    </div>

    </>
);
