"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Zap, Target, Users, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

const About: FC = () => {
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
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace innovation and cutting-edge solutions to stay ahead of industry trends.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We operate with the highest standards of integrity, transparency, and ethical business practices.'
    }
  ];

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

  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '50+', label: 'Industry Awards' },
    { number: '25+', label: 'Countries Served' }
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
                ABOUT ROAR INDUSTRIES
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight"
              >
                Every Great Brand Starts With a ROAR
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                We're not just another agency. We're your complete business growth partner, 
                providing an integrated ecosystem of expertise that transforms visions into victories.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  To empower businesses of all sizes to achieve extraordinary growth through our 
                  integrated approach that combines strategic thinking, creative excellence, and 
                  technological innovation.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe that every business has the potential to make a significant impact. 
                  Our role is to provide the expertise, tools, and support needed to unlock that 
                  potential and turn ambitious visions into market-leading realities.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-[#ffd000]/20 to-[#ff9900]/20 rounded-2xl flex items-center justify-center">
                  <Zap className="h-32 w-32 text-[#ffd000]" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#ffd000]/20 to-[#ff9900]/20 rounded-2xl blur-xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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

        {/* Timeline Section */}
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
                From a bold vision to a comprehensive ecosystem, here\'s how ROAR INDUSTRIES 
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

        {/* Team Section */}
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

        {/* Achievements Section */}
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
                Our Achievements
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The numbers speak for themselves. Here's what we've accomplished 
                together with our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-light text-[#ffd000] mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {achievement.label}
                  </div>
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
                Ready to Join Our Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Become part of our growing family of successful businesses. 
                Let\'s write the next chapter of your growth story together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="bg-[#ffd000] hover:bg-[#ff9900] text-black px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
                  >
                    <span>Start Your Journey</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/framework"
                    className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
                  >
                    <span>Explore Our Framework</span>
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

export default About;
