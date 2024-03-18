'use client';
import { signIn } from 'next-auth/react';
import Button from '../button/Button';

export default function SignInButton(): JSX.Element {
  return (
    <Button
      style={{
        width: '278px',
        marginTop: '19px',
      }}
      click={() => signIn()}
    >
      꾹 눌러 시작하기
    </Button>
  );
}
