'use client';

import BookmarkDeleteBtn from '@/components/Bookmark/BookmarkDeleteBtn';
import BookmarkMoveToCartBtn from '@/components/Bookmark/BookmarkMoveToCartBtn';
import BookmarkTable from '@/components/Bookmark/BookmarkTable';
import BookmarkTotal from '@/components/Bookmark/BookmarkTotal';
import MoveToCart from '@/components/Bookmark/MoveToCart';
import PageTitle from '@/components/common/PageTitle';

export default function BookmarkPage() {
  return (
    <div className="relative flex flex-col items-center gap-2 px-2 py-12 md:w-3/4 md:mx-auto">
      <PageTitle page_category="bookmark" />
      {/* 전체삭제 / 선택삭제 */}
      <BookmarkDeleteBtn />
      {/* 카트 테이블 */}
      <BookmarkTable />
      <p className="text-xs text-gray-400 w-full text-right my-1">
        * 상품명을 클릭시 이미지를 확인할 수 있습니다.
      </p>
      {/* 총 개수 및 금액 */}
      <BookmarkTotal />
      <p className="text-xs text-gray-400 w-full text-right my-1">
        * 체크된 상품의 정보만 표시됩니다.
      </p>
      {/* 결제하기 버튼 */}
      <BookmarkMoveToCartBtn />
      <MoveToCart />
    </div>
  );
}
