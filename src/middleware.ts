import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const user = req.cookies.get('user')?.value;

  if (!user) {
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }
  return res;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sign-in|sign-up|find-pw|).*)',
  ],
};
