'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import Style from './KakaoShareButton.module.scss';
import kakaoLogo from '../../styles/images/kakao-logo.png';

export default function KakaoShareButton() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const kakao = window.Kakao;

  useEffect(() => {
    if (!kakao) return;

    kakao.cleanup();
    kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
    return () => {
      kakao.cleanup();
    };
  }, [kakao]);

  const shareKakao = () => {
    const roomUrl = window.location.href;

    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'DudeG',
        description: 'DudeG에 초대합니다.',
        imageUrl: '../../styles/images/kakao-logo.png',
        link: { mobileWebUrl: roomUrl, webUrl: roomUrl },
      },
      buttons: [
        {
          title: '참여하기',
          link: { mobileWebUrl: location.href, webUrl: location.href },
        },
      ],
    });
  };

  return (
    <button className={Style.linkKakao} onClick={shareKakao}>
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
