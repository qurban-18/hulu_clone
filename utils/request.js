const API_KEY = process.env.API_KEY;

export default [
  {
    id: "trending",
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&languange=en-US`,
  },
  {
    id: "top-rated",
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&languange=en-US`,
  },
  {
    id: "action",
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    id: "comedy",
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    id: "horror",
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    id: "mystery",
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  {
    id: "sci-fi",
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  {
    id: "western",
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  {
    id: "animation",
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  {
    id: "tv-movies",
    title: "TV Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
];

// export default {
//   fetchTrending: {
//     title: "Trending",
//     url: `/trending/all/week?api_key=${API_KEY}&languange=en-US`,
//   },
//   fetchTopRated: {
//     title: "Top Rated",
//     url: `/movie/top_rated?api_key=${API_KEY}&languange=en-US`,
//   },
//   fetchActionMovies: {
//     title: "Action",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   },
//   fetchComedyMovies: {
//     title: "Comedy",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   },
//   fetchHorrorMovies: {
//     title: "Horror",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   },
//   fetchRomanceMovies: {
//     title: "Romance",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   },
//   fetchMystery: {
//     title: "Mystery",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
//   },
//   fetchSciFi: {
//     title: "Sci-Fi",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
//   },
//   fetchWestern: {
//     title: "Western",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
//   },
//   fetchAnimation: {
//     title: "Animation",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
//   },
//   fetchTV: {
//     title: "TV Movies",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
//   },
// };
