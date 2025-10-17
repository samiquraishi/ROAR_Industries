"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const DevintInclusions: FC = () => {
  const detailedList = [
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
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">What DEVINT includes</h3>
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

export default DevintInclusions;
