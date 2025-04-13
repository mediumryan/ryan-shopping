'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useRecoilState } from 'recoil';
import { Checkbox } from '@/components/ui/checkbox';
import { bookmarkAtom } from '@/data/bookmark';
import BookmarkCheckBox from './BookmarkCheckBox';
import { useEffect, useState } from 'react';
import BookmarkImagePopOver from './BookmarkImagePopOver';
import BookmarkItemCounter from './BookmarkItemCounter';

export default function BookmarkTable() {
  const [bookmark, setBookmark] = useRecoilState(bookmarkAtom);
  const [allStatus, setAllStatus] = useState(false);

  const selectAllBookmark = () => {
    if (!allStatus) {
      setBookmark((prev) => {
        return prev.map((item) => ({
          ...item,
          isChecked: true,
        }));
      });
    } else {
      setBookmark((prev) => {
        return prev.map((item) => ({
          ...item,
          isChecked: false,
        }));
      });
    }
  };

  useEffect(() => {
    if (bookmark.length > 0) {
      const allChecked = bookmark.every((item) => item.isChecked);
      setAllStatus(allChecked);
    } else {
      setAllStatus(false);
    }
  }, [bookmark]);

  return (
    <Table className="text-[10px] md:text-base">
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox
              onClick={selectAllBookmark}
              onCheckedChange={() => {
                setAllStatus((prev) => !prev);
              }}
              checked={allStatus}
            />
          </TableHead>
          <TableHead className="text-center">상품명</TableHead>
          <TableHead className="text-right">판매가</TableHead>
          <TableHead className="text-center">수량</TableHead>
          <TableHead>배송비</TableHead>
          <TableHead className="text-right">합계</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookmark.length > 0 ? (
          bookmark.map((item, index) => (
            <TableRow key={`bookmark-${item.id}-${index}`}>
              <TableCell>
                <BookmarkCheckBox item={item} />
              </TableCell>
              <TableCell className="min-w-[100px]">
                <BookmarkImagePopOver item={item} />
              </TableCell>
              <TableCell className="min-w-[100px] text-right">
                <p>{item.price.toLocaleString()} KWR</p>
              </TableCell>
              <TableCell className="min-w-[100px] text-center">
                <BookmarkItemCounter item={item} />
              </TableCell>
              <TableCell>FREE</TableCell>
              <TableCell className="min-w-[100px] text-right">
                {(item.price * item.count).toLocaleString()} KRW
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6}>즐겨찾기가 비어있어요.</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
