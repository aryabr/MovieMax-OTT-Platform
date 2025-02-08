import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarHome from "../partials/navbarhome";
import "./movieview.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MovieView = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/movieapi/viewmovieapi/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        setError("Something went wrong");
      });
  }, [id]);

  if (!movie) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className='movie-view'>
      <NavbarHome />

      <div className="container " style={{color:'white'}}>
        <div className='row d-flex align-items-center  justify-content-center'>
          <div className='col-sm-4  text-center'>
        <h2>{movie.title}</h2>
         <h6>Description:</h6>
          <p>{movie.description}</p>
        </div>
        </div>
        <div className="row" style={{ color: 'white' }}>
          
          {/* Thumbnail & Details Section */}
          <div className="col-md-3 ">
            <img
              src={`http://127.0.0.1:8000/${movie.thumbnail}`}
              alt={`Thumbnail of ${movie.title}`}
              className="img-fluid rounded w-100"
            />
            
          </div>

          {/* Video Section */}
        <div className="col-md-9 "> 
          <div style={{width:"1000px",height:"400px"}}>
          <video controls className="rounded" style={{ height: "300px", width: "500px" }}>
         <source src={`http://127.0.0.1:8000/${movie.video}`} type="video/mp4" />
          Your browser does not support the video tag.
         </video>
      </div>
      </div>

          
        </div>
      </div>
    </div>
  );
};
export default MovieView;