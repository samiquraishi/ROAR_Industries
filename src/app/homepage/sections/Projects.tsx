"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Code, Camera } from "lucide-react";
import Link from "next/link";

const Projects: FC = () => {
  const projects = [
    {
      title: "Tech Startup Transformation",
      description: "Complete digital transformation for a fintech startup, including brand strategy, web development, and marketing campaigns.",
      category: "Technology",
      icon: Code,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Brand Campaign Success",
      description: "Multi-channel brand campaign that increased awareness by 300% and drove significant customer acquisition.",
      category: "Marketing",
      icon: TrendingUp,
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Creative Video Series",
      description: "Award-winning video series that captured brand essence and drove exceptional engagement across platforms.",
      category: "Creative",
      icon: Camera,
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
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
            Featured Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent projects that have delivered exceptional results 
            and transformed our clients&apos; businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl group hover:shadow-xl transition-shadow"
            >
              <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center`}>
                <project.icon className="h-16 w-16 text-[#ffd000]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ffd000] transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-[#ffd000]/10 text-[#ffd000] text-sm rounded-full">
                  {project.category}
                </span>
                <Link
                  href="#"
                  className="inline-flex items-center space-x-2 text-[#ffd000] hover:text-[#ff9900] transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
