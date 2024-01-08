import { styled } from 'styled-components';
// import components
import HeaderMenu from './HeaderMenu';
import HeaderLogo from './HeaderLogo';
import HeaderCategory from './HeaderCategory';

const HeaderWrapper = styled.header`
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderMenu />
            <HeaderLogo />
            <HeaderCategory />
        </HeaderWrapper>
    );
}
