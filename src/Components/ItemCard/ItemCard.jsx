import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const CardWrapper = styled.div`
    margin: 0.5rem;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: 500ms transform;
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
    }
    span {
        position: absolute;
        top: 1%;
        right: 1%;
        font-size: 1.5rem;
        background-color: rgba(0, 0, 0, 0.85);
        color: #fff;
        padding: 1.5rem;
        border-radius: 4px;
    }
`;

const CardDescription = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: grey;
    text-align: center;
    border: 0.5px solid grey;
    border-top: none;
    border-radius: 0 0 10px 10px;
    height: 150px;
    p {
        margin-bottom: 0.5rem;
        font-size: 1.15rem;
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            font-size: 1.25rem;
        }
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        height: 100px;
    }
`;

const SaleTag = styled.div`
    position: absolute;
    top: 1%;
    left: 1%;
    background-color: red;
    color: #fff;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    border-radius: 0 0 10px 0;
`;

export default function ItemCard({ item }) {
    const navigate = useNavigate();

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
                <p style={{ fontWeight: 700 }}>{item.name}</p>
                <p
                    style={{
                        textDecoration:
                            item.discounted === null ? 'none' : 'line-through',
                        color:
                            item.discounted === null
                                ? 'grey'
                                : 'rgba(0,0,0,0.15)',
                    }}
                >
                    {item.price.toLocaleString()} KRW
                </p>
                {item.discounted !== null && (
                    <p>{item.price * item.discounted.toLocaleString()} KRW</p>
                )}
                {item.discounted !== null && <SaleTag>Sale</SaleTag>}
            </CardDescription>
        </CardWrapper>
    );
}
