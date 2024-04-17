import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works - @achmdndy',
  description: 'Works page - Web Portfolio Achmand Andy Dekanovy',
};

export default async function Works() {
  return (
    <div className="aurora-container aurora-px-4 aurora-max-w-[60ch]">
      <h3 className="aurora-text-xl aurora-font-bold aurora-underline aurora-underline-offset-[6px] aurora-decoration-primary/50 aurora-mt-3 aurora-mb-4">
        Works
      </h3>

      <div className="aurora-grid aurora-grid-cols-1 md:aurora-grid-cols-2 aurora-gap-6">
        <div className="md:aurora-col-span-2 aurora-rounded-lg aurora-mb-6 aurora-p-3 aurora-text-center aurora-bg-primary/10 aurora-backdrop-blur">
          in development
        </div>
        {/* <Section>
          <WorkCard id={'test'} title="test" thumbnail="/favicon.ico">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            error iure quos laudantium? Ipsum hic temporibus enim ut eos
            impedit?
          </WorkCard>
        </Section> */}
      </div>
    </div>
  );
}
