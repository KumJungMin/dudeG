import React from 'react';
import { useUserStore } from '@/src/stores/useUserStore';

import GuestListItem from './GuestListItem';
import KakaoShareButton from './KakaoShareButton';

import Style from './GuestList.module.scss';

export default function GuestList() {
  const { guests } = useUserStore();

  return (
    <div className={Style.guestList}>
      <div className={Style.container}>
        {Object.values(guests).map((guest) => (
          <GuestListItem key={guest.id} name={guest.name} image={guest.image} />
        ))}
      </div>
      <KakaoShareButton />
    </div>
  );
}
