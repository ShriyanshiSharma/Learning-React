import React from "react";
import  vg from "../assets/2.webp"; 

const Home = () => {
    return(
        <>
        <div className="home">
            <main>
                <h1>Technovation</h1>
                <p>Solution to all your problems</p>
            </main>
        </div>
        <div className="home2">
            <img src={vg} alt= "graphics"/>
            <div>
                <p>
                    We are your one and only solution to the tech problems 
                    you face
                    every day. We are leading tech company whose aim is to 
                    increase the 
                    problem solving ability in childern.
                </p>
            </div>
        </div>
        <div className="home3"></div>
        </>
    );
}

export default Home;