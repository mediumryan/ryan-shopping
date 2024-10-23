import React from 'react';
import ItemCard from './ItemCard';
import { ProductType } from '@/data/product';

interface IPageWrapperProps {
  data: ProductType[];
  page_category: string;
}

export default function PageWrapper({
  data,
  page_category,
}: IPageWrapperProps) {
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
