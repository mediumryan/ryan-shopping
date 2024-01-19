import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
// import state data
import { cartState } from '../../../data/cart';
import { detailItemCount, isDetailModalState } from '../../../data/detail';
// import icons
import { FaRegStar } from 'react-icons/fa';

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
        color: #ddd;
        background-color: transparent;
        border: 2px solid #ddd;
    }
`;

export default function DetailButtons({ item, discountedPrice }) {
    // handle add to cart
    const itemCount = useRecoilValue(detailItemCount);
    const [cart, setCart] = useRecoilState(cartState);
    const setIsDetailModal = useSetRecoilState(isDetailModalState);
    const addToCart = () => {
        const currentItemCount = itemCount;
        const isCartItem = cart.findIndex((a) => a.name === item.name);
        if (itemCount > 0) {
            setIsDetailModal(true);
            const closeModalTimer = setTimeout(() => {
                setIsDetailModal(false);
            }, 3000);

            if (isCartItem === -1) {
                const newItem = {
                    id: Date.now(),
                    name: item.name,
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
        } else if (itemCount < 1) {
            alert('구매할 상품의 개수를 다시 확인해 주세요.');
        }
    };

    return (
        <Buttons>
            <button className="detail_buy" onClick={addToCart}>
                장바구니에 추가
            </button>
            <button className="detail_bookmark">
                <FaRegStar />
            </button>
        </Buttons>
    );
}
