import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import EventDetail from './pages/EventDetail';
import './App.css';
import HomePage from './pages/HomePage';
import Root from './pages/Root';
import NewEvent from './pages/NewEvent';
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

  return <RouterProvider router={router} />;
}

export default App;
