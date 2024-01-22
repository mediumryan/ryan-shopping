import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'framer-motion';
// import icons
import { FaCheck, FaGripLines, FaSearch } from 'react-icons/fa';
// import state data
import { isMenuModal } from '../../data/atom';

const HeaderLogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: grey;
    top: 0;
    margin-top: 1rem;
`;

const Logo = styled.div`
    a {
        font-size: 2rem;
        text-decoration: none;
        color: grey;
    }
`;

const HeaderSearch = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    & > svg {
        cursor: pointer;
        user-select: none;
    }
    form {
        position: absolute;
        display: flex;
        align-items: center;
        left: 75%;
        transform-origin: left center;
        input {
            width: 125px;
            margin: 0 0.5rem;
            padding: 0.25rem;
        }
        button {
            font-size: 0.75rem;
            background: none;
            border: none;
            outline: none;
            cursor: pointer;
            user-select: none;
            padding: 0.25rem;
        }
    }
`;

export default function HeaderLogo({ scrollY }) {
    const [isModal, setIsModal] = useRecoilState(isMenuModal);

    const toggleModal = () => {
        setIsModal((prev) => {
            return !prev;
        });
    };

    // handle search
    const navigate = useNavigate();
    const { register, setValue, handleSubmit } = useForm();
    const getSearch = (data) => {
        navigate(`/search/${data.search}`);
        setValue('search', '');
    };

    // handle search form visible / invisible
    const [isSearch, setIsSearch] = useState(false);

    return (
        <HeaderLogoWrapper
            style={{ paddingBottom: scrollY > 50 ? '0' : '1rem' }}
        >
            <FaGripLines
                onClick={toggleModal}
                style={{
                    cursor: 'pointer',
                    color: isModal ? 'green' : 'grey',
                    transition: '300ms',
                }}
            />
            <Logo>
                <Link to="/">Ryan Mall</Link>
            </Logo>
            <HeaderSearch>
                <FaSearch
                    onClick={() => {
                        setIsSearch((prev) => !prev);
                    }}
                />
                {isSearch && (
                    <motion.form
                        onSubmit={handleSubmit(getSearch)}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <input
                            type="text"
                            {...register('search', { required: true })}
                        />
                        <button>
                            <FaCheck />
                        </button>
                    </motion.form>
                )}
            </HeaderSearch>
        </HeaderLogoWrapper>
    );
}
