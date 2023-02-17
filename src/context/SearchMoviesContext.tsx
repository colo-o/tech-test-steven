import { MovieEntity } from 'api/movie.client.types';
import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';
import { isEmpty } from 'lodash';

import useMoviesContext from './useMoviesContext';
import { filterMoviesResultsByTitle } from 'core/utils';

type SearchMoviesContextShape = {
  searchTerm: string;
  searchResults: MovieEntity[];
  setTerm: (searchTearm: string) => void;
};

export const SearchMoviesContext = createContext<SearchMoviesContextShape>({
  searchTerm: '',
  searchResults: [],
  setTerm: () => null,
});

type MoviesProviderProps = {
  children: ReactNode;
};

const SearchMoviesProvider = ({ children }: MoviesProviderProps) => {
  const { movies = {} } = useMoviesContext();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const searchResults = useMemo(
    () =>
      !isEmpty(searchTerm)
        ? filterMoviesResultsByTitle(Object.values(movies), searchTerm)
        : [],
    [searchTerm]
  );

  const setTerm = useCallback(searchTerm => {
    setSearchTerm(searchTerm);
  }, []);

  return (
    <SearchMoviesContext.Provider value={{ searchTerm, searchResults, setTerm }}>
      {children}
    </SearchMoviesContext.Provider>
  );
};

export default SearchMoviesProvider;
