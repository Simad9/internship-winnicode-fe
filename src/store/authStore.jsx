// store/authStore.js
import { create } from 'zustand';

export const useRoleState = create((set) => ({
  role: '', // default state untuk role
  setRole: (newRole) => set({ role: newRole }), // fungsi untuk mengubah role
}));
