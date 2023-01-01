import React from "react";
import { useState } from "react";

const App = () => {

    const [fullName,setFullName] = useState({
        fname : "",
        lname : "",
        email : "",
        phone : "" 
    });
        

    const inputEvent = (event) =>{
        // console.log(event.target.value);
        const {name,value} = event.target;

        setFullName((preValue) => {
            // destructuring and using spread operation
            return{
                ...preValue,
                [name ]:value,
            }
            // if(name === "fName"){
            //     const{fname ,...remaining} = {...preValue};
            //     return{
            //         fname: value,
            //         ...remaining
            //         // fname:value,
            //         // lname:preValue.lname,
            //         // email:preValue.email,
            //         // phone:preValue.phone
            //     };
            // }
            // else if(name === "lName"){
            //     const{lname ,...remaining} = {...preValue};
            //     return{
            //         lname:value,
            //         ...remaining
            //         // fname:preValue.fname,
            //         // lname:value,
            //         // email:preValue.email,
            //         // phone:preValue.phone

            //     };
            // }
            // else if(name === "email"){
            // const{email ,...remaining} = {...preValue};
            //     return{

            //         email:value,
            //         ...remaining
            //         // fname:preValue.fname,
            //         // lname:preValue.lname,
            //         // email:value,
            //         // phone:preValue.phone
            //     };
            // }else if(name === "phone"){
            // const{phone ,...remaining} = {...preValue};
            //     return{
            //         ...remaining,
            //         phone:value
            //         // fname:preValue.fname,
            //         // lname:preValue.lname,
            //         // email:preValue.email,
            //         // phone:value

            //     };
            // }
        });
    };

    const onSubmits = (event) => {
        event.preventDefault();
        alert("form is submitted");
    }; 

    return(  
        <>
        <div>
            <form onSubmit={onSubmits}>
                <h1>Hello</h1>
                <p>{fullName.fname} {fullName.lname}</p>
                <p>{fullName.email}</p>
                <p>{fullName.phone}</p>
                <br/>
                <input 
                type="text" 
                name = "fname" 
                placeholder = "Enter your First Name" 
                onChange= {inputEvent}
                value = {fullName.fname} />
                <br/>
                <input 
                type="text" 
                name = "lname" 
                placeholder = "Enter your Last Name" 
                onChange= {inputEvent}
                value = {fullName.lname}/>
                <br/>
                <input 
                type="email" 
                name = "email" 
                placeholder = "Enter your Email" 
                onChange= {inputEvent}
                value = {fullName.email}
                autoComplete="off" />
                <br/>
                <input 
                type="number" 
                name = "phone"  
                placeholder = "Enter your Phone"  
                onChange= {inputEvent}
                value = {fullName.phone}/>
                <br/>
                <button type="submit">Click me</button>
            </form>
        </div>
        </>
    );
};

export default App;