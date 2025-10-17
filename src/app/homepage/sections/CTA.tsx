"use client";

import { FC, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Maximize, Minimize, Play, Pause } from "lucide-react";

const CTA: FC = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Toggles the video play/pause state
  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click from bubbling up to parent elements
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Toggles the video between embedded and maximized view
  const toggleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMaximized(!isMaximized);
  };

  return (
    <>
      <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:78px_78px] z-0"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Join the brands that have chosen to ROAR. Let&apos;s discuss how we can help you achieve extraordinary growth.
              </p>
              <motion.div whileTap={{ scale: 0.95 }} className="inline-block">
                <a
                  href="/contact"
                  className="bg-[#ffd000] hover:bg-transparent text-black hover:text-white border-[#ffd000] border-2 px-7 py-3 font-semibold inline-flex items-center space-x-2 transition-all duration-300"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column: Video Player */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden group shadow-lg  cursor-pointer"
              onClick={handleTogglePlay}
            >
              <video
                ref={videoRef}
                src="/videos/ROAR-exp.mp4"
                className="w-full h-full object-cover"
                loop
                muted
                autoPlay
                playsInline
                onError={(e) => {
                  console.log('CTA Video loading error:', e);
                }}
                onLoadStart={() => {
                  console.log('CTA Video loading started');
                }}
              />
              {/* Video controls overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                {/* Play/Pause Button */}
                <button
                  onClick={handleTogglePlay}
                  className="text-white p-3 bg-white/10 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                </button>
                {/* Maximize Button */}
                <button
                  onClick={toggleMaximize}
                  className="absolute top-3 right-3 text-white p-2 bg-white/10 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                  aria-label="Maximize"
                >
                  <Maximize className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maximized Video Modal */}
      <AnimatePresence>
        {isMaximized && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* Blurred background */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={toggleMaximize}
            ></div>

            {/* Video container */}
            <motion.div
              layoutId="video-player" // For smooth animation
              className="relative w-[90vw] h-[50.625vw] max-w-[1600px] max-h-[90vh] z-10 rounded-lg overflow-hidden"
            >
              <video
                src="/videos/ROAR-exp.mp4"
                className="w-full h-full object-contain"
                loop
                autoPlay
                controls // Show default controls when maximized for better UX
                onError={(e) => {
                  console.log('Maximized Video loading error:', e);
                }}
                onLoadStart={() => {
                  console.log('Maximized Video loading started');
                }}
              />
              {/* Minimize Button */}
              <button
                onClick={toggleMaximize}
                className="absolute top-4 right-4 text-white p-2 bg-white/20 rounded-full transition-colors hover:bg-white/30"
                aria-label="Minimize"
              >
                <Minimize className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CTA;
