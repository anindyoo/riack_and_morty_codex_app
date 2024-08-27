import usePageStore from '../../store/pageStore';

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
  console.log();

  return (
    <nav className="
    NAVIGATION
    UNIVERSAL-CONTAINER
    flex flex-row justify-evenly
    fixed bottom-0
    h-20
    border
    bg-white"
    >
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
    </nav>
  );
};

export default Navigation;
