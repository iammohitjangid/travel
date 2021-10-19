import React from 'react';
import { NavLink} from 'react-router-dom';

const Navigation=(props)=>{
   return(
       
       <div 
       id="navbarToggler"
       className="collapse navbar-collapse justify-content-end ">
       <ul className="navbar-nav  pe-3">
          <li className="nav-item pe-2">
          <NavLink to="/map" className="nav-link"> Map</NavLink>
          </li> 
          <li className="nav-item pe-2">
          <NavLink to="/login" className="nav-link px-3"> Login</NavLink>
          </li > 
           
          <li className="nav-item pe-2 ">
          <NavLink to="/signup" className="nav-link  px-3">SignUp</NavLink>
          </li > 
       </ul>
       </div>
  
   );
}

export default Navigation