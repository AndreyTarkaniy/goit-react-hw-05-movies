import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '7b9bc8a9cecedcc4e50de44b7a3d7df5';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );

  return data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};
