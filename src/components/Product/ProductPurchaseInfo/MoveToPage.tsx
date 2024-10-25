import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { moveToPageOpenAtom } from '@/data/common';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

interface IMoveToPageProps {
  submitStatus: string;
}

export default function MoveToPage({ submitStatus }: IMoveToPageProps) {
  const [open, setOpen] = useRecoilState(moveToPageOpenAtom);

  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[320px]">
        <DialogHeader>
          <DialogTitle>
            {submitStatus === 'cart'
              ? '상품이 장바구니에 추가되었습니다.'
              : '상품이 즐겨찾기 추가되었습니다.'}
          </DialogTitle>
          <DialogDescription>
            {submitStatus === 'cart'
              ? '장바구니 페이지로 이동하시겠어요?'
              : '즐겨찾기 페이지로 이동하시겠어요?'}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Link href={submitStatus === 'cart' ? '/cart' : '/bookmark'}>
              <Button>이동</Button>
            </Link>
            <Button className="ml-1">아뇨</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
