import Image from 'next/image';
import Style from './room.module.scss';

import UserProfile from '@/src/components/room/UserProfile';
import Button from '@/src/components/button/Button';
import GuestList from '@/src/components/room/GuestList';

// TODO: 이 페이지는 사용자가 로그인을 성공하면, 보여집니다.
// TODO: 사용자가 로그인을 하지 않으면, 로그인 페이지로 이동합니다.
export default function Room(): JSX.Element {
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
