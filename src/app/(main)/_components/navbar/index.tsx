import { ModeToggle } from '@/components/mode-toggle';
import { IoLogoGithub } from 'react-icons/io5';
import { NavbarLink } from './navbar-link';
import { NavbarLogo } from './navbar-logo';
import { NavbarMenuMobile } from './navbar-menu-mobile';

export function Navbar() {
  return (
    <nav className="aurora-fixed aurora-w-full aurora-bg-background/95 aurora-backdrop-blur supports-[backdrop-filter]:aurora-bg-background/60 aurora-z-[100]">
      <div className="aurora-flex aurora-flex-wrap aurora-items-center aurora-justify-between aurora-p-2 aurora-max-w-[768px] aurora-mx-auto">
        <div className="aurora-flex aurora-items-center aurora-mr-5">
          <h1 className="aurora-text-lg aurora-tracking-tighter">
            <NavbarLogo />
          </h1>
        </div>

        <div className="aurora-hidden md:aurora-flex aurora-w-auto aurora-mt-0 aurora-flex-row aurora-items-center aurora-gap-4">
          <NavbarLink href={'/works'}>Works</NavbarLink>
          <NavbarLink href={'/posts'}>Posts</NavbarLink>
          <NavbarLink
            href={'https://github.com/achmdndy/web-portfolio-v1'}
            target="_blank"
            className="aurora-inline-flex aurora-items-center aurora-gap-x-2"
          >
            <IoLogoGithub />
            Source
          </NavbarLink>
        </div>

        <div className="aurora-flex aurora-items-end aurora-gap-x-2">
          <ModeToggle />

          <div className="aurora-inline-block md:aurora-hidden">
            <NavbarMenuMobile />
          </div>
        </div>
      </div>
    </nav>
  );
}
