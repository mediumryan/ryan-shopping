import { styled } from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
// import state data
import { cartModalState, cartState } from '../data/cart';
import { PageTitle, PageWrapper } from './Mans';
import CartItem from '../Components/Cart/CartItem';
import { useState } from 'react';
import CartTotal from '../Components/Cart/CartTotal';
import CartDelete from '../Components/Cart/CartDelete';
import CartDeleteModal from '../Components/Cart/CartDeleteModal';

const CartInner = styled.div`
    width: 100%;
    padding: 1rem 5rem;
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }
    th,
    td {
        padding: 8px;
        text-align: center;
        vertical-align: middle;
    }
    th {
        background-color: #ddd;
    }
    tr {
        border-bottom: 1px solid #ddd;
    }
    .cartImage {
        width: 100%;
        max-width: 80px;
        height: auto;
    }
    // count form style
    form {
        display: flex;
        align-items: center;
        justify-content: center;
        div.cartCount {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 75px;
            height: 30px;
            border: 1px solid #ddd;
            & > svg {
                flex-basis: 25%;
                border: none;
                color: #b3d4b3;
                cursor: pointer;
                transition: 300ms color;
                &:hover {
                    color: green;
                }
            }
            div.countValue {
                flex-basis: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: grey;
                font-size: 0.9rem;
                user-select: none;
                width: 15px;
                text-align: center;
                border-left: 1px solid #ddd;
                border-right: 1px solid #ddd;
            }
        }
    }
`;

const CartPay = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    & > button {
        border: 2px solid #b3d4b3;
        color: #b3d4b3;
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        background: none;
        font-size: 1.05rem;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
        transition: 300ms all;
        &:hover {
            color: green;
            border-color: green;
        }
    }
`;

export default function Cart() {
    const [cart, setCart] = useRecoilState(cartState);
    const [allCheckState, setAllCheckState] = useState(false);
    const cartModal = useRecoilValue(cartModalState);

    // handle all check
    const toggleAllCheck = () => {
        setAllCheckState(!allCheckState);
        if (allCheckState) {
            setCart((prev) => {
                const newCart = prev.map((item) => {
                    return { ...item, checked: false };
                });
                return newCart;
            });
        } else if (!allCheckState) {
            setCart((prev) => {
                const newCart = prev.map((item) => {
                    return { ...item, checked: true };
                });
                return newCart;
            });
        }
    };

    return (
        <PageWrapper>
            <PageTitle>My Cart</PageTitle>
            <CartInner>
                <table>
                    <colgroup>
                        <col width="27px" />
                        <col width="92px" />
                        <col width="auto" />
                        <col width="92px" />
                        <col width="120px" />
                        <col width="92px" />
                        <col width="160px" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    name="checkAll"
                                    id="checkAll"
                                    checked={allCheckState}
                                    onChange={toggleAllCheck}
                                />
                            </th>
                            <th>이미지</th>
                            <th>상품정보</th>
                            <th>판매가</th>
                            <th>수량</th>
                            <th>배송비</th>
                            <th>합계</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => {
                            return (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    index={index}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </CartInner>
            <CartDelete />
            <CartTotal />
            <CartPay>
                <button>결제하기</button>
            </CartPay>
            {cartModal && <CartDeleteModal />}
        </PageWrapper>
    );
}
