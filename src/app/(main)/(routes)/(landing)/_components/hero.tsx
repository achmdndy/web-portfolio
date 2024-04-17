import Image from 'next/image';

export function Hero() {
  return (
    <div className="md:aurora-flex">
      <div className="aurora-flex-grow">
        <h2 className="aurora-text-3xl aurora-font-bold">
          Achmad Andy Dekanovy
        </h2>
        <p>Ctrl+Shift+Create: Exploring the World of Code</p>
      </div>

      <div className="aurora-flex-shrink-0 aurora-mt-4 md:aurora-mt-0 md:aurora-ml-6 aurora-text-center">
        <div className="aurora-border-2 aurora-border-white aurora-w-[100px] aurora-h-[100px] aurora-inline-block aurora-rounded-full aurora-overflow-hidden">
          <Image
            src="/achmdndy.jpeg"
            alt="Profile image"
            width={100}
            height={100}
            className="aurora-rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
