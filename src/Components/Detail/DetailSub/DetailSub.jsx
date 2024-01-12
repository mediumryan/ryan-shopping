import { styled } from 'styled-components';
// import components
import SubRelated from './SubRelated';
import SubDetail from './SubDetail';
import SubGuide from './SubGuide';
import SubReview from './SubReview';
import SubQna from './SubQna';

const DetailSubWrapper = styled.div``;

export default function DetailSub({ detailItem }) {
    return (
        <DetailSubWrapper>
            <SubRelated />
            <SubDetail />
            <SubGuide />
            <SubReview />
            <SubQna />
        </DetailSubWrapper>
    );
}
