import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IoChevronForwardOutline } from 'react-icons/io5';

export function Work() {
  return (
    <Section delay={0.1}>
      <h3 className="aurora-text-xl aurora-font-bold aurora-underline aurora-underline-offset-[6px] aurora-decoration-[4px] aurora-decoration-secondary aurora-mt-3 aurora-mb-4">
        Work
      </h3>

      <p className="aurora-text-justify aurora-indent-4 aurora-hyphens-auto">
        I&apos;m a{' '}
        <span className="aurora-text-[#00F2FF] aurora-font-semibold">
          freelance fullstack dev
        </span>{' '}
        who&apos;s all about building{' '}
        <span className="aurora-text-[#00F2FF] aurora-font-semibold">
          solid, scalable apps
        </span>{' '}
        and cracking{' '}
        <span className="aurora-text-[#00F2FF] aurora-font-semibold">
          tough problems
        </span>{' '}
        with smart, no-nonsense solutions. Always hungry for the{' '}
        <span className="aurora-text-[#00F2FF] aurora-font-semibold">
          latest tech
        </span>
        , I love turning ideas into{' '}
        <span className="aurora-text-[#00F2FF] aurora-font-semibold">
          clean, functional software
        </span>{' '}
        that hits both user needs and business goals. From brainstorming to
        shipping, I&apos;ve been there, done that — and I&apos;m always up for
        pushing the boundaries with awesome teams.
      </p>

      <div className="aurora-flex aurora-items-center aurora-justify-center aurora-my-4">
        <Link href="/works" scroll>
          <Button className="aurora-gap-2 aurora-bg-[#003de6] aurora-text-white hover:aurora-bg-[#003de6]/80">
            My portfolio <IoChevronForwardOutline />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
