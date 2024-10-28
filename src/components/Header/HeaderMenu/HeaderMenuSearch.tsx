'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaCheck, FaMagnifyingGlass } from 'react-icons/fa6';

interface IFormInput {
  query: string;
}

interface IHeaderMenuSearchProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeaderMenuSearch({ setOpen }: IHeaderMenuSearchProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    router.push(`/search/${data.query}`);
    reset();
    setOpen(false);
  };

  useEffect(() => {
    setFocus('query');
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-gray-400 mb-12">
      <div className="flex items-center justify-center">
        <FaMagnifyingGlass />
        <span className="text-lg font-bold">상품검색</span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2"
      >
        <Input
          type="text"
          placeholder="ex) 셔츠"
          className="text-black"
          {...register('query', { required: true })}
        />
        {errors.query && <ErrorMessage message={errors.query.message} />}
        <Button variant="ghost" type="submit">
          <FaCheck />
        </Button>
      </form>
    </div>
  );
}
