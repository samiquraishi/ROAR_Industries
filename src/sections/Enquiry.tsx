"use client";

import { FC, useState } from "react";

const Enquiry: FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 lg:gap-20 items-center">
          <div className="md:col-span-2">
            <div className="bg-white p-8 shadow-sm border border-stone-200">
              <h3 className="text-2xl font-medium mb-6 text-stone-800">
                Start Your Growth Journey Today
              </h3>
              <p className="text-stone-600 mb-8">
                Contact us to discuss your business goals.
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="block text-sm font-medium text-stone-700 mb-2">
                      FULL NAME
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#660303] focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <div className="block text-sm font-medium text-stone-700 mb-2">
                      EMAIL ADDRESS
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@website.com"
                      className="w-full px-4 py-3 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#660303] focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <div className="block text-sm font-medium text-stone-700 mb-2">
                    PHONE NUMBER
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#660303] focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <div className="block text-sm font-medium text-stone-700 mb-2">
                    YOUR MESSAGE
                  </div>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, and how we can help you grow..."
                    className="w-full px-4 py-3 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#660303] focus:border-transparent transition-all duration-200 resize-vertical"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#660303] text-white px-6 py-3   hover:bg-transparent border-[#660303] border-2 hover:text-[#660303] transition-colors duration-200 font-medium"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Catchy Text - Right Side */}
          <div className="md:col-span-3 flex flex-col justify-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl lg:text-7xl">
                <span className="block mb-4">Ready to make</span>
                <span className="block mb-4">your business</span>
                <span className="bg-gradient-to-r from-[#ffd000] via-[#ff9900] to-[#ffc800] bg-clip-text text-transparent font-normal">
                  ROAR &nbsp;
                </span>
                ?
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-stone-600">
                <p className="leading-loose">
                  Whether you need cutting-edge technology solutions, compelling
                  digital marketing, or cinematic storytelling, we&apos;re here to
                  amplify your vision and accelerate your growth.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-stone-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>24/7 support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Tailored solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;