import React from 'react';

const Loader =()=>{
    return(
        <div className="h-100 w-100 d-flex justify-content-center align-items-center bg-dark "> 
        <div className="spinner-border text-light " role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        </div>
    );
};

export default Loader;