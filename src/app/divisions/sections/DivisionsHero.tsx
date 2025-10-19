"use client";

import { FC } from "react";

const DivisionsHero: FC = () => {
  return (
    <section className="relative w-full  bg-stone-200">
      {/* SECTION 1: The initial view. */}
      <div className="h-screen flex flex-col items-center justify-end pb-8 md:pb-16 lg:pb-24">
        <h1 className="text-center font-extrabold leading-[0.9]">
          <span
            className="block text-stone-950 mb-2 md:mb-4"
            style={{
              fontSize: "clamp(2rem, 10vw, 12rem)",
            }}
          >
            EXPLORE
          </span>
          <span
            className="block text-stone-950"
            style={{
              fontSize: "clamp(2rem, 10vw, 12rem)",
            }}
          >
            OUR
          </span>
        </h1>
      </div>

      {/* THE DIVIDER TEXT: "DIVISIONS". */}
      <h2
        className="pointer-events-none absolute top-[100vh] left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center font-extrabold leading-none text-stone-200 mix-blend-difference"
        style={{
          fontSize: "clamp(2rem, 12vw, 18rem)",
        }}
      >
        DIVISIONS
      </h2>

      
      <div className="relative bg-stone-950 pt-24 md:pt-32 lg:pt-48 xl:pt-60 pb-16 md:pb-24 lg:pb-32 xl:pb-48">
        <div className="max-w-full px-6 sm:px-8 md:px-20 lg:px-32 xl:px-48">
          {/* Background grid pattern */}
          <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-stone-200">
            <h3 className="mb-6 text-center text-lg font-extralight md:mb-8 md:text-2xl lg:text-4xl">
              Three Divisions, One Mission
            </h3>
            {/* Video container - responsive sizing */}
            <div className="w-full max-w-5xl aspect-video overflow-hidden md:max-w-6xl lg:max-w-7xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-contain"
              >
                <source src="/videos/divisions.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivisionsHero;
