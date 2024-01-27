import { useRecoilState, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { bookmarkModalState, bookmarkState } from '../../data/bookmark';

const BookmarkButtonsWrapper = styled.div`
    bottom: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 10rem;
    margin-top: 2.5rem;
    div.book_delete {
        display: flex;
    }
    button {
        background: none;
        border: 1px solid #b3d4b3;
        border-radius: 4px;
        outline: none;
        padding: 0.5rem;
        margin: 0.25rem;
        font-size: 0.75rem;
        box-shadow: #b3d4b3 0px 3px 8px;
        transition: 150ms all;
        cursor: pointer;
        user-select: none;
        &:hover {
            color: #b3d4b3;
            border-color: transparent;
        }
    }
`;

export default function BookmarkButtons() {
    const [bookmark, setBookmark] = useRecoilState(bookmarkState);
    const setBookmarkModal = useSetRecoilState(bookmarkModalState);

    const deleteSelectedItem = () => {
        setBookmark((prev) => {
            const newBookmark = prev.filter((a) => !a.checked);
            return newBookmark;
        });
    };

    const deleteAllItem = () => {
        if (bookmark.length > 0) {
            setBookmarkModal(true);
        } else {
            alert('상품이 존재하지 않습니다.');
        }
    };

    return (
        <BookmarkButtonsWrapper>
            <div className="book_delete">
                <button onClick={deleteSelectedItem}>선택 제거</button>
                <button onClick={deleteAllItem}>모두 제거</button>
            </div>
            <button>장바구니에 추가</button>
        </BookmarkButtonsWrapper>
    );
}
