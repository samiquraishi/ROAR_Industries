"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Camera, Video, Edit3, Palette, Zap, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

const Iris: FC = () => {
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

  const capabilities = [
    '4K/8K Video Production', 'Drone Cinematography', 'Live Streaming', 'Virtual Reality Content',
    'Augmented Reality', 'Interactive Videos', '360° Content', 'Social Media Optimization'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Concept & Strategy',
      description: 'We develop creative concepts that align with your brand and marketing objectives.'
    },
    {
      step: 2,
      title: 'Pre-Production',
      description: 'Detailed planning, scripting, storyboarding, and preparation for seamless production.'
    },
    {
      step: 3,
      title: 'Production',
      description: 'Professional filming with state-of-the-art equipment and experienced crew.'
    },
    {
      step: 4,
      title: 'Post-Production',
      description: 'Expert editing, color grading, and final delivery in all required formats.'
    }
  ];

  const detailedList = [
    'Scriptwriting – Write impactful scripts for ads, videos, or films.',
    'Art Direction – Guide creative style, mood, and aesthetics.',
    'Photography & Videography – Capture professional visuals for campaigns.',
    'Advertising Shoots – Full‑scale production for commercials.',
    'Post‑Production & Editing – Refine raw footage into polished content.',
    'Animation & Motion Graphics – Create engaging animated content.',
    '3D & CGI Production – High‑end visuals for ads, products, or storytelling.'
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
                IRIS STUDIO
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
              >
                We Turn Stories Into Motion
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Cinematic storytelling and visual content that captivates audiences. From concept to final cut, we bring your brand narrative to life through compelling visuals that resonate and inspire action.
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
                    <span>Create With IRIS</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="#portfolio"
                    className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
                  >
                    <span>View Our Reel</span>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What IRIS STUDIO includes</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {detailedList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Capabilities Section */}
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
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We stay at the forefront of visual technology and creative innovation, 
                offering the latest tools and techniques to bring your vision to life.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white border border-gray-300 rounded-lg text-center hover:border-[#ffd000] hover:text-[#ffd000] transition-colors shadow-sm"
                >
                  <div className="text-sm font-medium">{capability}</div>
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
                Our Creative Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach that ensures every project delivers exceptional results, 
                from initial concept to final delivery and beyond.
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
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore some of our recent creative projects that have captivated audiences 
                and delivered exceptional results for our clients.
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
                  <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <Camera className="h-16 w-16 text-[#ffd000]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ffd000] transition-colors mb-2">
                    Creative Project {project}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A stunning visual production that captured the essence of the brand and delivered exceptional engagement results.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['4K Video', 'Motion Graphics', 'Color Grading'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-[#ffd000]/10 text-[#ffd000] text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center space-x-2 text-[#ffd000] hover:text-[#ff9900] transition-colors"
                  >
                    <span>View Project</span>
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
                Ready to Create Something Extraordinary?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let\'s discuss how IRIS STUDIO can help you create visual content 
                that captivates your audience and drives real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="bg-[#ffd000] hover:bg-[#ff9900] text-black px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
                  >
                    <span>Create With IRIS</span>
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

export default Iris;
