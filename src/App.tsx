import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

import Home from 'view/Home';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
