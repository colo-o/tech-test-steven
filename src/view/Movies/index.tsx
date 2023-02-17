import MovieCard from 'view/Movies/MovieCard';
import { Movies as MoviesEntity } from 'core/types';

type MoviesProps = {
  movies: MoviesEntity | []
};

const Movies = ({ movies }: MoviesProps) => {
  const renderMovies = () => {
    return Object.entries(movies).map(([category, movieList]) => {
      return <div key={category} className="grid grid-cols-2 w-[100%] overflow-hidden my-8 text-left">
          <h2 className="col-span-2 text-2xl font-medium my-4">{category}</h2>
          <ul className="grid grid-flow-col overflow-x-auto gap-4 w-screen h-[250px] category">
          {
            movieList.map(movie => (              
                <MovieCard movie={movie} key={movie.id}/>
            ))
          }
          </ul>
      </div>
    })
  }

  return <div>
    {renderMovies()}
  </div>;
}

export default Movies;
