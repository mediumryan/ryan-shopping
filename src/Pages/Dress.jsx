import { useRecoilValue } from 'recoil';
// import state data
import { dress_data } from '../data/data';
// import components
import ItemCard from '../Components/ItemCard/ItemCard';
import { PageInner, PageTitle, PageWrapper } from './Mans';

export default function Dress() {
    const dress = useRecoilValue(dress_data);

    return (
        <PageWrapper>
            <PageTitle>Dress</PageTitle>
            <PageInner>
                {dress.map((item) => {
                    return <ItemCard key={item.id} item={item} />;
                })}
            </PageInner>
        </PageWrapper>
    );
}
