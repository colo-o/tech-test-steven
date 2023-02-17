import { MovieEntity } from "api/movie.client.types";
import useMoviesContext from "context/useMoviesContext";
import MovieCard from "view/Movies/MovieCard";

type MovieListProps = {
  movieList: MovieEntity[];
  category: string;
}

const  MovieList = ({ movieList, category }: MovieListProps) => {
  const { selectedMovies = {}, selectMovie } = useMoviesContext();

  return (
    <>
      <h2 className="col-span-2 text-2xl font-medium my-4">{category}</h2>
        <ul className="grid grid-flow-col overflow-x-auto gap-4 w-screen h-[250px] category">
          {
            movieList.map(movie => {
              const isMovieSelected = selectedMovies[`${category}`]?.id === movie.id; 

              return <MovieCard movie={movie} key={movie.id} isSelected={isMovieSelected} handleOnClick={selectMovie}/>
            })
          }
      </ul>
    </>
  );
}
 
export default  MovieList;
