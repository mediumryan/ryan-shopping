import React from 'react';
import { Checkbox } from '../ui/checkbox';
import { useRecoilState } from 'recoil';
import { cartAtom, CartType } from '@/data/cart';

export default function CartCheckBox({ item }: { item: CartType }) {
  const [cart, setCart] = useRecoilState(cartAtom);
  const itemIndex = cart.findIndex((c) => c.id === item.id);

  const handleCheckBox = () => {
    setCart((prev) => {
      const newCart = [...prev];
      const updatedItem = {
        ...newCart[itemIndex],
        isChecked: !newCart[itemIndex].isChecked,
      };
      newCart[itemIndex] = updatedItem;
      return newCart;
    });
  };

  return <Checkbox onCheckedChange={handleCheckBox} checked={item.isChecked} />;
}
