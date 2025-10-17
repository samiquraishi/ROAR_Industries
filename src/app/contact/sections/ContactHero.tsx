"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const ContactHero: FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="container text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#ffd000] text-lg md:text-xl mb-4 tracking-wider font-medium"
          >
            GET IN TOUCH
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
          >
            Ready to Start Your Growth Journey?
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Let&apos;s discuss how ROAR INDUSTRIES can help you achieve extraordinary growth. 
            Our team is ready to transform your vision into reality.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
