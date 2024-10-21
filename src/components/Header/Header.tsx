import React from 'react';
import HeaderMenu from '@/components/Header/HeaderMenu/HeaderMenu';
import HeaderLogo from '@/components/Header/HeaderLogo';
import HeaderSign from '@/components/Header/HeaderSign';
import { cookies } from 'next/headers';

export default function Header() {
  const cookieStore = cookies();
  const isSigned = cookieStore.get('isSigned');

  return (
    <div className="flex items-center justify-between py-4 px-4 md:px-48 text-gray-400">
      {/* menu */}
      <HeaderMenu isSigned={isSigned} />
      {/* logo */}
      <HeaderLogo />
      {/* sign */}
      <HeaderSign isSigned={isSigned} />
    </div>
  );
}
