import Users from "../assets/users.json";
import { create } from "zustand";

export function generateUserId(length = 10) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const useUser = create((set) => ({
  users: Users,
  addUser: (user) =>
    set((state) => ({
      users: [...state.users, { ...user, id: generateUserId() }],
    })),
  deleteUser: (id) =>
    set((state) => ({ users: state.users.filter((user) => user.id !== id) })),
  editUser: (id, updatedUser) =>
    set((state) => ({
      users: state.users.map((user) => (user.id === id ? updatedUser : user)),
    })),
}));

export default useUser;
