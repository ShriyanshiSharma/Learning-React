import React from "react";
import {Link ,NavLink} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Header = () => {
    return(
        <>
        <nav>
        <h1>Technovation</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brand</HashLink>
            <HashLink to={"/service"}>Service</HashLink>
        </main>
        </nav>
        </>
    );
}
export default Header;