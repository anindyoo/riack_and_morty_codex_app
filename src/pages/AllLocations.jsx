import { useEffect } from 'react';
import LocationCard from '../components/LocationCard/LocationCard';
import helpers from '../helpers/helpers';
import useLocationStore from '../store/locationStore';

const ByLocation = () => {
  const {
    locations,
    charactersByLocation,
    setCharactersByLocation,
  } = useLocationStore();

  useEffect(() => {
    if (locations) {
      const locationsList = helpers.mergeLocationsCharacters(locations);
      setCharactersByLocation(locationsList);
    }
  }, [locations, setCharactersByLocation]);

  if (!locations) {
    return (
      <div className="
          EMPTY-LOCATION-CONTAINER
          flex flex-col justify-center items-center"
      >
        <div className="
            HEADLINE
            text-[7rem] font-creepster text-zinc-900"
        >
          EMPTY
        </div>
        <div className="text-xl -mt-4">The list is empty....</div>
      </div>
    );
  }

  return (
    <div className="
    BY-LOCATION-PAGE"
    >
      <ul className="
      BY-LOCATION-LIST
      flex flex-col gap-4"
      >
        {charactersByLocation && charactersByLocation?.map((location) => (
          <li
            key={location.location}
            className="CHRACTER-GRID-ITEM"
          >
            <LocationCard locationData={location} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ByLocation;
