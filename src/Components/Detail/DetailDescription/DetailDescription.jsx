import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
// import state data
import { detailItemCount } from '../../../data/detail';
// import components
import DetailPrice from './DetailPrice';
import DetailColor from './DetailColor';
import DetailCount from './DetailCount';
import DetailTotal from './DetailTotal';
import DetailButtons from './DetailButtons';
import DetailSize from './DetailSize';

const DetailDescriptionWrapper = styled.div`
    flex-basis: 45%;
    display: flex;
    flex-direction: column;
    border-top: 3px solid grey;
    padding: 1rem;
    div.detail_subtitle {
        color: grey;
        font-size: 0.75rem;
        width: 33%;
    }
    .detail_item {
        padding: 1rem 0;
    }
`;

const Name = styled.div`
    margin-bottom: 2rem;
    h5 {
        font-size: 1.5rem;
    }
`;

export default function DetailDescription({ item }) {
    const discount = (1 - item.discounted).toFixed(2);
    const discountedPrice = Math.round((item.price * discount) / 1000) * 1000;
    const itemCount = useRecoilValue(detailItemCount);

    return (
        <DetailDescriptionWrapper>
            <Name className="detail_item">
                <h5>{item.name}</h5>
            </Name>
            <DetailPrice item={item} discountedPrice={discountedPrice} />
            <DetailColor item={item} />
            <DetailSize item={item} />
            <DetailCount item={item} />
            {itemCount !== 0 && (
                <DetailTotal discountedPrice={discountedPrice} />
            )}
            <DetailButtons item={item} discountedPrice={discountedPrice} />
        </DetailDescriptionWrapper>
    );
}
