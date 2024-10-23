'use client';

import ItemCard from '@/components/common/ItemCard';
import PageTitle from '@/components/common/PageTitle';
import PageWrapper from '@/components/common/PageWrapper';
import { productsAtom, ProductType } from '@/data/product';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

export default function LadiesPage() {
  const page_category = 'ladies';
  const productsData = useRecoilValue(productsAtom);
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    setData(() => {
      const topData = productsData.filter((a) =>
        a.category.includes(page_category)
      );
      return topData;
    });
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center px-4 pt-8 pb-12">
      <PageTitle page_category={page_category} />
      <PageWrapper data={data} page_category={page_category} />
    </div>
  );
}
