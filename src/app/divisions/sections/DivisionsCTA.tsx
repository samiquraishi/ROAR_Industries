"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const DivisionsCTA: FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-black">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-12 w-12 text-[#ffd000] mr-4" />
            <h2 className="text-4xl md:text-5xl font-light text-white">
              Ready to Experience the Power?
            </h2>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you need one division or the complete ecosystem, we&apos;re ready to help you achieve extraordinary growth. 
            Let&apos;s discuss which approach is right for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-[#ffd000] hover:bg-[#ff9900] text-black px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/framework"
                className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
              >
                <span>Explore Complete Framework</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DivisionsCTA;
