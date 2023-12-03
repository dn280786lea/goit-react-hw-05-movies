import React, { useEffect, useState } from 'react';
import { getTrending } from '../API/API';
import { Link } from 'react-router-dom';
import {} from './MovieList.css';
import { BASE_IMAGE_URL } from '../API/API';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await getTrending();
        setMovies(trendingMovies.results);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="Movie">
      <h2>Trending today</h2>
      <ul className="MovieGallery">
        {movies.map(movie => (
          <li className="MovieGalleryList" key={movie.id}>
            <Link className="MovieLink" to={`/movie/${movie.id}`}>
              {movie.title}
              <img
                src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
                width="200px"
                height="200px"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
