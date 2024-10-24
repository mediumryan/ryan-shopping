import { CartType } from '@/data/cart';
import Image from 'next/image';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useMediaQuery } from 'react-responsive';

export default function CartImagePopOver({ item }: { item: CartType }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Popover>
      <PopoverTrigger>{item.name}</PopoverTrigger>
      <PopoverContent className="w-full">
        <Image
          src={item.image_path}
          alt={item.name}
          width={isMobile ? 150 : 250}
          height={isMobile ? 150 : 250}
        />
      </PopoverContent>
    </Popover>
  );
}
