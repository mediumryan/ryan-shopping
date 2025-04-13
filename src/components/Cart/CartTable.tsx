'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cartAtom } from '@/data/cart';
import { useRecoilState } from 'recoil';
import CartImagePopOver from './CartImagePopOver';
import CartItemCounter from './CartItemCounter';
import CartCheckBox from './CartCheckBox';
import { Checkbox } from '../ui/checkbox';
import { useEffect, useState } from 'react';

export default function CartTable() {
  const [cart, setCart] = useRecoilState(cartAtom);
  const [allStatus, setAllStatus] = useState(false);

  const selectAllCart = () => {
    if (!allStatus) {
      setCart((prev) => {
        return prev.map((item) => ({
          ...item,
          isChecked: true,
        }));
      });
    } else {
      setCart((prev) => {
        return prev.map((item) => ({
          ...item,
          isChecked: false,
        }));
      });
    }
  };

  useEffect(() => {
    if (cart.length > 0) {
      const allChecked = cart.every((item) => item.isChecked);
      setAllStatus(allChecked);
    } else {
      setAllStatus(false);
    }
  }, [cart]);

  return (
    <Table className="text-[10px] md:text-base">
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox
              onClick={selectAllCart}
              onCheckedChange={() => {
                setAllStatus((prev) => !prev);
              }}
              checked={allStatus}
            />
          </TableHead>
          <TableHead className="text-center">상품명</TableHead>
          <TableHead className="text-right">판매가</TableHead>
          <TableHead className="text-center">수량</TableHead>
          <TableHead>배송비</TableHead>
          <TableHead className="text-right">합계</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <TableRow key={`cart-${item.id}-${index}`}>
              <TableCell>
                <CartCheckBox item={item} />
              </TableCell>
              <TableCell className="min-w-[100px]">
                <CartImagePopOver item={item} />
              </TableCell>
              <TableCell className="min-w-[100px] text-right">
                <p>{item.price.toLocaleString()} KWR</p>
              </TableCell>
              <TableCell className="min-w-[100px] text-center">
                <CartItemCounter item={item} />
              </TableCell>
              <TableCell>FREE</TableCell>
              <TableCell className="min-w-[100px] text-right">
                {(item.price * item.count).toLocaleString()} KRW
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6}>장바구니가 비어있어요.</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
