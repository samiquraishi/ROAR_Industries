"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const IrisCapabilities: FC = () => {
  const capabilities = [
    '4K/8K Video Production', 'Drone Cinematography', 'Live Streaming', 'Virtual Reality Content',
    'Augmented Reality', 'Interactive Videos', '360° Content', 'Social Media Optimization'
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Advanced Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stay at the forefront of visual technology and creative innovation, 
            offering the latest tools and techniques to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-white border border-gray-300 rounded-lg text-center hover:border-[#ffd000] hover:text-[#ffd000] transition-colors shadow-sm"
            >
              <div className="text-sm font-medium">{capability}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IrisCapabilities;
