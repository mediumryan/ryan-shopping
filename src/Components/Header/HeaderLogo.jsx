import { styled } from 'styled-components';
// import icons
import { FaGripLines, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderLogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 0;
    color: grey;
    top: 0;
`;

const ToggleBtn = styled.div``;

const Logo = styled.div`
    a {
        font-size: 2rem;
        text-decoration: none;
        color: grey;
    }
`;

const FindBtn = styled.div``;

export default function HeaderLogo({ scrollY }) {
    return (
        <HeaderLogoWrapper
            style={{ paddingBottom: scrollY > 50 ? '0' : '1rem' }}
        >
            <ToggleBtn>
                <FaGripLines />
            </ToggleBtn>
            <Logo>
                <Link to="/">Ryan Mall</Link>
            </Logo>
            <FindBtn>
                <FaSearch />
            </FindBtn>
        </HeaderLogoWrapper>
    );
}
