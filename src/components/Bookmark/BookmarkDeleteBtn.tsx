'use client';

import React from 'react';
import { Button } from '../ui/button';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { bookmarkAtom, checkedBookmarkAtom } from '@/data/bookmark';

export default function BookmarkDeleteBtn() {
  const [bookmark, setBookmark] = useRecoilState(bookmarkAtom);
  const checkedBookmark = useRecoilValue(checkedBookmarkAtom);

  const deleteCheckedBookmark = () => {
    setBookmark((prev) => {
      const newCart = [...prev];
      const filteredCart = newCart.filter((c) => !c.isChecked);
      return filteredCart;
    });
  };

  const deleteAllBookmark = () => {
    setBookmark([]);
  };

  return (
    <div className="w-full flex items-center justify-start gap-1">
      <Dialog>
        <DialogTrigger asChild disabled={checkedBookmark.length < 1}>
          <Button variant="outline">선택삭제</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[320px]">
          <DialogHeader>
            <DialogTitle>선택삭제</DialogTitle>
            <DialogDescription>선택된 항목을 삭제하시겠어요?</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <Button onClick={deleteCheckedBookmark}>네</Button>
              <Button className="ml-1">아뇨</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild disabled={bookmark.length < 1}>
          <Button variant="outline">전체삭제</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[320px]">
          <DialogHeader>
            <DialogTitle>전체삭제</DialogTitle>
            <DialogDescription>모든항목을 삭제하시겠어요?</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <Button onClick={deleteAllBookmark}>네</Button>
              <Button className="ml-1">아뇨</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
