import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const About = () => {
    return(
        <>
        <Common
        name= "Welcome to About Page"
        imgsrc =  'https://imgs.search.brave.com/2PGolQGDKDrMZo3nWj8Fg1cpQc5VRHVbV3fV1qwlP2U/rs:fit:1024:585:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vdmVjdG9y/cy9ncm91cC1vZi15/b3VuZy1idXNpbmVz/cy1wZW9wbGUtd29y/a2luZy10b2dldGhl/ci12ZWN0b3ItaWQx/MTQ0NDQ1ODEz'
        visit = "/contact"
        btname = "Contact Us"/>
        </>
    );
}
export default About;