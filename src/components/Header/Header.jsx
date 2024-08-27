import { Link } from 'react-router-dom';
import usePageStore from '../../store/pageStore';

const HeaderButton = (props) => {
  const { name } = props;

  return (
    <Link
      to={name === 'info' ? '/info' : '/'}
      className={`
      ${name}-BUTTON
      flex justify-center
      w-12`}
    >
      {name === 'info'
        ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        )}
    </Link>
  );
};

const Header = () => {
  const { detailIsActive } = usePageStore();

  return (
    <div className="
    HEADER
    UNIVERSAL-CONTAINER
    fixed top-0
    flex flex-row justify-between items-center
    h-16
    px-2
    bg-white
    shadow-md"
    >
      {
        detailIsActive
          ? <HeaderButton name="back" />
          : (
            <div className="BACK-BUTTON-BUFFER w-12" />
          )
      }
      <Link
        to="/"
        className="APP-TITLE font-creepster text-2xl text-lightBlue text-stroke"
      >
        RICK & MORTY CODEX
      </Link>
      <HeaderButton name="info" />
    </div>
  );
};

export default Header;
