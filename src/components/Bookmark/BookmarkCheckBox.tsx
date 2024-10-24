import { Checkbox } from '../ui/checkbox';
import { useRecoilState } from 'recoil';
import { bookmarkAtom, BookmarkType } from '@/data/bookmark';

export default function BookmarkCheckBox({ item }: { item: BookmarkType }) {
  const [bookmark, setBookmark] = useRecoilState(bookmarkAtom);
  const itemIndex = bookmark.findIndex((b) => b.id === item.id);

  const handleCheckBox = () => {
    setBookmark((prev) => {
      const newBookmark = [...prev];
      const updatedItem = {
        ...newBookmark[itemIndex],
        isChecked: !newBookmark[itemIndex].isChecked,
      };
      newBookmark[itemIndex] = updatedItem;
      return newBookmark;
    });
  };

  return <Checkbox onCheckedChange={handleCheckBox} checked={item.isChecked} />;
}
