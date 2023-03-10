import axios from 'axios';

const apiKey = 'bdf7291b5a7be013f42f0c0b2cf5cd5d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrending = async () => {
  const res = await axios.get(`trending/movie/day?api_key=${apiKey}`);

  return res.data.results;
};

export const fetchSearch = async query => {
  const res = await axios.get(
    `search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  return res.data.results;
};

export const fetchMovieDetails = async id => {
  const res = await axios.get(`movie/${id}?api_key=${apiKey}&language=en-US`);
  return res.data;
};

export const fetchMovieCredits = async id => {
  const res = await axios.get(
    `movie/${id}/credits?api_key=${apiKey}&language=en-US`
  );
  return res.data.cast;
};

export const fetchMovieReviews = async id => {
  const res = await axios.get(
    `movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`
  );

  return res.data.results;
};

export const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
