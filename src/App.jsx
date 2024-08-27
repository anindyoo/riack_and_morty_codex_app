import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import Main from './layouts/Main';
import MainPage from './pages/MainPage';
import useCharacterStore from './store/characterStore';

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters{
      info{
        count
        next
      }
      results{
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;

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

  const { setCharacters } = useCharacterStore();
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  useEffect(() => {
    if (data) {
      setCharacters(data);
    }
  }, [data, setCharacters]);

  if (loading) return 'LOADING.';
  if (error) return error.message;
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
