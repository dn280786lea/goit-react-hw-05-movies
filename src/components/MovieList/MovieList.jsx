import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MovieList.css';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className="MovieGallery">
      {movies.map(movie => (
        <li className="MovieGalleryList" key={movie.id}>
          <Link
            className="MovieLink"
            to={{
              pathname: `/movie/${movie.id}`,
              state: { from: location },
            }}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <span className="movie-title">
              {movie.title}
              <span className="info_views">
                {movie.vote_average.toFixed(1)}%
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
