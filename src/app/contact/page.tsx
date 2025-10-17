import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/app/contact/sections/ContactHero";
import ContactForm from "@/app/contact/sections/ContactForm";
import ContactInfo from "@/app/contact/sections/ContactInfo";
import ContactFAQ from "@/app/contact/sections/ContactFAQ";
import ContactCTA from "@/app/contact/sections/ContactCTA";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <ContactFAQ />
        <ContactCTA />
      </div>
      <Footer />
    </>
  );
}
