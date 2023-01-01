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
        const {value,name} = event.target;

        setFullName((preValue) => {
            if(name === "fName"){
                return{
                    fname:value,
                    lname:preValue.lname,
                    email:preValue.email,
                    phone:preValue.phone
                };
            }
            else if(name === "lName"){
                return{
                    fname:preValue.fname,
                    lname:value,
                    email:preValue.email,
                    phone:preValue.phone

                };
            }
            else if(name === "email"){
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    email:value,
                    phone:preValue.phone

                };
            }else if(name === "phone"){
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    email:preValue.email,
                    phone:value

                };
            }
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
                name = "fName" 
                placeholder = "Enter your First Name" 
                onChange= {inputEvent}
                value = {fullName.fname} />
                <br/>
                <input 
                type="text" 
                name = "lName" 
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