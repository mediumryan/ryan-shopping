import { BookmarkType } from '@/data/bookmark';
import Image from 'next/image';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { imageBlurDataUrl } from '@/lib/utils';

export default function BookmarkImagePopOver({ item }: { item: BookmarkType }) {
  return (
    <Popover>
      <PopoverTrigger>{item.name}</PopoverTrigger>
      <PopoverContent className="w-full">
        <div className="relative h-[150px] w-[150px] md:h-[250px] md:w-[250px]">
          <Image
            src={item.image_path}
            alt={item.name}
            fill
            sizes="(min-width: 768px) 250px, 150px"
            placeholder="blur"
            blurDataURL={imageBlurDataUrl}
            className="object-contain"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
