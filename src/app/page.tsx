"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomePage from "@/app/homepage/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already seen the loading screen in this session
    const loadingSeen = sessionStorage.getItem('loadingSeen');
    
    if (loadingSeen) {
      // User has already seen loading screen, skip it
      setIsLoading(false);
    } else {
      // Show loading screen for 3 seconds
      const timer = setTimeout(() => {
        setIsLoading(false);
        // Mark that user has seen the loading screen
        sessionStorage.setItem('loadingSeen', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
              >
                <span className="block">Want to grow</span>
                <span className="block">your business?</span>
              </motion.h1>

              {/* Subtle loading indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="mt-8 flex justify-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 bg-white rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!isLoading && <HomePage />}
    </>
  );
}
