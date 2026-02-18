import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Accreditations from "@/components/Accreditations";
import Stats from "@/components/Stats";
import CampusExplorer from "@/components/CampusExplorer";
import Placements from "@/components/Placements";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
