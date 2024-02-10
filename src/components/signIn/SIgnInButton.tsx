'use client';
import { signIn } from 'next-auth/react';

export default function SignInButton(): JSX.Element {
  function onClick() {
    signIn();
  }

  return (
    <button type="button" onClick={onClick}>
      시작하기
    </button>
  );
}
