import { MovieEntity } from "api/movie.client.types";
import Button from "common/Button";

type VotesResumeModalProps = {
  selectedMovies: {[key: string]: MovieEntity};
  onCloseModal: () => void;
}

const VotesResumeModal = ({ selectedMovies, onCloseModal }: VotesResumeModalProps) => {
  return <div className="w-[100vw] min-h-[35vh] px-6 py-6 bg-bgDark rounded-t-2xl shadow-2xl shadow-gray flex flex-col">
    <h3 className="text-xl font-medium text-primary mb-4 text-center">
      Votes Submitted
    </h3>
    <h5 className="mb-2">Your Votes:</h5>
    <ul className="mb-6">
      {
        Object.values(selectedMovies).map(movie => (
          <li key={movie.id} className="p-2 bg-softBgDark rounded-lg my-2 shadow-lg shadow-bgDark border-l-2 border-l-primary">
            <p className="text-sm">{movie.title + ' - ' + movie.category}</p>
          </li>
        ))
      }
    </ul>
    <Button onClick={() => onCloseModal()}>Close</Button>
  </div>;
}
 
export default VotesResumeModal;
