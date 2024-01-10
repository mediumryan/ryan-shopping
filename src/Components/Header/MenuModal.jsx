import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const MenuModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    background-color: red;
    z-index: 15;
`;

export default function MenuModal() {
    return (
        <MenuModalWrapper>
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
        </MenuModalWrapper>
    );
}
