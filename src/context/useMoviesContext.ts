import { useContext } from 'react';
import { MoviesContext } from './MoviesContext';

const useMoviesContext = () => {
  const moviesContextValue = useContext(MoviesContext);

  return moviesContextValue;
}

export default useMoviesContext;
