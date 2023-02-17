import { useState } from "react";

import VotesResumeModal from "view/VotesResume/VotesResumeModal";

import Button from "common/Button";
import Modal from "common/Modal";
import useMoviesContext from "context/useMoviesContext";
import { isEmpty } from "lodash";

const VotesResume = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { selectedMovies, resetSelectedMovies } = useMoviesContext();

  const onCloseModalAction = () => {
    resetSelectedMovies();
    setIsModalVisible(false);
  }

  return (
  <>
    {
      isModalVisible && (
        <Modal onCloseModal={onCloseModalAction}>
          <VotesResumeModal selectedMovies={selectedMovies || {}} onCloseModal={onCloseModalAction}/>
        </Modal>
      )
    }
    <Button className="mb-6 sticky" onClick={() => setIsModalVisible(true)} disabled={isEmpty(selectedMovies)}>Submit votes</Button>
  </>
  )
}
 
export default VotesResume;
