import Header from "@/components/Header";
import Hero from "@/app/homepage/sections/Hero";
import Steps from "@/app/homepage/sections/Steps";
import Domain from "@/app/homepage/sections/Domain";
import CTA from "@/app/homepage/sections/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Steps />
      <Domain />
      <CTA />
      <Footer />
    </>
  );
}
