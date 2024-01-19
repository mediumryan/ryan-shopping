import { styled } from 'styled-components';

const Color = styled.div`
    display: flex;
    align-items: center;
    ul.detail_color {
        display: flex;
        li {
            margin: 0 0.5rem;
            button {
                background-color: #eee;
                color: #bbb;
                padding: 0.25rem 0.75rem;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
        }
    }
`;

export default function DetailColor() {
    return (
        <Color className="detail_item">
            <div className="detail_subtitle">색상</div>
            <ul className="detail_color">
                <li>
                    <button>Black</button>
                </li>
                <li>
                    <button>White</button>
                </li>
                <li>
                    <button>Beige</button>
                </li>
            </ul>
        </Color>
    );
}
