import { styled } from 'styled-components';

const BookmarkButtonsWrapper = styled.div`
    position: fixed;
    bottom: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 10rem;
    div.book_delete {
        display: flex;
        flex-direction: column;
    }
    button {
        background: none;
        border: none;
        outline: none;
    }
`;

export default function BookmarkButtons() {
    return (
        <BookmarkButtonsWrapper>
            <div className="book_delete">
                <button>선택 제거</button>
                <button>모두 제거</button>
            </div>
            <button>장바구니에 추가</button>
        </BookmarkButtonsWrapper>
    );
}
