import { useRecoilValue } from 'recoil';
// import state data
import { womans_data } from '../data/data';
// import components
import ItemCard from '../Components/ItemCard/ItemCard';
import { PageInner, PageTitle, PageWrapper } from './Mans';

export default function Womans() {
    const woman = useRecoilValue(womans_data);

    return (
        <PageWrapper>
            <PageTitle>Mans</PageTitle>
            <PageInner>
                {woman.map((item) => {
                    return <ItemCard key={item.id} item={item} />;
                })}
            </PageInner>
        </PageWrapper>
    );
}
