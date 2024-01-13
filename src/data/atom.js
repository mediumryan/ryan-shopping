import { atom } from 'recoil';

export const isMenuModal = atom({
    key: 'is_menu_modal',
    default: false,
});

export const subMenu = atom({
    key: 'detail_sub_menu',
    default: [
        {
            id: 0,
            goTo: '.sub_related',
            value: '관련상품',
            isActive: true,
        },
        {
            id: 1,
            goTo: '.sub_detail',
            value: '상세정보',
            isActive: false,
        },
        {
            id: 2,
            goTo: '.sub_guide',
            value: '구매가이드',
            isActive: false,
        },
        {
            id: 3,
            goTo: '.sub_review',
            value: '구매후기',
            isActive: false,

            count: 0,
        },
        {
            id: 4,
            goTo: '.sub_qna',
            value: '상품문의',
            count: 0,
            isActive: false,
        },
    ],
});
