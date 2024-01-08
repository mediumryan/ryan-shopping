import { useRecoilValue } from 'recoil';
// import state data
import { outer_data } from '../data/data';
// import components
import { PageInner, PageTitle, PageWrapper } from './Mans';
import ItemCard from '../Components/ItemCard/ItemCard';

export default function Outer() {
    const outer = useRecoilValue(outer_data);

    return (
        <PageWrapper>
            <PageTitle>Outer</PageTitle>
            <PageInner>
                {outer.map((item) => {
                    return <ItemCard key={item.id} item={item} />;
                })}
            </PageInner>
        </PageWrapper>
    );
}
