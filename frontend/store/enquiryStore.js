import { create } from 'zustand';

export const useEnquiryStore = create((set) => ({
  isEnquiryModalOpen: false,
  setIsEnquiryModalOpen: (isOpen) => set({ isEnquiryModalOpen: isOpen })
}));