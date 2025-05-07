import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps } from 'react';

type PostCardProps = ComponentProps<'div'> & {
  slug: string;
  title: string;
  thumbnail: string;
  publishDate: string;
  excerpt: string;
  tags: string[];
};

export function PostCard({
  slug,
  title,
  thumbnail,
  publishDate,
  excerpt,
  tags,
}: PostCardProps) {
  return (
    <article className="aurora-group aurora-w-full aurora-bg-white/5 aurora-rounded-xl aurora-overflow-hidden hover:aurora-bg-white/10 aurora-transition-all">
      <Link href={`/posts/${slug}`} className="aurora-block">
        {/* Thumbnail */}
        <div className="aurora-relative aurora-w-full aurora-h-[200px]">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="aurora-object-cover group-hover:aurora-scale-105 aurora-transition-transform"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="aurora-p-4">
          {/* Tags */}
          <div className="aurora-flex aurora-flex-wrap aurora-gap-2 aurora-mb-3">
            {tags.map(tag => (
              <span
                key={tag}
                className="aurora-px-2 aurora-py-1 aurora-text-xs aurora-bg-primary/10 aurora-text-primary aurora-rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="aurora-line-clamp-2 aurora-text-xl aurora-font-semibold aurora-mb-2 group-hover:aurora-text-primary aurora-transition-colors">
            {title}
          </h2>

          {/* Excerpt */}
          <p className="aurora-text-gray-400 aurora-text-sm aurora-line-clamp-2 aurora-mb-4">
            {excerpt}
          </p>

          {/* Meta Info */}
          <div className="aurora-flex aurora-items-center aurora-gap-4 aurora-text-sm aurora-text-gray-400">
            <div className="aurora-flex aurora-items-center aurora-gap-1">
              <Calendar className="aurora-w-4 aurora-h-4" />
              <span>{publishDate}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
