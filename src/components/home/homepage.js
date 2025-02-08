import React from "react";
import Search from "./search";
import "./homepage.css"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavbarHome from "../partials/navbarhome";
import MovieCards from "./moviecards";
import Footer from "../partials/Footer";



const Home =()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate ('/login')
        }
    },[])
    return(
        <div className="home">
             <NavbarHome/>
             <Search/>
             <MovieCards/>
             <Footer/>
            
         
             

        </div>
       

    );
};

export default Home;