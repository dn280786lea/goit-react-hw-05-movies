import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { searchMovies } from '../API/API';
import { BASE_IMAGE_URL } from '../API/API';
import {} from './Movie.css';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = async evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      setError('Please enter a search query.');
      return;
    }

    try {
      const movies = await searchMovies(query);
      setSearchResults(movies.results || []);
      setError('');
    } catch (error) {
      console.error('Failed to fetch movies:', error.message);
      setSearchResults([]);
      setError('Failed to fetch movies. Please try again.');
    }
  };

  const handleMovieClick = id => {
    navigate(`/movie/${id}`);
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSearchSubmit} className="form">
          <input
            onChange={evt => setQuery(evt.target.value)}
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
          <li
            className="MovieGalleryList"
            key={movie.id}
            onClick={() => handleMovieClick(movie.id)}
          >
            <Link className="MovieLink" to={`/movie/${movie.id}`}>
              <span className="movie-title">{movie.title}</span>
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

export default MovieSearch;
