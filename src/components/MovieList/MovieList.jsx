import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MovieList.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div className="moviegallery-list">
      <ul className="MovieGallery">
        {movies.map(movie => (
          <li className="MovieGalleryList" key={movie.id}>
            <Link
              className="MovieLink"
              to={`/movie/${movie.id}`}
              state={{ from: location }}
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : defaultImg
                }
                width={280}
                alt="poster"
              />
              <div className="img_title">
                <span className="movie-title">
                  {movie.title}
                  <span className="info_views">
                    {movie.vote_average.toFixed(1)}
                    <Stack spacing={1} alignItems="center" marginTop={1}>
                      <Rating
                        name="half-rating-read"
                        value={movie.vote_average.toFixed(1)}
                        precision={0.1}
                        readOnly
                        max={10}
                        className="rating"
                      />
                    </Stack>
                  </span>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
