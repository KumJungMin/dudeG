import UserProfile from '@/src/components/room/UserProfile';
import Image from 'next/image';

// TODO: 이 페이지는 사용자가 로그인을 성공하면, 보여집니다.
// TODO: 사용자가 로그인을 하지 않으면, 로그인 페이지로 이동합니다.
export default function Room(): JSX.Element {
  return (
    <main>
      <UserProfile />
      <Image src="/" width={800} height={400} alt="room" />
    </main>
  );
}
