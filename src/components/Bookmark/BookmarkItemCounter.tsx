import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useRecoilState } from 'recoil';
import { bookmarkAtom, BookmarkType } from '@/data/bookmark';

const cartCounterBtnStyle = 'p-2 w-6 shadow-none';

export default function BookmarkItemCounter({ item }: { item: BookmarkType }) {
  const [bookmark, setBookmark] = useRecoilState(bookmarkAtom);
  const itemIndex = bookmark.findIndex((b) => b.id === item.id);

  const plusCount = () => {
    setBookmark((prev) => {
      const newBookmark = [...prev];
      const updatedItem = {
        ...newBookmark[itemIndex],
        count: newBookmark[itemIndex].count + 1,
      };
      newBookmark[itemIndex] = updatedItem;
      return newBookmark;
    });
  };

  const minusCount = () => {
    if (item.count > 0) {
      setBookmark((prev) => {
        const newBookmark = [...prev];
        const updatedItem = {
          ...newBookmark[itemIndex],
          count: newBookmark[itemIndex].count - 1,
        };
        newBookmark[itemIndex] = updatedItem;
        return newBookmark;
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
