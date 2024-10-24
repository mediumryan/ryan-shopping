import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export type BookmarkType = {
  id: number;
  name: string;
  price: number;
  size: string;
  color: string;
  image_path: string;
  count: number;
  isChecked: boolean;
};

export const bookmarkAtom = atom<BookmarkType[]>({
  key: 'bookmark-data',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const checkedBookmarkAtom = selector({
  key: 'checked-bookmark-data',
  get: ({ get }) => {
    const bookmarkData = get(bookmarkAtom);
    const checkedData = bookmarkData.filter((c) => c.isChecked);
    return checkedData;
  },
});

export const bookmarkTotalCountAtom = selector({
  key: 'bookmark-total-count',
  get: ({ get }) => {
    const checkedData = get(checkedBookmarkAtom);
    return checkedData.reduce((total, item) => total + item.count, 0);
  },
});

export const bookmarkTotalPriceAtom = selector({
  key: 'bookmark-total-price',
  get: ({ get }) => {
    const checkedData = get(checkedBookmarkAtom);
    const totalPrice = checkedData.reduce((total, item) => {
      return total + item.price * item.count;
    }, 0);
    return totalPrice;
  },
});
