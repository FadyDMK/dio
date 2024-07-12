const API_KEY = "ae70c342303f7cab77e2bb86d2ba6ad0";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const getMovies = async (type) => {
  const response = await fetch(
    `${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await response.json();
  return data.results;
};
export const getMovieDetails = async (id) => {
    const response = await fetch(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data;
}

export const getMoviePoster = (path) => {
  return `${IMAGE_URL}${path}`;
}