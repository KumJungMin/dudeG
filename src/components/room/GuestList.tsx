import React from 'react';
import { clsx } from 'clsx';

import GuestListItem from './GuestListItem';
import KakaoShareButton from './KakaoShareButton';
import { useUserStore } from '@/stores/useUserStore';

import styles from './GuestList.module.scss';

export default function GuestList() {
  const { guests } = useUserStore();

  const guestListClasses = clsx(styles.guestList, {
    [styles.empty]: !Object.keys(guests).length,
  });

  return (
    <div className={guestListClasses}>
      {Object.keys(guests).length > 0 ? (
        <div className={styles.container}>
          {Object.values(guests).map((guest) => (
            <GuestListItem
              key={guest.id}
              name={guest.name}
              image={guest.image}
            />
          ))}
        </div>
      ) : (
        <p className={styles.emptyText}>아직 방에 초대된 사람이 없어요</p>
      )}

      <KakaoShareButton />
    </div>
  );
}
