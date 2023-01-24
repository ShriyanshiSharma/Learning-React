import React from 'react';
import { useParams,useLocation } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const User = () => {
    const {name,last} = useParams();
    const  location = useLocation();

    return(
        <>
        <h1>User Page {name} {last}</h1>
        <p> My current location is {location.pathname}</p>
        {location.pathname === "/user/anjali/sharma" ?<div className='ss'><button type="button" className="btn btn-dark">Hello</button></div> :null}
        </>
    );
};
export default User; 