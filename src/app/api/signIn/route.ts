import { isUser } from '@/service';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const params = await req.json();

  const id = params.id;
  const pw = params.pw;

  try {
    const isValidUser = await isUser(id);

    if (isValidUser.password === pw) {
      // 쿠키 설정과 JSON 응답 함께 반환
      const response = NextResponse.json({
        status: 'ok',
        message: `안녕하세요, ${isValidUser.user_id}!`,
        user_id: isValidUser.user_id,
        name: isValidUser.name,
      });

      // 쿠키 설정
      response.headers.set(
        'Set-Cookie',
        `user=${JSON.stringify({
          id: isValidUser.user_id,
          name: isValidUser.name,
        })}; Path=/; HttpOnly; Max-Age=3600`
      );

      return response;
    } else {
      return NextResponse.json(
        { status: 'ng', message: '비밀번호가 일치하지 않습니다' },
        { status: 401 }
      );
    }
  } catch (err: any) {
    return NextResponse.json(
      { message: '잘못된 아이디 혹은 비밀번호입니다.' },
      { status: 500 }
    );
  }
}
