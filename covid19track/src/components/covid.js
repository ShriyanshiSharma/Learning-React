import React, { useEffect,useState } from 'react'
import './covid.css';

const Covid = () => {
    const [data,setData] = useState([]);
    const getCovidData = async () => {
        
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actual = await res.json();
            setData(actual.statewise[0]);
        } catch (err){
            console.log(err); 
         }
        }
    useEffect(() =>{
        getCovidData();
    },[]);
  return (
    <>
    <section className='container'>
    <h1>Live</h1>
    <h2>Covid Tracker</h2>
    <ul className='grid' >
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'><span>OUR</span> COUNTRY</p>
                    <p className='card__total card__small'> INDIA</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'><span>TOTAL</span> RECOVERED</p>
                    <p className='card__total card__small'>{data.recovered}</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'><span>TOTAL</span> CONFIRMED</p>
                    <p className='card__total card__small'>{data.confirmed}</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'><span>TOTAL</span> DEATH</p>
                    <p className='card__total card__small'> {data.deaths}</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'><span>TOTAL</span> ACTIVE</p>
                    <p className='card__total card__small'> {data.active}</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'><span>LAST</span> UPDATED</p>
                    <p className='card__total card__small'> {data.lastupdatedtime}</p>
                </div>
            </div>
        </li>
        
    </ul>
    </section>
    </>
  )
}
export default Covid
