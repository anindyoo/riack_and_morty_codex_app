import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import Main from './layouts/Main';
import MainPage from './pages/MainPage';
import useCharacterStore from './store/characterStore';
import CharacterDetail from './pages/CharacterDetail';
import AllCharactersByLocation from './pages/AllCharactersByLocation';
import Info from './pages/Info';

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
        {
          path: '/:characterId',
          element: <CharacterDetail />,
        },
        {
          path: '/location/:location',
          element: <AllCharactersByLocation />,
        },
        {
          path: '/info',
          element: <Info />,
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

  if (loading) {
    return (
      <div className="
      LOADING
      fixed top-0 left-0
      flex flex-col justify-center items-center
      h-screen w-screen"
      >
        <div className="animate-spin">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <div>Loading...</div>
      </div>
    );
  }
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
