import { create } from 'zustand';

const usePageStore = create((set) => ({
  activePage: '',
  detailIsActive: false,
  setActivePage: (id) => set({ activePage: id }),
  setDetailStatus: (status) => set({ detailIsActive: status }),
}));

export default usePageStore;
