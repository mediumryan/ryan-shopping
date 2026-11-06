'use client';

import { Loader2 } from 'lucide-react';

interface GlobalLoaderProps {
  message?: string;
}

export function GlobalLoader({ message }: GlobalLoaderProps) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      <Loader2 className="h-8 w-8 animate-spin text-green-700 md:h-10 md:w-10" />
      {message && (
        <p className="mt-4 text-sm text-gray-500 animate-pulse">{message}</p>
      )}
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="flex h-[calc(100vh-72px)] w-full flex-col items-center justify-center bg-white">
      <Loader2 className="h-8 w-8 animate-spin text-green-700 md:h-10 md:w-10" />
      <p className="mt-3 text-sm text-gray-400 animate-pulse">Loading...</p>
    </div>
  );
}