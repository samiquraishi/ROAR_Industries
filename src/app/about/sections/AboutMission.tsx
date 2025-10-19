"use client";

import { FC } from "react";

const AboutMission: FC = () => {
  return (
    <section className="bg-stone-200  pb-24 md:pb-40">
      <div className="max-w-full px-4 md:px-8">
        {/* Main Heading */}
        <div className="mb-8 md:mb-16">
          <h1
            className="font-bold text-stone-800 mb-20 flex justify-end uppercase"
            style={{ fontSize: "clamp(3rem, 13vw, 20rem)" }}
          >
            Our Mission
          </h1>
        </div>

        {/* Video and Text Layout */}
        <div className="my-16 md:my-24">
          <div className="grid grid-cols-1 md:grid-cols-2  items-end">
            {/* Left Column - Video */}
            <div className="w-full aspect-video md:w-auto">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-contain"
              >
                <source src="/videos/about.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Right Column - Text */}
            <div className="space-y-4">
              <p className="text-stone-700 text-lg sm:text2xl md:text-4xl leading-relaxed">
                We believe that every business has the potential to make a
                significant impact. Our role is to provide the expertise, tools,
                and support needed to unlock that potential and turn ambitious
                visions into market-leading realities.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}

          {/* Key Points */}
          <div className="space-y-3 pt-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-stone-600 rounded-full mt-6 flex-shrink-0"></div>
              <p className="text-stone-700 text-md md:text-xl lg:text-2xl mt-4">
                Strategic thinking that drives measurable results
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-stone-600 rounded-full mt-6 flex-shrink-0"></div>
              <p className="text-stone-700 text-md md:text-xl lg:text-2xl mt-4">
                Creative excellence that captivates audiences
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-stone-600 rounded-full mt-6 flex-shrink-0"></div>
              <p className="text-stone-700 text-md md:text-xl lg:text-2xl mt-4">
                Technological innovation that scales efficiently
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
