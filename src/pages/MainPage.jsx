import usePageStore from '../store/pageStore';
import AllCharacters from './AllCharacters';
import ByLocation from './ByLocation';

const MainPage = () => {
  const { activePage } = usePageStore();

  return (
    <div className="
    MAIN-PAGE
    UNIVERSAL-CONTAINER
    min-h-screen"
    >
      {activePage === 'all'
        ? <AllCharacters />
        : <ByLocation />}
    </div>
  );
};

export default MainPage;
