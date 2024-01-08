import { styled } from 'styled-components';

const CardWrapper = styled.div`
    margin: 0.5rem;
    border-radius: 10px;
    overflow: hidden;
    transition: 500ms transform;
    &:hover {
        transform: scale(1.05);
    }
`;

const CardImg = styled.div`
    img {
        position: relative;
    }
    span {
        position: absolute;
        top: 0.5%;
        right: 0.5%;
        background-color: rgba(0, 0, 0, 0.85);
        color: #fff;
        padding: 0.5rem;
        border-radius: 4px;
    }
`;

const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: grey;
    text-align: center;
    padding: 1rem;
    border: 0.5px solid grey;
    border-top: none;
    border-radius: 0 0 10px 10px;
    height: 120px;
    p {
        margin-bottom: 0.5rem;
    }
`;

export default function ItemCard({ item }) {
    return (
        <CardWrapper>
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
            </CardDescription>
        </CardWrapper>
    );
}
