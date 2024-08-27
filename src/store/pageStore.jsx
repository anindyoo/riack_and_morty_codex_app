import { create } from 'zustand';

const usePageStore = create((set) => ({
  activePage: 'all',
  detailIsActive: false,
  setActivePage: (id) => set({ activePage: id }),
  setDetailStatus: (status) => set({ detailIsActive: status }),
}));

export default usePageStore;
