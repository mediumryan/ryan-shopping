import { getUser } from '@/service';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { id, pw_key } = await req.json();

  try {
    // 유저 데이터 불러오기
    const userList = await getUser();
    // 아이디 입력값과 일치하는 유저 정보 찾기
    const isUser = userList.find((u) => u.user_id === id);
    // // 일치하는 정보가 없다면 - 메시지 반환
    if (!isUser) {
      return NextResponse.json({
        status: 'id',
        message: '등록되어있지 않은 ID입니다.',
      });
    }
    // 변수화한 유저정보의 pw_key와 입력한 pw_key의 값이 일치하는지 확인
    // // 일치한다면 - 해당 유저의 password값 리턴
    if (isUser.find_pw_hint === pw_key) {
      return NextResponse.json({
        status: 'ok',
        message: `비밀번호는 [${isUser.password}] 입니다.`,
      });
    }
    // // 일치하지 않는다면 - 메시지 반환
    else {
      return NextResponse.json({
        status: 'pw_key',
        message: '잘못된 PW Key 값입니다.',
      });
    }
  } catch (err: any) {
    throw new Error('비밀번호 찾기에 실패했습니다. 다시 한번 시도해주세요.');
  }
}
