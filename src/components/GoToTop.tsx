'use client';

import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-[5%] md:bottom-[10%] right-[5%] cursor-pointer duration-500 origin-center ${
        isVisible ? 'scale-100' : 'scale-0'
      }`}
    >
      <FaArrowCircleUp
        onClick={goToTop}
        className="w-8 h-8 md:w-10 md:h-10 text-gray-400 hover:text-gray-600 duration-300"
      />
    </div>
  );
}

export default React.memo(GoToTop);
