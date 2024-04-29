'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';

import selectFriends from '../../lib/kakaoFriend';
import Style from './KakaoShareButton.module.scss';
import kakaoLogo from '../../styles/images/kakao-logo.png';

export default function KakaoShareButton() {
  const { data: session } = useSession();
  async function addFriends() {
    const data = await selectFriends(session?.user.token);
    // TODO: zustand 사용하여 친구 목록 추가하기
  }

  return (
    <button className={Style.linkKakao} onClick={addFriends}>
      <Image
        src={kakaoLogo}
        alt="kakao logo"
        width={28}
        height={28}
        style={{ objectFit: 'contain' }}
      />
      카카오톡으로 초대하기 &gt;
    </button>
  );
}
