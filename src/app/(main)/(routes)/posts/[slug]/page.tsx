import { Section } from '@/components/section';
import { posts } from '@/data/posts';
import { Calendar } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface PostSlugProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PostSlugProps): Promise<Metadata> {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested article could not be found',
    };
  }

  return {
    title: `${post.title} - Blog Post`,
    description: post.excerpt,
  };
}

export default function PostSlug({ params }: PostSlugProps) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Section>
      <article className="aurora-container aurora-px-4 aurora-max-w-[65ch] aurora-py-8">
        {/* Breadcrumb */}
        <nav className="aurora-flex aurora-items-center aurora-gap-2 aurora-text-sm aurora-text-gray-500 dark:aurora-text-gray-400 aurora-mb-6">
          <a
            href="/posts"
            className="hover:aurora-text-primary aurora-transition-colors"
          >
            Posts
          </a>
          <span>/</span>
          <span className="aurora-text-gray-700 dark:aurora-text-gray-200 aurora-line-clamp-1 aurora-w-1/2">
            {post.title}
          </span>
        </nav>

        {/* Header */}
        <header className="aurora-mb-8">
          <div className="aurora-flex aurora-flex-wrap aurora-gap-3 aurora-mb-4">
            {/* Tags */}
            {post.tags.map(tag => (
              <span
                key={tag}
                className="aurora-px-3 aurora-py-1 aurora-bg-primary/10 aurora-text-primary aurora-rounded-full aurora-text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="aurora-text-4xl aurora-font-bold aurora-mb-4">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="aurora-flex aurora-items-center aurora-gap-4 aurora-text-sm aurora-text-gray-500">
            <div className="aurora-flex aurora-items-center aurora-gap-1">
              <Calendar className="aurora-w-4 aurora-h-4" />
              <time dateTime={post.publishDate}>{post.publishDate}</time>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="aurora-relative aurora-aspect-video aurora-w-full aurora-rounded-xl aurora-overflow-hidden aurora-mb-8">
          <Image
            src={post.thumbnail}
            alt={`${post.title} Featured Image`}
            fill
            className="aurora-object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="aurora-prose dark:aurora-prose-invert aurora-max-w-none">
          <post.content />
        </div>

        {/* Share Section */}
        {/* <div className="aurora-border-t aurora-border-gray-200 dark:aurora-border-gray-800 aurora-mt-12 aurora-pt-8">
          <h3 className="aurora-text-lg aurora-font-semibold aurora-mb-4">
            Share Article
          </h3>
          <div className="aurora-flex aurora-gap-4">
            <button className="aurora-px-4 aurora-py-2 aurora-bg-primary/10 aurora-text-primary aurora-rounded-lg hover:aurora-bg-primary/20 aurora-transition-colors">
              Twitter
            </button>
            <button className="aurora-px-4 aurora-py-2 aurora-bg-primary/10 aurora-text-primary aurora-rounded-lg hover:aurora-bg-primary/20 aurora-transition-colors">
              LinkedIn
            </button>
            <button className="aurora-px-4 aurora-py-2 aurora-bg-primary/10 aurora-text-primary aurora-rounded-lg hover:aurora-bg-primary/20 aurora-transition-colors">
              Facebook
            </button>
          </div>
        </div> */}
      </article>
    </Section>
  );
}
