'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { Noto_Sans_JP } from 'next/font/google';
import ErrorMessage from '../ErrorMessage';
import { useEffect } from 'react';

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

type IFormInput = {
  name: string;
  id: string;
  pw: string;
  pw_check: string;
  pw_key: string;
};

const signInInputStyle = 'border-b-2 p-2 focus:outline-green-700';

export const swalCustomSubmitBtnStyle = {
  confirmButton: 'bg-transparent text-gray-400 shadow-md',
  popup: `w-[320px] ${notoSansJP.className}`,
};

export default function SignUpForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setFocus,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    reset();
    Swal.fire({
      text: `Thanks, ${data.name}! This portfolio demo does not store accounts.`,
      icon: 'success',
      customClass: swalCustomSubmitBtnStyle,
    }).then(() => router.push('/'));
  };

  useEffect(() => {
    setFocus('name');
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mt-8 w-3/4 md:w-1/2"
    >
      {/* name */}
      <input
        type="text"
        placeholder="Name"
        className={signInInputStyle}
        {...register('name', { required: true })}
      />
      {errors.name && <ErrorMessage message={errors.name.message} />}
      {/* id */}
      <input
        type="text"
        placeholder="ID"
        className={signInInputStyle}
        {...register('id', { required: true })}
      />
      {errors.id && <ErrorMessage message={errors.id.message} />}
      {/* pw */}
      <input
        type="password"
        placeholder="PW"
        className={signInInputStyle}
        {...register('pw', { required: true })}
      />
      {errors.pw && <ErrorMessage message={errors.pw.message} />}
      {/* pw check */}
      <input
        type="password"
        placeholder="PW Check"
        className={signInInputStyle}
        {...register('pw_check', {
          required: true,
          validate: (value) =>
            value === watch('pw') || '값이 일치하지 않습니다.',
        })}
      />
      {errors.pw_check && <ErrorMessage message={errors.pw_check.message} />}
      {/* pw key */}
      <input
        type="text"
        placeholder="The key for finding password"
        className={signInInputStyle}
        {...register('pw_key', { required: true })}
      />
      {errors.pw_key && <ErrorMessage message={errors.pw_key.message} />}
      {/* submit button */}
      <Button type="submit">Sign Up</Button>
    </form>
  );
}
