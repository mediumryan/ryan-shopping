'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProductType } from '@/data/product';
import Image from 'next/image';
import React, { useState } from 'react';
import { PiStarThin } from 'react-icons/pi';
import { ColorToggle } from './ColorToggle';
import { SizeToggle } from './SizeToggle';
import ProductCounter from './ProductCounter';
import AddToCartBtn from './AddToCartBtn';
import AddToBookmarkBtn from './AddToBookmarkBtn';

const subItemWrapperStyle = 'grid grid-cols-12 items-center';

export function HorizontalLine() {
  return <div className="w-full h-[2px] bg-gray-200" />;
}

function ProductPurchaseInfo({ data }: { data: ProductType }) {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [count, setCount] = useState(0);

  return (
    <>
      {data && (
        <div className="flex flex-col items-center md:flex-row md:w-4/5 md:mx-auto gap-4 md:space-x-12 px-8 md:px-24">
          {/* 이미지 */}
          <div className="relative w-full md:min-w-[500px] md:max-w-[500px] h-96 md:h-[500px] rounded-md overflow-hidden">
            <Image
              src={data.image_path}
              alt={data.name}
              fill={true}
              sizes="100%"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            {/* 타이틀 */}
            <p className="font-bold">{data.name}</p>
            <HorizontalLine />
            <div className="flex flex-col gap-4 w-full ml-4 text-sm text-gray-400">
              {/* 소비자가 */}
              <div className={subItemWrapperStyle}>
                <h4 className="col-span-2">소비자가</h4>
                <p className="col-span-4 line-through italic">
                  {data.price.toLocaleString()} KRW
                </p>
              </div>
              {/* 판매가 */}
              <div className={subItemWrapperStyle}>
                <h4 className="col-span-2">판매가</h4>
                <p className="col-span-4 text-green-700">
                  {(data.price * (1 - data.discounted)).toLocaleString()} KRW
                </p>
                {data.discounted > 0 && (
                  <Badge className="w-20 bg-red-500">
                    {(data.discounted * 100).toFixed()}% OFF
                  </Badge>
                )}
              </div>
              <HorizontalLine />
              {/* 색상 */}
              <div className={subItemWrapperStyle}>
                <h4 className="col-span-2">색상</h4>
                {/* 색상 토글 */}
                <ColorToggle data={data} color={color} setColor={setColor} />
                <input type="hidden" name="color" value={color} />
              </div>
              {/* 사이즈 */}
              <div className={subItemWrapperStyle}>
                <h4 className="col-span-2">사이즈</h4>
                {/* 사이즈 토글 */}
                <SizeToggle data={data} size={size} setSize={setSize} />
                <input type="hidden" name="size" value={size} />
              </div>
              <HorizontalLine />
              {/* 최소 주문량 / 개수 */}
              <div className="flex items-center justify-between">
                <h4 className="text-black">최소주문수량 1개 이상</h4>
                {/* 개수 조절 input */}
                <ProductCounter count={count} setCount={setCount} />
                <input type="hidden" name="count" value={count} />
              </div>
              <HorizontalLine />
              {/* 총 가격 / 개수 */}
              <div
                className={`flex items-center justify-end text-green-700 font-bold origin-left duration-300 ${
                  color && size && count > 0 ? 'scale-100' : 'scale-0'
                }`}
              >
                <p>
                  Total :{' '}
                  {(
                    data.price *
                    (1 - data.discounted) *
                    count
                  ).toLocaleString()}{' '}
                  KRW
                </p>
              </div>
              <HorizontalLine />
              {/* 버튼 (장바구니에 추가 / 북마크에 추가) */}
              <div
                className={`flex items-center justify-end gap-2 origin-left duration-300 ${
                  color && size && count > 0 ? 'scale-100' : 'scale-0'
                }`}
              >
                <AddToCartBtn
                  data={data}
                  color={color}
                  size={size}
                  count={count}
                />
                <AddToBookmarkBtn
                  data={data}
                  color={color}
                  size={size}
                  count={count}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default React.memo(ProductPurchaseInfo);
