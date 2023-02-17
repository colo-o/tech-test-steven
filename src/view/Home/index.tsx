import VotesResume from 'view/VotesResume';
import MoviesLayout from 'view/Movies/MoviesLayout';

const Home = () => {
  return (
    <section className="flex content-center flex-col justify-center text-center">
      <h1 className="font-bold text-4xl text-primary my-6">Movie Awards</h1>
      <MoviesLayout />
      <VotesResume />
    </section>
  );
};

export default Home;
