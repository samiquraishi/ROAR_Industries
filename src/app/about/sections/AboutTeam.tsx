"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const AboutTeam: FC = () => {
  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in business strategy and digital transformation.',
      image: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO - DEVINT',
      description: 'Technology expert specializing in scalable solutions and AI integration.',
      image: '👩‍💻'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Creative Director - IRIS',
      description: 'Award-winning creative director with expertise in cinematic storytelling.',
      image: '👨‍🎨'
    },
    {
      name: 'Emily Davis',
      role: 'Marketing Director - BIONIC',
      description: 'Strategic marketing leader with proven track record in brand growth.',
      image: '👩‍💼'
    }
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
            Meet Our Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience across 
            technology, creativity, and strategic marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow"
            >
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ffd000] transition-colors mb-2">
                {member.name}
              </h3>
              <p className="text-[#ffd000] font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
