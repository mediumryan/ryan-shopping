import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
// import state data
import { dataState } from '../data/data';
// import components
import DetailMain from '../Components/Detail/DetailMain';
import DetailSub from '../Components/Detail/DetailSub/DetailSub';
import DetailModal from '../Components/Detail/DetailDescription/DetailModal';
import { isDetailModalState } from '../data/detail';

const DetailWrapper = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 5rem;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding: 2rem;
        padding-top: 8rem;
    }
`;

const DetailLoading = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
`;

export default function Detail() {
    const { id } = useParams();
    const all_data = useRecoilValue(dataState);
    const [detailItem, setDetailItem] = useState();
    // for detail buy modal
    const isDetailModal = useRecoilValue(isDetailModalState);

    useEffect(() => {
        const filtered = all_data.filter((a) => a.name === id);
        setDetailItem(...filtered);
    }, [id]);

    return (
        <DetailWrapper>
            {detailItem ? (
                <>
                    <DetailMain detailItem={detailItem} />
                    <DetailSub detailItem={detailItem} />
                </>
            ) : (
                <DetailLoading>Loading...</DetailLoading>
            )}
            {detailItem && isDetailModal && (
                <DetailModal detailItem={detailItem} />
            )}
        </DetailWrapper>
    );
}
