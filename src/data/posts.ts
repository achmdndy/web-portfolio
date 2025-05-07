import { TechSolidarity } from '@/app/(main)/(routes)/posts/components/detail/tech-solidarity';
import { VercelIsrael } from '@/app/(main)/(routes)/posts/components/detail/vercel-israel';

export const posts = [
  {
    slug: 'tech-solidarity-double-standards',
    title:
      'Tech Solidarity and Double Standards: Why #StandWithUkraine, But Not #StandWithPalestine?',
    thumbnail: '/assets/posts/tech-solidarity.png',
    publishDate: 'May 7, 2025',
    excerpt:
      'In the tech world, movements like #StandWithUkraine gained massive traction. But when it comes to Palestine, similar solidarity is often absent. Why does this disparity exist, and what does it say about our community?',
    tags: [
      'Tech Culture',
      'Politics in Tech',
      'Ethics',
      'Palestine',
      'Ukraine',
    ],
    content: TechSolidarity,
  },
  {
    slug: 'vercel-ceo-israel-visit-reaction',
    title:
      'Tech, Ethics, and Geopolitics: Reactions to Vercel CEO’s Visit to Israel',
    thumbnail: '/assets/posts/vercel-israel.png',
    publishDate: 'May 7, 2025',
    excerpt:
      'Guillermo Rauch, CEO of Vercel, recently posted from Israel and sparked mixed reactions online. Should personal travel of tech leaders be scrutinized when geopolitics are involved? What does it mean for developer communities worldwide?',
    tags: ['Tech Culture', 'Geopolitics', 'Ethics', 'Vercel', 'Open Source'],
    content: VercelIsrael,
  },
];
