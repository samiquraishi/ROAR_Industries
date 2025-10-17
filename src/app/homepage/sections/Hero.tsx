"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronsDown } from "lucide-react";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <section className="pt-20">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-[100dvh] object-cover"
        onError={(e) => {
          console.log('Video loading error:', e);
        }}
        onLoadStart={() => {
          console.log('Video loading started');
        }}
      >
        <source src="/videos/1_roar.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute top-0 left-0 w-full h-[100dvh] bg-black bg-opacity-85 "></div>

      <div className="relative h-[100dvh]">
        
        <div className="absolute bottom-0 left-0 w-full transform translate-y-[-10vh] ">
          
          <div className="absolute bottom-24 left-4 md:left-8 lg:left-12 max-w-[90%] md:max-w-[80%]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-light leading-[1.2] md:leading-[1.3] lg:leading-[1.4]">
                <span className="bg-gradient-to-r from-[#ffd000] via-[#ff9900] to-[#ffc800] bg-clip-text text-transparent">
                  Every Great Brand Starts With a ROAR
                </span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-base md:text-xl text-stone-300 mb-8 max-w-3xl leading-relaxed mt-6"
              >
                Your complete business growth partner. From strategy to execution, we help brands achieve extraordinary growth through our integrated approach.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 items-start"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/framework"
                    className="bg-[#ffd000] hover:bg-transparent text-black hover:text-white border-[#ffd000] border-2 px-7 py-3 font-semibold inline-flex items-center space-x-2 transition-colors"
                  >
                    <span>Start Your Growth Journey</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-flex justify-center size-10 items-center"
              >
                <ChevronsDown className="size-6  stroke-white " />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
