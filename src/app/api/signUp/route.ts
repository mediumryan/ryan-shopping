import { addUser, getUser } from '@/service';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, id, pw, pw_key } = await req.json();

  try {
    // 유저 정보 DB에서 읽어오기
    const userList = await getUser();
    // 입력한 값과 대조하기 (아이디 중복 확인)
    if (userList.find((u) => u.user_id === id)) {
      // // 중복된다면 메시지 반환
      return NextResponse.json({
        status: 'ng',
        message: 'ID가 이미 존재합니다.',
      });
    }
    // // 중복되지 않는다면 다음으로
    else {
      const response = NextResponse.json({
        status: 'ok',
        message: `반갑습니다. ${id}!`,
      });
      // DB의 user_table에 입력값 insert하기
      addUser({ name: name, user_id: id, password: pw, find_pw_hint: pw_key });

      response.headers.set(
        'Set-Cookie',
        `user=${JSON.stringify({
          id: id,
          name: name,
        })}; Path=/; HttpOnly; Max-Age=3600`
      );

      return response;
    }
  } catch (err: any) {
    throw new Error('회원가입에 실패했습니다.');
  }
}
