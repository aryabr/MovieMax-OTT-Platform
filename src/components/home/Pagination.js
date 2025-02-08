import React, { useState } from 'react';
import MovieCards from './moviecards';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect } from 'react';



const itemsPerPage = 4;

const paginate= (array, page_size, page_number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};

function MovieCardsContainer() {

 

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  useEffect(() => {
    // Fetch movies from API when component mounts
    axios.get('http://127.0.0.1:8000/ottapi/movielist/')
      .then(response => {
        setMovies(response.data); // Update state with movie data
      })
      .catch(error => {
        setError("Failed to fetch movies"); // Update state with error message
        console.error("There was an error fetching the movies!", error);
      });
  }, []); // Empty dependency array means this runs once when the component mounts

  const totalPages = Math.ceil(movies.length / itemsPerPage);
  const paginatedMovies = paginate(movies, itemsPerPage, currentPage);

  return (
    <div className="container mt-2">
         {error && <p className="text-danger">{error}</p>}
      <MovieCards moviecards={paginatedMovies} />
      <div className="pagination-container d-flex justify-content-center">
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item  key={index + 1} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
    </div>
  );
};

export default MovieCardsContainer;
