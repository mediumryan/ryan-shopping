import { Diphylleia } from 'next/font/google';
import Link from 'next/link';

const Diphylleia_fonts = Diphylleia({
  subsets: ['latin'],
  weight: ['400'],
});

export default function HeaderLogo() {
  return (
    <div>
      <Link href="/">
        <h3
          className={`${Diphylleia_fonts.className} text-2xl md:text-3xl`}
          style={{ fontWeight: '700' }}
        >
          Ryan Mall
        </h3>
      </Link>
    </div>
  );
}
