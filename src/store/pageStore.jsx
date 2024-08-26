import { create } from 'zustand';

const usePageStore = create((set) => ({
  activePage: 'all',
  detailIsActive: false,
  setActivePage: (id) => set({ activePage: id }),
  setDetailToActive: () => set({ detailIsActive: true }),
  setDetailToInactive: () => set({ detailIsActive: false }),
}));

export default usePageStore;
