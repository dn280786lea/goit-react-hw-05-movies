import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../components/API/API';
import './Movie.css';
import MoviesList from 'components/MovieList/MovieList';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

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
      <MoviesList movies={searchResults} />
    </div>
  );
};

export default MovieSearch;
