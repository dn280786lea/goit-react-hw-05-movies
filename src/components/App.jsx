import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDatails';
import Title from './Title/Title';
import Movie from './Movie/Movie';
import Cast from './Cast/Cast';
import MovieReviews from './MovieReviews/MovieReviews';

const App = () => {
  return (
    <>
      <Title />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movie/:id/cast" element={<Cast />} />
        <Route path="/movie/:id/reviews" element={<MovieReviews />} />
      </Routes>
    </>
  );
};
export default App;
