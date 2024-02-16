'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { ComponentProps } from 'react';

type ModeToggleProps = ComponentProps<typeof Button>;

export function ModeToggle({
  variant = 'ghost',
  className,
  size = 'icon',
}: ModeToggleProps) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          className={cn('aurora-border', className)}
          size={size}
        >
          <Sun className="aurora-h-[1.2rem] aurora-w-[1.2rem] aurora-rotate-0 aurora-scale-100 aurora-transition-all dark:-aurora-rotate-90 dark:aurora-scale-0" />
          <Moon className="aurora-absolute aurora-h-[1.2rem] aurora-w-[1.2rem] aurora-rotate-90 aurora-scale-0 aurora-transition-all dark:aurora-rotate-0 dark:aurora-scale-100" />
          <span className="aurora-sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
