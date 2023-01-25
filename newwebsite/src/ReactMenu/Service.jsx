import React from 'react';
import { NavLink } from 'react-router-dom';
import Sdata from './Sdata';

const Service = () => {

    
    return(
        <>
        <div className='my-5'>
            <h1 className='text-center'>Our Services</h1>
        </div>
        <div className='container-fluid mb-5 '>
            <div className='row'>
                <div className='col-10 mx-auto '>
                    <div className='row gy-4'>
                        {Sdata.map((itemval) => {
                            return(
                                <div className='col-md-4 col-10 mx-auto '>
                                    <div class="card mb-5" >
                                        <img style={{height:'200px'}} class="card-img-top" src={itemval.img} alt="Card image cap"/>
                                         <div class="card-body">
                                            <h5 class="card-title">{itemval.title}</h5>
                                            <p class="card-text">{itemval.desc}</p>
                                            <NavLink to="#" style={{border:'1px solid #3498db' ,padding:'5px',borderRadius:'5px', textDecoration:'none'}}  class="btn btn-primary">View Details</NavLink>
                                        </div>
                                     </div>
                                </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Service; 