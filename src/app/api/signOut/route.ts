import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.json({ message: '로그아웃 되었습니다.' });

  response.headers.set('Set-Cookie', 'user=; Path=/; Max-Age=0; HttpOnly');

  return response;
}
