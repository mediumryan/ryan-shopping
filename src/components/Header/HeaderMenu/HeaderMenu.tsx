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
import { PiSignOutBold } from 'react-icons/pi';
import HeaderMenuSearch from './HeaderMenuSearch';
import HeaderMenuLink from './HeaderMenuLink';
import { useState } from 'react';

export default function HeaderMenu({ isSigned }: { isSigned: any }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <IoMenu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Hello, Ryan!</SheetTitle>
        </SheetHeader>
        <div className="relative">
          <HeaderMenuSearch setOpen={setOpen} />
          <HeaderMenuLink />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <div className="flex items-center text-gray-400">
              {isSigned ? <span>Sign in</span> : <PiSignOutBold />}
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
