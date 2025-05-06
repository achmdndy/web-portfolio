import { Section } from '@/components/section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts - @achmdndy',
  description: 'Posts page - Web Portfolio Achmand Andy Dekanovy',
};

export default function Posts() {
  return (
    <div className="aurora-container aurora-px-4 aurora-max-w-[60ch]">
      <Section>
        <h3 className="aurora-text-xl aurora-font-bold aurora-underline aurora-underline-offset-[6px] aurora-decoration-primary/50 aurora-mt-3 aurora-mb-4">
          Posts
        </h3>
      </Section>

      <div className="aurora-grid aurora-grid-cols-1 md:aurora-grid-cols-2 aurora-gap-6">
        <Section className='md:aurora-col-span-2 '>
          <div className="aurora-rounded-lg aurora-mb-6 aurora-p-3 aurora-text-center aurora-bg-primary/10 aurora-backdrop-blur">
            in development
          </div>
        </Section>
      </div>
    </div>
  );
}
