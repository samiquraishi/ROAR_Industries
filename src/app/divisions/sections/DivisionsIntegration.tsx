"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import devintLogo from "@/assets/images/devintlogo.png";
import irisLogo from "@/assets/images/irislogo.png";
import bionicLogo from "@/assets/images/bioniclogo.png";

const DivisionsIntegration: FC = () => {
  const divisions = [
    {
      name: "DEVINT",
      tagline: "Engineering the Future of Growth",
      logo: devintLogo,
      ctaText: "Get Tech Consultation",
      ctaPath: "/divisions/devint",
    },
    {
      name: "IRIS STUDIO",
      tagline: "We Turn Stories Into Motion",
      logo: irisLogo,
      ctaText: "Create With IRIS",
      ctaPath: "/divisions/iris",
    },
    {
      name: "BIONIC MEDIA",
      tagline: "Where Brands Come Alive",
      logo: bionicLogo,
      ctaText: "Amplify With BIONIC",
      ctaPath: "/divisions/bionic",
    },
  ];

  // Variants for staggering the grid items
  const gridVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each child will animate 0.2s after the previous
        delayChildren: 0.8, // Wait for the timeline to draw
      },
    },
  };

  // Variants for each item in the grid
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="pt-24 pb-56 bg-stone-200 overflow-x-hidden">
      <div className="max-w-full px-4 md:px-8">
        <div className="mb-16 md:mb-24">
          {/* Updated Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-6">
            Seamless
            <br className="hidden md:block" /> Integration
          </h2>
          {/* Updated Subheading */}
          <p className="text-stone-600 text-base md:text-xl lg:text-2xl">
            Our divisions don&apos;t just work alongside each other, they work
            together. <br className="hidden md:block" />
            This integrated approach ensures cohesive execution and maximum
            impact.
          </p>
        </div>

        {/* --- Desktop Flow (Timeline Animation) --- */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* 1. Animated Connecting Line (Timeline) */}
            <motion.div
              className="absolute top-8 left-0 right-0 h-0.5 bg-stone-400"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              style={{ transformOrigin: "left" }}
            />

            {/* 2. Divisions Grid (Staggered Children) */}
            <motion.div
              className="grid grid-cols-3 pt-24"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {divisions.map((division) => (
                <motion.div
                  key={division.name}
                  className="relative text-center cursor-pointer"
                  variants={itemVariants}
                >
                  {/* Dropping Line */}
                  <motion.div
                    className="absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 bg-stone-400"
                    initial={{ height: 0 }}
                    animate={{ height: "3rem" }}
                    transition={{ duration: 0.4, ease: "circOut", delay: 0.3 }}
                  />

                  {/* Division Card */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <div>
                      <div className="mb-3">
                        <Image
                          src={division.logo}
                          alt={`${division.name} Logo`}
                          width={80}
                          height={80}
                          className="mx-auto"
                        />
                      </div>
                      <p className="text-xs text-stone-500 mb-2">
                        {division.tagline}
                      </p>
                      <Link
                        href={division.ctaPath}
                        className="inline-flex items-center space-x-1 text-xs text-stone-600 hover:text-stone-800 transition-all hover:translate-x-1"
                      >
                        <span>{division.ctaText}</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- Mobile Flow (Vertical Timeline) --- */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Timeline */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-stone-400"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              style={{ transformOrigin: "top" }}
            />

            {/* Divisions Grid (Vertical) */}
            <motion.div
              className="space-y-12 pl-20"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {divisions.map((division) => (
                <motion.div
                  key={division.name}
                  className="relative"
                  variants={itemVariants}
                >
                  {/* Horizontal Connecting Line */}
                  <motion.div
                    className="absolute -left-8 top-4 w-12 h-0.5 bg-stone-400"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: "left" }}
                  />

                  {/* Division Card */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <div className="ml-8">
                      <div className="mb-3">
                        <Image
                          src={division.logo}
                          alt={`${division.name} Logo`}
                          width={60}
                          height={60}
                        />
                      </div>
                      <p className="text-xs text-stone-500 mb-2">
                        {division.tagline}
                      </p>
                      <Link
                        href={division.ctaPath}
                        className="inline-flex items-center space-x-1 text-xs text-stone-600 hover:text-stone-800 transition-all hover:translate-x-1"
                      >
                        <span>{division.ctaText}</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivisionsIntegration;
