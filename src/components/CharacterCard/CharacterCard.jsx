import { Link } from 'react-router-dom';
import CharacterBio from '../CharacterBio/CharacterBio';
import CharacterLocation from '../CharacterLocation/CharacterLocation';

const CharacterCard = (props) => {
  const { charData } = props;

  return (
    <Link
      to={`/${charData?.id}`}
      className="
      CHARACTER-CARD-LINK"
    >
      <div className="
      CHARACTER-CARD-CONTAINER
      border-2 border-slimyGreen
      shadow-md
      rounded-2xl overflow-hidden
      bg-white"
      >
        <img
          src={charData?.image}
          alt={charData?.name}
          className="
          CHARACTER-AVA
          w-auto"
        />
        <div className="
        CHARACTER-DETAILS-CONTAINER
        flex flex-col gap-1
        px-3 py-5"
        >
          <div className="
          CHARACTER-NAME
          line-clamp-1
          text-xl font-bold text-zinc-700"
          >
            {charData?.name}
          </div>
          <CharacterLocation />
          <div className="
          CHARACTER-SUB-DETAIL
          flex flex-row gap-4
          mt-2.5"
          >
            <CharacterBio status={charData?.status} />
            <CharacterBio species={charData?.species} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
