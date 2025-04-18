// import { NextResponse } from 'next/server';

// export async function GET() {
//   const response = NextResponse.json({ message: '로그아웃 되었습니다.' });

//   response.headers.set('Set-Cookie', 'user=; Path=/; Max-Age=0; HttpOnly');

//   return response;
// }

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  cookies().delete('user'); // 내부적으로 적절한 Set-Cookie 헤더 생성
  return NextResponse.json({ message: '로그아웃 되었습니다.' });
}
