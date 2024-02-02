import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const CardWrapper = styled.div`
    margin: 1rem;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    cursor: pointer;
    transition: 300ms transform;
    &:hover {
        transform: scale(1.05);
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin-bottom: 2rem;
    }
`;

const CardImg = styled.div`
    position: relative;
    img {
        width: 100%;
        height: 250px;
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            height: 150px;
        }
    }
    span {
        position: absolute;
        top: 1%;
        right: 1%;
        font-size: 1.05rem;
        background-color: rgba(0, 0, 0, 0.75);
        color: var(--white-100);
        padding: 0.75rem 1rem;
        border-radius: 4px;
    }
`;

const CardDescription = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--black-200);
    text-align: center;
    border-radius: 0 0 10px 10px;
    height: 125px;
    p {
        margin-bottom: 0.5rem;
        font-weight: 700;
        font-size: 0.85rem;
        line-height: 1.5;
        letter-spacing: 1px;
        padding: 0 1rem;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        height: 100px;
    }
`;

export default function ItemCard({ item }) {
    const navigate = useNavigate();

    const discount = (1 - item.discounted).toFixed(2);
    const discountedPrice = Math.round((item.price * discount) / 1000) * 1000;

    return (
        <CardWrapper
            onClick={() => {
                navigate(`/detail/${item.name}`);
            }}
        >
            <CardImg>
                <img src={item.image_path} alt={item.name} />
                {item.discounted !== null && (
                    <span>{item.discounted * 100}%</span>
                )}
            </CardImg>
            <CardDescription>
                <p>{item.name}</p>
                <p
                    style={{
                        textDecoration:
                            item.discounted === null ? 'none' : 'line-through',
                        color: item.discounted === null ? 'green' : '#eee',
                    }}
                >
                    {item.price.toLocaleString()} KRW
                </p>
                {item.discounted !== null && (
                    <p style={{ color: 'green' }}>
                        {discountedPrice.toLocaleString()}
                        KRW
                    </p>
                )}
            </CardDescription>
        </CardWrapper>
    );
}
