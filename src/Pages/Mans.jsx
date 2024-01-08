import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
// import state data
import { mans_data } from '../data/data';
// import components
import ItemCard from '../Components/ItemCard/ItemCard';

export const PageWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const PageTitle = styled.h3`
    color: black;
    font-size: 2rem;
    text-align: center;
    margin: 3rem 0 1.5rem 0;
`;

export const PageInner = styled.div`
    padding: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
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
