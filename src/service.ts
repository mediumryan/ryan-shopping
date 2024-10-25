import { supabase } from './utils/supabase/server';

export type UsersType = {
  id: number;
  name: string;
  user_id: string;
  password: string;
  created_at: string;
  pw_find_hint: string;
};

type AddUserProps = {
  name: string;
  user_id: string;
  password: string;
  find_pw_hint: string;
};

export async function getUser(): Promise<UsersType[]> {
  const { data, error } = await supabase
    .from('user_table') // 테이블명
    .select('*'); // 모든 데이터 가져오기

  if (error) {
    console.error('Error fetching user data:', error);
    throw new Error('유저리스트를 불러오지 못했습니다.');
  }
  return data as UsersType[];
}

export async function isUser(id: string): Promise<UsersType> {
  const { data, error } = await supabase
    .from('user_table')
    .select('*')
    .eq('user_id', id);

  if (error) {
    console.error('Error fetching isUser:', error);
    throw new Error('유저 정보를 불러오지 못했습니다.');
  }
  return data[0] as UsersType;
}

export async function addUser({
  name,
  user_id,
  password,
  find_pw_hint,
}: AddUserProps) {
  const { data, error } = await supabase
    .from('user_table')
    .insert([{ name, user_id, password, find_pw_hint }]);

  if (error) throw new Error('회원등록에 실패했습니다.');

  return data;
}
