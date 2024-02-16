import Link from 'next/link';
import { HiAtSymbol } from 'react-icons/hi';

export function NavbarLogo() {
  return (
    <Link href="/" scroll>
      <span className="aurora-font-bold aurora-text-lg aurora-leading-5 aurora-inline-flex aurora-items-center aurora-h-8 aurora-p-2.5 aurora-group">
        <HiAtSymbol className="aurora-transition-all aurora-duration-300 group-hover:aurora-rotate-45" />
        <span className="aurora-font-bold">achmdndy</span>
      </span>
    </Link>
  );
}
