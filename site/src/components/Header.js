import React from "react";
import { Link ,NavLink} from "react-router-dom";

const Header = () => {
    return(
        <>
        <nav>
        <h1>Technovation</h1>
        <main>
            <Link to={"/"}>Home</Link>
            <NavLink to={"/contact"}>Contact</NavLink>
            <Link to={"/about"}>About</Link>
            <Link to={"/brand"}>Brand</Link>
            <Link to={"/service"}>Service</Link>
        </main>
        </nav>
        </>
    );
}
export default Header;