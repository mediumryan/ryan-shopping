import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
// import icons
import { FaTimes } from 'react-icons/fa';
// import components
import { ModalClose } from '../../Header/MenuModal';
// import state data
import { isDetailModalState } from '../../../data/detail';

export const DetailBuyModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 250px;
    background: rgba(0, 0, 0, 0.9);
    color: #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    border-radius: 10px;
    & > p {
        padding: 1rem 2rem;
        line-height: 1.5;
        letter-spacing: 1.5px;
        font-size: 0.95rem;
        & > span {
            font-weight: 700;
            color: #b3d4b3;
        }
    }
`;

export const ModalButton = styled.div`
    display: flex;
    align-items: center;
    & > button {
        color: #eee;
        background: none;
        border: 2px solid #eee;
        border-radius: 10px;
        padding: 0.5rem 1rem;
        margin: 0 0.5rem;
        font-weight: 700;
        font-size: 0.85rem;
        cursor: pointer;
        user-select: none;
        transition: 300ms all;
        &:hover {
            color: #b3d4b3;
            border-color: #b3d4b3;
            transform: scale(1.05);
        }
    }
`;

export default function DetailBuyModal({ detailItem }) {
    const navigate = useNavigate();
    const setIsDetailModal = useSetRecoilState(isDetailModalState);

    return (
        <DetailBuyModalWrapper>
            <p>
                고객님의 장바구니에 <span>{detailItem.name}</span> 상품이
                추가되었어요.
            </p>
            <ModalButton>
                <button
                    onClick={() => {
                        navigate('/cart');
                    }}
                >
                    장바구니 확인하기
                </button>
                <button
                    onClick={() => {
                        setIsDetailModal(false);
                    }}
                >
                    쇼핑 계속하기
                </button>
            </ModalButton>
            <ModalClose
                style={{ right: '2%', top: '2%' }}
                onClick={() => {
                    setIsDetailModal(false);
                }}
            >
                <FaTimes />
            </ModalClose>
        </DetailBuyModalWrapper>
    );
}
