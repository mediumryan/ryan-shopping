import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
// import components
import HeaderLogo from './HeaderLogo';
import HeaderCategory from './HeaderCategory';

const HeaderWrapper = styled.header`
    width: 100%;
    height: 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.9);
    transition: 300ms all;
    position: fixed;
    top: ${({ scrolled, height }) => (scrolled ? `-${height}px` : '0')};
    padding: 0 10rem;
    z-index: 10;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding: 0 1.5rem;
        height: 100px;
    }
`;

export default function Header() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [headerHeight, setHeaderHeight] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(
            (prevScrollPos > currentScrollPos &&
                prevScrollPos - currentScrollPos > headerHeight) ||
                currentScrollPos < 10
        );
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }
    }, []);

    return (
        <HeaderWrapper scrolled={!visible} height={headerHeight}>
            <HeaderLogo />
            <HeaderCategory />
        </HeaderWrapper>
    );
}
