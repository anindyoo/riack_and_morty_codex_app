import { useEffect } from 'react';
import usePageStore from '../store/pageStore';
import AllCharacters from './AllCharacters';
import ByLocation from './ByLocation';

const MainPage = () => {
  const { activePage, setDetailStatus } = usePageStore();

  useEffect(() => {
    setDetailStatus(false);
  }, [setDetailStatus]);

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
