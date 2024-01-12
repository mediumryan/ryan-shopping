import { styled } from 'styled-components';
// import components
import SubMenuBar from './SubMenuBar';

export const SubItemWrapper = styled.div``;

const RelatedMenuBar = styled(SubMenuBar)`
    a:nth-child(1) {
        color: red;
    }
`;

export default function SubRelated() {
    return (
        <SubItemWrapper className="sub_related" index={0}>
            <RelatedMenuBar />
        </SubItemWrapper>
    );
}
