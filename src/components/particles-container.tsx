'use client';

import { cn } from '@/lib/utils';
import { Container, ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { ComponentProps, useEffect, useMemo, useState } from 'react';
import { loadFull } from 'tsparticles';

type ParticlesProps = ComponentProps<typeof Particles> & {
  particlesColor: string;
  particlesLineColor: string;
  particlesIsOnHover?: boolean;
  particlesDensity?: number;
};

export function ParticlesContainer({
  particlesColor,
  particlesLineColor,
  particlesIsOnHover = false,
  particlesDensity = 800,
  className,
}: ParticlesProps) {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const particlesLoaded = async (container?: Container): Promise<void> => {};

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: {
          value: '',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: particlesIsOnHover,
            mode: 'repulse',
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 90,
          },
          repulse: {
            distance: 100,
            duration: 1000,
          },
        },
      },
      particles: {
        color: {
          value: particlesColor,
        },
        links: {
          color: particlesLineColor,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            height: particlesDensity,
            width: particlesDensity,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [particlesColor, particlesDensity, particlesIsOnHover, particlesLineColor],
  );

  if (init) {
    return (
      <Particles
        className={cn(
          'aurora-w-full aurora-h-full aurora-absolute aurora-z-0',
          className,
        )}
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}
