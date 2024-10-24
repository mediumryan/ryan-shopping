'use client';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import React from 'react';
import {
  bookmarkAtom,
  bookmarkTotalCountAtom,
  checkedBookmarkAtom,
} from '@/data/bookmark';
import { cartAtom } from '@/data/cart';
import { moveToCartOpenAtom } from '@/data/common';

function BookmarkMoveToCartBtn() {
  const setCart = useSetRecoilState(cartAtom);
  const setBookmark = useSetRecoilState(bookmarkAtom);
  const checkedBookmark = useRecoilValue(checkedBookmarkAtom);
  const totalCount = useRecoilValue(bookmarkTotalCountAtom);

  const [open, setOpen] = useRecoilState(moveToCartOpenAtom);

  const moveToCart = () => {
    setOpen(true);
    // bookmark -> cart
    setCart((prev) => {
      const newCart = [...prev];
      checkedBookmark.forEach((bookmarkItem) => {
        const existingItemIndex = newCart.findIndex(
          (cartItem) =>
            cartItem.name === bookmarkItem.name &&
            cartItem.color === bookmarkItem.color &&
            cartItem.size === bookmarkItem.size
        );

        if (existingItemIndex !== -1) {
          newCart[existingItemIndex].count += bookmarkItem.count;
        } else {
          newCart.push({ ...bookmarkItem, isChecked: false });
        }
      });

      return newCart; // 업데이트된 cart 반환
    });
    // checkedBookmark제거
    setBookmark((prev) => {
      const newBookmark = [...prev];
      const filteredBookmark = newBookmark.filter((b) => !b.isChecked);
      return filteredBookmark;
    });
  };

  return (
    <div className="w-full flex justify-end mt-12">
      <Dialog>
        <DialogTrigger
          className={`duration-500 origin-bottom ${
            checkedBookmark.length > 0 && totalCount > 0
              ? 'scale-100'
              : 'scale-0'
          }`}
        >
          <Button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-green-50">
            장바구니로
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[320px]">
          <DialogHeader>
            <DialogTitle>
              <span>선택된 항목</span>
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-center text-gray-400 font-bold text-lg max-h-[300px] overflow-y-scroll">
            <div className="text-sm py-8 flex flex-col gap-2 text-left">
              {checkedBookmark.map((b, index) => {
                return (
                  <div key={`bookmark-total-${b.id}-${index}`}>
                    <p>
                      <span>{b.name}</span>
                      <br />
                      <span className="text-green-700">[{b.color}]</span>
                      <span className="text-green-700 mx-2">[{b.size}]</span>
                      <span className="text-green-700">[{b.count}개]</span>
                    </p>
                  </div>
                );
              })}
              <p className="text-green-700 text-center mt-4">
                총 [{checkedBookmark.length}] 항목
              </p>
            </div>
          </DialogDescription>
          <DialogFooter className="gap-1">
            <DialogClose>
              <Button
                onClick={moveToCart}
                className="text-green-700 bg-green-50"
              >
                장바구니로 이동
              </Button>
              <Button>돌아가기</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default React.memo(BookmarkMoveToCartBtn);
