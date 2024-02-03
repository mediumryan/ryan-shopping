import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import components
import { CartInner } from './Cart';
import { PageTitle, PageWrapper } from './Mans';
import BookmarkItem from '../Components/Bookmark/BookmarkItem';
import BookmarkButtons from '../Components/Bookmark/BookmarkButtons';
// import state data
import { bookmarkState } from '../data/bookmark';
import { isSignedState } from '../data/signIn';

export default function Bookmark() {
    const [bookmark, setBookmark] = useRecoilState(bookmarkState);
    const [allCheckState, setAllCheckState] = useState(false);
    const isSigned = useRecoilValue(isSignedState);

    // check user log in
    const navigate = useNavigate();
    useEffect(() => {
        if (!isSigned) {
            Swal.fire({
                title: '로그인이 필요합니다',
                showDenyButton: true,
                confirmButtonText: '로그인 페이지로',
                denyButtonText: `뒤로가기`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    navigate('/sign-in');
                } else if (result.isDenied) {
                    navigate(-1);
                }
            });
        }
    }, []);

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

    // sort items
    const sortedData = [...bookmark].sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });

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
                        {sortedData.map((item, index) => {
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
        </PageWrapper>
    );
}
