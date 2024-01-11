import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { data } from '../data/data';
import { styled } from 'styled-components';
import DetailDescription from '../Components/Detail/DetailDescription';

const DetailWrapper = styled.div`
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 5rem;
`;

const DetailMain = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: 0 auto;
`;

const DetailImg = styled.div`
    flex-basis: 45%;
    border-radius: 10px;
    overflow: hidden;
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
                <DetailMain>
                    <DetailImg>
                        <img
                            src={detailItem.image_path}
                            alt={detailItem.name}
                        />
                    </DetailImg>
                    <DetailDescription item={detailItem} />
                </DetailMain>
            ) : (
                <DetailLoading>Loading...</DetailLoading>
            )}
        </DetailWrapper>
    );
}
