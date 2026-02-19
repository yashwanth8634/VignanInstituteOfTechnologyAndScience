import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Accreditations from "@/components/Accreditations/Accreditations";
import Stats from "@/components/Stats/Stats";
import CampusExplorer from "@/components/CampusExplorer/CampusExplorer";
import Placements from "@/components/Placements/Placements";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Accreditations />
      <Stats />
      <CampusExplorer />
      <Placements />
      <CTA />
      <Footer />
    </main>
  );
}
