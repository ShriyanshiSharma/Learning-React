import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Details from "./Details";
import Pagination from "./Pagination"

const GetDetails = () => {

    const [data,setData] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage,setPostPerPage] = useState(3);
    const lastPost = currentPage * postPerPage;
    const firstPost = lastPost - postPerPage;
    const curruentPost = data.slice(firstPost,lastPost);


    const getCovidData = async  () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const actualData = await res.json();
        setData(actualData);
        console.log(actualData);
    }

    useEffect(() => {
        getCovidData();
    } , []);

    return (
        <>
        <div className = "container-fluid"> 
                    {curruentPost.map((curEle,ind) => {
                        const {id}= curEle;
                        return(
                        <>
                        <Details key = {id} {...curEle}/>
                        </> 
                        );
                    })
                    }
            </div>
            <Pagination
            totalPost = {data.length}
            postPerPage = {postPerPage}
            setCurrentPage = {setCurrentPage}/>
        </>
    );
};

export default GetDetails;