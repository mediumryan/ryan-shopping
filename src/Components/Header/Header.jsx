import { styled } from 'styled-components';
// import components
import HeaderLogo from './HeaderLogo';
import HeaderCategory from './HeaderCategory';
import { useEffect, useState } from 'react';

const HeaderWrapper = styled.header`
    width: 100%;
    height: 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    transition: background-color 0.3s ease;
    background-color: ${(props) =>
        props.scrollY > 50 ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
    position: ${(props) => (props.scrollY > 50 ? 'fixed' : 'relative')};
    top: 0;
    padding: 0 10rem;
    z-index: 10;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding: 0 1.5rem;
        height: 100px;
    }
`;

export default function Header() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HeaderWrapper
            scrollY={scrollY}
            style={{ paddingBottom: scrollY > 50 ? '1rem' : '0' }}
        >
            <HeaderLogo scrollY={scrollY} />
            <HeaderCategory scrollY={scrollY} />
        </HeaderWrapper>
    );
}
