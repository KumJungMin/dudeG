declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

export function selectFriends(token: string | null) {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  }
  if (token) {
    window.Kakao.Auth.setAccessToken(token);
    return window.Kakao.Picker.selectFriends({
      title: '친구 선택',
      maxPickableCount: 10,
      minPickableCount: 1,
    });
  }
}
