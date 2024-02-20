import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Swal from 'sweetalert2';
// import icons
import { FaGripLines, FaSignOutAlt, FaRegUser } from 'react-icons/fa';
// import state data
import { isMenuModal } from '../../data/atom';
import { isSignedState, userId, userPw } from '../../data/signIn';

const HeaderLogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: var(--black-200);
    top: 0;
    margin: 1rem 0;
`;

const MenuToggle = styled(FaGripLines)`
    cursor: pointer;
`;

const Logo = styled.div`
    a {
        font-size: 2rem;
        font-family: 'Diphylleia', serif;
        text-decoration: none;
        color: var(--black-200);
    }
`;

const HeaderLog = styled.div`
    svg {
        cursor: pointer;
        transition: 300ms color;
        &:hover {
            color: var(--accent-200);
        }
    }
`;

export default function HeaderLogo() {
    const [isModal, setIsModal] = useRecoilState(isMenuModal);
    const [isSign, setIsSign] = useRecoilState(isSignedState);
    const setId = useSetRecoilState(userId);
    const setPw = useSetRecoilState(userPw);
    const navigate = useNavigate();

    const toggleModal = () => {
        setIsModal((prev) => {
            return !prev;
        });
    };

    const handleLogOut = () => {
        Swal.fire('로그아웃 되었습니다', '', 'success');
        setIsSign(false);
        setId('');
        setPw('');
        navigate('/');
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
            <HeaderLog>
                {isSign ? (
                    <FaSignOutAlt onClick={handleLogOut} />
                ) : (
                    <FaRegUser onClick={() => navigate('/sign-in')} />
                )}
            </HeaderLog>
        </HeaderLogoWrapper>
    );
}
