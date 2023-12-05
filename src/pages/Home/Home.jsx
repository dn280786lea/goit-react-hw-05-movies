import React, { useEffect, useState } from 'react';
import MoviesList from '../../components/MovieList/MovieList';
import './Home.css';
import { getTrending } from '../../components/API/API';
import '../../components/MovieList/MovieList.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const defaultImg = 'https://www.pinterest.com/pin/700802392037815473/';
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await getTrending();
        setMovies(trendingMovies.results);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="Movie">
      <h2 className="today">Trending today</h2>
      <MoviesList movies={movies} defaultImg={defaultImg} />
    </div>
  );
};

export default Home;
