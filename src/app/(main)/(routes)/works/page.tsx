import { Section } from '@/components/section';
import { works } from '@/data/works';
import { Metadata } from 'next';
import { WorkCard } from './_components/work-card';

export const metadata: Metadata = {
  title: 'Works - @achmdndy',
  description: 'Works page - Web Portfolio Achmand Andy Dekanovy',
};

export default async function Works() {
  return (
    <div className="aurora-container aurora-px-4 aurora-max-w-[60ch]">
      <Section>
        <h3 className="aurora-text-xl aurora-font-bold aurora-underline aurora-underline-offset-[6px] aurora-decoration-[4px] aurora-decoration-secondary aurora-mt-3 aurora-mb-4">
          Works
        </h3>
      </Section>

      <div className="aurora-grid aurora-grid-cols-1 md:aurora-grid-cols-2 aurora-gap-6">
        {works.flatMap((work, index) => (
          <Section key={index}>
            <WorkCard
              id={work.id}
              title={work.title}
              thumbnail={work.thumbnail}
            >
              {work.summary}
            </WorkCard>
          </Section>
        ))}
      </div>
    </div>
  );
}
