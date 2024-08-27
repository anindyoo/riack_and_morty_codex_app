import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useCharacterStore from '../store/characterStore';
import CharacterBio from '../components/CharacterBio/CharacterBio';
import CharacterLocation from '../components/CharacterLocation/CharacterLocation';
import usePageStore from '../store/pageStore';
import AssignLocation from '../components/AssignLocation/AssignLocation';
import useLocationStore from '../store/locationStore';

const CharacterDetail = () => {
  const { characterId } = useParams();
  const { characters } = useCharacterStore();
  const { setDetailStatus } = usePageStore();
  const { locations } = useLocationStore();

  const charsData = characters?.characters?.results;
  const charData = charsData && charsData?.filter((char) => char.id === characterId)[0];

  const charLocation = locations && locations.filter((loc) => loc.characterId === characterId)[0];

  useEffect(() => {
    setDetailStatus(true);
  }, [setDetailStatus]);

  return (
    <div className="
    CHARACTER-DETAIL
    UNIVERSAL-CONTAINER
    flex flex-col gap-8
    min-h-screen
    px-4 pt-24 pb-32"
    >
      <img
        src={charData?.image}
        alt={charData?.name}
        className="border border-slimyGreen shadow-md"
      />
      <div className="
      CHARACTER-DETAIL
      flex flex-col gap-2"
      >
        <div className="
        CHARACTER-NAME
        text-3xl font-bold text-zinc-700"
        >
          {charData?.name}
        </div>
        <CharacterLocation location={charLocation?.location} detail />
        <div className="
        CHARACTER-SUBDETAIL-CONTAINER
        flex flex-col gap-2
        mt-2"
        >
          <CharacterBio status={charData?.status} detail />
          <CharacterBio species={charData?.species} detail />
          <CharacterBio charType={charData?.type} includeType detail />
          <CharacterBio gender={charData?.gender} detail />
        </div>
      </div>
      <AssignLocation
        characterId={charData?.id}
        disabled={!!charLocation}
      />
    </div>
  );
};

export default CharacterDetail;
