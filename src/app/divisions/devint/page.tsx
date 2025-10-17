import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DevintHero from "@/app/divisions/devint/sections/DevintHero";
import DevintServices from "@/app/divisions/devint/sections/DevintServices";
import DevintInclusions from "@/app/divisions/devint/sections/DevintInclusions";
import DevintTechnologies from "@/app/divisions/devint/sections/DevintTechnologies";
import DevintProcess from "@/app/divisions/devint/sections/DevintProcess";
import DevintPortfolio from "@/app/divisions/devint/sections/DevintPortfolio";
import DevintCTA from "@/app/divisions/devint/sections/DevintCTA";

export default function Devint() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <DevintHero />
        <DevintServices />
        <DevintInclusions />
        <DevintTechnologies />
        <DevintProcess />
        <DevintPortfolio />
        <DevintCTA />
      </div>
      <Footer />
    </>
  );
}
