import Movies from 'view/Movies';
import Button from 'common/Button';
import Input from 'common/Input';

const Home = () => {
  return <section className="flex content-center flex-col justify-center text-center">
    <h1 className="font-bold text-4xl text-primary my-6">Movie Awards</h1>
    <Input name="Search" type="text" placeholder="Search a movie title" onChange={() => undefined}/>
    <Movies />
    <Button className="mb-6 sticky">Submit votes</Button>
  </section>
};

export default Home;
