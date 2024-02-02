import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
// import icons
import { FaGripLines } from 'react-icons/fa';
// import state data
import { isMenuModal } from '../../data/atom';

const HeaderLogoWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: var(--black-200);
    top: 0;
    margin-top: 1rem;
`;

const MenuToggle = styled(FaGripLines)`
    position: absolute;
    left: 0;
    margin-left: 1rem;
    cursor: pointer;
    transition: 300ms all;
`;

const Logo = styled.div`
    a {
        font-size: 2rem;
        text-decoration: none;
        color: var(--black-200);
    }
`;

export default function HeaderLogo() {
    const [isModal, setIsModal] = useRecoilState(isMenuModal);

    const toggleModal = () => {
        setIsModal((prev) => {
            return !prev;
        });
    };

    return (
        <HeaderLogoWrapper>
            <MenuToggle
                onClick={toggleModal}
                style={{
                    color: isModal ? 'green' : 'grey',
                }}
            />
            <Logo>
                <Link to="/">Ryan Mall</Link>
            </Logo>
        </HeaderLogoWrapper>
    );
}
