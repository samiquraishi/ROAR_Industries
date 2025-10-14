"use client";

import { FC } from "react";
import {
  Target,
  BarChart3,
  Code,
  Camera,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import lionicon from "@/assets/images/lion_logo.png";
import Link from "next/link";

type FrameworkStep = {
  id: number;
  title: string;
  text: string;
  division: string;
  divisionPath: string;
  icon: React.ElementType;
  color: string;
};

const frameworkData: FrameworkStep[] = [
  {
    id: 1,
    title: "Building Business Strategy",
    text: "We start by understanding your vision, market position, and growth objectives to ensure perfect alignment.",
    division: "BIONIC MEDIA",
    divisionPath: "/divisions/bionic",
    icon: Target,
    color: "from-amber-400 to-orange-500",
  },
  {
    id: 2,
    title: "Research & Analytics",
    text: "Harnessing data-driven insights to inform strategy, discover opportunities, and de-risk decisions.",
    division: "DEVINT",
    divisionPath: "/divisions/devint",
    icon: BarChart3,
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 3,
    title: "Technology Design & Development",
    text: "Designing and building scalable digital products and platforms with a world-class user experience.",
    division: "DEVINT",
    divisionPath: "/divisions/devint",
    icon: Code,
    color: "from-violet-400 to-purple-500",
  },
  {
    id: 4,
    title: "Creative Content & Production",
    text: "Cinematic production that transforms your brand's strategy into compelling visual stories.",
    division: "IRIS STUDIO",
    divisionPath: "/divisions/iris",
    icon: Camera,
    color: "from-pink-400 to-rose-500",
  },
  {
    id: 5,
    title: "Brand Management & Marketing",
    text: "Establishing a consistent brand voice and driving measurable growth across all marketing channels.",
    division: "BIONIC MEDIA",
    divisionPath: "/divisions/bionic",
    icon: TrendingUp,
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: 6,
    title: "Reviewing Growth & Performance",
    text: "Closing the loop with dashboards, feedback, and a clear, actionable plan to scale your success.",
    division: "All Divisions",
    divisionPath: "/divisions",
    icon: Users,
    color: "from-indigo-400 to-blue-500",
  },
];

const StepCard: FC<{ item: FrameworkStep; index: number }> = ({
  item,
  index,
}) => {
  const isOdd = index % 2 !== 0;

  return (
    <Link
      href={item.divisionPath}
      className={`relative w-full md:w-5/12 -mx-8 ${
        isOdd ? "md:self-end" : "md:self-start"
      }`}
    >
      <div className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
        {/* Gradient badge */}
        <div className="absolute -top-4 -left-4">
          <div
            className={`w-12 h-12 bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
          >
            <item.icon className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 mt-10">
          <h3 className="text-xl text-white font-semibold">{item.title}</h3>
          <p className="text-white/60 leading-relaxed text-sm">{item.text}</p>

          {/* Division footer */}
          <div className="flex items-center justify-between pt-3 border-t border-white/5">
            <span className="text-xs text-white/40 tracking-widest uppercase">
              {item.division}
            </span>
            <ArrowRight className="w-4 h-4 text-white/40 transform transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/80" />
          </div>
        </div>

        {/* Hover gradient effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
        ></div>
      </div>
    </Link>
  );
};

const Steps: FC = () => {
  return (
    <section className="bg-[#0a0a0a] py-24  relative overflow-hidden -mt-20">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:78px_78px] "></div>

      {/* Animated gradient orbs */}
      <div className="absolute bottom-1 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute top-1 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
        {/* Section Header */}
        <div
          className="text-center mb-20 space-y-6"
          style={{ animation: "fadeSlideIn 0.8s ease-out" }}
        >
          <div className="flex justify-center">
            <Image
              src={lionicon}
              alt="Lion Logo"
              className="mb-4 w-12 md:w-16 h-12 md:h-16 filter brightness-0 invert"
            />
          </div>

          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight">
            The Growth Partner&nbsp;
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Framework
            </span>
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Our proven 6-step methodology transforms businesses from concept to
            market leaders.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-5xl mx-auto px-2 md:px-10">
          {/* The Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-amber-500/20 via-blue-500/20 to-purple-500/20 -translate-x-1/2"></div>

          {/* Timeline Steps */}
          <div className="relative flex flex-col items-center gap-8 md:gap-4">
            {frameworkData.map((item, index) => (
              <div
                key={item.id}
                className="relative w-full flex justify-center md:justify-between items-center "
              >
                {/* Empty div for spacing on the other side */}
                <div
                  className={`hidden md:block w-1/12 lg:w-5/12 ${
                    index % 2 !== 0 ? "" : "order-last"
                  }`}
                ></div>

                {/* Timeline Marker - hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`h-4 w-4 bg-gradient-to-br rounded-full ${item.color}`}
                  ></div>
                </div>

                <StepCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div
          className="text-center mt-20"
          style={{ animation: "fadeSlideIn 1s ease-out 1s both" }}
        >
          <Link
            href="/framework"
            className="group relative inline-flex items-center gap-3 px-7 py-3 font-semibold bg-roar-gold hover:bg-transparent text-black hover:text-white border-2 border-roar-gold overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10">Explore Complete Framework</span>
            <ArrowRight className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Steps;
