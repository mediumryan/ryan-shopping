'use client';

import { productsAtom, ProductType } from '@/data/product';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

interface IHomeCardProps {
  filter: string;
  title: string;
}

export default function HomeCard({ filter, title }: IHomeCardProps) {
  const [product, setProduct] = useRecoilState(productsAtom);
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    if (filter === 'outer') {
      const newData = product
        .filter((d) => d.category.includes(filter))
        .slice(5, 9);
      setData(newData);
    } else {
      const newData = product
        .filter((d) => d.category.includes(filter))
        .slice(0, 4);
      setData(newData);
    }
  }, []);

  return (
    <div className="group relative grid grid-cols-2 grid-rows-2 items-center p-2 h-[360px] md:min-h-[720px] rounded-md overflow-hidden">
      {data.map((item) => {
        return (
          <div key={`home-${title}-${item.id}`} className="h-[75%]">
            <img src={item.image_path} alt={item.name} className="h-full" />
          </div>
        );
      })}
      <Link
        href={`/${filter}`}
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white font-bold text-3xl bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 duration-300"
      >
        {title}
      </Link>
    </div>
  );
}
