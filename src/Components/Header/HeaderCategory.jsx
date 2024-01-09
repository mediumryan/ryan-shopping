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
    padding-bottom: ${(props) => (props.scrollY > 50 ? 0 : '1rem')};
`;

const Menu = styled.ul`
    display: flex;
    align-items: center;
    li {
        position: relative;
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
        div {
            position: absolute;
            width: 7.5px;
            height: 7.5px;
            border-radius: 50%;
            background-color: yellowgreen;
            bottom: -15px;
            left: 50%;
            transform: translateY(-50%);
        }
    }
`;

const CategoryToggle = styled.div``;

export default function HeaderCategory({ scrollY }) {
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
        <HeaderCategoryWrapper scrollY={scrollY}>
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
                                {match && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                    />
                                )}
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
