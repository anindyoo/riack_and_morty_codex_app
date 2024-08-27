import usePageStore from '../../store/pageStore';
import AssignLocation from '../AssignLocation/AssignLocation';

const NavButton = (props) => {
  const { id, text, classname } = props;
  const {
    activePage,
    // detailIsActive,
    setActivePage,
  } = usePageStore();

  const handleButtonClick = (e) => {
    e.preventDefault();
    setActivePage(id);
  };
  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className={`
      ${classname}-NAV-BUTTON
      ${activePage === id ? 'border border-red-600' : ''}`}
    >
      {text}
    </button>
  );
};

const Navigation = () => {
  const { detailIsActive } = usePageStore();

  return (
    <nav className="
    NAVIGATION
    UNIVERSAL-CONTAINER
    flex flex-row justify-evenly
    fixed bottom-0 z-50
    h-20
    px-4 py-3
    border
    bg-white"
    >
      {detailIsActive
        ? (<AssignLocation />)
        : (
          <>
            <NavButton
              id="all"
              text="All Characters"
              classname="ALL-CHARACTERS"
            />
            <NavButton
              id="location"
              text="By Location"
              classname="BY-LOCATION"
            />
          </>
        )}
    </nav>
  );
};

export default Navigation;
