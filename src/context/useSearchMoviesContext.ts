import { useContext } from 'react';
import { SearchMoviesContext } from 'context/SearchMoviesContext';

const useSearchMoviesContext = () => {
  const searchMoviesContext = useContext(SearchMoviesContext);

  return searchMoviesContext;
};

export default useSearchMoviesContext;
