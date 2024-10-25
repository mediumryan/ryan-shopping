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
import { UserType } from '@/app/layout';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Link from 'next/link';

export default function HeaderMenu({
  isSigned,
}: {
  isSigned: UserType | undefined;
}) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const signOut = async () => {
    const res = await fetch('/api/signOut');
    if (res.ok) {
      const result = await res.json();
      Swal.fire(result.message);
      router.push('/');
      router.refresh();
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <IoMenu className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{isSigned ? isSigned.id : 'Guest'}</SheetTitle>
        </SheetHeader>
        <div className="relative">
          <HeaderMenuSearch />
          <HeaderMenuLink setOpen={setOpen} />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <div className="flex items-center text-gray-400 cursor-pointer">
              {!isSigned ? (
                <Link href="/sign-in" onClick={() => setOpen(false)}>
                  Sign in
                </Link>
              ) : (
                <PiSignOutBold onClick={signOut} />
              )}
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
