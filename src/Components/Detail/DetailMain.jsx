import { styled } from 'styled-components';
// import components
import DetailDescription from './DetailDescription/DetailDescription';

const DetailMainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: 0 auto;
    padding: 2rem 0;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width: 95%;
    }
`;

const DetailImg = styled.div`
    flex-basis: 45%;
    border-radius: 10px;
    overflow: hidden;
    img {
        width: 100%;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding-bottom: 1rem;
    }
`;

export default function DetailMain({ detailItem }) {
    return (
        <DetailMainWrapper>
            <DetailImg>
                <img src={detailItem.image_path} alt={detailItem.name} />
            </DetailImg>
            <DetailDescription item={detailItem} />
        </DetailMainWrapper>
    );
}
