import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BionicHero from "@/app/divisions/bionic/sections/BionicHero";
import BionicServices from "@/app/divisions/bionic/sections/BionicServices";
import BionicInclusions from "@/app/divisions/bionic/sections/BionicInclusions";
import BionicStrategies from "@/app/divisions/bionic/sections/BionicStrategies";
import BionicProcess from "@/app/divisions/bionic/sections/BionicProcess";
import BionicPortfolio from "@/app/divisions/bionic/sections/BionicPortfolio";
import BionicCTA from "@/app/divisions/bionic/sections/BionicCTA";

export default function Bionic() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <BionicHero />
        <BionicServices />
        <BionicInclusions />
        <BionicStrategies />
        <BionicProcess />
        <BionicPortfolio />
        <BionicCTA />
      </div>
      <Footer />
    </>
  );
}
