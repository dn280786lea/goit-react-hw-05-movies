import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const key = '6b4b55eef0881e4377ffe1c06efc2931';

axios.defaults.baseURL = BASE_URL;

export const getTrending = async () => {
  try {
    const res = await axios.get(`/trending/movie/day?api_key=${key}`);
    return res.data;
  } catch (error) {
    throw new Error(`Error fetching trending movies: ${error.message}`);
  }
};
