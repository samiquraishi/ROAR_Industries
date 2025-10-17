"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const IrisProcess: FC = () => {
  const processSteps = [
    {
      step: 1,
      title: 'Concept & Strategy',
      description: 'We develop creative concepts that align with your brand and marketing objectives.'
    },
    {
      step: 2,
      title: 'Pre-Production',
      description: 'Detailed planning, scripting, storyboarding, and preparation for seamless production.'
    },
    {
      step: 3,
      title: 'Production',
      description: 'Professional filming with state-of-the-art equipment and experienced crew.'
    },
    {
      step: 4,
      title: 'Post-Production',
      description: 'Expert editing, color grading, and final delivery in all required formats.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Our Creative Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach that ensures every project delivers exceptional results, 
            from initial concept to final delivery and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#ffd000] to-[#ff9900] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-semibold text-lg">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IrisProcess;
