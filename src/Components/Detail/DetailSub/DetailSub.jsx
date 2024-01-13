import { styled } from 'styled-components';
// import components
import SubRelated from './SubRelated';
import SubDetail from './SubDetail';
import SubGuide from './SubGuide';
import SubReview from './SubReview';
import SubQna from './SubQna';
import SubMenuBar from './SubMenuBar';
import { useRecoilValue } from 'recoil';
import { subMenu } from '../../../data/atom';

const DetailSubWrapper = styled.div``;

export default function DetailSub({ detailItem }) {
    const sub_menu = useRecoilValue(subMenu);

    return (
        <DetailSubWrapper>
            <SubMenuBar />
            {sub_menu[0].isActive ? (
                <SubRelated />
            ) : sub_menu[1].isActive ? (
                <SubDetail />
            ) : sub_menu[2].isActive ? (
                <SubGuide />
            ) : sub_menu[3].isActive ? (
                <SubReview />
            ) : (
                sub_menu[4].isActive && <SubQna />
            )}
        </DetailSubWrapper>
    );
}
