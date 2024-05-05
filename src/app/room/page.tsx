'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import styles from './room.module.scss';
import { useSession, signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import { pairPeople } from './utils';

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

const MINIMUM_GUEST_COUNT = 2;

export default function Room() {
  const router = useRouter();
  const { data: session, status } = useSession() as {
    data: Session;
    status: string;
  };
  const { setUser, resetUser, resetGuest, guests, setGuests } = useUserStore();

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

  const handleStartButtonClick = () => {
    const pairs = pairPeople(Object.keys(guests));
    const updatedGuest = Object.entries(guests).reduce(
      (acc, [key, guest]) => {
        acc[key] = { ...guest, receiverId: pairs[key] };
        return acc;
      },
      {} as typeof guests,
    );
    setGuests(updatedGuest);
    router.push('/result');
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
      <GuestList />
      <div className={styles.wrapper}>
        {!Object.keys(guests).length && (
          <p className={styles['warningMsg']}>
            매칭을 위해 최소 {MINIMUM_GUEST_COUNT}명 이상이 필요합니다
          </p>
        )}
        <Button
          className={styles.startButton}
          disabled={Object.keys(guests).length < MINIMUM_GUEST_COUNT}
          onClick={handleStartButtonClick}
        >
          매칭 시작하기
        </Button>
      </div>
    </main>
  );
}
