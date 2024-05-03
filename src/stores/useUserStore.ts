import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import type { Guest } from '@/types/guest';

interface User {
  id: string;
  image: string;
  name: string;
}

interface Guests {
  [key: string]: Guest;
}

const defaultUser: User = {
  id: '',
  image: '',
  name: '',
};

interface UserStore {
  user: User;
  setUser: (user: User) => void;
  resetUser: () => void;
}

interface GuestStore {
  guests: Guests;
  addGuest: (guest: Guest) => void;
  resetGuest: () => void;
  deleteGuest: (guestId: string) => void;
}

// TODO: 스토어명 변경하기
export const useUserStore = create<UserStore & GuestStore>()(
  persist(
    (set) => ({
      user: defaultUser,
      guests: {},
      setUser: (user) => set({ user }),
      resetUser: () => set({ user: defaultUser }),
      setGuests: (guests: Guests) => set({ guests }),
      addGuest: (guest: Guest) =>
        set((state) => ({ guests: { ...state.guests, [guest.id]: guest } })),
      resetGuest: () => set({ guests: {} }),
      deleteGuest: (guestId: string) =>
        set((state) => {
          const newGuests = { ...state.guests };
          delete newGuests[guestId];
          return { guests: newGuests };
        }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
