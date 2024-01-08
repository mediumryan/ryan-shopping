import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const HeaderMenuWrapper = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    li {
        a {
            text-decoration: none;
            color: grey;
            padding: 0.5rem 1rem;
            margin: 0.5rem;
        }
    }
`;

export default function HeaderMenu() {
    return (
        <HeaderMenuWrapper>
            <li>
                <Link>로그인</Link>
            </li>
            <li>
                <Link>회원가입</Link>
            </li>
            <li>
                <Link>카트</Link>
            </li>
            <li>
                <Link>주문조회</Link>
            </li>
        </HeaderMenuWrapper>
    );
}
