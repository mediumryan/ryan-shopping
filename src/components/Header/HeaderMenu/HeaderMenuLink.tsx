import { UserType } from '@/app/layout';
import { Button } from '@/components/ui/button';
import { linksData, LinkType } from '@/data/header';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const btnStyle = 'w-full';

interface IHeaderMenuLinkProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSigned: UserType | undefined;
}

export default function HeaderMenuLink({
  setOpen,
  isSigned,
}: IHeaderMenuLinkProps) {
  const closeMenu = () => {
    setOpen(false);
  };

  const [links, setLinks] = useState<LinkType[] | null>(null);

  useEffect(() => {
    if (isSigned) {
      const newLinks = linksData.filter(
        (item) => item.id !== 1 && item.id !== 2
      );
      setLinks(newLinks);
    } else {
      setLinks(linksData);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-2 text-gray-400">
      {links?.map((item) => {
        return (
          <Button
            key={`header-links-${item.id}`}
            onClick={closeMenu}
            className={btnStyle}
            variant="ghost"
          >
            <Link href={item.link}>{item.value}</Link>
          </Button>
        );
      })}
    </div>
  );
}
