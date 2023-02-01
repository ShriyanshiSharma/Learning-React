import React from "react";
import { useState } from "react";

const Details = (props) => {
    const [show ,setShow] = useState(false);
    return (
        <>
        <div className="div-1">
            <div className="div-2">
                <div className="div-3">
                    <p className="div-4">Helloo {props.username}</p>
                </div>
                <div className="div-3">
                    <h5>Name</h5>
                    <p>{props.name}</p>
                </div>
                <div className="div-3">
                    <h5>City</h5>
                    <p>{props.address.city}</p>
                </div>
                <div className="div-3">
                    <h5>Email</h5>
                    <p>{props.email}</p>
                </div>
                <div className="div-3">
                    <button type="button" class="btn btn-primary" onClick={() => setShow(!show)}>{show ? "Hide Details" : "View Details"}</button>
                </div>
            </div>
        </div>
        { show && 
                <div className="main-div">

                    <div className="main-1">
                        <div className="username">
                            <h5>Username</h5>
                            <p>{props.username}</p>
                        </div>
                    </div>
<hr></hr>
                    <div className="main-2">
                        <h5>Address</h5>
                        <div className="address">
                            <div className="add">
                               <h6 >Street</h6>
                                <p>{props.address.street}</p>
                            </div>
                            <div className="add">
                                <h6 >Suite</h6>
                                <p>{props.address.suite}</p>
                            </div>
                            <div className="add">
                                <h6 >Zipcode</h6>
                                <p>{props.address.zipcode}</p>
                            </div>
                        </div>
                        <div className="coordinate">
                            <div className="coor">
                                <h6>Latitude</h6>
                                <p>{props.address.geo.lat}</p>
                            </div>
                            <div className="coor">
                                <h6>Longitude</h6>
                                <p>{props.address.geo.lng}</p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>

                    <div className="main-3">
                        <div className="info">
                            <h5>Email</h5>
                            <p>{props.email}</p>
                        </div>
                        <div  className="info">
                             <h5>Phone</h5>
                            <p>{props.phone}</p>
                        </div>
                        <div className="info">
                            <h5>Website</h5>
                            <p>{props.website}</p>
                        </div>
                    </div>
                    <hr></hr>

                    <div className="main-4">
                        <h5>Company</h5>
                        <div className="company">
                            <div className="com">
                                <h6>Company Name</h6>
                                <p>{props.company.name}</p>
                            </div>
                            <div className="com">
                                <h6>Catch Phrase</h6>
                                <p>{props.company.catchPhrase}</p>
                            </div>
                            <div className="com">
                                <h6>BS</h6>
                                <p>{props.company.bs}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Details;