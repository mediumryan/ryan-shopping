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
    margin: 1rem;
    color: var(--black-200);
    & > div {
        display: flex;
        align-items: center;
        margin-bottom: 0.75rem;
        & > svg {
            cursor: default;
            margin-right: 0.5rem;
        }
    }
    form {
        display: flex;
        align-items: center;
        transform-origin: left center;
        input {
            width: 150px;
            margin: 0 0.5rem;
            padding: 0.25rem;
            border: 2px solid var(--white-200);
            border-radius: 4px;
            &:focus {
                outline-color: var(--accent-200);
            }
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
            <div>
                <FaSearch
                    onClick={() => {
                        setIsSearch((prev) => !prev);
                    }}
                />{' '}
                <span>상품검색</span>
            </div>
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
