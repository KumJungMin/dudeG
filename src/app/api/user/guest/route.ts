import User from '@/src/models/user.module';
import dbConnect from '@/src/lib/db';
import { NextResponse, NextRequest } from 'next/server';

// TODO: guest 목록 가져오기
export async function GET(req: NextRequest) {
  await dbConnect();
  const userId = req.nextUrl.searchParams.get('userId');
  if (!userId) {
    return new NextResponse('userId is required', {
      status: 400,
    });
  } else {
    const user = await User.findOne({ userId }).exec();
    return NextResponse.json(user);
  }
}
// TODO: guest 목록 추가하기
export async function POST(req: Request) {
  await dbConnect();
  const { userId = '', guest = {} } = await req.json();
  if (!userId) {
    return new NextResponse('userId is required', {
      status: 400,
    });
  } else {
    // guest값을 변경하기
    const user = await User.findOneAndUpdate({ userId }).exec();
    return NextResponse.json(user);
  }
}
