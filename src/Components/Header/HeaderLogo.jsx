import { styled } from 'styled-components';
// import icons
import { FaGripLines, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isMenuModal } from '../../data/atom';

const HeaderLogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: grey;
    top: 0;
    margin-top: 1rem;
`;

const Logo = styled.div`
    a {
        font-size: 2rem;
        text-decoration: none;
        color: grey;
    }
`;

export default function HeaderLogo({ scrollY }) {
    const [isModal, setIsModal] = useRecoilState(isMenuModal);

    const toggleModal = () => {
        setIsModal((prev) => {
            return !prev;
        });
    };

    return (
        <HeaderLogoWrapper
            style={{ paddingBottom: scrollY > 50 ? '0' : '1rem' }}
        >
            <FaGripLines
                onClick={toggleModal}
                style={{
                    cursor: 'pointer',
                    color: isModal ? 'green' : 'grey',
                    transition: '300ms',
                }}
            />
            <Logo>
                <Link to="/">Ryan Mall</Link>
            </Logo>
            <FaSearch />
        </HeaderLogoWrapper>
    );
}
