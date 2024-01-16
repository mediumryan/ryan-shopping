// import components
import { styled } from 'styled-components';
import { SubItemTitle, SubItemWrapper } from './SubRelated';
// import icons
import { FaRegCommentDots } from 'react-icons/fa';

export const SubReviewInner = styled.div`
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #999;
    & > svg {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    & > p {
        font-size: 0.75rem;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        min-height: 250px;
    }
`;

export default function SubReview() {
    return (
        <SubItemWrapper className="sub_review">
            <SubItemTitle>리뷰</SubItemTitle>
            <SubReviewInner>
                <FaRegCommentDots />
                <p>게시물이 없습니다.</p>
            </SubReviewInner>
        </SubItemWrapper>
    );
}
