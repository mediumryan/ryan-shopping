import { atom } from 'recoil';

export const moveToPageOpenAtom = atom({
  key: 'move-to-page-open',
  default: false,
});

export const moveToCartOpenAtom = atom({
  key: 'move-to-cart-open',
  default: false,
});
