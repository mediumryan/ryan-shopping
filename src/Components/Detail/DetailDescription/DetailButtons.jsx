import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { useEffect } from 'react';
// import state data
import { cartState } from '../../../data/cart';
import {
    detailBookmarkState,
    detailColorState,
    detailItemCount,
    detailSizeState,
    isBookmarkModalState,
    isDetailModalState,
} from '../../../data/detail';
import { bookmarkState } from '../../../data/bookmark';
// import icons
import { FaStar } from 'react-icons/fa';

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    user-select: none;
    & > button {
        padding: 0.5rem 0;
        font-size: 0.85rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .detail_buy {
        flex-basis: 57%;
        color: #b3d4b3;
        background-color: #e6f3e6;
        border: 2px solid #b3d4b3;
        &:hover {
            border-color: green;
            color: green;
        }
    }
    .detail_bookmark {
        flex-basis: 42%;
        background-color: transparent;
        border: 2px solid #ddd;
        color: #ddd;
    }
`;

export default function DetailButtons({ item, discountedPrice }) {
    const [cart, setCart] = useRecoilState(cartState);
    const setIsDetailModal = useSetRecoilState(isDetailModalState);
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
            setIsDetailModal(true);
            const closeModalTimer = setTimeout(() => {
                setIsDetailModal(false);
            }, 3000);

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
            return () => {
                return clearTimeout(closeModalTimer);
            };
        } else if (itemCount < 1 || !color || !size) {
            alert('상품의 색상 혹은 구매할 상품의 개수 다시 확인해 주세요.');
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
            const closeModalTimer = setTimeout(() => {
                setIsBookmarkModal(false);
            }, 3000);
            if (alreadyBooked === -1) {
                setBookmark((prev) => {
                    const newBookmark = [...prev];
                    newBookmark.push(newItem);
                    return newBookmark;
                });
            } else {
                setBookmark((prev) => {
                    const unBookmark = prev.filter((a) => a.name !== item.name);
                    return unBookmark;
                });
            }
            return () => {
                return clearTimeout(closeModalTimer);
            };
        } else if (itemCount < 1 || !color || !size) {
            alert('상품의 색상 혹은 구매할 상품의 개수 다시 확인해 주세요.');
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
