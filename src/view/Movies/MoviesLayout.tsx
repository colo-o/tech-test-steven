import { useSpring, animated, easings } from '@react-spring/web';

import useSearchMoviesContext from 'context/useSearchMoviesContext';

import MoviesSearch from 'view/Movies/MovieSearch';
import Movies from 'view/Movies';
import Input from 'common/Input';
import useMoviesContext from 'context/useMoviesContext';

const MoviesLayout = () => {
  const { searchTerm, setTerm, searchResults } = useSearchMoviesContext();
  const { isLoading } = useMoviesContext();

  const [props] = useSpring(
    () => ({
      from: { scale: 0.5 },
      to: { scale: 1 },
      config: {
        tension: 1000,
        duration: 800,
        easing: easings.easeOutCubic,
      },
      delay: 100,
    }),
    []
  );

  const [outterProps] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: {
        duration: 1000,
        easing: easings.easeOutCubic,
      },
    }),
    []
  );

  return (
    <div className="overflow-hidden">
      <Input
        name="Search"
        type="text"
        placeholder="Search a movie title"
        onChange={ev => setTerm(ev.target.value)}
      />
      <animated.div style={{ ...outterProps }}>
        {!isLoading && (
          <animated.div style={{ ...props }}>
            {searchTerm && !isLoading ? (
              <MoviesSearch searchResults={searchResults} />
            ) : (
              <Movies />
            )}
          </animated.div>
        )}
      </animated.div>
    </div>
  );
};

export default MoviesLayout;
