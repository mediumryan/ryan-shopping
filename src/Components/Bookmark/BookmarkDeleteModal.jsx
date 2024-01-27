import { useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
// import components
import { ModalClose } from '../Header/MenuModal';
import {
    DetailModalWrapper,
    ModalButton,
} from '../Detail/DetailDescription/DetailModal';

// import state data
import { bookmarkModalState, bookmarkState } from '../../data/bookmark';
// import icons
import { FaTimes } from 'react-icons/fa';

export const BookmarkModalWrapper = styled(DetailModalWrapper)`
    position: fixed;
    width: 400px;
    height: 200px;
    left: 50%;
`;

export const BookmarkModalButton = styled(ModalButton)``;

export default function BookmarkDeleteModal() {
    const setBookmark = useSetRecoilState(bookmarkState);
    const setBookmarkModal = useSetRecoilState(bookmarkModalState);

    const deleteAll = () => {
        setBookmark([]);
        setBookmarkModal(false);
    };

    const closeModal = () => {
        setBookmarkModal(false);
    };

    return (
        <BookmarkModalWrapper>
            <p>모든 항목을 제거하시겠어요?</p>
            <BookmarkModalButton>
                <button onClick={deleteAll}>Y</button>
                <button onClick={closeModal}>N</button>
            </BookmarkModalButton>
            <ModalClose style={{ right: '2%', top: '2%' }} onClick={closeModal}>
                <FaTimes />
            </ModalClose>
        </BookmarkModalWrapper>
    );
}
