import VoxelWebDeveloperLoader from '@/components/voxel-web-developer-loader';
import dynamic from 'next/dynamic';
import { Footer } from './_components/footer';
import { Framer } from './_components/framer';
import { Navbar } from './_components/navbar';

const LazyVoxelWebDeveloper = dynamic(
  () => import('../../components/voxel-web-developer'),
  {
    ssr: false,
    loading: () => <VoxelWebDeveloperLoader />,
  },
);

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="aurora-pb-8">
      <Navbar />
      <div className="aurora-max-w-[768px] aurora-w-full aurora-mx-auto aurora-pt-14 aurora-px-4">
        <LazyVoxelWebDeveloper />

        <Framer>{children}</Framer>

        <Footer />
      </div>
    </main>
  );
}
