import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DivisionsHero from "@/app/divisions/sections/DivisionsHero";
import DivisionsOverview from "@/app/divisions/sections/DivisionsOverview";
import DivisionsStats from "@/app/divisions/sections/DivisionsStats";
import DivisionsIntegration from "@/app/divisions/sections/DivisionsIntegration";
import DivisionsCTA from "@/app/divisions/sections/DivisionsCTA";

export default function Divisions() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <DivisionsHero />
        <DivisionsOverview />
        <DivisionsStats />
        <DivisionsIntegration />
        <DivisionsCTA />
      </div>
      <Footer />
    </>
  );
}
