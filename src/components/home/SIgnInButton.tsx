'use client';
import { signIn } from 'next-auth/react';
import Button from '@/src/components/ui/button/Button';

export default function SignInButton(): JSX.Element {
  return (
    <Button
      style={{
        width: '278px',
        marginTop: '19px',
      }}
      click={() => signIn('kakao', { callbackUrl: '/room', redirect: true })}
    >
      꾹 눌러 시작하기
    </Button>
  );
}
