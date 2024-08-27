const mergeLocationsCharacters = (locations) => locations.reduce((acc, cur) => {
  const existingLocation = acc.find((loc) => loc.location === cur.location);
  if (existingLocation) {
    existingLocation.characterId = Array.isArray(existingLocation.characterId)
      ? existingLocation.characterId.concat(cur.characterId)
      : [existingLocation.characterId, cur.characterId];
  } else {
    acc.push({ ...cur });
  }
  return acc;
}, []);

export default {
  mergeLocationsCharacters,
};
