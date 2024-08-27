import CharacterCard from '../components/CharacterCard/CharacterCard';
import useCharacterStore from '../store/characterStore';

const AllCharacters = () => {
  const { characters } = useCharacterStore();
  const charactersData = characters?.characters?.results;

  return (
    <div className="
    ALL-CHRACTERS-LIST-PAGE"
    >
      <ul className="
      ALL-CHARACTERS-LIST
      grid grid-cols-2 gap-x-3 gap-y-6"
      >
        {charactersData && charactersData.map((charData) => (
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

export default AllCharacters;
