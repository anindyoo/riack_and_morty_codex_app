import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import MainPage from './pages/MainPage';

const App = () => {
  const routes = [
    {
      element: <Main />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <div className="
    APP-CONTAINER
    flex flex-col items-center"
    >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
