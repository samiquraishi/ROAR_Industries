"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Code, Camera, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const DivisionsOverview: FC = () => {
  const divisions = [
    {
      name: 'DEVINT',
      tagline: 'Engineering the Future of Growth',
      description: 'Technology solutions that power business transformation. From web development to AI integration, we build the digital infrastructure your business needs to scale efficiently and stay competitive in the digital age.',
      services: [
        'Web Development & Design',
        'Mobile Application Development',
        'AI & Machine Learning Solutions',
        'Cloud Infrastructure & DevOps',
        'API Development & Integration',
        'Business Process Automation',
        'Data Analytics & Visualization',
        'E-commerce Solutions',
        'Cybersecurity Implementation',
        'Digital Transformation Consulting'
      ],
      ctaText: 'Get Tech Consultation',
      ctaPath: '/divisions/devint',
      icon: Code,
      gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    },
    {
      name: 'IRIS STUDIO',
      tagline: 'We Turn Stories Into Motion',
      description: 'Cinematic storytelling and visual content that captivates audiences. From concept to final cut, we bring your brand narrative to life through compelling visuals that resonate and inspire action.',
      services: [
        'Commercial & Brand Films',
        'Corporate Video Production',
        'Creative Direction & Concept Development',
        'Post-Production & Editing',
        '3D Animation & CGI',
        'Photography & Visual Assets',
        'Social Media Content Creation',
        'Event Coverage & Live Streaming',
        'Motion Graphics & Design',
        'Content Strategy & Planning'
      ],
      ctaText: 'Create With IRIS',
      ctaPath: '/divisions/iris',
      icon: Camera,
      gradient: 'bg-gradient-to-br from-purple-500 to-pink-500',
    },
    {
      name: 'BIONIC MEDIA',
      tagline: 'Where Brands Come Alive',
      description: 'Strategic brand management and marketing that drives growth. We amplify your brand presence and connect you with your ideal customers through data-driven strategies and creative campaigns.',
      services: [
        'Brand Strategy & Positioning',
        'Social Media Management',
        'Public Relations & Communications',
        'Digital Marketing Campaigns',
        'SEO & Content Marketing',
        'Influencer Partnerships',
        'Brand Identity & Design',
        'Market Research & Analysis',
        'Crisis Management',
        'Performance Analytics & Reporting'
      ],
      ctaText: 'Amplify With BIONIC',
      ctaPath: '/divisions/bionic',
      icon: TrendingUp,
      gradient: 'bg-gradient-to-br from-orange-500 to-red-500',
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
            Specialized Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each division is a master of its domain, bringing deep expertise and innovative solutions 
            to every project. Together, they form an unstoppable force for business transformation.
          </p>
        </motion.div>

        <div className="space-y-16">
          {divisions.map((division, index) => (
            <motion.div
              key={division.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {division.name}
                      </h3>
                      <p className="text-[#ffd000] font-semibold text-lg">
                        {division.tagline}
                      </p>
                    </div>
                    
                    <div className="p-4 bg-[#ffd000]/10 rounded-xl">
                      <division.icon className="h-8 w-8 text-[#ffd000]" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {division.description}
                  </p>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="text-gray-900 font-semibold mb-3">Key Services:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {division.services.slice(0, 6).map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="flex items-center space-x-2 text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-[#ffd000] rounded-full" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href={division.ctaPath}
                      className="inline-flex items-center space-x-2 text-[#ffd000] hover:text-[#ff9900] transition-colors font-semibold"
                    >
                      <span>{division.ctaText}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Visual Element */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`w-full h-96 ${division.gradient} rounded-2xl flex items-center justify-center`}>
                    <division.icon className="h-32 w-32 text-white" />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#ffd000]/20 to-[#ff9900]/20 rounded-2xl blur-xl -z-10" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsOverview;
