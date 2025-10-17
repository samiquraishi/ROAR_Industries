"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const AboutTimeline: FC = () => {
  const timeline = [
    {
      year: '2020',
      title: 'ROAR INDUSTRIES Founded',
      description: 'Started with a vision to create a complete ecosystem for business growth, bringing together technology, creativity, and strategic marketing.'
    },
    {
      year: '2021',
      title: 'DEVINT Division Launch',
      description: 'Launched our technology division to provide cutting-edge development solutions and digital transformation services.'
    },
    {
      year: '2022',
      title: 'IRIS STUDIO Established',
      description: 'Created our creative division to deliver cinematic storytelling and visual content that captivates audiences.'
    },
    {
      year: '2023',
      title: 'BIONIC MEDIA Integration',
      description: 'Integrated our brand management and marketing division to complete our comprehensive growth partner framework.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded our services globally, working with clients across multiple industries and continents.'
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
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a bold vision to a comprehensive ecosystem, here&apos;s how ROAR INDUSTRIES 
            has evolved to become the complete business growth partner we are today.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center mb-12 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ffd000] to-[#ff9900] rounded-full flex items-center justify-center mr-4">
                      <span className="text-black font-semibold text-sm">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              
              <div className="w-4 h-4 bg-[#ffd000] rounded-full mx-8 flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
