"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Megaphone, Search, Target, BarChart3, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

const Bionic: FC = () => {
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

  const strategies = [
    'Brand Storytelling', 'Customer Journey Mapping', 'Omnichannel Marketing', 'Influencer Marketing',
    'Content Strategy', 'Community Building', 'Reputation Management', 'Crisis Communications'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Research & Analysis',
      description: 'Deep market research and audience analysis to inform strategic decisions.'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Comprehensive strategy development that aligns with your business objectives.'
    },
    {
      step: 3,
      title: 'Campaign Execution',
      description: 'Professional execution of marketing campaigns across all relevant channels.'
    },
    {
      step: 4,
      title: 'Optimization & Growth',
      description: 'Continuous optimization and scaling to maximize results and ROI.'
    }
  ];

  const detailedList = [
    'Brand Identity – Develop and refine logo, visual identity, and style.',
    'Brand Guidelines & Design Systems – Define rules for consistent use of branding.',
    'Brand Consistency Monitoring – Ensure brand is represented correctly everywhere.',
    'Lifecycle Marketing – CRM flows, retention emails, customer re‑engagement.',
    'Performance Marketing – Paid ads (Google, Meta, LinkedIn, etc.).',
    'Media Buying & Planning – Strategically purchase ad placements.',
    'Campaign Management – End‑to‑end campaign planning and execution.',
    'Conversion Rate Optimization (CRO) – Improve website and funnel performance.',
    'SEO & Content Marketing – Drive organic traffic with optimized content.',
    'Social Media Strategy & Management – Build strong presence across platforms.',
    'Influencer & Partnership Marketing – Collaborate with creators and partners.'
  ];

  return (
    <>
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
          <div className="container text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#ffd000] text-lg md:text-xl mb-4 tracking-wider font-medium"
              >
                BIONIC MEDIA
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
              >
                Where Brands Come Alive
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Strategic brand management and marketing that drives growth. We amplify your brand presence and connect you with your ideal customers through data-driven strategies and creative campaigns.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="bg-[#ffd000] hover:bg-[#ff9900] text-black px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
                  >
                    <span>Amplify With BIONIC</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="#portfolio"
                    className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
                  >
                    <span>View Case Studies</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
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

        {/* Detailed inclusions */}
        <section className="py-24 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What BIONIC MEDIA includes</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {detailedList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Strategies Section */}
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
                Strategic Approaches
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We employ proven marketing strategies and innovative approaches to ensure 
                your brand stands out in today's competitive marketplace.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={strategy}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white border border-gray-300 rounded-lg text-center hover:border-[#ffd000] hover:text-[#ffd000] transition-colors shadow-sm"
                >
                  <div className="text-sm font-medium">{strategy}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                Our Marketing Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach that ensures every marketing initiative delivers maximum impact 
                and drives sustainable business growth.
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

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 bg-gray-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore some of our recent marketing campaigns that have delivered exceptional results 
                and transformed our clients' businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project, index) => (
                <motion.div
                  key={project}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg group hover:shadow-xl transition-shadow"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <TrendingUp className="h-16 w-16 text-[#ffd000]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ffd000] transition-colors mb-2">
                    Marketing Campaign {project}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A comprehensive marketing strategy that delivered exceptional ROI and significantly increased brand awareness and customer engagement.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Social Media', 'Content Marketing', 'SEO'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-[#ffd000]/10 text-[#ffd000] text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center space-x-2 text-[#ffd000] hover:text-[#ff9900] transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-gray-900 to-black">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                Ready to Amplify Your Brand?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let\'s discuss how BIONIC MEDIA can help you build a powerful brand presence 
                and connect with your ideal customers through strategic marketing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="bg-[#ffd000] hover:bg-[#ff9900] text-black px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
                  >
                    <span>Amplify With BIONIC</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/divisions"
                    className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
                  >
                    <span>Explore Other Divisions</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Bionic;
