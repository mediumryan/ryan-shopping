import { styled } from 'styled-components';
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
    background-color: rgb(255, 255, 255);
    transition: background-color 0.3s ease;
    position: fixed;
    top: 0;
    padding: 0 10rem;
    z-index: 10;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding: 0 1.5rem;
        height: 100px;
    }
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderLogo />
            <HeaderCategory />
        </HeaderWrapper>
    );
}
