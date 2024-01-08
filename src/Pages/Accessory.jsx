import { useRecoilValue } from 'recoil';
// import state data
import { accessory_data } from '../data/data';
// import components
import ItemCard from '../Components/ItemCard/ItemCard';
import { PageInner, PageTitle, PageWrapper } from './Mans';

export default function Accessory() {
    const accessory = useRecoilValue(accessory_data);

    return (
        <PageWrapper>
            <PageTitle>Accessory</PageTitle>
            <PageInner>
                {accessory.map((item) => {
                    return <ItemCard key={item.id} item={item} />;
                })}
            </PageInner>
        </PageWrapper>
    );
}
