import { MovieEntity } from 'api/movie.client.types';
import { Movies } from 'core/types';
import { createContext, ReactNode, useState, useCallback } from 'react';
import { omit } from 'lodash';
import useMovies from 'view/Movies/useMovies';

type SelectedMovies = { [key: string]: MovieEntity };

type MoviesContextShape = {
  isLoading: boolean;
  movies?: Movies;
  selectedMovies?: SelectedMovies;
  selectMovie: (movie: MovieEntity) => void;
  resetSelectedMovies: () => void;
  isMovieSelected: (movie: MovieEntity) => boolean;
};

export const MoviesContext = createContext<MoviesContextShape>({
  isLoading: true,
  movies: {},
  selectedMovies: {},
  selectMovie: () => null,
  resetSelectedMovies: () => null,
  isMovieSelected: () => false,
});

type MoviesProviderProps = {
  children: ReactNode;
};

const MoviesProvider = ({ children }: MoviesProviderProps) => {
  const { isLoading, movies } = useMovies();
  const [selectedMovies, setSelectedMovies] = useState<SelectedMovies>({});

  const selectMovie = useCallback((movie: MovieEntity): void => {
    setSelectedMovies(prevMovies => {
      if (prevMovies[`${movie.category}`]?.id === movie.id) {
        return omit(prevMovies, [movie.category]);
      }

      return {
        ...prevMovies,
        [`${movie.category}`]: movie,
      };
    });
  }, []);

  const isMovieSelected = (movie: MovieEntity) => {
    return selectedMovies[`${movie.category}`]?.id === movie.id;
  };

  const resetSelectedMovies = () => {
    setSelectedMovies({});
  };

  return (
    <MoviesContext.Provider
      value={{
        isLoading,
        movies,
        selectedMovies,
        selectMovie,
        resetSelectedMovies,
        isMovieSelected,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
