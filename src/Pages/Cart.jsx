import { styled } from 'styled-components';
import { PageTitle, PageWrapper } from './Mans';
import { useRecoilState } from 'recoil';
import { cartState } from '../data/cart';

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
        font-size: 0.85rem;
        div.cartCount {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 75px;
            height: 25px;
            border: 1px solid #ddd;
            button {
                flex-basis: 25%;
                height: 100%;
                font-size: 1rem;
                border: none;
                background: #eee;
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
                cursor: default;
                width: 15px;
                text-align: center;
                border-left: 1px solid #ddd;
                border-right: 1px solid #ddd;
            }
        }
    }
`;

export default function Cart() {
    const [cart, setCart] = useRecoilState(cartState);

    // handle cart item count
    const minusCnt = (item, index) => {
        if (item.count >= 1) {
            setCart((prev) => {
                const newCart = [...prev];
                newCart[index] = {
                    ...newCart[index],
                    count: newCart[index].count - 1,
                };
                return newCart;
            });
        }
        return;
    };

    const plusCnt = (item, index) => {
        setCart((prev) => {
            const newCart = [...prev];
            newCart[index] = {
                ...newCart[index],
                count: newCart[index].count + 1,
            };
            return newCart;
        });
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
                        <col width="92px" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    name="checkAll"
                                    id="checkAll"
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
                                <tr key={item.id}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            name="checkItem"
                                            id="checkItem"
                                        />
                                    </td>
                                    <td>
                                        <img
                                            className="cartImage"
                                            src={item.image_path}
                                            alt={item.name}
                                        />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.price.toLocaleString()}KRW</td>
                                    <td>
                                        <form>
                                            <div className="cartCount">
                                                <button
                                                    onClick={() =>
                                                        minusCnt(item, index)
                                                    }
                                                >
                                                    -
                                                </button>
                                                <div className="countValue">
                                                    {item.count}
                                                </div>
                                                <button
                                                    onClick={() =>
                                                        plusCnt(item, index)
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </form>
                                    </td>
                                    <td>Free</td>
                                    <td>
                                        {(
                                            item.price * item.count
                                        ).toLocaleString()}
                                        KRW
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </CartInner>
        </PageWrapper>
    );
}
