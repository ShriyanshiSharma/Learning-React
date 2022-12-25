import React from "react";



// 🤬🙄🥶🥺🤥

const Slot = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;

    // let z = "😡";
    if( (x === y) && (y === z)) {
        return(
            <>
                <h1>{x} {y} {z}</h1>
                <h3>It is a match</h3>
                </>
        );
    }
    else{
        return(
            <>
                <h1>{x} {y} {z}</h1>
                <p>It is not a match</p>
            </>
        );

    }
}
export default Slot;