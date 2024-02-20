import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import components
import { detailSizeState } from './../../../data/detail';

const Size = styled.div`
    display: flex;
    align-items: center;
    ul.detail_size {
        display: flex;
        li {
            margin-right: 0.5rem;
            button {
                padding: 0.25rem 0.75rem;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                user-select: none;
            }
        }
    }
`;

export default function DetailSize({ item }) {
    const { pathname } = useLocation();
    const [size, setSize] = useRecoilState(detailSizeState);

    const handleSize = (size_item) => {
        setSize(size_item);
    };

    useEffect(() => {
        setSize('');
    }, [pathname]);

    return (
        <Size className="detail_item">
            <div className="detail_subtitle">사이즈</div>
            <ul className="detail_size">
                {item.size.map((size_item) => {
                    return (
                        <li key={size_item}>
                            <button
                                style={{
                                    color:
                                        size === size_item ? 'green' : '#ddd',
                                    backgroundColor:
                                        size === size_item ? '#b3d4b3' : '#eee',
                                }}
                                onClick={() => {
                                    handleSize(size_item);
                                }}
                            >
                                {size_item}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </Size>
    );
}
