import { Button } from '@/components/ui/button';
import { linksData, LinkType } from '@/data/header';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const btnStyle = 'w-full';

interface IHeaderMenuLinkProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeaderMenuLink({
  setOpen,
}: IHeaderMenuLinkProps) {
  const closeMenu = () => {
    setOpen(false);
  };

  const [links, setLinks] = useState<LinkType[] | null>(null);

  useEffect(() => {
    setLinks(linksData);
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
