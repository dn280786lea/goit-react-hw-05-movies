import React, { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../components/API/API';
import {} from './Movie.css';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
  const location = useLocation();
  const query = searchParams.get('query') || '';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const handleSearchSubmit = async evt => {
    evt.preventDefault();

    try {
      const movies = await searchMovies(query);
      setSearchResults(movies.results || []);
      setError('');

      setSearchParams({ query });
    } catch (error) {
      console.error('Failed to fetch movies:', error.message);
      setSearchResults([]);
      setError('Failed to fetch movies. Please try again.');
    }
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSearchSubmit} className="form">
          <input
            onChange={evt => setSearchParams({ query: evt.target.value })}
            placeholder="search"
            name="search"
            type="text"
            autoComplete="off"
            value={query}
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
