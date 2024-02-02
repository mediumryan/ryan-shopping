import { useRecoilState, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
// import state data
import { cartModalState, cartState } from '../../data/cart';

const CartDeleteWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
    padding: 1rem 5rem;
    & > button {
        color: var(--black-200);
        border: 1px solid var(--black-200);
        border-radius: 4px;
        background: none;
        padding: 0.15rem 0.35rem;
        margin: 0.15rem;
        cursor: pointer;
        user-select: none;
        transition: 300ms all;
        &:hover {
            color: var(--accent-200);
            border-color: var(--accent-200);
        }
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding: 0.5rem;
    }
`;

export default function CartDelete() {
    const [cart, setCart] = useRecoilState(cartState);
    const setCartModal = useSetRecoilState(cartModalState);

    const deleteAll = () => {
        if (cart.length > 0) {
            setCartModal(true);
        } else {
            alert('상품이 존재하지 않습니다.');
        }
    };

    const deleteSelected = () => {
        setCart((prev) => {
            const filteredCart = prev.filter((a) => !a.checked);
            return filteredCart;
        });
    };

    return (
        <CartDeleteWrapper>
            <button onClick={deleteAll}>전체삭제</button>
            <button onClick={deleteSelected}>선택삭제</button>
        </CartDeleteWrapper>
    );
}
