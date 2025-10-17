"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const BionicStrategies: FC = () => {
  const strategies = [
    'Brand Storytelling', 'Customer Journey Mapping', 'Omnichannel Marketing', 'Influencer Marketing',
    'Content Strategy', 'Community Building', 'Reputation Management', 'Crisis Communications'
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
            Strategic Approaches
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We employ proven marketing strategies and innovative approaches to ensure 
            your brand stands out in today&apos;s competitive marketplace.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-white border border-gray-300 rounded-lg text-center hover:border-[#ffd000] hover:text-[#ffd000] transition-colors shadow-sm"
            >
              <div className="text-sm font-medium">{strategy}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BionicStrategies;
