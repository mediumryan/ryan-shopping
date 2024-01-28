import { useRecoilState, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
// import state data
import { bookmarkModalState, bookmarkState } from '../../data/bookmark';
// import components
import { cartState } from '../../data/cart';

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
    const [cart, setCart] = useRecoilState(cartState);
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

    const moveToCart = () => {
        const checkedItem = bookmark.filter((a) => a.checked);
        checkedItem.forEach((a) => {
            const alreadyIsCart = cart.findIndex(
                (cartItem) =>
                    cartItem.name === a.name &&
                    cartItem.size === a.size &&
                    cartItem.color === a.color
            );
            if (alreadyIsCart === -1) {
                setCart((prev) => {
                    const newCart = [...prev];
                    newCart.push(a);
                    return newCart;
                });
            } else if (alreadyIsCart !== -1) {
                setCart((prev) => {
                    const newCart = [...prev];
                    newCart[alreadyIsCart] = {
                        ...newCart[alreadyIsCart],
                        count: newCart[alreadyIsCart].count + a.count,
                    };
                    return newCart;
                });
            } else {
                return;
            }
            setBookmark((prev) => {
                const newBookmark = prev.filter((a) => !a.checked);
                return newBookmark;
            });
        });
    };

    return (
        <BookmarkButtonsWrapper>
            <div className="book_delete">
                <button onClick={deleteSelectedItem}>선택 제거</button>
                <button onClick={deleteAllItem}>모두 제거</button>
            </div>
            <button onClick={moveToCart}>장바구니에 추가</button>
        </BookmarkButtonsWrapper>
    );
}