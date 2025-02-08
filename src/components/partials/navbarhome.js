import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navabarhome.css"



  function NavbarHome() {
  
  


  return(
    <nav className="navbar navbar-expand-sm mr-auto">
      <div className="navbar-brand">
        <NavLink to={"/"} className="nav-link">MovieMax</NavLink>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={"/home"} className="nav-link">
              Movies
            </NavLink>
          </li>
          
       
          <li className="nav-item">
            <NavLink className="nav-link">
              ResetPassword
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link">
              WatchLater
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link">
              WatchHistory
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {/* Replace the NavLink with a button that handles logout */}
            <button  className="btn btn-link nav-link">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarHome;
