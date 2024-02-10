'use client';
import { SessionProvider } from 'next-auth/react';

// TODO: provider 폴더 위치 변경하기
interface Props {
  children: React.ReactNode;
}

export default function NextAuthSessionProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
