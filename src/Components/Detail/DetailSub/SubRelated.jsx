import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
// import state data
import { dataState } from '../../../data/data';

export const SubItemWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SubItemTitle = styled.p`
    font-size: 1.25rem;
    margin: 5rem 0 2.5rem 0;
    cursor: default;
`;

const RelatedItemList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        justify-content: start;
    }
`;

const RelatedItem = styled(Link)`
    width: 17.5%;
    height: 300px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        transition: 300ms opacity;
        &:hover {
            opacity: 0.77;
        }
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 45%;
        height: 225px;
        margin: 0.5rem;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        height: 250px;
    }
`;

export default function SubRelated({ detailItem }) {
    const allItem = useRecoilValue(dataState);
    const filteredItem = allItem
        .filter((a) => a.category[0] === detailItem.category[0])
        .filter((a) => a.name !== detailItem.name);

    return (
        <SubItemWrapper className="sub_related">
            <SubItemTitle>관련상품</SubItemTitle>
            <RelatedItemList>
                {filteredItem.slice(0, 5).map((item) => {
                    return (
                        <RelatedItem key={item.id} to={`/detail/${item.name}`}>
                            <img src={item.image_path} alt={item.name} />
                        </RelatedItem>
                    );
                })}
            </RelatedItemList>
        </SubItemWrapper>
    );
}
