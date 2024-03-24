'use client';

import Style from './room.module.scss';
import { useSession } from 'next-auth/react';
import { getUser, postUser } from '@/src/lib/fetchers';
import UserProfile from '@/src/components/room/UserProfile';
import Button from '@/src/components/button/Button';
import GuestList from '@/src/components/room/GuestList';
import { useEffect } from 'react';

// TODO: 이 페이지는 사용자가 로그인을 성공하면, 보여집니다.
// TODO: 사용자가 로그인을 하지 않으면, 로그인 페이지로 이동합니다.
export default function Room(): JSX.Element {
  const { data: session, status } = useSession();

  useEffect(() => {
    async function fetchData() {
      if (!session?.user?.id && status !== 'authenticated') return;
      const data = await getUser(session.user.id);

      if (!data.roomId) postUser(session.user.id);
      // TODO: 방과 UserId를 cookie에 저장하고, 방으로 이동합니다.
    }
    fetchData();
  }, [status]);

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
