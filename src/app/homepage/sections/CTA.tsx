"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA: FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:78px_78px] z-0"></div>

      <div className="container relative z-10">
        <div className="flex justify-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
              Join the brands that have chosen to ROAR. Let&apos;s discuss how
              we can help you achieve extraordinary growth.
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
        </div>
      </div>
    </section>
  );
};

export default CTA;
