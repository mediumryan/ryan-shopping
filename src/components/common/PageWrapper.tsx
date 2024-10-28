'use client';

import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import { productsAtom, ProductType } from '@/data/product';
import { useRecoilValue } from 'recoil';

interface IPageWrapperProps {
  page_category: string;
  isSearch?: boolean;
}

export default function PageWrapper({
  page_category,
  isSearch,
}: IPageWrapperProps) {
  const productsData = useRecoilValue(productsAtom);
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    setData(() => {
      if (isSearch) {
        const filteredData = productsData.filter((a) =>
          a.name.includes(page_category)
        );
        return filteredData;
      } else {
        const filteredData = productsData.filter((a) =>
          a.category.includes(page_category)
        );
        return filteredData;
      }
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
