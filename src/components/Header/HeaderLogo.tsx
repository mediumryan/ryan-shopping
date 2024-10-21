import { Diphylleia } from 'next/font/google';

const Diphylleia_fonts = Diphylleia({
  subsets: ['latin'],
  weight: ['400'],
});

export default function HeaderLogo() {
  return (
    <div>
      <h3
        className={`${Diphylleia_fonts.className} text-3xl`}
        style={{ fontWeight: '700' }}
      >
        Ryan Mall
      </h3>
    </div>
  );
}
