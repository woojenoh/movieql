import fetch from "node-fetch";

const DETAIL_URL = "https://yts.am/api/v2/movie_details.json?";
const LIST_URL = "https://yts.am/api/v2/list_movies.json?";
const SUGGESTIONS_URL = "https://yts.am/api/v2/movie_suggestions.json?";

export const getMovie = id => {
  let REQUEST_URL = DETAIL_URL + `movie_id=${id}`;
  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movie);
};

export const getMovies = (limit, rating) => {
  let REQUEST_URL = LIST_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
};

export const getSuggestions = id => {
  let REQUEST_URL = SUGGESTIONS_URL + `movie_id=${id}`;
  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
};
