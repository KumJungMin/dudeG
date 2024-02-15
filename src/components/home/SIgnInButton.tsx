'use client';
// import { signIn } from 'next-auth/react'; TODO: next-auth/react를 사용하여 사용자 인증하기
import { getTestData } from '@/src/lib/fetchers';
import Button from '../button/Button';

export default function SignInButton(): JSX.Element {
  async function testCall() {
    // TODO: 몽고 DB 연결하면서 signIn() 함수를 사용하여 사용자 인증하기
    const response = await getTestData();
    console.log(response);
  }
  return <Button click={() => testCall()}>꾹 눌러 시작하기</Button>;
}
