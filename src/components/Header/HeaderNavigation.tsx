import { navigationData } from '@/data/header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderNavigation() {
  const pathName = usePathname();

  return (
    <nav className="flex flex-wrap gap-4">
      {navigationData.map((data) => {
        return (
          <div
            key={`navigation-${data.id}`}
            className="group text-xs md:text-sm"
          >
            <Link
              href={`/${data.value}`}
              className="italic group-hover:text-black duration-300"
            >
              {data.value.toUpperCase()}
            </Link>
            {pathName === `/${data.value}` && (
              <div className="w-full h-[2px] bg-gray-400 group-hover:bg-black duration-300" />
            )}
          </div>
        );
      })}
    </nav>
  );
}
