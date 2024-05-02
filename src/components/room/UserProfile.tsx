'use client';

import React from 'react';
import Image from 'next/image';
import { useUserStore } from '@/src/stores/useUserStore';

import Style from './UserProfile.module.scss';

export default function UserProfile() {
  const { user } = useUserStore();

  return (
    <div className={Style.container}>
      <Image
        src={user.image || '/'}
        width={40}
        height={40}
        style={{ objectFit: 'cover', borderRadius: '50%' }}
        alt="user profile"
      />
      <h3 className={Style.nameWrapper}>
        <span className={Style.name}>{user.name || '사용자'}</span>
        <span className={Style.text}>의 대기실</span>
      </h3>
    </div>
  );
}
