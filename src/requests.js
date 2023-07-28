const apiKey = "f4fecdecf21b330d12f01bbaae2781da";

const requests = {
  fethTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  fetchActionMovies: `discover/movie?api_key=${apiKey}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${apiKey}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${apiKey}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${apiKey}&with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${apiKey}&with_genres=99`,
};
export default requests;
