import Movies from 'view/Movies';
import Input from 'common/Input';
import VotesResume from 'view/VotesResume';

const Home = () => {
  return <section className="flex content-center flex-col justify-center text-center">
    <h1 className="font-bold text-4xl text-primary my-6">Movie Awards</h1>
    <Input name="Search" type="text" placeholder="Search a movie title" onChange={() => undefined}/>
    <Movies />
    <VotesResume />
  </section>
};

export default Home;
