import React, { useEffect } from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import "./landingpage.css";



const LandingPage= ()=>{

    return(
    <div className="landingpage">
    <Header/>
    <Main/>
    <Footer/>
    </div>
    );
};

export default LandingPage;