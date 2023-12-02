import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDatails';
import Title from './Title/Title';
import Movie from './Movie/Movie';

const App = () => {
  return (
    <>
      <Title />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movies" element={<Movie />} />
      </Routes>
    </>
  );
};
export default App;
