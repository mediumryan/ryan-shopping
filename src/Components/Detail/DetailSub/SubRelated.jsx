import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { data } from '../../../data/data';
import { Link } from 'react-router-dom';
// import components

export const SubItemWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SubItemTitle = styled.p`
    font-size: 1.25rem;
    margin: 10rem 0 2rem 0;
    cursor: default;
`;

const RelatedItemList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
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
`;

export default function SubRelated({ detailItem }) {
    const allItem = useRecoilValue(data);
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
