import React, { useState } from 'react';
import {} from './Movie.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleChange = evt => {
    setQuery(evt.target.value);
    setError('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      setError('Please, enter a query');
      return;
    }

    onSubmit(query);
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="search"
          name="search"
          className="input"
          type="text"
          autoComplete="off"
          value={query}
        />

        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
      </form>
      {error && <h3 className="error">{error}</h3>}
    </header>
  );
};

export default Searchbar;
