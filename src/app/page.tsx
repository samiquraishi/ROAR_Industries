import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Steps from "@/sections/Steps";
import Domain from "@/sections/Domain";
import FAQs from "@/sections/FAQs";
import Footer from "@/sections/Footer";
import Enquiry from "@/sections/Enquiry";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Domain />
      <Steps />
      <FAQs/>
      <Enquiry/>
      <Footer/>
    </>
  );
}
