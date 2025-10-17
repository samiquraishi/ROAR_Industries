"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Code, Camera, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const DivisionsIntegration: FC = () => {
  const divisions = [
    {
      name: 'DEVINT',
      tagline: 'Engineering the Future of Growth',
      description: 'Technology solutions that power business transformation. From web development to AI integration, we build the digital infrastructure your business needs to scale efficiently and stay competitive in the digital age.',
      ctaText: 'Get Tech Consultation',
      ctaPath: '/divisions/devint',
      icon: Code,
    },
    {
      name: 'IRIS STUDIO',
      tagline: 'We Turn Stories Into Motion',
      description: 'Cinematic storytelling and visual content that captivates audiences. From concept to final cut, we bring your brand narrative to life through compelling visuals that resonate and inspire action.',
      ctaText: 'Create With IRIS',
      ctaPath: '/divisions/iris',
      icon: Camera,
    },
    {
      name: 'BIONIC MEDIA',
      tagline: 'Where Brands Come Alive',
      description: 'Strategic brand management and marketing that drives growth. We amplify your brand presence and connect you with your ideal customers through data-driven strategies and creative campaigns.',
      ctaText: 'Amplify With BIONIC',
      ctaPath: '/divisions/bionic',
      icon: TrendingUp,
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
            Seamless Integration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our divisions don&apos;t just work alongside each other—they work together. 
            This integrated approach ensures cohesive execution and maximum impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <motion.div
              key={division.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ffd000] to-[#ff9900] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <division.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#ffd000] transition-colors mb-2">
                  {division.name}
                </h3>
                <p className="text-[#ffd000] font-semibold">
                  {division.tagline}
                </p>
              </div>
              
              <p className="text-gray-600 mb-6">
                {division.description}
              </p>

              <motion.div whileHover={{ x: 5 }}>
                <Link
                  href={division.ctaPath}
                  className="inline-flex items-center space-x-2 text-[#ffd000] hover:text-[#ff9900] transition-colors font-semibold"
                >
                  <span>{division.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsIntegration;
