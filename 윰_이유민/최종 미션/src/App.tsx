import { RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './routes/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router} />
    </QueryClientProvider>
  );
}

export default App;
