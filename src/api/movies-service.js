import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '7b9bc8a9cecedcc4e50de44b7a3d7df5';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  // console.log(data);

  return data.results.map(({ id, title }) => {
    return { id, title };
  });
};

export const getMovieInfo = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  const { poster_path, title, release_date, vote_average, overview, genres } =
    data;

  return { poster_path, title, release_date, vote_average, overview, genres };
};

export const getByName = async querySearchForm => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${querySearchForm}`
  );
  console.log(data.results);
  return data.results.map(({ id, title }) => {
    return { id, title };
  });
};

export const getCastInfo = async id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
  );
  // console.log(data.cast);

  return data.cast.map(({ id, profile_path, name, character }) => {
    return { id, profile_path, name, character };
  });
};

export const getReviewsInfo = async id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );
  // console.log(data.results);

  return data.results.map(({ id, author, content }) => {
    return { id, author, content };
  });
};
