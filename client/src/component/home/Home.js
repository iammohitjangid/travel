import React from 'react';
import { NavLink } from 'react-router-dom';
import BGVedio from '../../assets/travel2.mp4'


const Home=(props)=>{
    return(
        <div className="home">
        <div className="overlay">
        <video  className="home_video" autoPlay loop muted >
           <source src={BGVedio} type="video/mp4" /> 
        </video>
        <div className="container home_container" >
        <div className="row">
            <div className="col-12 col-md-12">
                <p className="h1">Log your experiences</p>
            </div>
            <div className="col-12 col-md-12">
               <p className="p " >Start logging your travels with travel logger. </p>
            </div>
            <div className="col-12 col-md-12">
               <p style={{color:"#f5f7f482"}} > Add GPS coordinates to the map, create a diary, and share with friends or family for a personal travel log.</p>
            </div>
            <div className="col-12 mt-2">
                <NavLink to="login" className="home_button_login  px-5 py-2 h5" > Login</NavLink>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
};
export default Home