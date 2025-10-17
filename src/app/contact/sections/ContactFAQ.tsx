"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const ContactFAQ: FC = () => {
  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A typical web development project takes 4-8 weeks, while a complete brand transformation can take 3-6 months. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you work with businesses of all sizes?',
      answer: 'Yes! We work with startups, small businesses, and large enterprises. Our scalable approach ensures we can deliver value regardless of your company size or budget.'
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely. We excel at collaborating with existing teams and can integrate seamlessly with your current processes and workflows.'
    },
    {
      question: 'What makes ROAR INDUSTRIES different?',
      answer: 'Our integrated approach sets us apart. Instead of working with multiple agencies, you get a complete ecosystem of expertise working together toward your success.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about working with ROAR INDUSTRIES 
            and our comprehensive approach to business growth.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
