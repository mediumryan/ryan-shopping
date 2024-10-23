'use client';

import { useEffect, useState } from 'react';
import ProductPurchaseInfo from './ProductPurchaseInfo/ProductPurchaseInfo';
import ProductTabs from './ProductTabs/ProductTabs';
import { productsAtom, ProductType } from '@/data/product';
import { useRecoilValue } from 'recoil';

export default function ProductWrapper({ productId }: { productId: string }) {
  const productList = useRecoilValue(productsAtom);
  const [data, setData] = useState<ProductType>(productList[0]);

  useEffect(() => {
    setData((prev) => {
      const product = productList.find((p) => p.id === Number(productId));
      if (product) {
        return product;
      } else return prev;
    });
  }, []);

  return (
    <div>
      {/* 제품 구매 정보 */}
      <ProductPurchaseInfo data={data} />
      {/* 제품 구매 탭 - 5개 화면 */}
      <ProductTabs data={data} />
    </div>
  );
}
