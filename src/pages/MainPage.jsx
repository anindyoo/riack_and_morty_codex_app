import { useEffect } from 'react';
import usePageStore from '../store/pageStore';
import AllCharacters from './AllCharacters';
import ByLocation from './AllLocations';

const MainPage = () => {
  const {
    activePage,
    setActivePage,
    setDetailStatus,
  } = usePageStore();

  useEffect(() => {
    if (activePage === '') {
      setActivePage('all');
    }
    setDetailStatus(false);
  }, [activePage, setActivePage, setDetailStatus]);

  return (
    <div className="
    MAIN-PAGE
    UNIVERSAL-CONTAINER
    min-h-screen
    px-4 pt-24 pb-32
    bg-cyan-100"
    >
      {activePage === 'all'
        ? <AllCharacters />
        : <ByLocation />}
    </div>
  );
};

export default MainPage;
