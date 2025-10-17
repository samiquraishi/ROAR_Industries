"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Target, BarChart3, Code, Camera, TrendingUp, Users } from "lucide-react";

const FrameworkProcessFlow: FC = () => {
  const frameworkSteps = [
    {
      step: 1,
      title: 'Building Business Strategy',
      division: 'BIONIC MEDIA',
      icon: Target
    },
    {
      step: 2,
      title: 'Research & Analytics',
      division: 'DEVINT',
      icon: BarChart3
    },
    {
      step: 3,
      title: 'Technology Design & Development',
      division: 'DEVINT',
      icon: Code
    },
    {
      step: 4,
      title: 'Creative Content Production & Direction',
      division: 'IRIS STUDIO',
      icon: Camera
    },
    {
      step: 5,
      title: 'Brand Management & Marketing',
      division: 'BIONIC MEDIA',
      icon: TrendingUp
    },
    {
      step: 6,
      title: 'Reviewing Growth & Performance',
      division: 'All Divisions',
      icon: Users
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
            Integrated Process Flow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our divisions work together seamlessly, ensuring no gaps in your growth journey. 
            Each step informs and enhances the next, creating a powerful multiplier effect.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Flow Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {frameworkSteps.map((step, index) => (
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
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  {step.title.split(' ').slice(0, 2).join(' ')}
                </h3>
                <p className="text-xs text-gray-500">
                  {step.division}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Connecting Lines */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ffd000] via-[#ff9900] to-[#ffd000] opacity-30" />
        </div>
      </div>
    </section>
  );
};

export default FrameworkProcessFlow;
