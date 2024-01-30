import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
    key: 'sessionStorage',
    storage: sessionStorage,
});

export const userId = atom({
    key: 'user_id',
    default: '',
    effects_UNSTABLE: [persistAtom],
});

export const userPw = atom({
    key: 'user_pw',
    default: '',
    effects_UNSTABLE: [persistAtom],
});

export const isSignedState = atom({
    key: 'is_signed',
    default: false,
    effects_UNSTABLE: [persistAtom],
});
