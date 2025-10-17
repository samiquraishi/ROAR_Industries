"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Camera, Video, Edit3, Zap, CheckCircle } from "lucide-react";

const IrisServices: FC = () => {
  const services = [
    {
      title: 'Commercial & Brand Films',
      description: 'Compelling commercial videos and brand films that tell your story and connect with your audience on an emotional level.',
      features: ['Concept Development', 'Professional Production', 'Brand Storytelling', 'Multi-platform Distribution'],
      icon: Video
    },
    {
      title: 'Corporate Video Production',
      description: 'Professional corporate videos for training, presentations, and internal communications that engage and inform.',
      features: ['Training Videos', 'Company Presentations', 'Internal Communications', 'Event Coverage'],
      icon: Camera
    },
    {
      title: 'Creative Direction',
      description: 'Strategic creative direction that ensures your visual content aligns with your brand and achieves your marketing goals.',
      features: ['Brand Alignment', 'Creative Strategy', 'Visual Identity', 'Campaign Development'],
      icon: Edit3
    },
    {
      title: 'Post-Production & Editing',
      description: 'Professional editing and post-production services that bring your raw footage to life with stunning visuals and effects.',
      features: ['Color Grading', 'Motion Graphics', 'Sound Design', 'Special Effects'],
      icon: Edit3
    },
    {
      title: '3D Animation & CGI',
      description: 'Cutting-edge 3D animation and computer-generated imagery that creates immersive visual experiences.',
      features: ['3D Modeling', 'Character Animation', 'Visual Effects', 'Product Visualization'],
      icon: Zap
    },
    {
      title: 'Photography & Visual Assets',
      description: 'Professional photography and visual asset creation for all your marketing and branding needs.',
      features: ['Product Photography', 'Event Photography', 'Portrait Sessions', 'Stock Image Creation'],
      icon: Camera
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
            Our Creative Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine artistic vision with technical expertise to create visual content 
            that not only looks stunning but also drives real business results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg group hover:shadow-xl transition-shadow"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ffd000] to-[#ff9900] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-black" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ffd000] transition-colors mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#ffd000] flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IrisServices;
