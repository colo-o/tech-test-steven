import { MovieEntity } from 'api/movie.client.types';
import useMoviesContext from 'context/useMoviesContext';
import MovieCard from 'view/Movies/MovieCard';

type MovieListProps = {
  movieList: MovieEntity[];
  category: string;
};

const MovieList = ({ movieList, category }: MovieListProps) => {
  const { selectMovie, isMovieSelected } = useMoviesContext();

  return (
    <>
      <h2 className="col-span-2 text-2xl font-medium my-4">{category}</h2>
      <ul className="grid grid-flow-col overflow-x-auto gap-4 w-screen h-[250px] category">
        {movieList.map((movie, idx) => (
          <MovieCard
            movie={movie}
            key={`${movie.id}${idx}`}
            isSelected={isMovieSelected(movie)}
            handleOnClick={selectMovie}
          />
        ))}
      </ul>
    </>
  );
};

export default MovieList;
