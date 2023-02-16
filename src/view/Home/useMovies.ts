import { useQuery } from 'react-query'
 
import MovieClient from 'api/movie.client';
import { MovieEntity, CategoryEntity } from 'api/movie.client.types';
import { extractCategoriesFromMovies } from 'core/utils';

type UseMoviesResult = {
  isLoading: boolean;
  isError: boolean;
  movies?: MovieEntity[];
  categories?: CategoryEntity[];
}

const useMovies = (): UseMoviesResult => {
  const { isLoading, isError, data } = useQuery<MovieEntity[]>('movies', () => MovieClient.getMovies())

  const categories = extractCategoriesFromMovies(data);

  return {
    isLoading,
    isError,
    movies: data,
    categories,
  }
}

export default useMovies;
