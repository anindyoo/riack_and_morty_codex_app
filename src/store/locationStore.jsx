import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useLocationStore = create(
  persist(
    (set) => ({
      locations: [],
      charactersByLocation: [],
      addLocation: (data) => {
        set((state) => ({
          locations: [
            ...state.locations,
            data,
          ],
        }));
      },
      setCharactersByLocation: (data) => set({ charactersByLocation: data }),
    }),
    {
      name: 'location-storage',
    },
  ),
);

export default useLocationStore;
