'use client';

import { IoMenu } from 'react-icons/io5';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import HeaderMenuSearch from './HeaderMenuSearch';
import HeaderMenuLink from './HeaderMenuLink';
import { useState } from 'react';
import Link from 'next/link';

export default function HeaderMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <IoMenu className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Guest</SheetTitle>
        </SheetHeader>
        <div className="relative">
          <HeaderMenuSearch setOpen={setOpen} />
          <HeaderMenuLink setOpen={setOpen} />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <div className="flex items-center text-gray-400 cursor-pointer">
              <Link href="/sign-in" onClick={() => setOpen(false)}>
                Sign in
              </Link>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
