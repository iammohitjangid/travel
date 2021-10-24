import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { logout } from '../../../store/action/authAction';

const Navigation = (props) => {
   const isAuthenticated = useSelector(state => state['auth']['isAuthenticated']);
    const userNameState = useSelector(state=>state);  
    let userName = "User"
    if(isAuthenticated){
      userName = userNameState['auth'].user['name'];
    }
   const logoutDispatch = useDispatch();
   let nav = (<>
      <li className="nav-item pe-2">
         <NavLink to="/login" className="nav-link px-3"> Login</NavLink>
      </li >
      <li className="nav-item pe-2 ">
         <NavLink to="/register" className="nav-link  px-3">Register</NavLink>
      </li >
   </>);
   let authNav = (<>
      <li className="nav-item pe-2">
         <NavLink to="/" className="nav-link px-3">{userName}</NavLink>
      </li >
      <li className="nav-item pe-2 ">
         <Button variant="danger"
            onClick={() => { logoutDispatch(logout()) }}
         >Logout</Button>
      </li >
   </>)

   return (
      <div
         id="navbarToggler"
         className="collapse navbar-collapse justify-content-end ">
         <ul className="navbar-nav  pe-3">
            <li className="nav-item pe-2">
               <NavLink to="/map" className="nav-link px-3"> Map</NavLink>
            </li>
            {!isAuthenticated ? nav : authNav}
         </ul>
      </div>

   );
}

export default Navigation