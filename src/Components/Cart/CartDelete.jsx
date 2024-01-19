import { useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { cartModalState, cartState } from '../../data/cart';

const CartDeleteWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
    padding: 1rem 5rem;
    & > button {
        color: grey;
        border: 1px solid grey;
        border-radius: 4px;
        background: none;
        padding: 0.15rem 0.25rem;
        margin: 0.15rem;
        cursor: pointer;
        user-select: none;
        transition: 300ms all;
        &:hover {
            color: green;
            border-color: green;
        }
    }
`;

export default function CartDelete() {
    const setCart = useSetRecoilState(cartState);
    const setCartModal = useSetRecoilState(cartModalState);

    const deleteAll = () => {
        setCartModal(true);
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
