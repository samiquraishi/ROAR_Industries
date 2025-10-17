"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Code, ArrowRight } from "lucide-react";
import Link from "next/link";

const DevintPortfolio: FC = () => {
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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent technology solutions that have transformed businesses 
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
              <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg mb-4 flex items-center justify-center">
                <Code className="h-16 w-16 text-[#ffd000]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ffd000] transition-colors mb-2">
                Project {project}
              </h3>
              <p className="text-gray-600 mb-4">
                A comprehensive technology solution that delivered exceptional results and transformed the client&apos;s business operations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'Node.js', 'AWS'].map((tech) => (
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

export default DevintPortfolio;
