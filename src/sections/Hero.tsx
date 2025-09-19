import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="pt-20">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/2_roar.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 z-10"></div>

      <div className="relative h-screen lg:h-[100dvh]">
        <div className="absolute bottom-0 left-0 w-full transform -translate-y-20 z-20">
          {/* Text at bottom-left */}
          <div className="absolute bottom-24 left-4 md:left-8 lg:left-12 max-w-[90%] md:max-w-[80%]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-light leading-[1.2] md:leading-[1.3] lg:leading-[1.4]">
              <span className="bg-gradient-to-r from-[#ffd000] via-[#ff9900] to-[#ffc800] bg-clip-text text-transparent font-normal">
                ROAR{" "}
              </span>
              - Your Growth Partner. <br /> A one-stop Solution.
            </h1>
          </div>

          {/* SVG at bottom-center */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="inline-flex justify-center size-10 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
