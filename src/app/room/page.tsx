'use client';

import { useEffect } from 'react';

import Style from './room.module.scss';
import { useSession, signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import UserProfile from '@/src/components/room/UserProfile';
import Button from '@/src/components/ui/button/Button';
import GuestList from '@/src/components/room/GuestList';
import Icon from '@/src/components/ui/icon/Icon';

import { useUserStore } from '@/src/stores/useUserStore';

interface SessionUser {
  id: string;
  name: string;
  image: string;
}

export default function Room(): JSX.Element {
  const { data: session, status } = useSession() as {
    data: Session;
    status: string;
  };
  const { setUser, resetUser, resetGuest } = useUserStore();

  useEffect(() => {
    async function fetchData() {
      const user = session?.user as SessionUser;
      if (status !== 'authenticated' || !user.id) return;

      setUser({ id: user.id, name: user.name, image: user.image });
    }
    fetchData();
  }, [status]);

  const handleCloseButtonClick = () => {
    signOut({ callbackUrl: '/', redirect: true });
    resetUser();
    resetGuest();
  };

  return (
    <main className={Style['room']}>
      <button className={Style['closeButton']} onClick={handleCloseButtonClick}>
        <Icon name="close" size={32} />
      </button>
      <UserProfile />
      <GuestList />
      <Button
        style={{
          height: '61px',
          margin: '64px 0 51px',
        }}
      >
        매칭 시작!
      </Button>
    </main>
  );
}
