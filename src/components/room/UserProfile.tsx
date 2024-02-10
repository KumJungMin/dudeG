'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

export default function UserProfile() {
  const { data: session } = useSession();
  return (
    <div>
      {session?.user?.email} {session?.user?.name}
      {JSON.stringify(session)}
    </div>
  );
}
