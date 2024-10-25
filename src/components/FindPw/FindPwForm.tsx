'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Noto_Sans_JP } from 'next/font/google';
import { useRouter } from 'next/navigation';

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

type IFormInput = {
  id: string;
  pw_key: string;
};

const signInInputStyle = 'border-b-2 p-2 focus:outline-green-700';

export const swalCustomSubmitBtnStyle = {
  confirmButton: 'bg-transparent text-gray-400 shadow-md',
  popup: `w-[320px] ${notoSansJP.className}`,
};

export default function FindPwForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>();

  const findPw = async (params: IFormInput) => {
    const res = await fetch('/api/findPw', {
      method: 'POST',
      body: JSON.stringify(params),
    });

    if (res.ok) {
      const result = await res.json();
      if (result.status === 'ok') {
        setValue('id', '');
        setValue('pw_key', '');
        Swal.fire({
          text: result.message,
          icon: 'success',
          customClass: swalCustomSubmitBtnStyle,
          confirmButtonText: '로그인',
          cancelButtonText: 'OK',
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            router.push('/sign-in');
            router.refresh();
          }
        });
      } else if (result.status === 'id') {
        setValue('id', '');
        setValue('pw_key', '');
        Swal.fire({
          text: result.message,
          icon: 'warning',
          customClass: swalCustomSubmitBtnStyle,
        });
      } else {
        setValue('pw_key', '');
        Swal.fire({
          text: result.message,
          icon: 'warning',
          customClass: swalCustomSubmitBtnStyle,
        });
      }
    } else {
      const error = await res.json();
      Swal.fire({
        text: error.message,
        icon: 'warning',
        customClass: swalCustomSubmitBtnStyle,
      });
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const params = {
      id: data.id,
      pw_key: data.pw_key,
    };
    findPw(params);
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
      {errors.id && <span>This field is required</span>}
      {/* pw key */}
      <input
        type="text"
        placeholder="PW Key"
        className={signInInputStyle}
        {...register('pw_key', { required: true })}
      />
      {errors.pw_key && <span>This field is required</span>}
      {/* submit button */}
      <Button type="submit">Find</Button>
      {/* footer ( sign-up / find pw ) */}
      <div className="flex items-center justify-between">
        <Link
          href="sign-up"
          className="text-xs text-gray-400 underline hover:text-green-700 duration-300"
        >
          Sign up
        </Link>
        <Link
          href="sign-in"
          className="text-xs text-gray-400 underline hover:text-green-700 duration-300"
        >
          Sign in
        </Link>
      </div>
    </form>
  );
}
