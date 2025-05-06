import { Section } from '@/components/section';

export function Favorite() {
  return (
    <Section delay={0.2}>
      <h3 className="aurora-text-xl aurora-font-bold aurora-underline aurora-underline-offset-[6px] aurora-decoration-[4px] aurora-decoration-secondary aurora-mt-3 aurora-mb-4">
        I love
      </h3>

      <p className="aurora-text-justify aurora-indent-4 aurora-hyphens-auto">
        Art, Music, Machine Learning
      </p>
    </Section>
  );
}
