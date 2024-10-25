import CartDeleteBtn from '@/components/Cart/CartDeleteBtn';
import CartPurchaseBtn from '@/components/Cart/CartPurchaseBtn';
import CartTable from '@/components/Cart/CartTable';
import CartTotal from '@/components/Cart/CartTotal';
import PageTitle from '@/components/common/PageTitle';

export const metadata = {
  title: 'Cart',
};

export default function CartPage() {
  return (
    <div className="flex flex-col items-center gap-2 px-2 py-12 md:w-3/4 md:mx-auto">
      <PageTitle page_category="cart" />
      {/* 전체삭제 / 선택삭제 */}
      <CartDeleteBtn />
      {/* 카트 테이블 */}
      <CartTable />
      <p className="text-xs text-gray-400 w-full text-right my-1">
        * 상품명을 클릭시 이미지를 확인할 수 있습니다.
      </p>
      {/* 총 개수 및 금액 */}
      <CartTotal />
      <p className="text-xs text-gray-400 w-full text-right my-1">
        * 체크된 상품의 정보만 표시됩니다.
      </p>
      {/* 결제하기 버튼 */}
      <CartPurchaseBtn />
    </div>
  );
}
