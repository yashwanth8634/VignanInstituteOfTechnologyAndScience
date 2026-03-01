import Navbar from "../components/HomePage/Navbar";
import Hero from "../components/HomePage/Hero";
import About from "../components/HomePage/About";
import Accreditations from "../components/HomePage/Accreditations";
import Stats from "../components/HomePage/Stats";
import CampusExplorer from "../components/HomePage/CampusExplorer";
import Placements from "../components/HomePage/Placements";
import CTA from "../components/HomePage/CTA";
import Footer from "../components/HomePage/Footer";


export const metadata = {
  title: "Vignan Institue of Technology and Science",
  description: "Information about Home at VITS.",
};

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
