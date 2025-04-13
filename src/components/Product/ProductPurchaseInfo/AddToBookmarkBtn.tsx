import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { HorizontalLine } from './ProductPurchaseInfo';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { ProductType } from '@/data/product';
import { bookmarkAtom } from '@/data/bookmark';
import { IoStar } from 'react-icons/io5';
import { moveToPageOpenAtom } from '@/data/common';
import { useEffect, useState } from 'react';

interface IAddToBookmarkBtnProps {
  data: ProductType;
  color: string;
  size: string;
  count: number;
  setSubmitStatus: React.Dispatch<React.SetStateAction<string>>;
}

export const submitButtonStyle = 'w-32';

export default function AddToBookmarkBtn({
  data,
  color,
  size,
  count,
  setSubmitStatus,
}: IAddToBookmarkBtnProps) {
  const [bookmark, setBookmark] = useRecoilState(bookmarkAtom);
  const setOpen = useSetRecoilState(moveToPageOpenAtom);
  let [iconColor, setIconColor] = useState('text-gray-400');

  const addToCart = () => {
    setSubmitStatus('bookmark');
    setOpen(true);
    setBookmark((preBookmark) => {
      const newBookmark = [...preBookmark];
      // 이미 해당 아이템이 존재한다면 카운트만 증가
      const alreadyExistItem = newBookmark.findIndex(
        (b) => b.id === data.id && b.color === color && b.size === size
      );

      if (alreadyExistItem !== -1) {
        const updatedItem = {
          ...newBookmark[alreadyExistItem],
          count: newBookmark[alreadyExistItem].count + count,
        };
        newBookmark[alreadyExistItem] = updatedItem;
      }
      // 존재하지 않는다면 새롭게 추가
      else {
        const newItem = {
          id: Number(new Date()),
          name: data.name,
          price: data.price,
          size: size,
          color: color,
          image_path: data.image_path,
          count: count,
          isChecked: false,
        };
        return [...newBookmark, newItem];
      }

      return newBookmark;
    });
  };

  useEffect(() => {
    if (bookmark.length > 0) {
      const alreadyExistItem = bookmark.findIndex((b) => b.name === data.name);

      console.log('bookmark', bookmark);
      console.log('data', data);
      if (alreadyExistItem !== -1) {
        setIconColor('text-green-400');
      } else {
        setIconColor('text-gray-400');
      }
    }
  }, [bookmark]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={submitButtonStyle}>
          <IoStar className={iconColor} />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[320px] rounded-md">
        <DialogHeader>
          <DialogTitle>즐겨찾기에 추가하시겠어요?</DialogTitle>
          <DialogDescription>추가하려면 OK버튼을 눌러주세요.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 text-sm">
          <div className="grid grid-cols-6">
            <p className="col-span-2">상품명</p>
            <p className="col-span-4">{data.name}</p>
          </div>
          <HorizontalLine />
          <div className="grid grid-cols-6">
            <p className="col-span-2">색상</p>
            <p className="col-span-4">{color}</p>
          </div>
          <HorizontalLine />
          <div className="grid grid-cols-6">
            <p className="col-span-2">사이즈</p>
            <p className="col-span-4">{size}</p>
          </div>
          <HorizontalLine />
          <div className="grid grid-cols-6">
            <p className="col-span-2">개수</p>
            <p className="col-span-4">{count}</p>
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button className={submitButtonStyle} onClick={addToCart}>
              OK
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
