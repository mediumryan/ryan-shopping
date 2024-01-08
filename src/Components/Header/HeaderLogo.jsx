import { styled } from 'styled-components';
// import icons
import { FaGripLines, FaSearch } from 'react-icons/fa';

const HeaderLogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 0;
    color: grey;
`;

const ToggleBtn = styled.div``;

const Logo = styled.div`
    font-size: 2rem;
`;

const FindBtn = styled.div``;

export default function HeaderLogo() {
    return (
        <HeaderLogoWrapper>
            <ToggleBtn>
                <FaGripLines />
            </ToggleBtn>
            <Logo>Ryan Mall</Logo>
            <FindBtn>
                <FaSearch />
            </FindBtn>
        </HeaderLogoWrapper>
    );
}
