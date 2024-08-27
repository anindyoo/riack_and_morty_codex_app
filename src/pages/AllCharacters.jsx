import CharacterCard from '../components/CharacterCard/CharacterCard';

const AllCharacters = () => {
  console.log();

  return (
    <div className="
    ALL-CHRACTERS-LIST-PAGE"
    >
      <ul className="
      ALL-CHARACTERS-LIST
      grid grid-cols-2 gap-x-3 gap-y-6"
      >
        <li>
          <CharacterCard />
        </li>
        <li>
          <CharacterCard />
        </li>
        <li>
          <CharacterCard />
        </li>
        <li>
          <CharacterCard />
        </li>
        <li>
          <CharacterCard />
        </li>
        <li>
          <CharacterCard />
        </li>
        <li>
          <CharacterCard />
        </li>
        <li>
          <CharacterCard />
        </li>
        <li>
          <CharacterCard />
        </li>
        <li>
          <CharacterCard />
        </li>
        <li>
          <CharacterCard />
        </li>
        <li>
          <CharacterCard />
        </li>
        <li>
          <CharacterCard />
        </li>
        <li>
          <CharacterCard />
        </li>
        <li>
          <CharacterCard />
        </li>
        <li>
          <CharacterCard />
        </li>
      </ul>
    </div>
  );
};

export default AllCharacters;
