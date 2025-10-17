"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const ContactCTA: FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-black">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Reach out to us and let&apos;s discuss how we can 
            help you achieve extraordinary growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="mailto:hello@roarindustries.com"
                className="bg-[#ffd000] hover:bg-[#ff9900] text-black px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Email Us Directly</span>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:+15557627669"
                className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Call Us Now</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
