import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userInfoState = atom({
    key: 'user_info',
    default: [
        {
            id: 'ryan',
            pw: 'panda726',
        },
    ],
    effects_UNSTABLE: [persistAtom],
});
