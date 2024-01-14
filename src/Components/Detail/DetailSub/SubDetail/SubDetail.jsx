// import components
import { styled } from 'styled-components';
import { SubItemTitle, SubItemWrapper } from '../SubRelated';
import Comment from './Comment';
import Images from './Images';
import Info from './Info';
import Size from './Size';

const SubDetailInner = styled.div``;

export default function SubDetail() {
    return (
        <SubItemWrapper className="sub_detail">
            <SubItemTitle>상세정보</SubItemTitle>
            <SubDetailInner>
                <Comment />
                <Images />
                <Info />
                <Size />
            </SubDetailInner>
        </SubItemWrapper>
    );
}
