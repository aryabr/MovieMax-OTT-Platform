import React from "react";
import { NavLink } from "react-router-dom";



const Navbarlogin = () => {
    return(
       
        <nav className="navbar navbar-expand-sm ">
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
          <ul className="navbar-nav ml-auto" >
           
            <li className="nav-item">
              <NavLink to={"/register"} className="nav-link">
                Register
              </NavLink>
            </li>
            
           
           
          </ul>
        </div>
      </nav>
    );
};


export default Navbarlogin;
