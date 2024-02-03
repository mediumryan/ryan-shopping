import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const cartState = atom({
    key: 'cart_item_state',
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const selectedCartCountState = selector({
    key: 'selected_cart_item_count',
    get: ({ get }) => {
        const allCart = get(cartState);
        const checkedCart = allCart.filter((a) => a.checked);
        const totalCount = checkedCart.reduce(
            (count, item) => count + item.count,
            0
        );
        return totalCount;
    },
});

export const selectedCartPriceState = selector({
    key: 'selected_cart_item_price',
    get: ({ get }) => {
        const allCart = get(cartState);
        const checkedCart = allCart.filter((a) => a.checked);
        const totalPrice = checkedCart.reduce(
            (price, item) => price + item.price * item.count,
            0
        );
        return totalPrice;
    },
});
