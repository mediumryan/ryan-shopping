'use client';

import { useRecoilValue } from 'recoil';
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
import {
  cartTotalCountAtom,
  cartTotalPriceAtom,
  checkedCartAtom,
} from '@/data/cart';
import React from 'react';

function CartPurchaseBtn() {
  const checkedCart = useRecoilValue(checkedCartAtom);
  const totalCount = useRecoilValue(cartTotalCountAtom);
  const totalPrice = useRecoilValue(cartTotalPriceAtom);

  return (
    <div className="w-full flex justify-end mt-12">
      <Dialog>
        <DialogTrigger
          className={`duration-500 origin-bottom ${
            checkedCart.length > 0 && totalCount > 0 ? 'scale-100' : 'scale-0'
          }`}
        >
          <Button className="bg-green-50 text-green-700 hover:bg-green-700 hover:text-green-50">
            결제하기
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[320px]">
          <DialogHeader>
            <DialogTitle>
              <span>결제를 진행하시겠어요?</span>
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-center text-green-700 font-bold text-lg">
            <span>결제 금액 : {totalPrice.toLocaleString()}KRW</span>
          </DialogDescription>
          <DialogFooter className="gap-1">
            <DialogClose>
              <Button className="text-green-700 bg-green-50">결제</Button>
              <Button>돌아가기</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default React.memo(CartPurchaseBtn);
