'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

type NavbarLinkProps = ComponentProps<typeof Link>;

export function NavbarLink({
  href,
  className,
  children,
  ...props
}: NavbarLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      scroll
      className={cn(
        'aurora-p-2 aurora',
        className,
        href === pathname ? 'aurora-bg-primary/10' : '',
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
