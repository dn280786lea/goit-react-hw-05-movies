import React, { useState } from 'react';
import { searchMovies } from '../API/API';
import Movie from '../Movie/Movie';

const YourComponent = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async query => {
    try {
      const results = await searchMovies(query);
      setSearchResults(results.results);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <Movie onSubmit={handleSearch} />
      {searchResults.map(movie => (
        <div key={movie.id}>
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
};

export default YourComponent;
