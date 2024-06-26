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
      // Tip: KakaoProvider의 scope는 사용자의 정보를 가져오는 권한을 설정
      authorization:
        'https://kauth.kakao.com/oauth/authorize?scope=friends,profile_image,talk_message,profile_nickname',
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
        token: token.accessToken,
      },
    }),
    // jwt는 사용자의 정보를 저장하는 토큰입니다.
    // jwt를 생성할 때, 사용자의 id를 token.sub에 저장합니다.
    jwt: async ({ user, token, account }) => {
      if (user) token.sub = user.id;
      if (account && account.access_token) {
        // set access_token to the token payload
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};

const handler = NextAuth(auth);

export { handler as GET, handler as POST };
