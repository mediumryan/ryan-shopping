'use client';

import Link from 'next/link';

export default function HeaderSign() {
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      <Link href="/sign-in">Sign in</Link>
    </div>
  );
}
