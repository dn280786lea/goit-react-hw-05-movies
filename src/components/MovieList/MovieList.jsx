import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const MoviesList = ({ movies }) => {
  return (
    <ul className="MovieGallery">
      {movies.map(movie => (
        <li className="MovieGalleryList" key={movie.id}>
          <Link className="MovieLink" to={`/movie/${movie.id}`}>
            <span className="movie-title">
              {movie.title}
              <span className="info_view">
                {movie.vote_average.toFixed(1)}%
              </span>
            </span>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
