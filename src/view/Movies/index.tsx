import MovieList from 'view/Movies/MovieList';
import useMoviesContext from 'context/useMoviesContext';

const Movies = () => {
  const { movies } = useMoviesContext();

  return (
    <div>
      {Object.entries(movies || {}).map(([category, movieList]) => {
        return (
          <div
            key={category}
            className="grid grid-cols-2 w-[100%] overflow-hidden my-8 text-left"
          >
            <MovieList movieList={movieList} category={category} />
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
