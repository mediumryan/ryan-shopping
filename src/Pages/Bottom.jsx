import { useRecoilValue } from 'recoil';
// import state data
import { bottom_data } from '../data/data';
// import components
import ItemCard from '../Components/ItemCard/ItemCard';
import { PageInner, PageTitle, PageWrapper } from './Mans';

export default function Bottom() {
    const bottom = useRecoilValue(bottom_data);

    return (
        <PageWrapper>
            <PageTitle>Bottom</PageTitle>
            <PageInner>
                {bottom.map((item) => {
                    return <ItemCard key={item.id} item={item} />;
                })}
            </PageInner>
        </PageWrapper>
    );
}
