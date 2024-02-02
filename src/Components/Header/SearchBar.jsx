import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
// import icons
import { FaCheck, FaSearch } from 'react-icons/fa';

const HeaderSearch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 1rem;
    margin-top: 5rem;
    color: var(--black-200);
    & > svg {
        cursor: default;
        margin: 1rem 0;
    }
    form {
        display: flex;
        align-items: center;
        transform-origin: left center;
        input {
            width: 150px;
            margin: 0 0.5rem;
            padding: 0.25rem;
        }
        button {
            font-size: 0.75rem;
            background: none;
            border: none;
            outline: none;
            cursor: pointer;
            color: var(--black-200);
            padding: 0.25rem;
        }
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
            <form onSubmit={handleSubmit(getSearch)}>
                <input
                    type="text"
                    {...register('search', { required: true })}
                />
                <button>
                    <FaCheck />
                </button>
            </form>
        </HeaderSearch>
    );
}
