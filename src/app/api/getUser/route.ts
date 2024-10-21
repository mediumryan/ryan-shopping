import { supabase } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data, error } = await supabase.from('user_table').select('*');

  if (error) {
    console.error('Error fetching data:', error);
  } else {
    return NextResponse.json(data);
  }
}
