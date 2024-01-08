import { styled } from 'styled-components';
// import components
import HeaderMenu from './HeaderMenu';
import HeaderLogo from './HeaderLogo';
import HeaderCategory from './HeaderCategory';
import { useEffect, useState } from 'react';

const HeaderWrapper = styled.header`
    width: ${(props) => (props.scrollY > 50 ? '100%' : '85%')};
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
    z-index: 999;
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
            <HeaderMenu scrollY={scrollY} />
            <HeaderLogo scrollY={scrollY} />
            <HeaderCategory scrollY={scrollY} />
        </HeaderWrapper>
    );
}
