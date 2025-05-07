import { Section } from '@/components/section';
import { posts } from '@/data/posts';
import { Metadata } from 'next';
import { PostCard } from './components/post-card';

export const metadata: Metadata = {
  title: 'Posts - @achmdndy',
  description: 'Posts page - Web Portfolio Achmand Andy Dekanovy',
};

export default function Posts() {
  return (
    <div className="aurora-container aurora-px-4 aurora-max-w-[60ch]">
      <Section>
        <h3 className="aurora-text-xl aurora-font-bold aurora-underline aurora-underline-offset-[6px] aurora-decoration-[4px] aurora-decoration-secondary aurora-mt-3 aurora-mb-4">
          Posts
        </h3>
      </Section>

      <div className="aurora-grid aurora-grid-cols-1 md:aurora-grid-cols-2 aurora-gap-6">
        {posts.map((post, index) => (
          <Section key={index}>
            <PostCard
              slug={post.slug}
              title={post.title}
              thumbnail={post.thumbnail}
              publishDate={post.publishDate}
              excerpt={post.excerpt}
              tags={post.tags}
            />
          </Section>
        ))}
      </div>
    </div>
  );
}
