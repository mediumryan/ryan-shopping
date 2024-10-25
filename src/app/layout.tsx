import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header/Header';
import GoToTop from '@/components/GoToTop';
import RecoilProvider from './recoilProvider';
import { cookies } from 'next/headers';

export type UserType = {
  id: string;
  name: string;
};

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Ryan Mall',
    default: 'Home | Ryan Mall',
  },
  description: 'EC Site made by Ryan',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const user = cookieStore.get('user')?.value;
  const isSigned = user ? (JSON.parse(user as string) as UserType) : undefined;

  return (
    <html lang="en">
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RecoilProvider>
          <Header isSigned={isSigned} />
          {children}
          <GoToTop />
        </RecoilProvider>
      </body>
    </html>
  );
}
