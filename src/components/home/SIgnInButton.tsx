'use client';
import { signIn } from 'next-auth/react';
import styles from './SignInButton.module.scss';
import Button from '@/components/ui/button/Button';

export default function SignInButton(): JSX.Element {
  return (
    <Button
      className={styles.signInButton}
      onClick={() => signIn('kakao', { callbackUrl: '/room', redirect: true })}
    >
      꾹 눌러 시작하기
    </Button>
  );
}
