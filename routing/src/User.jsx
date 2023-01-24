import React from 'react';
import { useParams,useLocation, useNavigate} from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const User = () => {
    const {name,last} = useParams();
    const  location = useLocation();
    const history = useNavigate();
    

    return(
        <>
        <h1>User Page {name} {last}</h1>
        <p> My current location is {location.pathname}</p>
        {location.pathname === "/user/Shri" ?<div className='ss'><button type="button" className="btn btn-dark" onClick={() => history('/')}>Hello</button></div> :null}
        </>
    );
};
export default User; 