'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Style from './room.module.scss';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { getUser, postUser } from '@/src/lib/fetchers';
import UserProfile from '@/src/components/room/UserProfile';
import Button from '@/src/components/button/Button';
import GuestList from '@/src/components/room/GuestList';

export default function Room(): JSX.Element {
  const { data: session, status } = useSession() as {
    data: Session;
    status: string;
  };
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const id = session?.user?.id as string;
      if (status !== 'authenticated' || !id) return;

      const data = await getUser(id);
      if (data.roomId) setRoomParams(data.roomId);
      else {
        const data = await postUser(id);
        setRoomParams(data.roomId);
      }
    }
    fetchData();
  }, [status]);

  function setRoomParams(roomId: string) {
    router.replace(`/room?roomId=${roomId}`);
  }

  return (
    <main className={Style['room']}>
      {/* TODO: X 버튼 추가하기 */}
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
