'use client';

import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

export default function GoToTop() {
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-[5%] md:bottom-[10%] right-[5%] cursor-pointer">
      <FaArrowCircleUp
        onClick={goToTop}
        className="w-8 h-8 md:w-10 md:h-10 text-gray-400 hover:text-gray-600 duration-300"
      />
    </div>
  );
}
