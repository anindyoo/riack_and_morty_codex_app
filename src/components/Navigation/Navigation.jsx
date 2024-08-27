import usePageStore from '../../store/pageStore';

const NavButton = (props) => {
  const { id, text, classname } = props;
  const {
    activePage,
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
      flex flex-col items-center
      text-lg text-zinc-800
      ${activePage === id
        ? 'border bg-lime-100 rounded-lg px-4 font-bold'
        : ''}`}
    >
      {text === 'Characters'
        ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill={activePage === id ? 'black' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg>
        )
        : (
          <svg xmlns="http://www.w3.org/2000/svg" fill={activePage === id ? 'black' : 'none'} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        )}
      {text}
    </button>
  );
};

const Navigation = () => {
  const { detailIsActive } = usePageStore();

  return !detailIsActive && (
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
      <NavButton
        id="all"
        text="Characters"
        classname="ALL-CHARACTERS"
      />
      <NavButton
        id="location"
        text="Locations"
        classname="All-LOCATIONs"
      />
    </nav>
  );
};

export default Navigation;
