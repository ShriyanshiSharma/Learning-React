import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Heading from './heading';
import './statewise.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Statewise = () => {

    const [data,setData] = useState([]);

    const getCovidData = async  () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        setData(actualData.statewise);
        console.log(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    } , []);

    return(
    <>
    <Heading/> 
    <div className='container-fluid mt-5'>
    <div className='table-responsive'>
        <table className='table table-hover'>
            <thead className='thead-dark'>
                <tr>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Death</th>
                    <th>Active</th>
                    <th>Updated</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((curElem,ind) => {
                        return(
                            <tr>
                                <th>{curElem.state}</th>
                                <td>{curElem.confirmed}</td>
                                <td>{curElem.recovered}</td>
                                <td>{curElem.deaths}</td>
                                <td>{curElem.active}</td>
                                <td>{curElem.lastupdatedtime}</td>
                            </tr>

                        )
                    })
                }
            </tbody>
        </table>
    </div>
    </div>
    </>
    );
};

export default Statewise;