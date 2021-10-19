import React from 'react';
import { NavLink} from 'react-router-dom';
import NavigationItems from './NavigationItems/NavigationItems';
import Logo from '../../assets/markerLogo.png';


const Navigation=(props)=>{
   return(
       <nav className="navbar navbar-expand-sm  fixed-top navbar-dark bg-dark p-0">
           <NavLink to="/"className="navbar-brand ">
           <img src={Logo}  alt="logo" width="45" />   
            Travel log
            </NavLink>
            <button className="navbar-toggler me-3" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarToggler" 
              /*   aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation" */
            >
             <span className="navbar-toggler-icon"></span>   
            </button>
            <NavigationItems />
       </nav>
   );
}

export default Navigation