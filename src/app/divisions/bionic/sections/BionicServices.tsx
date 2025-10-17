"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Users, Megaphone, Search, Target, BarChart3, CheckCircle } from "lucide-react";

const BionicServices: FC = () => {
  const services = [
    {
      title: 'Brand Strategy & Positioning',
      description: 'Comprehensive brand strategy development that positions your business for market leadership and sustainable growth.',
      features: ['Brand Identity', 'Market Positioning', 'Competitive Analysis', 'Brand Guidelines'],
      icon: Target
    },
    {
      title: 'Social Media Management',
      description: 'Strategic social media management that builds engaged communities and drives meaningful interactions with your audience.',
      features: ['Content Strategy', 'Community Management', 'Influencer Partnerships', 'Performance Analytics'],
      icon: Users
    },
    {
      title: 'Digital Marketing Campaigns',
      description: 'Data-driven digital marketing campaigns that reach your target audience and deliver measurable results.',
      features: ['Paid Advertising', 'Email Marketing', 'Content Marketing', 'Conversion Optimization'],
      icon: Megaphone
    },
    {
      title: 'SEO & Content Marketing',
      description: 'Search engine optimization and content marketing strategies that improve visibility and drive organic traffic.',
      features: ['Keyword Research', 'Content Creation', 'Link Building', 'Technical SEO'],
      icon: Search
    },
    {
      title: 'Public Relations',
      description: 'Strategic PR and communications that build brand reputation and establish thought leadership in your industry.',
      features: ['Media Relations', 'Crisis Management', 'Press Releases', 'Industry Partnerships'],
      icon: Megaphone
    },
    {
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and reporting that provide insights into campaign performance and ROI optimization.',
      features: ['Data Analysis', 'ROI Tracking', 'Performance Reports', 'Strategy Optimization'],
      icon: BarChart3
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
            Our Marketing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine strategic thinking with creative execution to deliver marketing solutions 
            that not only look great but also drive real business growth and ROI.
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

export default BionicServices;
