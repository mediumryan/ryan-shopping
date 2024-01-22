import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
// import components
import { PageTitle, PageWrapper } from './Mans';
// import state data
import { dataState } from '../data/data';

export default function Search() {
    const { query } = useParams();
    const all = useRecoilValue(dataState);
    const [search, setSearch] = useState();

    useEffect(() => {
        setSearch(() => {
            const filteredItem = all.filter((a) => a.name.includes(query));
            return filteredItem;
        });
    }, [query]);

    console.log(search);

    return (
        <PageWrapper>
            <PageTitle>'{query}'로 검색한 결과입니다.</PageTitle>
            <div>
                {search ? (
                    search.map((item) => {
                        return <div>hi</div>;
                    })
                ) : (
                    <p>'검색과 일치하는 상품이 존재하지 않습니다'</p>
                )}
            </div>
        </PageWrapper>
    );
}
