import { getUser } from '@/service';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = getUser();

  return NextResponse.json(data || []);
}
