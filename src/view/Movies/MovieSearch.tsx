import { MovieEntity } from 'api/movie.client.types';
import useMoviesContext from 'context/useMoviesContext';
import MovieCard from './MovieCard';

type MoviesSearchProps = {
  searchResults: MovieEntity[] | [];
};

const MoviesSearch = ({ searchResults }: MoviesSearchProps) => {
  const { selectMovie, isMovieSelected } = useMoviesContext();

  return (
    <div className="grid grid-flow-col overflow-x-auto gap-4 w-screen h-[60vh] my-8">
      {searchResults.map((result, idx) => (
        <MovieCard
          handleOnClick={() => selectMovie(result)}
          movie={result}
          key={`${result.id}-${idx}`}
          isSelected={isMovieSelected(result)}
        />
      ))}
    </div>
  );
};

export default MoviesSearch;
