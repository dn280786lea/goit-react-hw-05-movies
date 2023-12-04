import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Title from './Title/Title';
import Layout from './Layout/Layout';

const Home = lazy(() => import('./Home/Home'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDatails'));
const MovieSearch = lazy(() => import('./Movie/Movie'));
const Cast = lazy(() => import('./Cast/Cast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

const App = () => {
  return (
    <>
      <Title />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<MovieSearch />} />
          <Route path="/movie/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
