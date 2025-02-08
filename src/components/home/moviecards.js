import React from 'react';
import arm from "../images/arm.jpg";
import axios from "axios";
import { useState,useEffect } from 'react';
// import Card from 'react-bootstrap/Card';

import { Link,useNavigate } from 'react-router-dom';


function MovieCards() {
   const navigate = useNavigate();
   var [movies, setMovies]=useState([]);
  useEffect(()=>{
    if(!localStorage.getItem('token')){
        navigate('/login')
    }
},[])
 
  function fetchPosts(){
      axios.get('http://127.0.0.1:8000/movieapi/movielist/').then(response=>{
          setMovies(response.data)
      })
}
  useEffect(()=>{
      fetchPosts()
  },[])

  
return (
  <>
  
  <div className='container'>
    <div className='row'>
    {movies.map((movie) => (
    <div className='col col-sm-4 mb-5 mt-3' key={movie.id} > 
    

     <div className="card" >
       <img src={'http://127.0.0.1:8000/' + movie.thumbnail} className="card-img-top" style={{height:'23rem'}}/> 
       <div className="card-body"> 
        <h5 className="card-title">{movie.title}</h5> 
        <div className="btn-group d-flex justify-content-center" role="group" aria-label="Basic example">
  <button type="button" class=" btn text-white btn-dark btn-outline-secondary">+</button>
 <Link to={`/movieview/${movie.id}`}><button type="button" class="btn text-white btn-dark btn-outline-secondary">Watch Now</button></Link>

</div> </div> </div> </div>
 ))} </div> </div>
 
   </>
  );
}

export default MovieCards;
