import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
// import state data
import { subMenu } from '../../../data/atom';

const SubMenuBarWrapper = styled.div`
    padding: 1rem 0;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    ul {
        display: flex;
        li {
            margin: 0 0.5rem;
            a {
                color: var(--white-200);
                font-size: 0.75rem;
                text-decoration: none;
                padding: 0.5rem 0.75rem;
                background: none;
                border: none;
                transition: 300ms all;
                cursor: pointer;
                @media only screen and (min-width: 320px) and (max-width: 768px) {
                    padding: 0.25rem;
                    font-size: 0.65rem;
                }
            }
        }
    }
`;

export default function SubMenuBar() {
    const [menu, setMenu] = useRecoilState(subMenu);

    const changeSubMenu = (menu_index) => {
        const newMenu = menu.map((item, index) => {
            return { ...item, isActive: index === menu_index };
        });
        setMenu(newMenu);
    };

    return (
        <SubMenuBarWrapper id="detail_menu_bar">
            <ul>
                {menu.map((menu_item, menu_index) => {
                    return (
                        <li key={menu_item.id}>
                            <a
                                href="#detail_menu_bar"
                                onClick={() => {
                                    changeSubMenu(menu_index);
                                }}
                                style={{
                                    fontWeight: menu_item.isActive
                                        ? '700'
                                        : '500',
                                    color: menu_item.isActive
                                        ? 'green'
                                        : 'grey',
                                }}
                            >
                                {menu_item.value}
                                {menu_item.count && (
                                    <span>{menu_item.count}</span>
                                )}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </SubMenuBarWrapper>
    );
}
