import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationItems from './NavigationItems/NavigationItems';
import Logo from '../../assets/markerLogo.png';


const Navigation = (props) => {
    return (
        <nav className="navbar navbar-expand-sm  fixed-top navbar-dark bg-dark p-0">
            <NavLink to="/" className="navbar-brand ">
                <img src={Logo} alt="logo" width="45" />
                Travel log
            </NavLink>
            <button className="navbar-toggler me-3"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggler"
                aria-controls="navbarSupportedContent"
                aria-expanded="true"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <NavigationItems />
        </nav>
    );
}

export default Navigation


/* 

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Hidden brand</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */