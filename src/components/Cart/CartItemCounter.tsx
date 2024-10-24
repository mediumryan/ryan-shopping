import { cartAtom, CartType } from '@/data/cart';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useRecoilState } from 'recoil';

const cartCounterBtnStyle = 'p-2 w-6 shadow-none';

export default function CartItemCounter({ item }: { item: CartType }) {
  const [cart, setCart] = useRecoilState(cartAtom);
  const itemIndex = cart.findIndex((c) => c.id === item.id);

  const plusCount = () => {
    setCart((prev) => {
      const newCart = [...prev];
      const updatedItem = {
        ...newCart[itemIndex],
        count: newCart[itemIndex].count + 1,
      };
      newCart[itemIndex] = updatedItem;
      return newCart;
    });
  };

  const minusCount = () => {
    if (item.count > 0) {
      setCart((prev) => {
        const newCart = [...prev];
        const updatedItem = {
          ...newCart[itemIndex],
          count: newCart[itemIndex].count - 1,
        };
        newCart[itemIndex] = updatedItem;
        return newCart;
      });
    } else return;
  };

  return (
    <div className="flex items-center justify-center gap-1">
      <Button className={cartCounterBtnStyle} onClick={minusCount}>
        -
      </Button>
      <Input className="w-12 text-center" type="text" value={item.count} />
      <Button className={cartCounterBtnStyle} onClick={plusCount}>
        +
      </Button>
    </div>
  );
}
