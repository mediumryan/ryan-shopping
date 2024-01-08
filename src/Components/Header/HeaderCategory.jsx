import { styled } from 'styled-components';
// import icons
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderCategoryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: grey;
`;

const Menu = styled.ul`
    display: flex;
    align-items: center;
    li {
        margin: 0.5rem;
        a {
            text-decoration: none;
            color: grey;
            padding: 0.5rem 0.75rem;
            font-size: 0.65rem;
            &:hover {
                color: green;
            }
        }
    }
`;

const CategoryToggle = styled.div``;

export default function HeaderCategory() {
    return (
        <HeaderCategoryWrapper>
            <Menu>
                <li>
                    <Link to="/mans">남성의류</Link>
                </li>
                <li>
                    <Link to="/outer">아우터</Link>
                </li>
                <li>
                    <Link to="/top">탑</Link>
                </li>
                <li>
                    <Link to="/dress">드레스</Link>
                </li>
                <li>
                    <Link to="/bottom">바텀</Link>
                </li>
                <li>
                    <Link to="/accessory">악세사리</Link>
                </li>
            </Menu>
            <CategoryToggle>
                <FaAngleDown />
            </CategoryToggle>
        </HeaderCategoryWrapper>
    );
}
