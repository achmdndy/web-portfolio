import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ComponentProps, FC } from 'react';
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5';
import { SiBuymeacoffee } from 'react-icons/si';

interface SocialList {
  icon: FC<ComponentProps<'svg'>>;
  label: string;
  href: string;
}

const socialList: SocialList[] = [
  {
    icon: IoLogoGithub,
    label: '@achmdndy',
    href: 'https://github.com/achmdndy',
  },
  {
    icon: IoLogoInstagram,
    label: '@achmdndy',
    href: 'https://www.instagram.com/achmdn.dy',
  },
  {
    icon: SiBuymeacoffee,
    label: '@achmdndy',
    href: 'https://www.buymeacoffee.com/achmdndy',
  },
];

export function Socials() {
  return (
    <Section delay={0.2}>
      <h3 className="aurora-text-xl aurora-font-bold aurora-underline aurora-underline-offset-[6px] aurora-decoration-[4px] aurora-decoration-secondary aurora-mt-3 aurora-mb-4">
        On the web
      </h3>

      <ul>
        {socialList.map(({ icon: Icon, label, href }, index) => (
          <li key={index}>
            <Link href={href}>
              <Button
                className="aurora-gap-2 hover:aurora-bg-[#003de6]/10 dark:hover:aurora-bg-[#003de6]/10 dark:aurora-text-[#003de6] aurora-text-[#003de6] hover:aurora-text-[#003de6]"
                variant={'ghost'}
              >
                <Icon className="aurora-w-5 aurora-h-5" />
                {label}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
