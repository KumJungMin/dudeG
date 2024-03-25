declare global {
  interface Window {
    Kakao: any;
  }
}

interface KakaoShareRequestMessage {
  objectType: string;
  content: {
    title: string;
    description: string;
    imageUrl?: string;
    link: { mobileWebUrl: string; webUrl: string };
  };
  buttons: { title: string; link: { mobileWebUrl: string; webUrl: string } }[];
}

export default function kakaoShare(requestMessage: KakaoShareRequestMessage) {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  }

  window.Kakao.Share.sendDefault(requestMessage);
}
