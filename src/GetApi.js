async function getApi(api) {
  let result = [];
  await fetch(api)
    .then((data) => data.json())
    .then((final) => (result = [...result, ...final.results]));
  return result;
}
const API_KEY = import.meta.env.VITE_API_KEY

const apiLink =
  `https://api.themoviedb.org/3/discover/movie?include_adult=true&api_key=${API_KEY}&page=1`;
const imgLink = "https://image.tmdb.org/t/p/original/";
const searchMovie =
  `https://api.themoviedb.org/3/search/movie?include_adult=true&sort_by=vote_average.desc&api_key=${API_KEY}&query=`;
export { getApi, apiLink, imgLink, searchMovie };
