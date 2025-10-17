"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const BionicInclusions: FC = () => {
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
  );
};

export default BionicInclusions;
