"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const IrisInclusions: FC = () => {
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
  );
};

export default IrisInclusions;
