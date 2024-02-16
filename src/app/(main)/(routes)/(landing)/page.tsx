import { Bio } from './_components/bio';
import { Favorite } from './_components/favorite';
import { Greet } from './_components/greet';
import { Hero } from './_components/hero';
import { Socials } from './_components/socials';
import { Work } from './_components/work';

export default function Home() {
  return (
    <div className="aurora-container aurora-px-4 aurora-max-w-[60ch]">
      <Greet />
      <Hero />
      <Work />
      <Bio />
      <Favorite />
      <Socials />
    </div>
  );
}
