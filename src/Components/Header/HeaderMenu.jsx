import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const HeaderMenuWrapper = styled.ul`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    li {
        a {
            text-decoration: none;
            color: grey;
            padding: 0.5rem 1rem;
            margin: 0.5rem;
            font-size: 0.8rem;
            &:hover {
                color: green;
            }
        }
    }
`;

export default function HeaderMenu({ scrollY }) {
    return (
        <HeaderMenuWrapper style={{ display: scrollY > 50 ? 'none' : 'flex' }}>
            <li>
                <Link to="/sign-in">로그인</Link>
            </li>
            <li>
                <Link to="/sign-up">회원가입</Link>
            </li>
            <li>
                <Link to="/my-cart">카트</Link>
            </li>
            <li>
                <Link to="/history">주문조회</Link>
            </li>
        </HeaderMenuWrapper>
    );
}
