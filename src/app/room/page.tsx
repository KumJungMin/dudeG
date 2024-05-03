'use client';

import { useEffect } from 'react';

import styles from './room.module.scss';
import { useSession, signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import UserProfile from '@/components/room/UserProfile';
import Button from '@/components/ui/button/Button';
import GuestList from '@/components/room/GuestList';
import Icon from '@/components/ui/icon/Icon';

import { useUserStore } from '@/stores/useUserStore';

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
  const { setUser, resetUser, resetGuest, guests } = useUserStore();

  const guestList = Object.values(guests);
  const isValidGuest = guestList.length > 1;

  useEffect(() => {
    async function fetchData() {
      const user = session?.user as SessionUser;
      if (status !== 'authenticated' || !user.id) return;

      const { id, name, image } = user;
      setUser({ id, name, image });
    }
    fetchData();
  }, [status, session?.user, setUser]);

  const handleCloseButtonClick = () => {
    signOut({ callbackUrl: '/', redirect: true });
    resetUser();
    resetGuest();
  };

  return (
    <main className={styles['room']}>
      <button
        className={styles['closeButton']}
        onClick={handleCloseButtonClick}
      >
        <Icon name="close" size={32} />
      </button>
      <UserProfile />
      <GuestList has-guest={isValidGuest} guests={guestList} />
      <div className={styles.wrapper}>
        {!isValidGuest && (
          <p className={styles['warningMsg']}>
            매칭을 위해 최소 2명 이상이 필요합니다
          </p>
        )}
        <Button className={styles.startButton} disabled={!isValidGuest}>
          매칭 시작하기
        </Button>
      </div>
    </main>
  );
}
