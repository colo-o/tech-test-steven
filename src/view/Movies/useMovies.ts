import { useQuery } from 'react-query'
 
import MovieClient from 'api/movie.client';
import { MovieEntity } from 'api/movie.client.types';
import { groupMoviesByCategory, sortMoviesByCategory } from 'core/utils';
import { Movies } from 'core/types';

type UseMoviesResult = {
  isLoading: boolean;
  isError: boolean;
  movies?: Movies;
}

const useMovies = (): UseMoviesResult => {
  const { isLoading, isError, data } = useQuery<MovieEntity[]>('movies', () => MovieClient.getMovies())

  const mappedMovies = groupMoviesByCategory(sortMoviesByCategory(data));

  return {
    isLoading,
    isError,
    movies: mappedMovies,
  }
}

export default useMovies;
