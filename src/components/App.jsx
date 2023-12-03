import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Title from './Title/Title';

const Home = lazy(() => import('./Home/Home'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDatails'));
const MovieSearch = lazy(() => import('./Movie/Movie'));
const Cast = lazy(() => import('./Cast/Cast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

const App = () => {
  return (
    <>
      <Title />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movies" element={<MovieSearch />} />
          <Route path="/movie/:id/cast" element={<Cast />} />
          <Route path="/movie/:id/reviews" element={<MovieReviews />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
