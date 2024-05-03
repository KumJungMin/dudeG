'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';

import { selectFriends } from '@/lib/kakao';
import styles from './KakaoShareButton.module.scss';
import kakaoLogo from '@/styles/images/kakao-logo.png';

import { useUserStore } from '@/stores/useUserStore';

export default function KakaoShareButton() {
  const { addGuest } = useUserStore();
  const { data: session } = useSession();

  async function addFriends() {
    const token = session?.user?.token;
    const data = token ? await selectFriends(token) : [];
    if (!data.selectedTotalCount) return;

    for (const friend of data.users) {
      const {
        profile_nickname: name,
        profile_thumbnail_image: image,
        id,
      } = friend;
      addGuest({ id, name, image, receiverId: '', presents: [] });
    }
  }

  return (
    <button className={styles.linkKakao} onClick={addFriends}>
      <Image
        src={kakaoLogo}
        alt="kakao logo"
        width={28}
        height={28}
        style={{ objectFit: 'contain' }}
      />
      카카오톡으로 추가하기 &gt;
    </button>
  );
}
