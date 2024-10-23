import Image from 'next/image';
import React from 'react';
import { Badge } from '../ui/badge';
import { ProductType } from '@/data/product';
import Link from 'next/link';

export default function ItemCard({ item }: { item: ProductType }) {
  return (
    <Link
      href={`product-detail/${item.id}`}
      className="bg-gray-50 flex flex-col justify-center items-center gap-2 rounded-md overflow-hidden shadow-md hover:-translate-y-4 hover:opacity-90 duration-300"
    >
      <div className="relative w-full h-48">
        <Image src={item.image_path} alt={item.name} fill={true} sizes="100%" />
        {item.discounted && (
          <Badge className="absolute top-2 right-2 opacity-50">
            {(item.discounted * 100).toFixed()}%
          </Badge>
        )}
      </div>
      <div className="grid grid-rows-5 justify-center items-center h-28 text-sm text-gray-400 px-4 pt-2 gap-2">
        <p className="row-span-2 font-bold max-h-10 line-clamp-2">
          {item.name}
        </p>
        <p className="row-span-1 line-through italic">
          {item.price.toLocaleString()} KRW
        </p>
        <p className="row-span-1 text-green-700">
          {item.discounted
            ? `${(item.price * (1 - item.discounted)).toLocaleString()} KRW`
            : `${item.price.toLocaleString()} KRW`}
        </p>
      </div>
    </Link>
  );
}
