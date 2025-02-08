import React from "react";
import { Link } from "react-router-dom";





const Main = () =>{

    return(
         <div className="container">
          <div className="row main">
          <div className="col-sm-6">
            <h1>Welcome to MovieMax</h1>
            <h6>Watch your favorite movies</h6>
          <Link to="/login"><button><h2>Start Watching Now</h2></button></Link> 
           
            </div>
          </div>
          </div>

    
    );

};

export default Main;