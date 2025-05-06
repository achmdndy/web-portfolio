import { Section } from '@/components/section';
import { cn } from '@/lib/utils';

interface BioList {
  year: string;
  description: string;
}

const bioList: BioList[] = [
  {
    year: '2000',
    description: 'Born in Jakarta, Indonesia.',
  },
  {
    year: '2022',
    description:
      'Completed the undergraduate program in Informatics Engineering at Gunadarma University',
  },
  {
    year: '2022',
    description: 'Worked at PT. Sakata Guna Kita',
  },
  {
    year: '2023',
    description: 'Worked at Master Bagasi',
  },
  {
    year: '2023 present',
    description: 'Working as a freelancer',
  },
];

export function Bio() {
  return (
    <Section delay={0.2}>
      <h3 className="aurora-text-xl aurora-font-bold aurora-underline aurora-underline-offset-[6px] aurora-decoration-[4px] aurora-decoration-secondary aurora-mt-3 aurora-mb-4">
        Bio
      </h3>

      {bioList.map(({ year, description }, index) => (
        <div
          key={index}
          className={cn(
            'aurora-pl-14 -aurora-indent-14',
            index === bioList.length - 1 && 'aurora-text-[#00F2FF]',
          )}
        >
          <span className="aurora-font-bold aurora-mr-4">{year}</span>
          {description}
        </div>
      ))}
    </Section>
  );
}
