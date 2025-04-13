import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

interface IProductCounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProductCounter({
  count,
  setCount,
}: IProductCounterProps) {
  const plusCount = () => {
    setCount((pre) => pre + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((pre) => pre - 1);
    } else return;
  };

  return (
    <div className="flex items-center gap-1">
      <Button type="button" className="font-bold" onClick={minusCount}>
        -
      </Button>
      <Input type="text" className="w-12 text-center" value={count} readOnly />
      <Button type="button" className="font-bold" onClick={plusCount}>
        +
      </Button>
    </div>
  );
}
