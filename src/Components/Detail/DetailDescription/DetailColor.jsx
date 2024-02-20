import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import components
import { detailColorState } from './../../../data/detail';

const Color = styled.div`
    display: flex;
    align-items: center;
    border-top: 2px solid var(--white-200);
    border-bottom: 2px solid var(--white-200);
    ul.detail_color {
        display: flex;
        li {
            margin-right: 0.5rem;
            button {
                padding: 0.25rem 0.75rem;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
        }
    }
`;

export default function DetailColor({ item }) {
    const { pathname } = useLocation();
    const [color, setColor] = useRecoilState(detailColorState);

    const handleColor = (color_item) => {
        setColor(color_item);
    };

    useEffect(() => {
        setColor('');
    }, [pathname]);

    return (
        <Color className="detail_item">
            <div className="detail_subtitle">색상</div>
            <ul className="detail_color">
                {item.color.map((color_item) => {
                    return (
                        <li key={color_item}>
                            <button
                                style={{
                                    color:
                                        color === color_item ? 'green' : '#ddd',
                                    backgroundColor:
                                        color === color_item
                                            ? '#b3d4b3'
                                            : '#eee',
                                }}
                                onClick={() => {
                                    handleColor(color_item);
                                }}
                            >
                                {color_item}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </Color>
    );
}
