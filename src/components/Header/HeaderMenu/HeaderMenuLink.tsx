import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const btnStyle = 'w-full';

export default function HeaderMenuLink() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 text-gray-400">
      <Button className={btnStyle} variant="ghost">
        <Link href="/">HOME</Link>
      </Button>
      <Button className={btnStyle} variant="ghost">
        <Link href="/">SIGN IN</Link>
      </Button>
      <Button className={btnStyle} variant="ghost">
        <Link href="/">JOIN US</Link>
      </Button>
      <Button className={btnStyle} variant="ghost">
        <Link href="/">BOOKMARK</Link>
      </Button>
      <Button className={btnStyle} variant="ghost">
        <Link href="/">CART</Link>
      </Button>
    </div>
  );
}
