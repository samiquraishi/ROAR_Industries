import { FC } from "react";
import image1 from "@/assets/images/dom-tech.png";
import image2 from "@/assets/images/dom-mark.png";
import image3 from "@/assets/images/dom-med.png";
import Image from "next/image";

const domains = [
  {
    name: "INFITRON",
    quote:
      "We build scalable web applications, mobile solutions, and custom software that drive innovation and streamline your business operations.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "DEVINT",
    quote:
      "We create compelling digital experiences, brand strategies, and content solutions that captivate audiences and amplify your message.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "IRIS STUDIO",
    quote:
      "We produce cinematic content, documentaries, and branded videos that tell powerful stories and bring your vision to life.",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Domain: FC = () => {
  const domainIndex = 0;
  return (
    <section className="py-24 md:py-32 lg:y-40">
      <h2 className="text-4xl md-text-7xl flex flex-col overflow-hidden">
        <span className="whitespace-nowrap">We work on everything.</span>
        <span className="whitespace-nowrap self-end text-[#660303]">
          We work on everything.
        </span>
      </h2>
      <div className="container">
        <div className="mt-20">
          {domains.map(
            ({ name, quote, image, imagePositionY }, index) =>
              index === domainIndex && (
                <div
                  key={name}
                  className="grid md:grid-cols-5 gap-8 lg:gap-16 md:items-end "
                >
                  <div className="aspect-square md:aspect-[3/4] md:col-span-2">
                    <Image
                      src={image}
                      alt={name}
                      className="size-full object-cover"
                      style={{ objectPosition: `50% ${imagePositionY * 100}%` }}
                    />
                  </div>

                  <div className="text-3xl mt-8 md:col-span-3">{quote}</div>
                </div>
              )
          )}
        </div>
        <div className="flex gap-4 mt-6">
          <button className="border border-stone-400 inline-flex items-center justify-center size-11 rounded-full">
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button className="border border-stone-400 inline-flex items-center justify-center size-11 rounded-full">
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Domain;