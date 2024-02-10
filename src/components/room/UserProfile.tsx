'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

import Style from './UserProfile.module.scss';

export default function UserProfile() {
  const { data: session } = useSession();
  return (
    <div className={Style.container}>
      <Image
        src={session?.user?.image || '/'}
        width={40}
        height={40}
        style={{ objectFit: 'cover', borderRadius: '50%' }}
        alt="user profile"
      />
      <h3 className={Style.name}>{session?.user?.name}님의 대기실</h3>
    </div>
  );
}
