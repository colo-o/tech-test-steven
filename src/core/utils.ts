import { MovieEntity } from 'api/movie.client.types';
import { Movies } from 'core/types';

export const groupMoviesByCategory = (movies: MovieEntity[] | undefined) => {
  const moviesMap: Movies = {};

  (movies || []).forEach((movie: MovieEntity) => {
    moviesMap[`${movie.category}`] = [
      movie,
      ...(moviesMap[`${movie.category}`] || []),
    ];
  });

  return moviesMap;
};

export const sortMoviesByCategory = (movies: MovieEntity[] | undefined) => {
  return (movies || []).sort((currentValue, nextValue) => {
    const currentCategory = currentValue.category.toUpperCase();
    const nextCategory = nextValue.category.toUpperCase();

    if (currentCategory < nextCategory) {
      return -1;
    }
    if (currentCategory > nextCategory) {
      return 1;
    }

    return 0;
  });
};

export const filterMoviesResultsByTitle = (
  movies: MovieEntity[][] | [],
  query: string
) => {
  return movies
    .flat()
    .filter(
      movie => movie.title.toString().toLowerCase().indexOf(query.toLowerCase()) > -1
    );
};
