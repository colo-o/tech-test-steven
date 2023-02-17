import classNames from 'classnames';

import { MovieEntity } from 'api/movie.client.types';
import Button from 'common/Button';

type MovieCardProps = {
  movie: MovieEntity;
  isSelected: boolean;
  handleOnClick: (movie: MovieEntity) => void;
};

const MovieCard = ({ movie, isSelected, handleOnClick }: MovieCardProps) => {
  const CardClassName = classNames(
    'w-[180px] h-[100%] col-span-1 bg-cover rounded-2xl overflow-hidden relative last:mr-16',
    {
      'border-4 border-primary': isSelected,
    }
  );

  return (
    <li
      className={CardClassName}
      style={{ backgroundImage: `url(${movie.photoUrL})` }}
    >
      <Button
        className="absolute top-2 right-4 text-xl"
        onClick={() => handleOnClick(movie)}
      >
        {isSelected ? '-' : '+'}
      </Button>
      <section className="w-[100%] pt-14 pb-4 px-4 bg-gradient-to-t from-bgDark absolute bottom-0 left-0">
        <p className="text-lg font-medium">{movie.title}</p>
      </section>
    </li>
  );
};

export default MovieCard;
