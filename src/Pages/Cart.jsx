import { styled } from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import Swal from 'sweetalert2';
// import state data
import { cartState } from '../data/cart';
import { PageTitle, PageWrapper } from './Mans';
import CartItem from '../Components/Cart/CartItem';
import { useEffect, useState } from 'react';
import CartTotal from '../Components/Cart/CartTotal';
import CartDelete from '../Components/Cart/CartDelete';
import { isSignedState, userId } from '../data/signIn';
import { useNavigate } from 'react-router-dom';
// import swal custom class
import { swalCustomStyle } from '../helper/swalcustom';

export const CartInner = styled.div`
    width: 100%;
    padding: 1rem 5rem;
    max-height: 60vh;
    overflow-y: scroll;
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        colgroup {
            &:nth-child(1) {
                width: 27px;
                @media only screen and (min-width: 320px) and (max-width: 768px) {
                    width: auto;
                }
            }
            &:nth-child(2) {
                width: 92px;
                @media only screen and (min-width: 320px) and (max-width: 768px) {
                    width: auto;
                }
            }
            &:nth-child(3) {
                width: auto;
            }
            &:nth-child(4) {
                width: 92px;
                @media only screen and (min-width: 320px) and (max-width: 768px) {
                    width: auto;
                }
            }
            &:nth-child(5) {
                width: 120px;
                @media only screen and (min-width: 320px) and (max-width: 768px) {
                    width: auto;
                }
            }
            &:nth-child(6) {
                width: 92px;
                @media only screen and (min-width: 320px) and (max-width: 768px) {
                    width: auto;
                }
            }
            &:nth-child(7) {
                width: 160px;
                @media only screen and (min-width: 320px) and (max-width: 768px) {
                    width: auto;
                }
            }
        }
    }
    th,
    td {
        padding: 8px;
        text-align: center;
        vertical-align: middle;
        & > p {
            line-height: 1.2;
        }
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            padding: 2px;
        }
    }
    th {
        background-color: var(--white-200);
    }
    tr {
        border-bottom: 1px solid var(--white-200);
    }
    .cartImage {
        width: 100%;
        max-width: 75px;
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
            border: 1px solid var(--white-200);
            & > svg {
                flex-basis: 25%;
                border: none;
                color: var(--accent-200);
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
                border-left: 1px solid var(--white-200);
                border-right: 1px solid var(--white-200);
                @media only screen and (min-width: 320px) and (max-width: 768px) {
                    font-size: 0.75rem;
                }
            }
            @media only screen and (min-width: 320px) and (max-width: 768px) {
                width: 50px;
                height: 20px;
            }
        }
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding: 0.5rem;
        font-size: 0.6rem;
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
    const id = useRecoilValue(userId);
    const isSigned = useRecoilValue(isSignedState);

    // check user log in
    const navigate = useNavigate();
    useEffect(() => {
        if (!isSigned) {
            Swal.fire({
                title: '로그인이 필요합니다',
                showDenyButton: true,
                confirmButtonText: '로그인 페이지로',
                confirmButtonColor: '#6db96d',
                denyButtonText: `뒤로가기`,
                customClass: swalCustomStyle,
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/sign-in');
                } else if (result.isDenied) {
                    navigate(-1);
                }
            });
        }
    }, []);

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

    // sort items
    const sortedData = [...cart].sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });

    return (
        <PageWrapper>
            <PageTitle>{id ? id : 'guest'}'s Cart</PageTitle>
            <CartInner>
                <table>
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
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
                        {sortedData.map((item, index) => {
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
        </PageWrapper>
    );
}
