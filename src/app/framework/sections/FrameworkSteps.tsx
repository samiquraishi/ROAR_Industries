"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Target, BarChart3, Code, Camera, TrendingUp, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const FrameworkSteps: FC = () => {
  const frameworkSteps = [
    {
      step: 1,
      title: 'Building Business Strategy',
      description: 'We start by understanding your vision, market position, and growth objectives. This foundation ensures every subsequent step aligns with your business goals.',
      details: [
        'Brand Review & Audit – Analyze current strengths, weaknesses, and market presence.',
        'Discovery Workshop – Interactive session to align goals, vision, and values.',
        'Brand Positioning – Define how your brand stands out from competitors.',
        'Brand Architecture – Organize products, services, and sub-brands for clarity.',
        'Brand Storytelling – Craft a powerful story that connects emotionally with audiences.',
        'Key Messaging – Identify core messages that communicate your value.',
        'Voice & Tone – Decide the style and personality of your brand\'s communication.',
        'Content Strategy – Plan what content to create, where, and why.',
        'Copywriting – Turn strategy into compelling written content that converts.'
      ],
      division: 'BIONIC MEDIA',
      divisionPath: '/divisions/bionic',
      icon: Target
    },
    {
      step: 2,
      title: 'Research & Analytics',
      description: 'Data-driven insights to inform strategy, discover opportunities, and de-risk decisions.',
      details: [
        'Qualitative Research – Interviews, focus groups, and customer journey mapping.',
        'Quantitative Research – Surveys, data analysis, and market sizing.',
        'Competition Analysis – Benchmark competitors, find gaps and opportunities.',
        'Business Analytics – Monitor KPIs, dashboards, and performance reports.',
        'Data Engineering – Prepare and structure data for deeper insights.',
        'Consumer Behavior Analytics – Track buying patterns and engagement trends.',
        'Audience Segmentation – Create buyer personas and target groups.',
        'Market Trends & Forecasting – Spot emerging opportunities in the industry.',
        'Growth Opportunities Identification – Turn insights into clear growth strategies.'
      ],
      division: 'DEVINT',
      divisionPath: '/divisions/devint',
      icon: BarChart3
    },
    {
      step: 3,
      title: 'Technology Design & Development',
      description: 'Design and build scalable digital products and platforms with world‑class UX.',
      details: [
        'User Experience (UX) Design – Create smooth and intuitive customer journeys.',
        'Wireframe & Prototyping – Visualize product and website structure before development.',
        'Product Design – Design digital products tailored to user needs.',
        'Mobile App Development – Build engaging and functional mobile applications.',
        'Website & E‑Commerce Development – Create websites and online stores.',
        'Graphics & Animation Creation – Add engaging visuals and motion graphics.',
        'CGI & 3D – Advanced visuals for ads, products, or experiences.',
        'Creative Development – Design creative assets for campaigns.',
        'Technical Architecture – Plan system structure for scalability and performance.',
        'APIs & Integrations – Connect systems and tools for efficiency.',
        'Quality Assurance – Test everything to ensure top‑quality results.'
      ],
      division: 'DEVINT',
      divisionPath: '/divisions/devint',
      icon: Code
    },
    {
      step: 4,
      title: 'Creative Content Production & Direction',
      description: 'Cinematic production that turns strategy into compelling visual stories.',
      details: [
        'Scriptwriting – Write impactful scripts for ads, videos, or films.',
        'Art Direction – Guide creative style, mood, and aesthetics.',
        'Photography & Videography – Capture professional visuals for campaigns.',
        'Advertising Shoots – Full‑scale production for commercials.',
        'Post‑Production & Editing – Refine raw footage into polished content.',
        'Animation & Motion Graphics – Create engaging animated content.',
        '3D & CGI Production – High‑end visuals for ads, products, or storytelling.'
      ],
      division: 'IRIS STUDIO',
      divisionPath: '/divisions/iris',
      icon: Camera
    },
    {
      step: 5,
      title: 'Brand Management & Marketing',
      description: 'Establish a consistent brand and drive measurable growth across channels.',
      details: [
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
      ],
      division: 'BIONIC MEDIA',
      divisionPath: '/divisions/bionic',
      icon: TrendingUp
    },
    {
      step: 6,
      title: 'Reviewing Growth & Performance',
      description: 'Close the loop with dashboards, feedback, and a clear plan to scale.',
      details: [
        'Performance Dashboards – Centralized reporting for real‑time insights.',
        'ROI Analysis – Measure returns from campaigns and investments.',
        'Customer Feedback Loop – Collect insights directly from customers.',
        'Continuous Improvement Plans – Refine strategies based on data.',
        'Scaling Roadmap – Expand successful strategies to new markets.'
      ],
      division: 'All Divisions',
      divisionPath: '/divisions',
      icon: Users
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
            The Complete Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each step builds upon the previous one, creating a comprehensive ecosystem for business growth. 
            Our integrated approach ensures seamless execution across all touchpoints.
          </p>
        </motion.div>

        <div className="space-y-8">
          {frameworkSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Step Content */}
              <div className="flex-1">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#ffd000] to-[#ff9900] rounded-full flex items-center justify-center">
                        <span className="text-black font-semibold text-lg">
                          {step.step}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-500">Step {step.step} of 6</p>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-[#ffd000]/10 rounded-lg">
                      <step.icon className="h-6 w-6 text-[#ffd000]" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Division Link */}
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href={step.divisionPath}
                      className="inline-flex items-center space-x-2 text-[#ffd000] hover:text-[#ff9900] transition-colors font-semibold"
                    >
                      <span>Explore {step.division}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>

                {/* Details */}
                {step.details && step.details.length > 0 && (
                  <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Included in this step</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      {step.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Visual Element */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="w-64 h-64 bg-gradient-to-br from-[#ffd000]/20 to-[#ff9900]/20 rounded-full flex items-center justify-center border border-[#ffd000]/30"
                >
                  <step.icon className="h-24 w-24 text-[#ffd000]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkSteps;
