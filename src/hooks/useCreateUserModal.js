import { create } from "zustand";

const useCreateUserModal = create((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useCreateUserModal;
