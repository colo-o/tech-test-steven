import { MovieEntity } from "api/movie.client.types";
import { Movies } from "core/types";

export const groupMoviesByCategory = (movies: MovieEntity[] | undefined) => {
  const moviesMap: Movies = {};

  (movies || []).forEach((movie: MovieEntity) => {
    moviesMap[`${movie.category}`] = [movie, ...moviesMap[`${movie.category}`] || []];
  });

  return moviesMap;
};
 