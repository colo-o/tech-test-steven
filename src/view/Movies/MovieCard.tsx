import { MovieEntity } from "api/movie.client.types";
import Button from "common/Button";

type MovieCardProps = {
  movie: MovieEntity;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return <li className="w-[180px] h-[100%] col-span-1 bg-cover rounded-2xl overflow-hidden relative" style={{ backgroundImage: `url(${movie.photoUrL})` }}>
    <Button className="absolute top-2 right-4 text-xl">+</Button>
    <section className="w-[100%] pt-14 pb-4 px-4 bg-gradient-to-t from-bgDark absolute bottom-0 left-0">
      <p className="text-lg font-medium">{movie.title}</p>
    </section>
  </li>;
}
 
export default MovieCard;
