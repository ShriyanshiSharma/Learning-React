import React from 'react';
import { Link   } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg text-white bg-dark" >
            <div className="container-fluid">
                <Link className="navbar-brand text-white " to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link text-white bg-dark active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link text-white bg-dark" to="/about">About</Link>
                        <Link className="nav-link text-white bg-dark" to ="/contact">Contact</Link>
                        <Link className="nav-link text-white bg-dark" to ="/user/Shri">User</Link>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Menu;