import { styled } from 'styled-components';

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

const Minimum = styled.div`
    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;
    .detail_min {
        color: grey;
        font-size: 0.75rem;
    }
`;

const Total = styled.div`
    display: flex;
    justify-content: end;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
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
        &:hover {
            border-color: grey;
            color: grey;
        }
    }
`;

export default function DetailDescription({ item }) {
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
                            ? (item.price * item.discounted).toLocaleString()
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
            <Minimum className="detail_item">
                <div className="detail_min">최소주문수량 1개 이상</div>
            </Minimum>
            <Total className="detail_item">
                <span className="detail_total">Total : 0KRW (0개)</span>
            </Total>
            <Buttons>
                <button className="detail_buy">구매하기</button>
                <button className="detail_bookmark">관심상품</button>
            </Buttons>
        </DetailDescriptionWrapper>
    );
}
