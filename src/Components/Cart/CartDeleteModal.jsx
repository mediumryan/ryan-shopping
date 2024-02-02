import { styled } from 'styled-components';
import { useSetRecoilState } from 'recoil';
// import components
import {
    DetailModalWrapper,
    ModalButton,
} from '../Detail/DetailDescription/DetailModal';
import { ModalClose } from '../Header/MenuModal';
// import state data
import { cartModalState, cartState } from '../../data/cart';
// import icons
import { FaTimes } from 'react-icons/fa';

export const CartModalWrapper = styled(DetailModalWrapper)`
    position: fixed;
    width: 400px;
    height: 200px;
    left: 50%;
`;

export default function CartDeleteModal() {
    const setCart = useSetRecoilState(cartState);
    const setCartModal = useSetRecoilState(cartModalState);

    const deleteAll = () => {
        setCart([]);
        setCartModal(false);
    };

    const closeModal = () => {
        setCartModal(false);
    };

    return (
        <CartModalWrapper>
            <p>모든 항목을 제거하시겠어요?</p>
            <ModalButton>
                <button onClick={deleteAll}>Y</button>
                <button onClick={closeModal}>N</button>
            </ModalButton>
            <ModalClose style={{ right: '2%', top: '2%' }} onClick={closeModal}>
                <FaTimes />
            </ModalClose>
        </CartModalWrapper>
    );
}
