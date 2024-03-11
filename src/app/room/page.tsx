'use client';

import Image from 'next/image';
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
      if (data.roomId) {
        alert('이미 방이 생성되어 있습니다.');
      } else {
        postUser(session.user.id);
      }
      // TODO: 방과 UserId를 cookie에 저장하고, 방으로 이동합니다.
    }
    fetchData();
  }, [status]);

  return (
    <main>
      <UserProfile />
      <Image
        src="/"
        width={228}
        height={152}
        style={{
          objectFit: 'contain',
          backgroundColor: '#D9D9D9',
        }}
        alt="room"
      />
      <Button className={Style['btn-share']}>카카오톡 공유하기</Button>
      <GuestList />
      <Button className={Style['btn-match']}>매칭 시작!</Button>
    </main>
  );
}
