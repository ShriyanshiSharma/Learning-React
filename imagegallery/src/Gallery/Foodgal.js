import React, { useState } from 'react';
import Menu from './api';


const Foodgal = () => {
    const [items, setItems] = useState(Menu);
    const filterItems = (categItem) => {
        const updatedIttems = Menu.filter((ele) =>{
            return ele.category === categItem;
        });
        setItems(updatedIttems);
    }
    return (
        <>
        <h1 className='mt-5 text-center main-heading'>Order Your Favourite Dish</h1>
        <hr/>
        <div className='menu-tabs container'>
            <div className='menu-tab d-flex justify-content-around'>
                <button className='btn btn-warning' onClick={() => filterItems("breakfast")}>Breakfast</button>
                <button className='btn btn-warning' onClick={() => filterItems("lunch")}>Lunch</button>
                <button className='btn btn-warning' onClick={() => filterItems("evening")}>Eveningt</button>
                <button className='btn btn-warning' onClick={() => filterItems("dinner")}>Dinner</button> 
                <button className='btn btn-warning' onClick={() => setItems(Menu)}>All</button> 

            </div>
        </div>
        <div className='menu-items container-fluid mt-5'>
            <div className='row'>
                <div className='col-11 mx-auto'>
                    <div className='row my-5'>
                        {
                            items.map((curItems) =>{
                                const {id,name,image,description,price} = curItems;
                                return(
                                    <>
                                    <div className = "item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                                        <div className='row item-inside'>
                                            <div className='col-12 col-md-12 col-lg-4 img-div'>
                                                <img src={image} alt='menuPic' className="img-fluid"/>
                                            </div>
                                            <div className='col-12 col-md-12'>
                                                <div className='main-title pt-4 pb-3'>
                                                    <h1>{name}</h1>
                                                    <p>{description}</p>
                                                </div>
                                                <div className='menu-price-book'>
                                                    <div className='proce-book-divide d-flex justify-content-between'>
                                                        <h2>Price : {price}</h2>
                                                        <a href='#'>
                                                            <button className='btn btn-primary'>Order Now</button>
                                                        </a>
                                                    </div>
                                                    <p>Prices may vary on selected date</p>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Foodgal;