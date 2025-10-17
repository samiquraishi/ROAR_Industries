"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo: FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@roarindustries.com',
      description: 'Send us an email and we&apos;ll get back to you within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) ROAR-NOW',
      description: 'Speak directly with our team during business hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Global Presence',
      description: 'We work with clients worldwide, with offices in major cities'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9AM - 6PM',
      description: 'We&apos;re available to discuss your project during business hours'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Other Ways to Reach Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prefer to connect in a different way? We&apos;re available through multiple channels 
            and always happy to discuss your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl text-center group hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#ffd000] to-[#ff9900] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <info.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#ffd000] transition-colors mb-2">
                {info.title}
              </h3>
              <p className="text-[#ffd000] font-semibold mb-2">
                {info.details}
              </p>
              <p className="text-gray-600 text-sm">
                {info.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
