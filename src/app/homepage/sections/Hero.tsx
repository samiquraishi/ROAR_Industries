"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const Hero: FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Fixed Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-screen object-cover -z-50"
      >
        <source src="/videos/homepageBG.mp4" type="video/mp4" />
      </video>

      {/* Black overlay with blend mode */}
      <div className="relative z-10 bg-black mix-blend-darken">
        <h1
          className="
            pt-24 font-extrabold text-white
            leading-[0.69]  
          "
        >
          <span
            className="block text-center" 
            style={{ fontSize: "clamp(3.5rem, 29vw, 30rem)",
              letterSpacing: "2.6rem"
             }}
          >
            ROAR
          </span>
          <span
            className="block text-center" 
            style={{ fontSize: "clamp(2.5rem, 15vw, 20rem)",
              letterSpacing: "-0.3rem"
             }}
          >
            INDUSTRIES
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;