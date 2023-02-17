import { MovieEntity } from 'api/movie.client.types';
import Button from 'common/Button';

type VotesResumeModalProps = {
  selectedMovies: { [key: string]: MovieEntity };
  onCloseModal: () => void;
};

const VotesResumeModal = ({
  selectedMovies,
  onCloseModal,
}: VotesResumeModalProps) => {
  return (
    <div className="w-[100vw] md:w-[65vw] xl:w-[45vw] min-h-[35vh] px-6 py-6 md:py-6 md:px-10 bg-bgDark rounded-t-2xl shadow-2xl shadow-bgDark flex flex-col">
      <h3 className="text-3xl font-medium text-primary mb-4 md:mb-6 text-center">
        Votes Submitted
      </h3>
      <h5 className="mb-2 md:mb-4 md:text-2xl">Your Votes:</h5>
      <ul className="mb-6">
        {Object.values(selectedMovies).map(movie => (
          <li
            key={movie.id}
            className="p-2 md:p-4 bg-softBgDark rounded-lg my-2 md:my-4 shadow-lg shadow-bgDark border-l-3 border-l-primary md:border-l-4 "
          >
            <p className="text-sm md:text-xl">
              {movie.title + ' - ' + movie.category}
            </p>
          </li>
        ))}
      </ul>
      <Button onClick={() => onCloseModal()}>Close</Button>
    </div>
  );
};

export default VotesResumeModal;
