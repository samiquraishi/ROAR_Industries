import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/app/about/sections/AboutHero";
import AboutMission from "@/app/about/sections/AboutMission";
import AboutValues from "@/app/about/sections/AboutValues";
import AboutTimeline from "@/app/about/sections/AboutTimeline";
import AboutTeam from "@/app/about/sections/AboutTeam";
import AboutAchievements from "@/app/about/sections/AboutAchievements";
import AboutCTA from "@/app/about/sections/AboutCTA";

export default function About() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <AboutHero />
        <AboutMission />
        <AboutValues />
        <AboutTimeline />
        <AboutTeam />
        <AboutAchievements />
        <AboutCTA />
      </div>
      <Footer />
    </>
  );
}
