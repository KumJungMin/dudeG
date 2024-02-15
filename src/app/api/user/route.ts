// API 라우트를 정의할 때는 app/api를 경로로 하되, 파일명을 route.ts로 지정해야 합니다.

import { NextResponse, NextRequest } from 'next/server';

// TODO: 몽고 DB 연결하기
export function GET(request: NextRequest): Promise<NextResponse> {
  if (request.method !== 'GET') {
    return Promise.resolve(
      NextResponse.json({ error: 'Method not allowed' }, { status: 405 }),
    );
  } else {
    return Promise.resolve(
      NextResponse.json({ message: 'Hello, World!' }, { status: 200 }),
    );
  }
}
