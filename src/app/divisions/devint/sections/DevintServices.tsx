"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Cloud, Zap, Database, Shield, CheckCircle } from "lucide-react";

const DevintServices: FC = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices for optimal performance and user experience.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Cross-browser Compatible'],
      icon: Code
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.',
      features: ['Native Performance', 'Cross-platform', 'App Store Optimization', 'Push Notifications'],
      icon: Smartphone
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps solutions that ensure your applications perform reliably at any scale.',
      features: ['Auto-scaling', 'Load Balancing', 'CDN Integration', '24/7 Monitoring'],
      icon: Cloud
    },
    {
      title: 'AI & Analytics',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning to automate processes and gain insights.',
      features: ['Machine Learning', 'Data Analytics', 'Process Automation', 'Predictive Modeling'],
      icon: Zap
    },
    {
      title: 'Database Solutions',
      description: 'Robust database design and management solutions that ensure data integrity, security, and optimal performance.',
      features: ['Data Modeling', 'Performance Tuning', 'Backup & Recovery', 'Security Implementation'],
      icon: Database
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      icon: Shield
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
            Our Technology Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and industry best practices to deliver solutions 
            that drive real business value and competitive advantage.
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

export default DevintServices;
