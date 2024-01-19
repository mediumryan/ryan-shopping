import { atom } from 'recoil';

export const detailItemCount = atom({
    key: 'detail_item_count',
    default: 0,
});

export const isDetailModalState = atom({
    key: 'is_detail_modal_state',
    default: false,
});
