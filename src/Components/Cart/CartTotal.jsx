import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import {
    selectedCartCountState,
    selectedCartPriceState,
} from '../../data/cart';

const CartTotalWrapper = styled.div`
    width: 100%;
    padding: 1rem 5rem;
    p {
        color: #b3d4b3;
        font-size: 0.75rem;
        letter-spacing: 1px;
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            padding-left: 0.5rem;
        }
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        colgroup {
            &:nth-child(1) {
                width: 120px;
                @media only screen and (min-width: 320px) and (max-width: 768px) {
                    width: auto;
                }
            }
            &:nth-child(2) {
                width: 160px;
                @media only screen and (min-width: 320px) and (max-width: 768px) {
                    width: auto;
                }
            }
            &:nth-child(3) {
                width: 120px;
                @media only screen and (min-width: 320px) and (max-width: 768px) {
                    width: auto;
                }
            }
            &:nth-child(4) {
                width: auto;
            }
        }
    }
    th,
    td {
        font-size: 0.85rem;
        padding: 12px;
        text-align: center;
        vertical-align: middle;
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            font-size: 0.75rem;
        }
    }
    th {
        background-color: #ddd;
    }
    tr {
        border-bottom: 1px solid #ddd;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding: 0.5rem;
    }
`;

export default function CartTotal() {
    const selectedCount = useRecoilValue(selectedCartCountState);
    const selectedPrice = useRecoilValue(selectedCartPriceState);

    return (
        <CartTotalWrapper>
            <p>**체크된 상품만 표기됩니다.</p>
            <table>
                <colgroup>
                    <col width={'120px'} />
                    <col width={'160px'} />
                    <col width={'120px'} />
                    <col width={'auto'} />
                </colgroup>
                <thead>
                    <tr>
                        <th>총 상품 수</th>
                        <th>총 상품금액</th>
                        <th>총 배송비</th>
                        <th>결제예정금액</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{selectedCount}개</td>
                        <td>{selectedPrice.toLocaleString()}KRW</td>
                        <td>0KRW</td>
                        <td>{selectedPrice.toLocaleString()}KRW</td>
                    </tr>
                </tbody>
            </table>
        </CartTotalWrapper>
    );
}
