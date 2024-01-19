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
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }
    th,
    td {
        padding: 12px;
        text-align: center;
        vertical-align: middle;
    }
    th {
        background-color: #ddd;
    }
    tr {
        border-bottom: 1px solid #ddd;
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
