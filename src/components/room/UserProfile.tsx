'use client';

import React from 'react';
import Image from 'next/image';
import { useUserStore } from '@/stores/useUserStore';

import styles from './UserProfile.module.scss';

export default function UserProfile() {
  const { user } = useUserStore();

  return (
    <div className={styles.container}>
      <Image
        src={user.image || '/'}
        width={40}
        height={40}
        style={{ objectFit: 'cover', borderRadius: '50%' }}
        alt="user profile"
      />
      <h3 className={styles.nameWrapper}>
        <span className={styles.name}>{user.name || '사용자'}</span>
        <span className={styles.text}>의 대기실</span>
      </h3>
    </div>
  );
}
