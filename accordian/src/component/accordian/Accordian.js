import React, { useState } from 'react';
import { questions } from './api';
import MyAccordian from './MyAccordian';

const Accordian = () => {
    const [data,satData] = useState(questions);
    return (
        <>
        <section className='main-div'>
            <h1>Question Answer</h1>
        {
        data.map((curEle) => {
            const {id} = curEle;
            return <MyAccordian key = {id} {...curEle}/>
        })
        }
        </section>
        </>
    );
};
export default Accordian;