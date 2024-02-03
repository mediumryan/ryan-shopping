import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const bookmarkState = atom({
    key: 'bookmark_state',
    default: [],
    effects_UNSTABLE: [persistAtom],
});
