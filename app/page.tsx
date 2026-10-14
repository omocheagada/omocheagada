import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import Journey from "@/components/home/Journey";
import Principles from "@/components/home/OperatingPrinciples";
import Work from "@/components/home/SelectedWork";
import Expertise from "@/components/home/Expertise";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Philosophy />
      <Journey />
      <Principles />
      <Work />
      <Expertise />
      <Contact />
      <Footer />
    </>
  );
}