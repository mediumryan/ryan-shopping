import { atom } from 'recoil';

export const detailItemCount = atom({
    key: 'detail_item_count',
    default: 0,
});

export const detailColorState = atom({
    key: 'detail_color_state',
    default: '',
});

export const detailSizeState = atom({
    key: 'detail_size_state',
    default: '',
});

export const isBookmarkModalState = atom({
    key: 'is_bookmark_modal_state',
    default: false,
});

export const detailBookmarkState = atom({
    key: 'detail_bookmark_state',
    default: false,
});
