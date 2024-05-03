import React from 'react';
import { clsx } from 'clsx';
import { Guest } from '@/types/guest';

import GuestListItem from './GuestListItem';
import KakaoShareButton from './KakaoShareButton';

import styles from './GuestList.module.scss';

interface GuestListProps {
  hasGuest?: boolean;
  guests?: Guest[];
}

export default function GuestList(props: GuestListProps) {
  const { hasGuest = false, guests = [] } = props;
  const guestListClasses = clsx(styles.guestList, {
    [styles.empty]: !hasGuest,
  });

  return (
    <div className={guestListClasses}>
      {hasGuest ? (
        <div className={styles.container}>
          {guests.map((guest) => (
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
