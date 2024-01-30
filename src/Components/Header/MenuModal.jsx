import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
// import state data
import { isMenuModal } from '../../data/atom';
// import icons
import { FaTimes } from 'react-icons/fa';
import { isSignedState, userId, userPw } from '../../data/signIn';
import { motion } from 'framer-motion';

const MenuModalWrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    width: 300px;
    height: 75vh;
    padding: 1.5rem 0;
    background-color: rgb(201, 255, 201, 0.9);
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
                color: grey;
                padding: 0.5rem 0;
                cursor: pointer;
                transition: 300ms color;
                &:hover {
                    color: green;
                    background-color: #6bb26b;
                }
            }
        }
    }
`;

const MenuGreeting = styled.div`
    text-align: center;
    margin: 2rem 0;
    font-size: 1.15rem;
    user-select: none;
    & > span {
        font-weight: 700;
    }
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
        alert('성공적으로 로그아웃 되었습니다.');
        setIsSigned(false);
        setId('');
        setPw('');
        navigate('/');
    };

    return (
        <MenuModalWrapper
            variants={menu_modal_variants}
            initial="initial"
            animate="fadeIn"
        >
            <MenuGreeting>
                안녕하세요, <span>{isSigned ? id : 'guest '}</span>님
            </MenuGreeting>
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
                        <Link to="/sign-up">JOIN-US</Link>
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
