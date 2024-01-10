import { styled } from 'styled-components';
// import icons
import { FaGripLines, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderLogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    color: grey;
    top: 0;
`;

const Logo = styled.div`
    a {
        font-size: 2rem;
        text-decoration: none;
        color: grey;
    }
`;

export default function HeaderLogo({ scrollY }) {
    return (
        <HeaderLogoWrapper
            style={{ paddingBottom: scrollY > 50 ? '0' : '1rem' }}
        >
            <FaGripLines />
            <Logo>
                <Link to="/">Ryan Mall</Link>
            </Logo>
            <FaSearch />
        </HeaderLogoWrapper>
    );
}
