import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
// import icons
import { FaCheck, FaSearch } from 'react-icons/fa';

const HeaderSearch = styled.div`
    position: absolute;
    top: 1rem;
    right: 15%;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    color: grey;
    z-index: 15;
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
            width: 150px;
            margin: 0 0.5rem;
            padding: 0.25rem;
            @media only screen and (min-width: 320px) and (max-width: 768px) {
                width: 75px;
            }
        }
        button {
            font-size: 0.75rem;
            background: none;
            border: none;
            outline: none;
            cursor: pointer;
            color: grey;
            user-select: none;
            padding: 0.25rem;
        }
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        right: 25%;
    }
`;

export default function SearchBar() {
    // handle search bar
    const navigate = useNavigate();
    const { register, setValue, handleSubmit } = useForm();
    const getSearch = (data) => {
        navigate(`/search/${data.search}`);
        setValue('search', '');
    };

    // handle search form visible / invisible
    const [isSearch, setIsSearch] = useState(false);

    // reset isSearch when change pathname
    const { pathname } = useLocation();
    useEffect(() => {
        if (isSearch === true) {
            setIsSearch(false);
        }
    }, [pathname]);

    return (
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
    );
}
