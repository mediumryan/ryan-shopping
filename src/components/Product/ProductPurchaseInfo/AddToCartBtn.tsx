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
import { useRecoilState } from 'recoil';
import { cartAtom } from '@/data/cart';
import { ProductType } from '@/data/product';

interface IAddToCartBtnProps {
  data: ProductType;
  color: string;
  size: string;
  count: number;
}

export const submitButtonStyle = 'w-32';

export default function AddToCartBtn({
  data,
  color,
  size,
  count,
}: IAddToCartBtnProps) {
  const [cart, setCart] = useRecoilState(cartAtom);

  const addToCart = () => {
    setCart((preCart) => {
      const newCart = [...preCart];
      // 이미 해당 아이템이 존재한다면 카운트만 증가
      const alreadyExistItem = newCart.findIndex(
        (c) => c.id === data.id && c.color === color && c.size === size
      );

      if (alreadyExistItem !== -1) {
        const updatedItem = {
          ...newCart[alreadyExistItem],
          count: newCart[alreadyExistItem].count + count,
        };
        newCart[alreadyExistItem] = updatedItem;
      }
      // 존재하지 않는다면 새롭게 추가
      else {
        const newItem = {
          id: data.id,
          name: data.name,
          price: data.price,
          discounted: (1 - data.discounted).toFixed(),
          size: size,
          color: color,
          image_path: data.image_path,
          count: count,
        };
        return [...newCart, newItem];
      }
      return newCart;
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={submitButtonStyle}>장바구니에 추가</Button>
      </DialogTrigger>
      <DialogContent className="w-[320px] rounded-md">
        <DialogHeader>
          <DialogTitle>장바구니에 추가하시겠어요?</DialogTitle>
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
