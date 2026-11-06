import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { productsAtom, ProductType } from '@/data/product';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { imageBlurDataUrl } from '@/lib/utils';

export default function TabsRelatedItems({ category }: { category: string[] }) {
  const productList = useRecoilValue(productsAtom);
  const [data, setData] = useState<ProductType[]>([productList[0]]);

  useEffect(() => {
    setData(() => {
      const filteredData = productList.filter((p) =>
        p.category.some((cat) => category.includes(cat))
      );
      return filteredData.reverse();
    });
  }, [category, productList]);

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full max-w-[70%] mx-auto"
    >
      <CarouselContent>
        {data.map((item) => (
          <CarouselItem
            key={`related-item-${item.id}`}
            className="relative h-[300px] md:basis-1/3"
          >
            <div className="p-1">
              <Card className="hover:opacity-85 duration-300">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Link
                    href={`/product-detail/${item.id}`}
                    className="relative block w-full h-full"
                  >
                    <Image
                      src={item.image_path}
                      alt={item.name}
                      fill
                      sizes="(min-width: 768px) 23vw, 90vw"
                      placeholder="blur"
                      blurDataURL={imageBlurDataUrl}
                      className="object-contain"
                    />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
