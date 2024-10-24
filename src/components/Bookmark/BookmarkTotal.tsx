'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  bookmarkTotalCountAtom,
  bookmarkTotalPriceAtom,
} from '@/data/bookmark';
import { useRecoilValue } from 'recoil';

export default function BookmarkTotal() {
  const totalCount = useRecoilValue(bookmarkTotalCountAtom);
  const totalPrice = useRecoilValue(bookmarkTotalPriceAtom);

  return (
    <Table className="text-[10px] md:text-base">
      <TableHeader>
        <TableRow className="bg-gray-200">
          <TableHead className="w-1/4 text-center">상품 수</TableHead>
          <TableHead className="w-1/4 text-center">상품 가격</TableHead>
          <TableHead className="w-1/4 text-center">배송비</TableHead>
          <TableHead className="w-1/4 text-center">총 합계</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="text-right bg-gray-100">
          <TableCell className="w-1/4 text-center">{totalCount} 개</TableCell>
          <TableCell className="w-1/4 text-center">
            {totalPrice.toLocaleString()} KRW
          </TableCell>
          <TableCell className="w-1/4 text-center">0 KRW</TableCell>
          <TableCell className="w-1/4 text-center">
            {totalPrice.toLocaleString()} KRW
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
