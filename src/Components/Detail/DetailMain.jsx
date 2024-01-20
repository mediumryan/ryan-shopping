import { styled } from 'styled-components';
// import components
import DetailDescription from './DetailDescription/DetailDescription';

const DetailMainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: 0 auto;
    padding-bottom: 2rem;
    border-bottom: 3px solid grey;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        padding-bottom: 0;
    }
`;

const DetailImg = styled.div`
    flex-basis: 45%;
    border-radius: 10px;
    overflow: hidden;
    img {
        width: 100%;
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
