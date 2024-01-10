import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
// import state data
import { isMenuModal } from '../../data/atom';
// import icons
import { FaTimes } from 'react-icons/fa';

const MenuModalWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 200px;
    height: 100vh;
    padding: 1.5rem 0;
    background-color: #e6f3e6;
    z-index: 15;
    transform-origin: left center;
    transition: 750ms all;
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

const ModalClose = styled.div`
    position: absolute;
    top: 1%;
    right: 5%;
    color: grey;
    cursor: pointer;
`;

export default function MenuModal() {
    const { pathname } = useLocation();
    const [isModal, setIsModal] = useRecoilState(isMenuModal);

    const toggleModal = () => {
        setIsModal((prev) => {
            return !prev;
        });
    };

    useEffect(() => {
        setIsModal(false);
    }, [pathname]);

    return (
        <MenuModalWrapper style={{ left: isModal ? '0%' : '-100%' }}>
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
