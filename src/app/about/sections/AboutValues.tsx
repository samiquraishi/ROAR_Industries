"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Target, Users, Award } from "lucide-react";

const AboutValues: FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering exceptional results that exceed expectations.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of collaboration, working closely with our clients as true partners.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace innovation and cutting-edge solutions to stay ahead of industry trends.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We operate with the highest standards of integrity, transparency, and ethical business practices.'
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
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do and shape how we work with our clients 
            to achieve extraordinary results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#ffd000] to-[#ff9900] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ffd000] transition-colors mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
