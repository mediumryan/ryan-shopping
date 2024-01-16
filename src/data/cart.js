import { atom } from 'recoil';

export const cartState = atom({
    key: 'cart_item_state',
    default: [],
});
