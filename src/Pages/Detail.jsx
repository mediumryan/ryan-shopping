import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
// import state data
import { data } from '../data/data';
// import components
import DetailMain from '../Components/Detail/DetailMain';
import DetailSub from '../Components/Detail/DetailSub/DetailSub';

const DetailWrapper = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 5rem;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding: 2rem;
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
    const all_data = useRecoilValue(data);
    const [detailItem, setDetailItem] = useState();

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
        </DetailWrapper>
    );
}
