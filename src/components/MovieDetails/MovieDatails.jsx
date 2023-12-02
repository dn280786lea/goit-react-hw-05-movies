import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails, BASE_IMAGE_URL } from '../API/API';
import {} from './MovieDatails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(id);
        setMovieDetails(details);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleClick = () => {
    navigate(-1); // Go back to the previous page
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movieDetails.original_title}</h2>
      <button onClick={handleClick}>Go back</button>
      <img
        className="img_moviedetails"
        src={`${BASE_IMAGE_URL}${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p>{movieDetails.overview}</p>
      <p>{movieDetails.popularity}</p>
    </div>
  );
};

export default MovieDetails;
