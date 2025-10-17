"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const DevintTechnologies: FC = () => {
  const technologies = [
    'React', 'Node.js', 'Python', 'Java', 'C#', 'AWS', 'Azure', 'Docker', 
    'Kubernetes', 'MongoDB', 'PostgreSQL', 'TensorFlow', 'PyTorch'
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
            Technologies We Master
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team stays at the forefront of technology trends, ensuring your solutions 
            are built with the most effective and future-proof technologies available.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-white border border-gray-300 rounded-full text-gray-900 hover:border-[#ffd000] hover:text-[#ffd000] transition-colors shadow-sm"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevintTechnologies;
