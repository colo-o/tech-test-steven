import useMovies from 'view/Home/useMovies'

const Home = () => {
  const { isLoading, movies } = useMovies();

  if (isLoading) {
    return <p>Loading...</p>
  }

  return <p>Hello world</p>;
};

export default Home;
