import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative h-[82vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for readability without blocking interactions */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-950/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="pointer-events-none text-center max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight drop-shadow">
            Glass Post Card Experience
          </h1>
          <p className="mt-4 text-neutral-200 text-base sm:text-lg drop-shadow">
            An interactive, modern, and vibrant interface. Flip to reveal new content with fluid animations.
          </p>
        </div>
      </div>
    </section>
  );
}
