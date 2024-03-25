/**
 * next.js에서 route.ts파일은 API 라우트를 정의합니다.
 * ex) app/dashboard/[team]/route.ts에 선언하면, API 주소는 /dashboard/[team]이 됩니다.
 */

import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

/**
 * NextAuth를 사용하여 사용자를 인증합니다.
 */
export const auth = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    // session은 사용자의 정보를 저장하는 객체입니다.
    // session을 생성할 때, 사용자의 id를 session.user.id에 저장합니다.
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
    // jwt는 사용자의 정보를 저장하는 토큰입니다.
    // jwt를 생성할 때, 사용자의 id를 token.sub에 저장합니다.
    jwt: async ({ user, token }) => {
      if (user) token.sub = user.id;
      return token;
    },
    // redirect는 사용자가 로그인을 성공하면, room 페이지로 이동합니다.
    redirect: ({ baseUrl }: { baseUrl: string }) => {
      return `${baseUrl}/room`;
    },
  },
};
const handler = NextAuth(auth);

export { handler as GET, handler as POST };
