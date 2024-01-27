import { useRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';
// import components
import { CartInner } from './Cart';
import { PageTitle, PageWrapper } from './Mans';
import BookmarkItem from '../Components/Bookmark/BookmarkItem';
import BookmarkButtons from '../Components/Bookmark/BookmarkButtons';
// import state data
import { bookmarkModalState, bookmarkState } from '../data/bookmark';
import BookmarkDeleteModal from '../Components/Bookmark/BookmarkDeleteModal';

export default function Bookmark() {
    const [bookmark, setBookmark] = useRecoilState(bookmarkState);
    const bookmarkModal = useRecoilValue(bookmarkModalState);
    const [allCheckState, setAllCheckState] = useState(false);

    // handle all check
    const toggleAllCheck = () => {
        setAllCheckState(!allCheckState);
        if (allCheckState) {
            setBookmark((prev) => {
                const newBookmark = prev.map((item) => {
                    return { ...item, checked: false };
                });
                return newBookmark;
            });
        } else if (!allCheckState) {
            setBookmark((prev) => {
                const newBookmark = prev.map((item) => {
                    return { ...item, checked: true };
                });
                return newBookmark;
            });
        }
    };

    return (
        <PageWrapper style={{ position: 'relative' }}>
            <PageTitle>Bookmark</PageTitle>
            <CartInner>
                <table>
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    name="checkAll"
                                    id="checkAll"
                                    checked={allCheckState}
                                    onChange={toggleAllCheck}
                                />
                            </th>
                            <th>이미지</th>
                            <th>상품정보</th>
                            <th>판매가</th>
                            <th>수량</th>
                            <th>배송비</th>
                            <th>합계</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookmark.map((item, index) => {
                            return (
                                <BookmarkItem
                                    key={item.id}
                                    item={item}
                                    index={index}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </CartInner>
            <BookmarkButtons />
            {bookmarkModal && <BookmarkDeleteModal />}
        </PageWrapper>
    );
}
