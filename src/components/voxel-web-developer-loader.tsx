import { ReactNode, forwardRef } from 'react';
import { Spinner } from './spinner';

export function WebDeveloperSpinner() {
  return <Spinner className="aurora-fill-gray-900" />;
}

interface WebDeveloperContainerProps {
  children: ReactNode;
}

export const WebDeveloperContainer = forwardRef<
  HTMLDivElement,
  WebDeveloperContainerProps
>(function WebDeveloperContainer({ children }, ref) {
  return (
    <div
      ref={ref}
      className="voxel-web-developer aurora-m-auto aurora-relative -aurora-mt-5 sm:-aurora-mt-[60px] md:-aurora-mt-[120px] -aurora-mb-10 sm:-aurora-mb-[140px] md:-aurora-mb-[200px] aurora-w-[280px] sm:aurora-w-[480px] md:aurora-w-[640px] aurora-h-[280px] sm:aurora-h-[480px] md:aurora-h-[640px] aurora-flex aurora-items-center aurora-justify-center"
    >
      {children}
    </div>
  );
});

WebDeveloperContainer.displayName = 'WebDeveloperContainer';

export default function VoxelWebDeveloperLoader() {
  return (
    <WebDeveloperContainer>
      <WebDeveloperSpinner />
    </WebDeveloperContainer>
  );
}
