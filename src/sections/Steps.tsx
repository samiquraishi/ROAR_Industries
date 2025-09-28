import { FC } from "react";
import lionicon from "@/assets/images/lion_logo.png";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Building Business Strategy",
    text: "Lay the foundation for growth through brand review, discovery workshops, and strategic positioning to establish market presence.",
  },
  {
    id: 2,
    title: "Research & Analytics",
    text: "Make decisions backed by real data through market research, business analytics, and customer insights to identify opportunities.",
  },
  {
    id: 3,
    title: "Technology Design & Development",
    text: "Build the digital engine with UX design, mobile apps, e-commerce platforms, and technical architecture for scalable systems.",
  },
  {
    id: 4,
    title: "Creative Content Production & Direction",
    text: "Bring the brand to life through creative concepts, video production, photography, and visual content that drives engagement.",
  },
  {
    id: 5,
    title: "Brand Management & Marketing",
    text: "Drive consistency and performance through brand guidelines, lifecycle marketing, and multi-channel campaign management.",
  },
  {
    id: 6,
    title: "Reviewing Growth & Performance",
    text: "Measure, learn and scale with performance dashboards, ROI analysis, and continuous improvement plans for sustained growth.",
  },
];

const Steps: FC = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <Image
              src={lionicon}
              alt="Lion Logo"
              className="mb-4 w-12 md:w-16 h-12 md:h-16 filter brightness-0 invert"
            />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light">
            Let&apos;s grow with six unique steps.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {data.map((item) => (
            <div key={item.id} className="text-center">
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                <span className="text-2xl font-semibold text-gray-800">
                  {item.id.toString().padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl text-white font-medium leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;