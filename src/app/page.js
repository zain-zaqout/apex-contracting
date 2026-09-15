"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Projects from "../components/Projects";
import Process from "../components/Process";
import SuccessStories from "../components/SuccessStories";
import ContactFAQ from "../components/ContactFAQ";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import FooterBottom from "../components/FooterBottom";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#fcfbf7]">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Projects />
        <Process />
        <SuccessStories />
        <ContactFAQ />
      </main>
      <Footer />
      <FooterBottom />
      <FloatingWhatsApp />
    </div>
  );
}
