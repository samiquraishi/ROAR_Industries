"use client";

import { FC, useRef } from "react"; // Removed useState and useEffect
import {
  motion,
  AnimatePresence,
  useInView, // Import useInView
} from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import devintLogo from "@/assets/images/devintlogo.png";
import irisLogo from "@/assets/images/irislogo.png";
import bionicLogo from "@/assets/images/bioniclogo.png";

// --- Division Data (No Changes) ---
const divisions = [
  {
    name: "DEVINT",
    tagline: "Engineering the Future of Growth",
    description:
      "Technology solutions that power business transformation. From web development to AI integration, we build the digital infrastructure your business needs to scale efficiently and stay competitive in the digital age.",
    logo: devintLogo,
    ctaText: "Get Tech Consultation",
    ctaPath: "/divisions/devint",
    points: [
      "Web Development & Design",
      "Mobile Application Development",
      "AI & Machine Learning Solutions",
      "Cloud Infrastructure & DevOps",
      "API Development & Integration",
      "Business Process Automation",
      "Data Analytics & Visualization",
      "E-commerce Solutions",
      "Cybersecurity Implementation",
      "Digital Transformation Consulting",
    ],
  },
  {
    name: "IRIS STUDIO",
    tagline: "We Turn Stories Into Motion",
    description:
      "Cinematic storytelling and visual content that captivates audiences. From concept to final cut, we bring your brand narrative to life through compelling visuals that resonate and inspire action.",
    logo: irisLogo,
    ctaText: "Create With IRIS",
    ctaPath: "/divisions/iris",
    points: [
      "Commercial & Brand Films",
      "Corporate Video Production",
      "Creative Direction & Concept Development",
      "Post-Production & Editing",
      "3D Animation & CGI",
      "Photography & Visual Assets",
      "Social Media Content Creation",
      "Event Coverage & Live Streaming",
      "Motion Graphics & Design",
      "Content Strategy & Planning",
    ],
  },
  {
    name: "BIONIC MEDIA",
    tagline: "Where Brands Come Alive",
    description:
      "Strategic brand management and marketing that drives growth. We amplify your brand presence and connect you with your ideal customers through data-driven strategies and creative campaigns.",
    logo: bionicLogo,
    ctaText: "Amplify With BIONIC",
    ctaPath: "/divisions/bionic",
    points: [
      "Brand Strategy & Positioning",
      "Social Media Management",
      "Public Relations & Communications",
      "Digital Marketing Campaigns",
      "SEO & Content Marketing",
      "Influencer Partnerships",
      "Brand Identity & Design",
      "Market Research & Analysis",
      "Crisis Management",
      "Performance Analytics & Reporting",
    ],
  },
];

// --- Animation Variants (No Changes) ---
const transition = { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const };
const exitTransition = { duration: 0.3, ease: "easeOut" as const };

// Left Panel Animation - starts from center, expands to left edge
const leftPanelAnimation = {
  initial: { clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" },
  animate: {
    clipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)",
    transition,
  },
  exit: {
    clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    transition: exitTransition,
  },
};

