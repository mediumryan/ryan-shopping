import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
// import state data
import { isMenuModal } from '../../data/atom';
// import icons
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MenuModalWrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    width: 200px;
    height: 100vh;
    padding: 1.5rem 0;
    background-color: #e6f3e6;
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
                }
            }
        }
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

    const toggleModal = () => {
        setIsModal((prev) => {
            return !prev;
        });
    };

    return (
        <MenuModalWrapper
            variants={menu_modal_variants}
            initial="initial"
            animate="fadeIn"
        >
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/sign-in">LOGIN</Link>
                </li>
                <li>
                    <Link to="/sign-up">JOIN US</Link>
                </li>
                <li>
                    <Link to="bookmark">BOOKMARK</Link>
                </li>
                <li>
                    <Link to="cart">MY CART</Link>
                </li>
            </ul>
            <ModalClose onClick={toggleModal}>
                <FaTimes />
            </ModalClose>
        </MenuModalWrapper>
    );
}
