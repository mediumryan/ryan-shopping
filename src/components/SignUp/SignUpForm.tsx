'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { Noto_Sans_JP } from 'next/font/google';
import ErrorMessage from '../ErrorMessage';

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
    setValue,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const signUp = async (params: IFormInput) => {
    const res = await fetch('/api/signUp', {
      method: 'POST',
      body: JSON.stringify(params),
    });
    if (res.ok) {
      const result = await res.json();
      if (result.status === 'ok') {
        Swal.fire({
          text: result.message,
          icon: 'success',
          customClass: swalCustomSubmitBtnStyle,
        });
        reset();
        router.push('/');
        router.refresh();
      } else {
        Swal.fire({
          text: result.message,
          icon: 'warning',
          customClass: swalCustomSubmitBtnStyle,
        });
        setValue('id', '');
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
      name: data.name,
      id: data.id,
      pw: data.pw,
      pw_check: data.pw_check,
      pw_key: data.pw_key,
    };
    signUp(params);
  };

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
