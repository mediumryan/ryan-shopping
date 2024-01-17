import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
// import state data
import { cartState } from '../../data/cart';
// import icons
import { FaRegStar } from 'react-icons/fa';

const DetailDescriptionWrapper = styled.div`
    flex-basis: 45%;
    display: flex;
    flex-direction: column;
    border-top: 3px solid grey;
    padding: 1rem;
    div.detail_subtitle {
        color: grey;
        font-size: 0.75rem;
        width: 33%;
    }
    .detail_item {
        padding: 1rem 0;
    }
`;

const Name = styled.div`
    margin-bottom: 2rem;
    h5 {
        font-size: 1.5rem;
    }
`;

const Price = styled.div`
    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;
    & > div {
        display: flex;
        margin: 0.75rem 0;
    }
    span.detail_price {
        font-size: 0.75rem;
    }
    div.discount {
        margin-left: 1rem;
        font-size: 0.9rem;
        background-color: red;
        color: #fff;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
    }
`;

const Color = styled.div`
    display: flex;
    align-items: center;
    ul.detail_color {
        display: flex;
        li {
            margin: 0 0.5rem;
            button {
                background-color: #eee;
                color: #bbb;
                padding: 0.25rem 0.75rem;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
        }
    }
`;

const Count = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;
    .detail_count {
        color: grey;
        font-size: 0.75rem;
    }
    & > form {
        display: flex;
        align-items: center;
        font-size: 0.85rem;
        label {
            color: #000;
            margin-right: 0.5rem;
        }
        div.count_wrapper {
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
            div.count_value {
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

const Total = styled(motion.div)`
    display: flex;
    justify-content: end;
    letter-spacing: -0.5px;
    margin-top: 2rem;
    transform-origin: left center;
`;

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

export default function DetailDescription({ item }) {
    const discount = (1 - item.discounted).toFixed(2);
    const discountedPrice = Math.round((item.price * discount) / 1000) * 1000;
    // handle item count
    const [itemCount, setItemCount] = useState(0);
    const minusCnt = (e) => {
        e.preventDefault();
        if (itemCount >= 1) {
            setItemCount((prev) => {
                return --prev;
            });
        }
        return;
    };

    const plusCnt = (e) => {
        e.preventDefault();
        setItemCount((prev) => {
            return ++prev;
        });
    };

    // reset itemCount when reloading detail page
    useEffect(() => {
        setItemCount(0);
    }, [item]);

    // handle add to cart
    const [cart, setCart] = useRecoilState(cartState);
    const addToCart = () => {
        const currentItemCount = itemCount;
        const isCartItem = cart.findIndex((a) => a.name === item.name);
        if (itemCount > 0) {
            if (isCartItem === -1) {
                const newItem = {
                    id: Date.now(),
                    name: item.name,
                    price: discountedPrice,
                    category: item.category,
                    image_path: item.image_path,
                    count: currentItemCount,
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
        }
    };

    return (
        <DetailDescriptionWrapper>
            <Name className="detail_item">
                <h5>{item.name}</h5>
            </Name>
            <Price className="detail_item">
                {item.discounted && (
                    <div>
                        <div className="detail_subtitle">소비자가</div>
                        <span
                            className="detail_price"
                            style={{
                                textDecoration: 'line-through',
                                color: '#bbb',
                            }}
                        >
                            {item.price.toLocaleString()}KRW
                        </span>
                    </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="detail_subtitle">판매가</div>
                    <span className="detail_price">
                        {item.discounted
                            ? discountedPrice.toLocaleString()
                            : item.price.toLocaleString()}
                        KRW
                    </span>
                    {item.discounted && (
                        <div className="discount">
                            {item.discounted * 100}%OFF
                        </div>
                    )}
                </div>
            </Price>
            <Color className="detail_item">
                <div className="detail_subtitle">색상</div>
                <ul className="detail_color">
                    <li>
                        <button>Black</button>
                    </li>
                    <li>
                        <button>White</button>
                    </li>
                    <li>
                        <button>Beige</button>
                    </li>
                </ul>
            </Color>
            <Count className="detail_item">
                <div className="detail_count">최소주문수량 1개 이상</div>
                <form>
                    <label>개수</label>
                    <div className="count_wrapper">
                        <button onClick={minusCnt}>-</button>
                        <div className="count_value">{itemCount}</div>
                        <button onClick={plusCnt}>+</button>
                    </div>
                </form>
            </Count>
            {itemCount !== 0 && (
                <Total
                    className="detail_item"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 0.75,
                    }}
                >
                    <span className="detail_total">
                        Total : {(discountedPrice * itemCount).toLocaleString()}
                        KRW ({itemCount}개)
                    </span>
                </Total>
            )}
            <Buttons>
                <button className="detail_buy" onClick={addToCart}>
                    장바구니에 추가
                </button>
                <button className="detail_bookmark">
                    <FaRegStar />
                </button>
            </Buttons>
        </DetailDescriptionWrapper>
    );
}
