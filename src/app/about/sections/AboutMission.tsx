"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const AboutMission: FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              To empower businesses of all sizes to achieve extraordinary growth through our 
              integrated approach that combines strategic thinking, creative excellence, and 
              technological innovation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that every business has the potential to make a significant impact. 
              Our role is to provide the expertise, tools, and support needed to unlock that 
              potential and turn ambitious visions into market-leading realities.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-[#ffd000]/20 to-[#ff9900]/20 rounded-2xl flex items-center justify-center">
              <Zap className="h-32 w-32 text-[#ffd000]" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ffd000]/20 to-[#ff9900]/20 rounded-2xl blur-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
