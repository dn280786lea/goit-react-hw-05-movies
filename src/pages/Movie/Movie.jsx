import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../components/API/API';
import './Movie.css';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
  const location = useLocation();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const fetchMoviesByName = useCallback(async query => {
    try {
      const moviesRequestByName = await searchMovies(query);
      setSearchResults(moviesRequestByName.results);
    } catch (error) {
      console.log(error);
      setError('Error fetching movies.');
    }
  }, []);
  useEffect(() => {
    const search = searchParams.get('search');
    if (!search) return;
    searchMovies(search);
  }, [fetchMoviesByName, searchParams]);

  const handleSubmit = async e => {
    e.preventDefault();
    const search = e.target.search.value.trim().toLowerCase();
    if (!search) return;
    setSearchParams({ query: search });
    await fetchMoviesByName(search);
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <input
            placeholder="search"
            name="search"
            type="text"
            className="input"
          />
          <button className="button" type="submit">
            Search
          </button>
        </form>
      </div>

      {error && <h3>{error}</h3>}
      <ul className="MovieGallery">
        {searchResults.map(movie => (
          <li className="MovieGalleryList" key={movie.id}>
            <Link
              className="MovieLink"
              state={{ from: location }}
              to={`/movie/${movie.id}`}
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
              <span className="movie-title">{movie.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
