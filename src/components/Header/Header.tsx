'use client';

import React, { useEffect, useRef, useState } from 'react';
import HeaderMenu from '@/components/Header/HeaderMenu/HeaderMenu';
import HeaderLogo from '@/components/Header/HeaderLogo';
import HeaderSign from '@/components/Header/HeaderSign';

export default function Header({ isSigned }: { isSigned: any }) {
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < prevScrollY.current) {
      setIsVisible(true);
    } else if (currentScrollY > 100) {
      setIsVisible(false);
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex items-center justify-between py-4 px-4 md:px-48 text-gray-400 bg-white sticky top-0 w-full z-40 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* menu */}
      <HeaderMenu isSigned={isSigned} />
      {/* logo */}
      <HeaderLogo />
      {/* sign */}
      <HeaderSign isSigned={isSigned} />
    </div>
  );
}
