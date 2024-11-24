import { create } from "zustand";

const useEditUserModal = create((set) => ({
  isOpen: false,
  user: {
    name: "",
    role: "Admin",
    status: "Active",
  },
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setUser: (user) => set({ user }),
}));

export default useEditUserModal;
