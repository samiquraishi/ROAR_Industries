"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const BionicPortfolio: FC = () => {
  return (
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
            and transformed our clients&apos; businesses.
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
  );
};

export default BionicPortfolio;
