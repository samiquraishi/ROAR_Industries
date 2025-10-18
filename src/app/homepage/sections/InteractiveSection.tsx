"use client";

import { FC, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minimize, Play } from "lucide-react";

const InteractiveSection: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (sectionRef.current && isHovering) {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      }
    };

    if (isHovering) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering]);

  const handleClick = () => {
    console.log("Interactive section clicked!");
    setIsVideoOpen(true);
  };

  const handleMouseEnter = () => {
    console.log("Mouse entered interactive section");
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    console.log("Mouse left interactive section");
    setIsHovering(false);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full h-screen bg-transparent cursor-pointer -mt-screen"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div
              // Apply the blend mode directly to the animated element
              className="fixed pointer-events-none z-50 mix-blend-difference"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                left: mousePosition.x + 20,
                top: mousePosition.y - 20,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* This div is now just for layout, and the children are white */}
              <div className="flex items-center gap-1">
                <span className="text-white text-md">Show reel</span>
                <Play className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* Blurred background */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={closeVideo}
            ></div>

            {/* Video container */}
            <motion.div
              layoutId="video-player"
              className="relative w-[90vw] h-[50.625vw] max-w-[1600px] max-h-[90vh] z-10 rounded-lg overflow-hidden"
            >
              <video
                src="/videos/ROAR-exp.mp4"
                className="w-full h-full object-contain"
                loop
                autoPlay
                controls
                onError={(e) => {
                  console.log("Video loading error:", e);
                }}
                onLoadStart={() => {
                  console.log("Video loading started");
                }}
              />
              {/* Close Button */}
              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 text-white p-2 bg-white/20 rounded-full transition-colors hover:bg-white/30"
                aria-label="Close"
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

export default InteractiveSection;
