import { styled } from 'styled-components';

const Price = styled.div`
    border-top: 2px solid #eee;
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
export default function DetailPrice({ item, discountedPrice }) {
    return (
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
                    <div className="discount">{item.discounted * 100}%OFF</div>
                )}
            </div>
        </Price>
    );
}
