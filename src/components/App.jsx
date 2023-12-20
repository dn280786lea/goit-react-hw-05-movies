import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDatails'));
const MovieSearch = lazy(() => import('../pages/Movie/Movie'));
const Cast = lazy(() => import('./Cast/Cast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const Movie = lazy(() => import('./Video/video'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<MovieSearch />} />
          <Route path="/movie/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<MovieReviews />} />
            <Route path="movie" element={<Movie />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
