import usePageStore from '../../store/pageStore';

const HeaderButton = (props) => {
  const { name } = props;

  return (
    <button
      type="button"
      className={`
      ${name}-BUTTON
      w-12 border`}
    >
      {name}
    </button>
  );
};

const Header = () => {
  const { detailIsActive } = usePageStore();

  return (
    <div className="
    HEADER
    UNIVERSAL-CONTAINER
    h-16
    flex flex-row justify-between items-center
    fixed top-0
    border border-red-500
    bg-blue-200"
    >
      {
        detailIsActive
          ? <HeaderButton name="back" />
          : (
            <div className="BACK-BUTTON-BUFFER w-12" />
          )
      }
      <div>APP TITLE</div>
      <HeaderButton name="info" />
    </div>
  );
};

export default Header;
