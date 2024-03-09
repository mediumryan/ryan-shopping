import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import state data
import { cartState } from '../../../data/cart';
import {
    detailBookmarkState,
    detailColorState,
    detailItemCount,
    detailSizeState,
    isBookmarkModalState,
} from '../../../data/detail';
import { bookmarkState } from '../../../data/bookmark';
// import icons
import { FaStar } from 'react-icons/fa';
// import swal custom class
import { swalCustomStyle } from '../../../helper/swalcustom';

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    & > button {
        padding: 0.5rem 0;
        font-size: 0.85rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .detail_buy {
        flex-basis: 57%;
        color: var(--accent-100);
        background-color: var(--white-100);
        border: 2px solid var(--accent-100);
        &:hover {
            border-color: var(--accent-200);
            color: var(--accent-200);
        }
    }
    .detail_bookmark {
        flex-basis: 42%;
        background-color: transparent;
        border: 2px solid var(--white-200);
        color: var(--white-200);
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding-bottom: 1rem;
    }
`;

export default function DetailButtons({ item, discountedPrice }) {
    const navigate = useNavigate();
    const [cart, setCart] = useRecoilState(cartState);
    const color = useRecoilValue(detailColorState);
    const size = useRecoilValue(detailSizeState);

    // handle add to cart
    const itemCount = useRecoilValue(detailItemCount);
    const addToCart = () => {
        const currentItemCount = itemCount;
        const isCartItem = cart.findIndex(
            (a) => a.name === item.name && a.color === color && a.size === size
        );
        if (itemCount > 0 && color && size) {
            if (isCartItem === -1) {
                const newItem = {
                    id: Date.now(),
                    name: item.name,
                    color: color,
                    size: size,
                    price: discountedPrice,
                    category: item.category,
                    image_path: item.image_path,
                    count: currentItemCount,
                    checked: false,
                };
                setCart((prev) => {
                    const newCart = [...prev];
                    newCart.push(newItem);
                    return newCart;
                });
            } else {
                setCart((prev) => {
                    const cartItemIndex = prev.findIndex(
                        (a) => a.name === item.name
                    );

                    if (cartItemIndex !== -1) {
                        const newCart = [...prev];
                        newCart[cartItemIndex] = {
                            ...newCart[cartItemIndex],
                            count:
                                newCart[cartItemIndex].count + currentItemCount,
                        };
                        return newCart;
                    }
                    return prev;
                });
            }
            Swal.fire({
                title: `${item.name}이(가) 장바구니에 추가되었습니다.`,
                showDenyButton: true,
                confirmButtonText: '장바구니',
                confirmButtonColor: '#6db96d',
                denyButtonText: `계속 쇼핑하기`,
                customClass: swalCustomStyle,
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/cart');
                } else if (result.isDenied) {
                    return;
                }
            });
        } else if (itemCount < 1 || !color || !size) {
            Swal.fire({
                icon: 'warning',
                title: '상품의 색상,사이즈,개수를 확인해주세요.',
                confirmButtonText: '<i class="fa-solid fa-check"></i>',
                confirmButtonColor: '#6db96d',
                customClass: swalCustomStyle,
            });
        } else {
            return;
        }
    };

    // handle add to bookmark
    const setIsBookmarkModal = useSetRecoilState(isBookmarkModalState);
    const [isBook, setIsBook] = useRecoilState(detailBookmarkState);
    const [bookmark, setBookmark] = useRecoilState(bookmarkState);
    const onlyAlreadyBooked = bookmark.findIndex((a) => a.name === item.name);
    const alreadyBooked = bookmark.findIndex(
        (a) =>
            a.name === item.name && item.color === color && item.size === size
    );
    const handleBookmark = () => {
        const currentItemCount = itemCount;
        const newItem = {
            id: Date.now(),
            name: item.name,
            color: color,
            size: size,
            price: discountedPrice,
            category: item.category,
            image_path: item.image_path,
            count: currentItemCount,
            checked: false,
        };
        if (itemCount > 0 && color && size) {
            setIsBook((prev) => !prev);
            setIsBookmarkModal(true);
            if (alreadyBooked === -1) {
                setBookmark((prev) => {
                    const newBookmark = [...prev];
                    newBookmark.push(newItem);
                    return newBookmark;
                });
                Swal.fire({
                    title: `${item.name}이(가) 즐겨찾기에 추가되었습니다.`,
                    showDenyButton: true,
                    confirmButtonText: 'Bookmark',
                    confirmButtonColor: '#6db96d',
                    denyButtonText: `계속 쇼핑하기`,
                    customClass: swalCustomStyle,
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/bookmark');
                    } else if (result.isDenied) {
                        return;
                    }
                });
            } else {
                setBookmark((prev) => {
                    const unBookmark = prev.filter((a) => a.name !== item.name);
                    return unBookmark;
                });
            }
        } else if (itemCount < 1 || !color || !size) {
            Swal.fire({
                icon: 'warning',
                title: '상품의 색상,사이즈,개수를 확인해주세요.',
                confirmButtonText: '<i class="fa-solid fa-check"></i>',
                confirmButtonColor: '#6db96d',
                customClass: swalCustomStyle,
            });
            return;
        } else {
            return;
        }
    };

    useEffect(() => {
        if (onlyAlreadyBooked === -1) {
            setIsBook(false);
        } else {
            setIsBook(true);
        }
    }, []);

    return (
        <Buttons>
            <button className="detail_buy" onClick={addToCart}>
                장바구니에 추가
            </button>
            <button
                className="detail_bookmark"
                onClick={handleBookmark}
                style={{
                    color: isBook ? '#b3d4b3' : '#ddd',
                    borderColor: isBook ? '#b3d4b3' : '#ddd',
                }}
            >
                <FaStar />
            </button>
        </Buttons>
    );
}
