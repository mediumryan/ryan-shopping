import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
// import state data
import { mans_data } from '../data/data';
// import components
import ItemCard from '../Components/ItemCard/ItemCard';

export const PageWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
`;

export const PageTitle = styled.h3`
    color: #000;
    font-size: 2rem;
    font-weight: 700;
    font-style: italic;
    text-align: center;
    margin: 3rem 0 1.5rem 0;
    padding-top: 5rem;
`;

export const PageInner = styled.div`
    padding: 2rem;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export default function Mans() {
    const man = useRecoilValue(mans_data);

    return (
        <PageWrapper>
            <PageTitle>Mans</PageTitle>
            <PageInner>
                {man.map((item) => {
                    return <ItemCard key={item.id} item={item} />;
                })}
            </PageInner>
        </PageWrapper>
    );
}
