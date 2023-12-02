import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDatails';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
};
export default App;