// Right Panel Animation - starts from center, expands to right edge
const rightPanelAnimation = {
  initial: { clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" },
  animate: {
    clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
    transition,
  },
  exit: {
    clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    transition: exitTransition,
  },
};

// --- Division Card Component (Fixed) ---
interface DivisionCardProps {
  division: (typeof divisions)[0];
  // No longer need index or isVisible
}

const DivisionCard: FC<DivisionCardProps> = ({ division }) => {
  // Use a ref to track the component's visibility
  const ref = useRef(null);
  // Trigger animation once when 30% of the element is in view
  const isVisible = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="mb-32 md:mb-48">
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-800 mb-4">
          {division.name}
        </h2>
        <p className="text-stone-600 text-base md:text-xl lg:text-2xl mb-6">
          {division.tagline}
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-stone-400 mb-16"></div>

      {/* Desktop Layout - Animated Panels */}
      <div
        ref={ref}
        className="hidden md:block relative h-[60vh] md:h-[70vh] overflow-hidden"
      >
        {/* Left Panel - Logo, Description, Link */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              key={`${division.name}-left`}
              // --- FIX: Changed to items-start and justify-end ---
              className="absolute top-0 left-0 h-full w-full bg-black text-stone-300 p-4 md:p-8 lg:p-12 flex flex-col items-start justify-end"
              variants={leftPanelAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* --- FIX: Removed text-center --- */}
              <div className="w-full md:w-1/2 md:pr-8">
                <div className="text-left">
                  <div className="mb-6">
                    <Image
                      src={division.logo}
                      alt={`${division.name} Logo`}
                      width={200}
                      height={200}
                      className="w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60"
                    />
                  </div>
                  <p className="text-stone-300 leading-relaxed mb-6 md:mb-8 text-sm md:text-base lg:text-lg">
                    {division.description}
                  </p>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href={division.ctaPath}
                      className="inline-flex items-center space-x-2 text-stone-300 hover:text-stone-100 transition-colors font-semibold"
                    >
                      <span>{division.ctaText}</span>
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right Panel - Service Points */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              key={`${division.name}-right`}
              // This panel's styling is fine as-is
              className="absolute top-0 right-0 h-full w-full bg-black text-stone-300 p-4 md:p-8 lg:p-12 flex flex-col justify-center"
              variants={rightPanelAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="w-full md:w-1/2 md:ml-auto md:pl-8">
                <h3 className="text-stone-300 text-xl md:text-2xl font-semibold mb-6">
                  Key Services
                </h3>
                <ul className="space-y-3">
                  {division.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 text-stone-300 text-xs md:text-sm lg:text-base"
                    >
                      <Check className="h-4 w-4 text-stone-400 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- Divisions Overview (Simplified) ---
const DivisionsOverview: FC = () => {
  // --- FIX: Removed useState and useEffect for IntersectionObserver ---

  return (
    <section className="bg-stone-200 pt-48 lg:pt-56 pb-24 ">
      <div className="max-w-full px-4 md:px-8">
        {/* Main Heading (No Changes) */}
        <div className="mb-8 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-4">
            Specialized
            <br /> Excellence
          </h1>
          <p className="text-stone-600 text-base md:text-xl lg:text-2xl leading-relaxed">
            Each division is a master of its domain, bringing deep expertise and
            innovative solutions to every project.
          </p>
        </div>

        {/* Mobile Layout - 2 Column Grid */}
        <div className="block md:hidden space-y-6 mx-[-1rem] px-4">
          {divisions.map((division) => (
            <div
              key={division.name}
              className="grid grid-cols-2 overflow-hidden"
            >
              {/* Left Column - Logo */}
              <div className="bg-black text-white p-4 flex flex-col items-center justify-center">
                <Image
                  src={division.logo}
                  alt={`${division.name} Logo`}
                  width={120}
                  height={120}
                  className="mb-4"
                />
                <h3
                  className="font-bold text-white text-center mb-2"
                  style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
                >
                  {division.name}
                </h3>
                <p
                  className="text-stone-300 font-semibold text-center text-xs"
                  style={{ fontSize: "clamp(0.625rem, 1.5vw, 0.875rem)" }}
                >
                  {division.tagline}
                </p>
              </div>

              {/* Right Column - Content */}
              <div className="bg-black text-white p-4 flex flex-col justify-center space-y-3">
                <p
                  className="text-stone-300 text-xs leading-relaxed"
                  style={{ fontSize: "clamp(0.625rem, 1.5vw, 0.875rem)" }}
                >
                  {division.description}
                </p>
                <Link
                  href={division.ctaPath}
                  className="inline-flex items-center space-x-2 text-stone-300 hover:text-stone-100 transition-colors font-semibold"
                  style={{ fontSize: "clamp(0.625rem, 1.2vw, 0.875rem)" }}
                >
                  <span>{division.ctaText}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - Animated Panels */}
        <div className="hidden md:block">
          {divisions.map((division) => (
            <DivisionCard key={division.name} division={division} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsOverview;
