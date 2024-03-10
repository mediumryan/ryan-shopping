import { keyframes, styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NFOuter = styled.div`
    width: 100%;
    height: 100vh;
`;

const NFInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const NFAnimation = keyframes`
    0% {
        transform: scale(1.15);
    }
    50% {
        transform: scale(.75);
    }
    100% {
        transform: scale(1.15);
    }
`;

const NotFoundText = styled.p`
    margin: 15rem 0 5rem 0;
    font-size: 2rem;
    font-style: italic;
    animation: ${NFAnimation} 3s linear infinite;
`;

const NotFoundButton = styled.button`
    cursor: pointer;
    font-size: 1.25rem;
    border: none;
    outline: none;
    border-radius: 20px;
    background-color: var(--accent-100);
    color: var(--accent-300);
    padding: 1rem 2.5rem;
    transition: 300ms all;
    &:hover {
        opacity: 0.75;
        transform: scale(1.05);
    }
`;

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <NFOuter>
            <NFInner>
                <NotFoundText>Page Not Found</NotFoundText>
                <NotFoundButton
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    Go Home
                </NotFoundButton>
            </NFInner>
        </NFOuter>
    );
}
