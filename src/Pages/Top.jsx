import { useRecoilValue } from 'recoil';
// import state data
import { top_data } from '../data/data';
//import components
import { PageInner, PageTitle, PageWrapper } from './Mans';
import ItemCard from '../Components/ItemCard/ItemCard';

export default function Top() {
    const top = useRecoilValue(top_data);

    return (
        <PageWrapper>
            <PageTitle>Top</PageTitle>
            <PageInner>
                {top.map((item) => {
                    return <ItemCard key={item.id} item={item} />;
                })}
            </PageInner>
        </PageWrapper>
    );
}
