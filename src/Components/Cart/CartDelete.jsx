import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import Swal from 'sweetalert2';
// import state data
import { cartState } from '../../data/cart';
// import swal custom class
import { swalCustomStyle } from '../../helper/swalcustom';

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

    const deleteAll = () => {
        if (cart.length > 0) {
            Swal.fire({
                title: '모든 항목을 제거합니다.',
                showDenyButton: true,
                confirmButtonText: '예',
                confirmButtonColor: '#6db96d',
                denyButtonText: `아뇨`,
                customClass: swalCustomStyle,
            }).then((result) => {
                if (result.isConfirmed) {
                    setCart([]);
                    Swal.fire({
                        icon: 'success',
                        title: '모든 항목이 제거되었습니다.',
                        confirmButtonText: '<i class="fa-solid fa-check"></i>',
                        confirmButtonColor: '#6db96d',
                        customClass: swalCustomStyle,
                    });
                } else if (result.isDenied) {
                    return;
                }
            });
        } else {
            Swal.fire({
                icon: 'warning',
                title: '선택된 항목이 존재하지 않습니다.',
                confirmButtonText: '<i class="fa-solid fa-check"></i>',
                confirmButtonColor: '#6db96d',
                customClass: swalCustomStyle,
            });
        }
    };

    const deleteSelected = () => {
        if (cart.filter((a) => a.checked).length === 0) {
            Swal.fire({
                icon: 'warning',
                title: '상품을 선택해주세요.',
                confirmButtonText: '<i class="fa-solid fa-check"></i>',
                confirmButtonColor: '#6db96d',
                customClass: swalCustomStyle,
            });
            return;
        } else {
            Swal.fire({
                title: '선택된 항목을 제거합니다.',
                showDenyButton: true,
                confirmButtonText: '예',
                confirmButtonColor: '#6db96d',
                denyButtonText: `아뇨`,
                customClass: swalCustomStyle,
            }).then((result) => {
                if (result.isConfirmed) {
                    setCart((prev) => {
                        const newCart = prev.filter((a) => !a.checked);
                        return newCart;
                    });
                    Swal.fire({
                        icon: 'success',
                        title: '선택된 항목이 제거되었습니다.',
                        confirmButtonText: '<i class="fa-solid fa-check"></i>',
                        confirmButtonColor: '#6db96d',
                        customClass: swalCustomStyle,
                    });
                } else if (result.isDenied) {
                    return;
                }
            });
        }
    };

    return (
        <CartDeleteWrapper>
            <button onClick={deleteAll}>전체삭제</button>
            <button onClick={deleteSelected}>선택삭제</button>
        </CartDeleteWrapper>
    );
}
