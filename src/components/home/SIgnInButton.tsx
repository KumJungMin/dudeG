'use client';
import { signIn } from 'next-auth/react'; // TODO: next-auth/react를 사용하여 사용자 인증하기
import Button from '../button/Button';

export default function SignInButton(): JSX.Element {
  return <Button click={() => signIn()}>꾹 눌러 시작하기</Button>;
}
