import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
  id: string;
  image: string;
  name: string;
}

interface Guest {
  id: string;
  image: string;
  name: string;
  receiverId: string;
  presents: Present[];
}

interface Guests {
  [key: string]: Guest;
}

interface Present {
  name: string;
  price: number;
  link: string;
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
