import { styled } from 'styled-components';

const SubMenuBarWrapper = styled.div`
    padding: 1rem 0;
    ul {
        display: flex;
        li {
            margin: 0 0.5rem;
            a {
                text-decoration: none;
                color: grey;
                font-size: 0.75rem;
                padding: 0.25rem 0.5rem;
            }
        }
        li:nth-child(${(props) => props.index}) a {
            font-weight: 700;
        }
    }
`;

export default function SubMenuBar({ index }) {
    const sub_menu = [
        {
            id: 0,
            goTo: '.sub_related',
            value: '관련상품',
        },
        {
            id: 1,
            goTo: '.sub_detail',
            value: '상세정보',
        },
        {
            id: 2,
            goTo: '.sub_guide',
            value: '구매가이드',
        },
        {
            id: 3,
            goTo: '.sub_review',
            value: '구매후기',
            count: 0,
        },
        {
            id: 4,
            goTo: '.sub_qna',
            value: '상품문의',
            count: 0,
        },
    ];

    console.log(index);

    return (
        <SubMenuBarWrapper>
            <ul>
                {sub_menu.map((menu_item) => {
                    return (
                        <li key={menu_item.id}>
                            <a href={menu_item.goTo}>
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
