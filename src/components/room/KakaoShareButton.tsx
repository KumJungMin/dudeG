'use client';

import Image from 'next/image';

import kakaoShare from '../../lib/kakaoShare';
import Style from './KakaoShareButton.module.scss';
import kakaoLogo from '../../styles/images/kakao-logo.png';

export default function KakaoShareButton() {
  function shareKakao() {
    const roomUrl = window.location.href;

    kakaoShare({
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
  }

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
