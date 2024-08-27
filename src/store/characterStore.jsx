import { create } from 'zustand';

const useCharacterStore = create((set) => ({
  characters: [],
  setCharacters: (data) => set({ characters: data }),
}));

export default useCharacterStore;
