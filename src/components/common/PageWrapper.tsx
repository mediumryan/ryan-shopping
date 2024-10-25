'use client';

import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import { productsAtom, ProductType } from '@/data/product';
import { useRecoilValue } from 'recoil';

interface IPageWrapperProps {
  page_category: string;
}

export default function PageWrapper({ page_category }: IPageWrapperProps) {
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
    <div className="grid grid-cols-2 md:grid-cols-4 md:w-3/4 gap-4">
      {data.length > 0 && (
        <>
          {data.map((item) => {
            return <ItemCard key={`${page_category}-${item.id}`} item={item} />;
          })}
        </>
      )}
    </div>
  );
}
