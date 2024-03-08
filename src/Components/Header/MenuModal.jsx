import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
// import state data
import { isMenuModal } from '../../data/atom';
import { isSignedState, userId, userPw } from '../../data/signIn';
// import icons
import { FaTimes, FaCheck } from 'react-icons/fa';
// import components
import SearchBar from './SearchBar';
// import swal custom class
import { swalCustomStyle } from '../../helper/swalcustom';

const MenuModalWrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    width: 300px;
    height: 75vh;
    padding: 1.5rem 0;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    border-radius: 0 0 10px 0;
    z-index: 15;
    transform-origin: left top;
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        li {
            width: 100%;
            text-align: center;
            margin-bottom: 0.5rem;
            a {
                display: block;
                text-decoration: none;
                color: var(--black-200);
                padding: 0.5rem 0;
                cursor: pointer;
                transition: 300ms color;
                &:hover {
                    color: var(--accent-200);
                }
            }
        }
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 250px;
    }
`;

const MenuGreeting = styled.div`
    font-weight: 700;
    font-size: 1.25rem;
    text-align: center;
    margin: 2rem 0;
    user-select: none;
`;

export const ModalClose = styled.div`
    position: absolute;
    top: 1%;
    right: 5%;
    color: grey;
    cursor: pointer;
    transition: 300ms color;
    &:hover {
        color: #eee;
    }
`;

const LogOutBtn = styled.button`
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    border-radius: 4px;
    outline: none;
    background: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.66) 0px 1px 4px;
    color: #fff;
    background-color: #6bb26b;
    padding: 0.5rem 1rem;
    &:hover {
        color: #6bb26b;
        background-color: transparent;
    }
`;

// variants
const menu_modal_variants = {
    initial: {
        x: '-100%',
    },
    fadeIn: {
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function MenuModal() {
    const setIsModal = useSetRecoilState(isMenuModal);
    const [isSigned, setIsSigned] = useRecoilState(isSignedState);
    const [id, setId] = useRecoilState(userId);
    const setPw = useSetRecoilState(userPw);
    const navigate = useNavigate('/');

    // toggle modal
    const toggleModal = () => {
        setIsModal((prev) => {
            return !prev;
        });
    };

    // handle log out
    const handleLogOut = () => {
        Swal.fire({
            title: '정말로 로그아웃 하시겠어요?',
            showDenyButton: true,
            confirmButtonText: '예',
            confirmButtonColor: '#6db96d',
            denyButtonText: `아뇨`,
            customClass: swalCustomStyle,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '로그아웃 되었습니다.',
                    icon: 'success',
                    confirmButtonText: '<i class="fa-solid fa-check"></i>',
                    confirmButtonColor: '#6db96d',
                    customClass: swalCustomStyle,
                });
                setIsSigned(false);
                setId('');
                setPw('');
                navigate('/');
            } else if (result.isDenied) {
                return;
            }
        });
    };

    return (
        <MenuModalWrapper
            variants={menu_modal_variants}
            initial="initial"
            animate="fadeIn"
        >
            <MenuGreeting>{isSigned ? id : 'guest '}</MenuGreeting>
            <SearchBar />
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                {!isSigned && (
                    <li>
                        <Link to="/sign-in">SIGN-IN</Link>
                    </li>
                )}
                {!isSigned && (
                    <li>
                        <Link to="/sign-up" style={{ color: '#6db96d' }}>
                            JOIN-US
                        </Link>
                    </li>
                )}
                <li>
                    <Link to="bookmark">BOOKMARK</Link>
                </li>
                <li>
                    <Link to="cart">MY-CART</Link>
                </li>
            </ul>
            <ModalClose onClick={toggleModal}>
                <FaTimes />
            </ModalClose>
            {isSigned && <LogOutBtn onClick={handleLogOut}>LOG OUT</LogOutBtn>}
        </MenuModalWrapper>
    );
}
