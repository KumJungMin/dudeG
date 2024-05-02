import React from 'react';
import { useUserStore } from '@/src/stores/useUserStore';

import GuestListItem from './GuestListItem';
import KakaoShareButton from './KakaoShareButton';

import styles from './GuestList.module.scss';

export default function GuestList() {
  const { guests } = useUserStore();

  return (
    <div className={styles.guestList}>
      <div className={styles.container}>
        {Object.values(guests).map((guest) => (
          <GuestListItem key={guest.id} name={guest.name} image={guest.image} />
        ))}
      </div>
      <KakaoShareButton />
    </div>
  );
}
