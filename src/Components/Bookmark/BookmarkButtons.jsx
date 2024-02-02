import { useRecoilState, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
// import state data
import { bookmarkModalState, bookmarkState } from '../../data/bookmark';
// import components
import { cartState } from '../../data/cart';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const BookmarkButtonsWrapper = styled.div`
    bottom: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 10rem;
    margin-top: 2.5rem;
    & > div {
        display: flex;
    }
    button {
        background: none;
        border: 2px solid var(--white-200);
        border-radius: 4px;
        outline: none;
        padding: 0.5rem;
        margin: 0.5rem;
        font-size: 0.75rem;
        font-weight: 700;
        transition: 300ms all;
        cursor: pointer;
        user-select: none;
        &:hover {
            color: var(--accent-200);
            border-color: var(--accent-200);
        }
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding: 1rem;
    }
`;

export default function BookmarkButtons() {
    const [cart, setCart] = useRecoilState(cartState);
    const [bookmark, setBookmark] = useRecoilState(bookmarkState);
    const setBookmarkModal = useSetRecoilState(bookmarkModalState);

    // handle delete items
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

    // handle move to cart items
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

    // handle go to the Cart page
    const navigate = useNavigate();

    return (
        <BookmarkButtonsWrapper>
            <div className="book_delete">
                <button onClick={deleteSelectedItem}>선택 제거</button>
                <button onClick={deleteAllItem}>모두 제거</button>
            </div>
            <div className="book_cart">
                <button onClick={moveToCart}>장바구니에 추가</button>
                <button
                    onClick={() => {
                        navigate('/cart');
                    }}
                >
                    <FaShoppingCart />
                </button>
            </div>
        </BookmarkButtonsWrapper>
    );
}
