// import components
import { SubItemTitle, SubItemWrapper } from './SubRelated';
import { SubReviewInner } from './SubReview';
// import icons
import { FaRegCommentDots } from 'react-icons/fa';

export default function SubQna() {
    return (
        <SubItemWrapper className="sub_qna">
            <SubItemTitle>QnA</SubItemTitle>
            <SubReviewInner>
                <FaRegCommentDots />
                <p>게시물이 없습니다.</p>
            </SubReviewInner>
        </SubItemWrapper>
    );
}
