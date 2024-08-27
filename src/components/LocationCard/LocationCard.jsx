import { Link } from 'react-router-dom';

const LocationCard = (props) => {
  const { locationData } = props;
  const encodedLocation = encodeURIComponent(locationData.location);

  return (
    <Link
      to={`/location/${encodedLocation}`}
      className="LOCATION-CARD-LINK"
    >
      <div className="
      LOCATION-CARD-CONTAINER
      flex flex-row justify-between items-center
      px-4 pt-6 pb-4
      border-2 border-slimyGreen
      rounded-lg overflow-hidden
      shadow-md
      bg-white"
      >
        <div className="
        LOCATION-DETAIL-CONTAINER
        flex flex-col gap-2"
        >
          <div className="
          LOCATION-NAME
          text-3xl font-bold text-zinc-800"
          >
            {locationData.location}
          </div>
          <div className="
          LOCATION-CHARACTER-COUNT"
          >
            Characters count:
            {' '}
            {locationData.characterId.length}
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Link>
  );
};

export default LocationCard;
