import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../components/API/API';
import './Movie.css';
import MoviesList from 'components/MovieList/MovieList';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const search = searchParams.get('query');
    if (!search) return;

    const fetchMovies = async () => {
      try {
        const moviesRequestByName = await searchMovies(search);
        setSearchResults(moviesRequestByName.results);
      } catch (error) {
        console.log(error);
        setError('Error fetching movies.');
      }
    };

    fetchMovies();
  }, [searchParams]);

  const handleSubmit = async e => {
    e.preventDefault();
    const search = e.target.search.value.trim().toLowerCase();
    if (!search) return;

    setSearchParams({ query: search });
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
