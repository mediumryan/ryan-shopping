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
  id: string;
  pw: string;
};

const signInInputStyle = 'border-b-2 p-2 focus:outline-green-700';

export const swalCustomSubmitBtnStyle = {
  confirmButton: 'bg-transparent text-gray-400 shadow-md',
  popup: `w-[320px] ${notoSansJP.className}`,
};

export default function SignInForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    Swal.fire({
      text: `Welcome, ${data.id}! This portfolio demo does not require authentication.`,
      icon: 'success',
      customClass: swalCustomSubmitBtnStyle,
    }).then(() => router.push('/'));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mt-8 w-3/4 md:w-1/2"
    >
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
      {/* submit button */}
      <Button type="submit">Sign in</Button>
      {/* footer ( sign-up / find pw ) */}
      <div className="flex items-center justify-between">
        <Link
          href="sign-up"
          className="text-xs text-gray-400 underline hover:text-green-700 duration-300"
        >
          Sign up
        </Link>
        <Link
          href="find-pw"
          className="text-xs text-gray-400 underline hover:text-green-700 duration-300"
        >
          forget your password?
        </Link>
      </div>
    </form>
  );
}
