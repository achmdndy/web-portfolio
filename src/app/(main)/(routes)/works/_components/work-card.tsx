import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps } from 'react';

type WorkCardProps = ComponentProps<'div'> & {
  id: string;
  title: string;
  thumbnail: string;
};

export function WorkCard({ id, title, thumbnail, children }: WorkCardProps) {
  return (
    <div className="aurora-w-full aurora-text-center">
      <Link href={`/works/${id}`} scroll className="aurora-cursor-pointer">
        <div className="aurora-relative aurora-w-full aurora-h-[180px] aurora-bg-white/10 aurora-rounded-2xl aurora-overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="aurora-object-cover aurora-bg-primary/10 aurora-rounded-2xl"
            loading="lazy"
          />
        </div>
        <h2 className="aurora-mt-2 a aurora-text-xl">{title}</h2>
        <p className="aurora-text-sm aurora-line-clamp-2">{children}</p>
      </Link>
    </div>
  );
}
