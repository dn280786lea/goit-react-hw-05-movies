import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDatails';
import Title from './Title/Title';

const App = () => {
  return (
    <>
      <Title />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
};
export default App;
