import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EventsPage,{loader as eventsLoader} from './pages/EventsPage';
import EventDetail from './pages/EventDetail';
import './App.css';
import HomePage from './pages/HomePage';
import Root from './pages/Root';
import NewEvent from './pages/NewEvent';
import { queryClient } from './util/http';
import { QueryClientProvider } from 'react-query';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: '/events',
          element: <EventsPage />,
          loader:eventsLoader
        },
        {
          path: '/events/:eventId',
          element: <EventDetail />,
        },
        {
          path: '/events/new',
          element: <NewEvent />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
