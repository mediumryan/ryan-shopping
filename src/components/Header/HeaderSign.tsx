'use client';
import { PiSignOutBold } from 'react-icons/pi';

export default function HeaderSign({ isSigned }: { isSigned: any }) {
  return (
    <div className="flex items-center gap-4 ">
      {isSigned ? <span>Sign in</span> : <PiSignOutBold />}
    </div>
  );
}
