import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails, BASE_IMAGE_URL } from '../API/API';

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
        src={`${BASE_IMAGE_URL}${movieDetails.poster_path}`}
        alt={movieDetails.title}
        width="auto"
        height="auto"
      />
      <p>{movieDetails.overview}</p>
      <p>{movieDetails.popularity}</p>
    </div>
  );
};

export default MovieDetails;
