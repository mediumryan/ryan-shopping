'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { moveToCartOpenAtom } from '@/data/common';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export default function MoveToCart() {
  const [open, setOpen] = useRecoilState(moveToCartOpenAtom);

  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[320px]">
        <DialogHeader>
          <DialogTitle>장바구니 페이지로 이동</DialogTitle>
          <DialogDescription>
            장바구니 페이지로 이동하시겠어요?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Link href="/cart">
              <Button>이동</Button>
            </Link>
            <Button className="ml-1">아뇨</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
