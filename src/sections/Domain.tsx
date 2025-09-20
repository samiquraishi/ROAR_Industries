import { FC } from "react";
import image1 from "@/assets/images/dom-tech.png";
import image2 from "@/assets/images/dom-med.png";
import image3 from "@/assets/images/dom-mark.png";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const domains = [
  {
    name: "Technology",
    quote: "We build scalable web applications, mobile solutions, and custom software that drive innovation and streamline your business operations.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Media",
    quote: "We create compelling digital experiences, brand strategies, and content solutions that captivate audiences and amplify your message.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Market",
    quote: "We develop e-commerce platforms, marketplace solutions, and sales optimization tools that connect your business with the right customers.",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Domain: FC = () => {
  return <div>Testimonials</div>;
};

export default Domain;
