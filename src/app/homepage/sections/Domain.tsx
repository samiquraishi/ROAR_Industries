"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Code, Camera, TrendingUp, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import image1 from "@/assets/images/devint.jpg";
import image2 from "@/assets/images/iris.jpg";
import image3 from "@/assets/images/bionic.jpg";
import Image from "next/image";

const domains = [
  {
    name: "DEVINT",
    tagline: "Engineering the Future of Growth",
    quote:
      "Technology solutions that power business transformation. From web development to AI integration, we build the digital infrastructure your business needs to scale efficiently and stay competitive.",
    image: image1,
    imagePositionY: 0.2,
    icon: Code,
    gradient: "bg-gradient-to-br from-orange-500 to-red-900",
    ctaText: "Get Tech Consultation",
    ctaPath: "/divisions/devint",
  },
  {
    name: "IRIS STUDIO",
    tagline: "We Turn Stories Into Motion",
    quote:
      "Cinematic storytelling and visual content that captivates audiences. From concept to final cut, we bring your brand narrative to life through compelling visuals that resonate and inspire action.",
    image: image2,
    imagePositionY: 0.1,
    icon: Camera,
    gradient: "bg-gradient-to-br from-purple-800 to-pink-700",
    ctaText: "Create With IRIS",
    ctaPath: "/divisions/iris",
  },
  {
    name: "BIONIC MEDIA",
    tagline: "Where Brands Come Alive",
    quote:
      "Strategic brand management and marketing that drives growth. We amplify your brand presence and connect you with your ideal customers through data-driven strategies and creative campaigns.",
    image: image3,
    imagePositionY: 0.55,
    icon: TrendingUp,
    gradient: "bg-gradient-to-br from-blue-800 to-cyan-400",
    ctaText: "Amplify With BIONIC",
    ctaPath: "/divisions/bionic",
  },
];

const Domain: FC = () => {
  const [currentDomain, setCurrentDomain] = useState(0);

  const nextDomain = () => {
    setCurrentDomain((prev) => (prev + 1) % domains.length);
  };

  const prevDomain = () => {
    setCurrentDomain((prev) => (prev - 1 + domains.length) % domains.length);
  };

  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="container">
        <div>
          <h2 className="text-4xl md:text-7xl flex flex-col overflow-hidden mb-20">
            <span className="whitespace-nowrap">Explore Our Divisions</span>
            <span className="whitespace-nowrap self-end bg-gradient-to-r from-roar-gold via-roar-orange to-[#ffc800] bg-clip-text text-transparent">
              Three Divisions, One Mission
            </span>
          </h2>
        </div>

        <div className="mt-20">
          {domains.map(
            (
              {
                name,
                tagline,
                quote,
                image,
                imagePositionY,
                icon: Icon,
                gradient,
                ctaText,
                ctaPath,
              },
              index
            ) =>
             index === currentDomain && (
                <div key={index} className="grid md:grid-cols-5 gap-8 lg:gap-16 md:items-end">
                  <div className="aspect-square md:aspect-[3/4] md:col-span-2">
                    <Image
                      src={image}
                      alt={name}
                      className="size-full object-cover"
                      style={{ objectPosition: `50% ${imagePositionY * 100}%` }}
                    />
                  </div>

                  <div className="md:col-span-3 space-y-6 ">
                    <div className="flex items-center space-x-4 mb-4">
                      <div
                        className={`w-16 h-16 ${gradient}  flex items-center justify-center`}
                      >
                        <Icon className="h-8 w-8 text-stone-300" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-stone-900">
                          {name}
                        </h3>
                        <p className="text-[#ffd000] font-semibold">
                          {tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-xl text-gray-700 leading-relaxed">
                      {quote}
                    </p>

                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        href={ctaPath}
                        className="inline-flex items-center space-x-2 text-[#ffd000] hover:text-[#ff9900] transition-colors font-semibold"
                      >
                        <span>{ctaText}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              )
          )}
        </div>

        <div className="flex gap-4 mt-12">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={prevDomain}
            className="border-2 border-[#540000] bg-[#540000] hover:bg-stone-200 inline-flex items-center justify-center size-11 rounded-full text-stone-200 hover:text-[#540000] transition-colors"
          >
            <ArrowLeft className="size-6" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={nextDomain}
            className="border-2 border-[#540000] bg-[#540000] hover:bg-stone-200 inline-flex items-center justify-center size-11 rounded-full text-stone-200 hover:text-[#540000] transition-colors"
          >
            <ArrowRight className="size-6" />
          </motion.button>
        </div>

        {/* Division Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {domains.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentDomain(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentDomain ? "bg-[#540000]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domain;
