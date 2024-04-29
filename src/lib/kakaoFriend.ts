declare global {
  interface Window {
    Kakao: any;
  }
}

export default function selectFriends(token: string | null) {
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
