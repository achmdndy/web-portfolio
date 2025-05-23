import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { works } from '@/data/works';
import { ArrowUpRight, Calendar, Github, Globe } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface WorksSlugProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: WorksSlugProps): Promise<Metadata> {
  const work = works.find(w => w.id === params.slug);

  if (!work) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found',
    };
  }

  return {
    title: `${work.title} - Portfolio`,
    description: work.summary,
  };
}

export default function WorksSlug({ params }: WorksSlugProps) {
  const work = works.find(w => w.id === params.slug);

  if (!work) {
    notFound();
  }

  return (
    <Section>
      <article className="aurora-container aurora-px-4 aurora-max-w-[70ch] aurora-py-8">
        {/* Breadcrumb */}
        <nav className="aurora-flex aurora-items-center aurora-gap-2 aurora-text-sm aurora-text-gray-500 dark:aurora-text-gray-400 aurora-mb-6">
          <a
            href="/works"
            className="hover:aurora-text-primary aurora-transition-colors"
          >
            Works
          </a>
          <span>/</span>
          <span className="aurora-text-gray-700 dark:aurora-text-gray-200">
            {work.title}
          </span>
        </nav>

        {/* Header Section */}
        <header className="aurora-mb-8">
          <h1 className="aurora-text-3xl aurora-font-bold aurora-mb-4">
            {work.title}
          </h1>
          <p className="aurora-text-gray-600 dark:aurora-text-gray-300 aurora-text-lg">
            {work.summary}
          </p>
        </header>

        {/* Featured Image */}
        <div className="aurora-relative aurora-aspect-video aurora-w-full aurora-rounded-xl aurora-overflow-hidden aurora-mb-8">
          <Image
            src={work.thumbnail}
            alt={`${work.title} Preview`}
            fill
            className="aurora-object-cover"
            priority
          />
        </div>

        {/* Project Info Grid */}
        <div className="aurora-grid aurora-grid-cols-1 md:aurora-grid-cols-3 aurora-gap-8 aurora-mb-12">
          <div className="aurora-col-span-2">
            {/* Description */}
            <section className="aurora-space-y-4">
              <h2 className="aurora-text-2xl aurora-font-semibold">
                About Project
              </h2>
              <div className="aurora-prose dark:aurora-prose-invert aurora-max-w-none">
                <p>{work.description}</p>
              </div>
            </section>

            {/* Key Features */}
            <section className="aurora-mt-8">
              <h2 className="aurora-text-2xl aurora-font-semibold aurora-mb-4">
                Key Features
              </h2>
              <ul className="aurora-space-y-3">
                {work.features.map((feature, index) => (
                  <li
                    key={index}
                    className="aurora-flex aurora-items-start aurora-gap-2"
                  >
                    <span className="aurora-text-primary">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar Info */}
          <aside className="aurora-space-y-8">
            {/* Technologies */}
            <section>
              <h3 className="aurora-text-lg aurora-font-semibold aurora-mb-3">
                Technologies
              </h3>
              <div className="aurora-flex aurora-flex-wrap aurora-gap-2">
                {work.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="aurora-px-3 aurora-py-1.5 aurora-bg-[#00F2FF]/10 aurora-text-[#00F2FF] aurora-rounded-full aurora-text-sm aurora-font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Timeline */}
            <section>
              <h3 className="aurora-text-lg aurora-font-semibold aurora-mb-3">
                Timeline
              </h3>
              <div className="aurora-flex aurora-items-center aurora-gap-2 aurora-text-gray-600 dark:aurora-text-gray-300">
                <Calendar className="aurora-w-4 aurora-h-4" />
                <span>{work.period}</span>
              </div>
            </section>

            {/* Links */}
            {(work.links.demo || work.links.github) && (
              <section>
                <h3 className="aurora-text-lg aurora-font-semibold aurora-mb-3">
                  Links
                </h3>
                <div className="aurora-space-y-2">
                  {work.links.demo && (
                    <Link
                      href={work.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="aurora-gap-2 hover:aurora-bg-[#003de6]/10 dark:hover:aurora-bg-[#003de6]/10 dark:aurora-text-[#003de6] aurora-text-[#003de6] hover:aurora-text-[#003de6]"
                        variant={'ghost'}
                      >
                        <Globe className="aurora-w-4 aurora-h-4" />
                        <span>Live Demo</span>
                        <ArrowUpRight className="aurora-w-4 aurora-h-4" />
                      </Button>
                    </Link>
                  )}
                  {work.links.github && (
                    <Link
                      href={work.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="aurora-gap-2 hover:aurora-bg-[#003de6]/10 dark:hover:aurora-bg-[#003de6]/10 dark:aurora-text-[#003de6] aurora-text-[#003de6] hover:aurora-text-[#003de6]"
                        variant={'ghost'}
                      >
                        <Github className="aurora-w-4 aurora-h-4" />
                        <span>Source Code</span>
                        <ArrowUpRight className="aurora-w-4 aurora-h-4" />
                      </Button>
                    </Link>
                  )}
                </div>
              </section>
            )}
          </aside>
        </div>
      </article>
    </Section>
  );
}
