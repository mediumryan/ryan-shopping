import { styled } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
// import icons
import { FaAngleDown } from 'react-icons/fa';
import { Link, useMatch } from 'react-router-dom';

const HeaderCategoryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: grey;
    padding-top: 0.5rem;
`;

const Menu = styled.ul`
    display: flex;
    align-items: center;
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.5rem;
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            margin: 0.25rem;
        }
        a {
            text-decoration: none;
            color: grey;
            padding: 0.5rem 0.75rem;
            font-size: 0.65rem;
            &:hover {
                color: green;
            }
            @media only screen and (min-width: 320px) and (max-width: 768px) {
                padding: 0.5rem;
            }
        }
    }
`;

const NowHere = styled(motion.div)`
    width: 36px;
    height: 2px;
    background-color: green;
`;

const CategoryToggle = styled.div``;

export default function HeaderCategory() {
    const man_match = useMatch('/mans');
    const outer_match = useMatch('/outer');
    const top_match = useMatch('/top');
    const dress_match = useMatch('/dress');
    const bottom_match = useMatch('/bottom');
    const accessory_match = useMatch('/accessory');

    const category_group = [
        {
            id: 0,
            link: '/mans',
            value: '남성의류',
        },
        {
            id: 1,
            link: '/outer',
            value: '아우터',
        },
        {
            id: 2,
            link: '/top',
            value: '탑',
        },
        {
            id: 3,
            link: '/dress',
            value: '드레스',
        },
        {
            id: 4,
            link: '/bottom',
            value: '바텀',
        },
        {
            id: 5,
            link: '/accessory',
            value: '악세사리',
        },
    ];

    return (
        <HeaderCategoryWrapper>
            <Menu>
                {category_group.map((item) => {
                    let match = null;

                    switch (item.link) {
                        case '/mans':
                            match = man_match;
                            break;
                        case '/outer':
                            match = outer_match;
                            break;
                        case '/top':
                            match = top_match;
                            break;
                        case '/dress':
                            match = dress_match;
                            break;
                        case '/bottom':
                            match = bottom_match;
                            break;
                        case '/accessory':
                            match = accessory_match;
                            break;
                        default:
                            match = null;
                            break;
                    }

                    return (
                        <AnimatePresence key={item.id}>
                            <li>
                                <Link to={item.link}>{item.value}</Link>
                                {match && <NowHere layoutId="nowHere" />}
                            </li>
                        </AnimatePresence>
                    );
                })}
            </Menu>
            <CategoryToggle>
                <FaAngleDown />
            </CategoryToggle>
        </HeaderCategoryWrapper>
    );
}
