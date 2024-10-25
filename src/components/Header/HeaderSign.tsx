'use client';

import { UserType } from '@/app/layout';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PiSignOutBold } from 'react-icons/pi';
import Swal from 'sweetalert2';
import { swalCustomSubmitBtnStyle } from '../SignIn/SignInForm';

export default function HeaderSign({
  isSigned,
}: {
  isSigned: UserType | undefined;
}) {
  const router = useRouter();

  const signOut = async () => {
    const res = await fetch('/api/signOut');
    if (res.ok) {
      const result = await res.json();
      Swal.fire({
        text: result.message,
        icon: 'success',
        customClass: swalCustomSubmitBtnStyle,
      });
      router.push('/');
      router.refresh();
    }
  };

  return (
    <div className="flex items-center gap-4 cursor-pointer">
      {!isSigned ? (
        <Link href="sign-in">Sign in</Link>
      ) : (
        <PiSignOutBold onClick={signOut} />
      )}
    </div>
  );
}
