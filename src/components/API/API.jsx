import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const key = '6b4b55eef0881e4377ffe1c06efc2931';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

axios.defaults.baseURL = BASE_URL;

export const getTrending = async () => {
  try {
    const res = await axios.get(`/trending/movie/day?api_key=${key}`);
    return res.data;
  } catch (error) {
    throw new Error(`Error fetching trending movies: ${error.message}`);
  }
};

export const getMovieDetails = async id => {
  try {
    const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${key}`);
    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};
export const searchMovies = async query => {
  try {
    const res = await axios.get(
      `${BASE_URL}/search/movie?api_key=${key}&query=${query}`
    );
    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};
export { BASE_URL, key, BASE_IMAGE_URL };
