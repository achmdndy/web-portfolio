'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import { HiMenu } from 'react-icons/hi';
import { IoLogoGithub } from 'react-icons/io5';

export function NavbarMenuMobile() {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="aurora-border" size="icon">
          <HiMenu />
          <span className="aurora-sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => router.push('/')}>
          About
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push('/works')}>
          Works
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push('/posts')}>
          Posts
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            router.push('https://github.com/achmdndy/web-portfolio-v1')
          }
          className="aurora-inline-flex aurora-items-center aurora-gap-x-2"
        >
          <IoLogoGithub />
          Source
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
