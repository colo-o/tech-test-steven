import { QueryClient, QueryClientProvider } from 'react-query';

import MoviesProvider from 'context/MoviesContext';

const queryClient = new QueryClient();

import Home from 'view/Home';
import SearchMoviesProvider from 'context/SearchMoviesContext';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MoviesProvider>
        <SearchMoviesProvider>
          <Home />
        </SearchMoviesProvider>
      </MoviesProvider>
    </QueryClientProvider>
  );
}

export default App;
