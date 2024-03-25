import User from '@/src/models/user.module';
import dbConnect from '@/src/lib/db';
import { NextResponse, NextRequest } from 'next/server';

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

export async function POST(req: Request) {
  await dbConnect();
  const { userId = '' } = await req.json();
  if (!userId) {
    return new NextResponse('userId is required', {
      status: 400,
    });
  } else {
    const roomId = `${userId}-${new Date().getTime()}`;
    const user = new User({ userId, roomId });
    await user.save();
    return NextResponse.json(user);
  }
}
