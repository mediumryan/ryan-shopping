'use client';

import ProductPurchaseInfo from './ProductPurchaseInfo/ProductPurchaseInfo';
import ProductTabs from './ProductTabs/ProductTabs';
import { productsAtom } from '@/data/product';
import { useRecoilValue } from 'recoil';

export default function ProductWrapper({ productId }: { productId: string }) {
  const productList = useRecoilValue(productsAtom);
  const data = productList.find((product) => product.id === Number(productId));

  return (
    <div>
      {/* 제품 구매 정보 */}
      <ProductPurchaseInfo data={data} />
      {/* 제품 구매 탭 - 5개 화면 */}
      <ProductTabs data={data} />
    </div>
  );
}
