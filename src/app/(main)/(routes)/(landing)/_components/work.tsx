import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IoChevronForwardOutline } from 'react-icons/io5';

export function Work() {
  return (
    <Section delay={0.1}>
      <h3 className="aurora-text-xl aurora-font-bold aurora-underline aurora-underline-offset-[6px] aurora-decoration-primary/50 aurora-mt-3 aurora-mb-4">
        Work
      </h3>

      <p className="aurora-text-justify aurora-indent-4 aurora-hyphens-auto">
        As a freelancer and fullstack developer, I possess a strong background
        in designing and building resilient applications. My skills cover a
        variety of programming languages, and I thrive on solving intricate
        problems with sophisticated, scalable solutions. With a keen attention
        to detail and a dedication to staying abreast of industry trends, I am
        committed to delivering top-notch software that caters to user needs and
        business objectives. I have extensive experience across different phases
        of the software development lifecycle, and I excel in collaborative
        settings that prioritize innovation and technical excellence.
      </p>

      <div className="aurora-flex aurora-items-center aurora-justify-center aurora-my-4">
        <Link href="/works" scroll>
          <Button className="aurora-gap-2">
            My portfolio <IoChevronForwardOutline />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
