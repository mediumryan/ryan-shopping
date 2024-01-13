import { styled } from 'styled-components';
// import components

export const SubItemWrapper = styled.div`
    height: 50vh;
    display: flex;
    justify-content: center;
`;

export const SubItemTitle = styled.p`
    font-size: 1.25rem;
    margin: 2rem 0;
    cursor: default;
`;

export default function SubRelated() {
    return (
        <SubItemWrapper className="sub_related">
            <SubItemTitle>관련상품</SubItemTitle>
        </SubItemWrapper>
    );
}
