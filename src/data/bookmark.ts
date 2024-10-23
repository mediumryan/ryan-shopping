import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export type BookmarkType = {
  id: number;
  name: string;
  price: number;
  discounted: number | string;
  size: string;
  color: string;
  image_path: string;
  count: number;
};

export const bookmarkAtom = atom<BookmarkType[]>({
  key: 'bookmark-data',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
