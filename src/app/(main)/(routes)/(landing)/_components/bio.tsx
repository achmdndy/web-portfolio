import { Section } from '@/components/section';

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
      <h3 className="aurora-text-xl aurora-font-bold aurora-underline aurora-underline-offset-[6px] aurora-decoration-primary/50 aurora-mt-3 aurora-mb-4">
        Bio
      </h3>

      {bioList.map(({ year, description }, index) => (
        <div key={index} className="aurora-pl-14 -aurora-indent-14">
          <span className="aurora-font-bold aurora-mr-4">{year}</span>
          {description}
        </div>
      ))}
    </Section>
  );
}
