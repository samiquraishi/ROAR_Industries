import { FC } from "react";

const faqs = [
  {
    question: "What services does Roar Industries offer?",
    answer:
      "We specialize in three core areas: Technology solutions including web and mobile applications, Media services for digital experiences and brand strategies, and Film Production for cinematic content and branded videos.",
  },
  {
    question: "What is your project development process?",
    answer:
      "We follow a collaborative approach starting with discovery and strategy, followed by design and development phases, with regular client check-ins and feedback loops to ensure the final product exceeds your expectations.",
  },
  {
    question: "What does it mean by 'Let's grow together'?",
    answer:
      "This reflects our philosophy of building long-term partnerships with our clients. We don't just deliver a project and walk away, we're invested in your ongoing success, offering continued support, optimization, and strategic guidance as your business evolves.",
  },
  {
    question: "What makes Roar Industries different?",
    answer:
      "Our unique combination of technical expertise, creative vision, and strategic thinking allows us to deliver comprehensive solutions. Whether you need cutting-edge technology, compelling media content, or professional film production, we bring it all under one roof.",
  },
];

const FAQs: FC = () => {
  return (
    <section className="pt-24 md:pt-32 lg:pt-40 pb-8 md:pb-16 lg:pb-22">
      <div className="container">
        <h2 className="text-4xl md:text-7xl">FAQs</h2>
        <div className="mt-10 md:mt-16">
          {faqs.map(({ question }) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted py-6 md:py-8 last:border-b"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-lg md:text-2xl lg:text-3xl">{question}</div>
                <div className="inline-flex items-center justify-center size-6 md:size-9 lg:size-11 border border-stone-400 rounded-full shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;