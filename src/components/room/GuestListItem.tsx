import React from 'react';
import Image from 'next/image';

import styles from './GuestListItem.module.scss';

interface GuestListItemProps {
  name: string;
  image: string;
}

export default function GuestListItem({ name, image }: GuestListItemProps) {
  return (
    <div className={styles.listItem}>
      <Image
        src={image}
        alt="guest profile"
        width={40}
        height={40}
        style={{
          borderRadius: '50%',
          objectFit: 'contain',
          backgroundColor: '#D9D9D9',
        }}
      />
      <span className={styles.name}>{name}</span>
    </div>
  );
}
