import React from 'react';

const Pagination = ({totalPost,postPerPage,setCurrentPage}) => {
    let pages = [];
     
    for(let i = 1 ;i<=Math.ceil(totalPost/postPerPage);i++){
        pages.push(i);
    }
    return (
        <>
        <div className='main'>
            {pages.map((page,ind) =>{
                return <button className='btn btn-secondary zz' key={ind} onClick={() => setCurrentPage(page)}>{page}</button>
            })}
        </div>

        </>
    );
}
export default Pagination;