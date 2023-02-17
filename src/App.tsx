import { QueryClient, QueryClientProvider } from 'react-query';

import MoviesProvider from 'context/MoviesContext';

const queryClient = new QueryClient();

import Home from 'view/Home';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MoviesProvider>
        <Home />
      </MoviesProvider>
    </QueryClientProvider>
  );
}

export default App;
