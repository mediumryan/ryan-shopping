import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export type CartType = {
  id: number;
  name: string;
  price: number;
  size: string;
  color: string;
  image_path: string;
  count: number;
  isChecked: boolean;
};

export const cartAtom = atom<CartType[]>({
  key: 'cart-data',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const checkedCartAtom = selector({
  key: 'checked-cart-data',
  get: ({ get }) => {
    const cartData = get(cartAtom);
    const checkedData = cartData.filter((c) => c.isChecked);
    return checkedData;
  },
});

export const cartTotalCountAtom = selector({
  key: 'cart-total-count',
  get: ({ get }) => {
    const checkedData = get(checkedCartAtom);
    return checkedData.reduce((total, item) => total + item.count, 0);
  },
});

export const cartTotalPriceAtom = selector({
  key: 'cart-total-price',
  get: ({ get }) => {
    const checkedData = get(checkedCartAtom);
    const totalPrice = checkedData.reduce((total, item) => {
      return total + item.price * item.count;
    }, 0);
    return totalPrice;
  },
});
