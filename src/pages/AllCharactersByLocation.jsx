import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useLocationStore from '../store/locationStore';
import CharacterCard from '../components/CharacterCard/CharacterCard';
import useCharacterStore from '../store/characterStore';
import usePageStore from '../store/pageStore';

const AllCharactersByLocation = () => {
  const { location } = useParams();
  const { characters } = useCharacterStore();
  const { setDetailStatus } = usePageStore();
  const { charactersByLocation } = useLocationStore();

  const decodedLocation = decodeURIComponent(location);
  const charactersByLocationData = charactersByLocation && charactersByLocation
    .filter((charByLoc) => charByLoc.location === decodedLocation)[0];

  const charsData = characters?.characters?.results;
  const filteredCharacters = charsData && charsData
    ?.filter((char) => charactersByLocationData?.characterId?.includes(char.id));

  useEffect(() => {
    setDetailStatus(true);
  }, [setDetailStatus]);

  return (
    <div className="
    ALL-CHRACTERS-LIST-PAGE
    UNIVERSAL-CONTAINER
    min-h-screen
    px-4 pt-24 pb-32
    bg-cyan-100"
    >
      <ul className="
      ALL-CHARACTERS-LIST
      grid grid-cols-2 gap-x-3 gap-y-6"
      >
        {filteredCharacters?.map((charData) => (
          <li
            key={charData.id}
            className="CHRACTER-GRID-ITEM"
          >
            <CharacterCard charData={charData} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllCharactersByLocation;
