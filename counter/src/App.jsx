import React from 'react';
import { useState } from 'react';

const App = () => {

    const state = useState();

    // foe time
    const timee = new Date().toLocaleTimeString();
    const [ctime,setCtime] = useState(timee);
    // for count
    const[count,setCount] = useState(1000000);

    const IncNum = () =>{
        // for count
        setCount(count - 1);
        // for time
        timee = new Date().toLocaleTimeString();
        setCtime(timee);
    };
    return(
        <>
        {/* for time */}
        <h1>{timee}</h1>
        {/* for count */}
        <h1>{count}</h1>
        <button className='btn' onClick={IncNum}>Click Me</button>
        </>
    );
};

export default App;