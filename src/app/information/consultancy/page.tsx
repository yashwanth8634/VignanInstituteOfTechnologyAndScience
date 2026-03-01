import Navbar from "../../../components/HomePage/Navbar";
import Footer from "../../../components/HomePage/Footer";
import Link from "next/link";
import {
  Briefcase,
  Users,
  Lightbulb,
  Settings,
  ClipboardCheck,
  ChevronRight,
  Target,
  Zap,
  Scale,
  ShieldAlert
} from "lucide-react";

export const metadata = {
  title: "Industrial Consultancy Bureau | VITS",
  description: "Expert technological consultancy services for Mechanical Engineering and related industries at VITS.",
};

const consultants = [
  { name: "Dr. S Dev Prasad", designation: "Lead Consultant" },
  { name: "Prof. G.V. Rao", designation: "Expert Consultant" },
  { name: "Assoc. Prof. N. Leela Prasad", designation: "Technical Consultant" },
  { name: "Dr. K. Chandra Sekhar Rao", designation: "Industry Consultant" },
  { name: "Assoc. Prof. P. Mangapathi Rao", designation: "Systems Consultant" },
];

const expertiseAreas = [
  "Special Purpose Machine Tools",
  "Design & Development of Production Dies",
  "PLC Controlled Production Machines",
  "Innovative Solutions to Home Appliance Products",
  "Innovative Solutions to Automobile Products",
  "Innovative Solutions to Thermal Power Plant Products",
  "Innovative Solutions to General Purpose Products",
  "Automated Quality Checking & Material Handling Systems",
  "Consultancy on Composite Products"
];

const methodologySteps = [
  "Expression of Interest for consultancy in a written form",
  "Visit by VIGNAN consultants and submission of a commercial offer",
  "Placement of order by Industry",
  "Order acceptance by Vignan",
  "Non Disclosure agreement between the parties",
  "Laying down the approach to solution by mutual agreement",
  "Documentation of consultancy details",
  "Prototype fabrication wherever necessary",
  "Protection of IPR",
  "Submission of final Consultancy report, and commissioning of equipment"
];

const innovationElements = [
  "Line Balancing", "Work Study", "Time Study",
  "Partial Automation", "Semi Automation", "Automation of Material Handling",
  "Innovative Machine Retrofitting", "Heat Recovery Systems", "Solar Energy Deployment",
  "Value Engineering Concepts", "Concurrent Engineering Practices", "Automated Online Quality Checks",
  "Automatic Loading/Unloading Systems", "Quality Problem Solutions", "Affordable Pre/Post Ops Tech",
  "New Product Design & Development", "Scrap Value Solutions", "Processing Capability Matching",
  "Simple Robotic Processing", "Automatic Assembling/Disassembling", "Bending & Cutting Solutions",
  "Break-even Financial Analysis"
];

export default function ConsultancyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="solid" />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-32 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-purple-200 mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/information" className="hover:text-white transition-colors">Information</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Consultancy</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">Industrial Consultancy Bureau</h1>
          <p className="text-xl text-white opacity-90 max-w-2xl">
            Providing innovative technological solutions to maximize industrial profitability
            through advanced engineering and cost-effective strategies.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Objective Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-vignan-purple" />
                <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-vignan-purple/20 pb-2 uppercase">
                  Our Objective
                </h2>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The main objective of our Industrial Consultancy Bureau is to provide **more profits** to our customers by reducing their input costs and increasing their quality and quantity of production at low cost using innovative technologies.
                </p>
                <div className="flex items-center gap-4 bg-purple-50 p-6 rounded-xl border border-purple-100 italic text-vignan-purple font-medium">
                  <Zap className="w-6 h-6 shrink-0" />
                  Our technology payback period is as low as three months, extending up to one year depending on complexity.
                </div>
              </div>
            </div>

            {/* Methodology Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ClipboardCheck className="w-8 h-8 text-vignan-purple" />
                <h2 className="text-2xl font-bold text-gray-900 uppercase">Consultancy Methodology</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {methodologySteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-vignan-purple/20 transition-all group">
                    <div className="w-8 h-8 rounded-full bg-vignan-purple/10 flex items-center justify-center shrink-0 text-vignan-purple font-bold text-xs group-hover:bg-vignan-purple group-hover:text-white transition-colors">
                      {i + 1}
                    </div>
                    <p className="text-sm text-gray-600 leading-snug">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Panel of Consultants */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-vignan-purple" />
                <h3 className="text-xl font-bold text-gray-900">Panel of Consultants</h3>
              </div>
              <div className="space-y-4">
                {consultants.map((consultant, idx) => (
                  <div key={idx} className={`pt-3 ${idx !== 0 ? 'border-t border-gray-50' : ''}`}>
                    <p className="font-bold text-gray-900">{consultant.name}</p>
                    <p className="text-xs text-vignan-purple font-semibold uppercase tracking-wider">{consultant.designation}</p>
                  </div>
                ))}
                <div className="mt-8 p-4 bg-vignan-blue text-white rounded-xl text-center">
                  <p className="text-xs opacity-80 mb-1">For more details</p>
                  <p className="font-bold">Contact Bureau Office</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise & Innovation Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Areas of Expertise */}
          <div className="bg-vignan-blue rounded-3xl p-10 text-white relative overflow-hidden shadow-xl">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full -mb-32 -mr-32 blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-8 h-8 text-vignan-purple" />
                <h2 className="text-3xl font-bold uppercase">Area of Expertise</h2>
              </div>
              <div className="grid sm:grid-cols-1 gap-3">
                {expertiseAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-all cursor-default">
                    <div className="w-2 h-2 rounded-full bg-vignan-purple" />
                    <span className="text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Elements of Innovation */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="w-8 h-8 text-vignan-purple" />
              <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">Elements of Innovation</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {innovationElements.map((element, i) => (
                <span key={i} className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-lg border border-gray-100 hover:border-vignan-purple/30 hover:text-vignan-purple transition-colors">
                  {element}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-gray-900 to-vignan-blue p-12 text-center shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Bridging Academic Research with Industrial Excellence
            </h3>
            <p className="text-blue-100 leading-relaxed mb-8">
              Our bureau leverages the vast intellectual resources of Vignan Institute
              to solve complex industrial problems, ensuring high ROI and technological
              empowerment for our partners.
            </p>
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-vignan-purple">3-12</p>
                <p className="text-xs text-blue-200 uppercase tracking-widest mt-1">Months Payback</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="text-3xl font-bold text-vignan-purple">20+</p>
                <p className="text-xs text-blue-200 uppercase tracking-widest mt-1">Innovation Areas</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="text-3xl font-bold text-vignan-purple">5</p>
                <p className="text-xs text-blue-200 uppercase tracking-widest mt-1">Lead Consultants</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
