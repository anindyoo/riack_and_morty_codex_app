import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';

const Main = () => {
  console.log();

  return (
    <
    >
      <Header />
      <Outlet />
      <Navigation />
    </>
  );
};

export default Main;
