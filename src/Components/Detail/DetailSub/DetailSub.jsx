import { styled } from 'styled-components';
// import components
import SubRelated from './SubRelated';
import SubDetail from './SubDetail/SubDetail';
import SubGuide from './SubGuide';
import SubReview from './SubReview';
import SubQna from './SubQna';
import SubMenuBar from './SubMenuBar';
import { useRecoilState } from 'recoil';
import { subMenu } from '../../../data/atom';
import { useEffect } from 'react';

const DetailSubWrapper = styled.div``;

export default function DetailSub({ detailItem }) {
    const [detailSubMenu, setDetailSubMenu] = useRecoilState(subMenu);

    useEffect(() => {
        setDetailSubMenu((prev) => {
            const newMenu = prev.map((item) => {
                return { ...item, isActive: false };
            });
            newMenu[0] = { ...newMenu[0], isActive: true };
            return newMenu;
        });
    }, []);

    return (
        <DetailSubWrapper>
            <SubMenuBar />
            {detailSubMenu[0].isActive ? (
                <SubRelated detailItem={detailItem} />
            ) : detailSubMenu[1].isActive ? (
                <SubDetail />
            ) : detailSubMenu[2].isActive ? (
                <SubGuide />
            ) : detailSubMenu[3].isActive ? (
                <SubReview />
            ) : (
                detailSubMenu[4].isActive && <SubQna />
            )}
            <SubMenuBar />
        </DetailSubWrapper>
    );
}
