import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Link from "next/link";
import {
  Rocket,
  Target,
  Users,
  Table,
  Lightbulb,
  Cpu,
  ShieldCheck,
  ChevronRight,
  Search,
  TrendingUp,
  Briefcase
} from "lucide-react";

export const metadata = {
  title: "Student Startups & EDC | VITS",
  description: "Explore entrepreneurship opportunities, student startups, and innovative prototypes at VITS.",
};

const edcActivities = [
  { id: 1, name: "Inauguration of EDC Cell", organized: "EDC", date: "20-09-2013" },
  { id: 2, name: "Internal Hackathon (SIH 2020)", organized: "EDC & CSE", date: "5th & 6th FEB 2020" },
  { id: 3, name: "TIE GRAD Kick off Session", organized: "EDC & CSE", date: "22nd OCT 2019" },
  { id: 4, name: "ENTREPRENEURSHIP AWARENESS CAMP", organized: "EDC & OU", date: "23rd - 25th JULY 2019" },
  { id: 5, name: "E-TALKS", organized: "EDC", date: "15th APR 2019" },
  { id: 6, name: "Guest Lecture on Self Analysis and Career Enhancement", organized: "EDC & ECE", date: "23rd MAR 2019" },
  { id: 7, name: "Guest Lecture on Life Skills and Money Management", organized: "EDC & CSE", date: "23rd FEB 2019" },
  { id: 8, name: "Guest Lecture on Career Growth", organized: "EDC & ECE", date: "05th JAN 2019" },
  { id: 9, name: "Talk on Career Opportunities", organized: "EDC & ECE", date: "5th OCT 2018" },
  { id: 10, name: "Workshop on IOT and Embedded Systems", organized: "EDC & ECE", date: "5th OCT 2018" },
  { id: 11, name: "Guest Lecture on How to be the best among the rest", organized: "EDC & CSE", date: "28th JULY 2018" },
  { id: 12, name: "Talk on Personality Development Traits", organized: "EDC & CSE", date: "24th MAR 2018" },
  { id: 13, name: "Guest Lecture on Usage and Development of Sales Force", organized: "EDC & CSE", date: "17th FEB 2018" },
  { id: 14, name: "Talk on Career Guidance and Motivation towards Competitive World", organized: "EDC & EEE", date: "25th Jan 2018" },
  { id: 15, name: "Talk on Business Opportunities", organized: "EDC", date: "20th DEC 2017" },
  { id: 16, name: "One day workshop on Motivation Towards Entrepreneurship", organized: "EDC", date: "21st OCT 2017" },
  { id: 17, name: "Guest Lecture on Financial Awareness Program", organized: "EDC", date: "20th Sep 2017" },
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

const inventions = [
  {
    title: "Practical Isothermal Compression/Expansion System",
    description: "Uses a reciprocating piston mechanism with 100x increased heat transfer rate.",
    features: [
      "Temperature increase/reduction limited to only 10-20°C.",
      "Increases engine efficiency to 60% (90% of Carnot efficiency).",
      "Enables economical energy storage in the form of compressed air.",
      "Reduces power consumption of ACs and Refrigerators by half."
    ]
  },
  {
    title: "Twin Engine Automobile",
    description: "Enables driver to select engine capacity based on speed requirements.",
    features: [
      "1/3 capacity for low speeds (40 KMPH).",
      "2/3 capacity for moderate speeds (80 KMPH).",
      "Full capacity for high speeds (120 KMPH).",
      "Improves mileage by up to 100% at low speeds."
    ]
  },
  {
    title: "Efficient Counter Flow Heat Exchanger",
    description: "Decreases temperature difference to 10-20°C through increased surface area and coefficient.",
    features: [
      "30 times more efficient than conventional Shell and Tube exchangers.",
      "Enables highly efficient exhaust gas heat recovery.",
      "Supports Ericson cycle engines with 90% Carnot efficiency."
    ]
  },
  {
    title: "Energy Saving Fan",
    description: "Reduces power consumption to 1/3rd of conventional fans.",
    features: [
      "Increased blade angle and size (4x).",
      "Reduced speed (3x) for same air blow volume.",
      "Drastic reduction in power consumption due to V³ velocity physics."
    ]
  }
];

export default function StudentStartupsPage() {
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
            <span className="text-white font-medium">Student Startups</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">Entrepreneurship & Startups</h1>
          <p className="text-xl text-white opacity-90 max-w-2xl">
            Nurturing innovation, fostering entrepreneurial spirit, and bridging the gap
            between academic excellence and industrial reality.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* EDC Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-8 h-8 text-vignan-purple" />
                <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-vignan-purple/20 pb-2">
                  EDC Cell
                </h2>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="text-vignan-purple font-bold uppercase tracking-wider text-sm mb-2">Our Mission</h4>
                <p className="text-xl italic text-gray-700 leading-relaxed border-l-4 border-vignan-purple pl-6">
                  &ldquo;To promote knowledge based and technology-driven start-ups by harnessing young minds and their innovation potential in an academic environment&rdquo;
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-vignan-purple" />
                <h2 className="text-2xl font-bold text-gray-900">Institutional Mechanism</h2>
              </div>
              <div className="prose prose-blue max-w-none text-gray-600">
                <h4 className="text-gray-900 font-bold mb-4">NewGen Innovation and Entrepreneurship Development Centre (NewGen IEDC)</h4>
                <p>
                  The NewGen IEDC is being promoted in educational institutions to develop an institutional
                  mechanism to create an entrepreneurial culture and foster techno-entrepreneurship for
                  generation of wealth and employment.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-vignan-blue/5 p-6 rounded-xl border border-vignan-blue/10">
                    <h5 className="font-bold text-vignan-blue mb-3">Key Objectives</h5>
                    <ul className="space-y-3">
                      {[
                        "Channelize youth energy towards economic development.",
                        "Promote development of innovation-driven enterprises.",
                        "Inculcate a culture of innovation-driven entrepreneurship.",
                        "Provide a service mechanism for budding entrepreneurs."
                      ].map((obj, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-vignan-purple mt-1.5 shrink-0" />
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 font-medium">
                    <p className="text-purple-800 text-sm">
                      The Advisory Board lay down policy guidelines, fix physical targets,
                      and suggest measures for raising funds and utilizing facilities effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advisory Board Card */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-vignan-purple" />
                <h3 className="text-xl font-bold text-gray-900">Advisory Board</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-vignan-purple font-bold uppercase tracking-widest">Chairman</p>
                  <p className="font-bold text-gray-900">Dr. G. Durga Sukumar</p>
                  <p className="text-xs text-gray-500">Head of Institution</p>
                </div>
                <div className="pt-3 border-t border-gray-50">
                  <p className="text-xs text-vignan-purple font-bold uppercase tracking-widest">Member Secretary</p>
                  <p className="font-bold text-gray-900">Dr. Narayan Sangam</p>
                  <p className="text-xs text-gray-500">Coordinator of NewGen IEDC</p>
                </div>
                <div className="pt-3 border-t border-gray-50">
                  <p className="text-xs text-vignan-purple font-bold uppercase tracking-widest">Industry Expert</p>
                  <p className="font-bold text-gray-900">Dr. Bhagwati Rao</p>
                </div>
                <div className="pt-3 border-t border-gray-50">
                  <p className="text-xs text-vignan-purple font-bold uppercase tracking-widest">Alumni Entrepreneur</p>
                  <p className="font-bold text-gray-900">Mr. Sai Srinivas</p>
                  <p className="text-xs text-gray-400">Mech. 2007-11 Batch</p>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg text-xs text-gray-600 italic">
                  Members: All H.O.Ds and Dean Academics
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Table */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Table className="w-8 h-8 text-vignan-purple" />
            <h2 className="text-3xl font-bold text-gray-900 uppercase">EDC Cell - List of Activities</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-vignan-purple text-white border-b border-gray-100">
                  <th className="px-6 py-4 text-xs font-bold text-white uppercase tracking-wider">Sr.No</th>
                  <th className="px-6 py-4 text-xs font-bold text-white uppercase tracking-wider">Event Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-white uppercase tracking-wider">Organized By</th>
                  <th className="px-6 py-4 text-xs font-bold text-white uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {edcActivities.map((act) => (
                  <tr key={act.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-400">{act.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{act.name}</td>
                    <td className="px-6 py-4 text-sm text-vignan-purple">{act.organized}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{act.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Innovative Prototypes Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-vignan-purple/10 rounded-full text-vignan-purple text-sm font-bold uppercase tracking-widest mb-4">
              <Lightbulb className="w-4 h-4" />
              Research & Innovation
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Innovative Prototypes & Models</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Developing cutting-edge technological solutions that address real-world
              energy and industrial challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {inventions.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-vignan-blue mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed bg-gray-50 p-4 rounded-xl italic">
                  {item.description}
                </p>
                <div className="space-y-3">
                  <p className="text-xs font-bold text-vignan-purple uppercase tracking-widest">Salient Features</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="bg-vignan-blue rounded-3xl p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <Cpu className="w-16 h-16 text-vignan-purple mb-6" />
              <h2 className="text-3xl font-bold mb-4 uppercase">Areas of Expertise</h2>
              <p className="text-blue-100 text-sm leading-relaxed">
                Our institution provides specialized consultancy and technical support
                in advanced manufacturing and automated systems.
              </p>
            </div>
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-4">
              {expertiseAreas.map((area, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors cursor-default">
                  <Briefcase className="w-4 h-4 text-vignan-purple shrink-0" />
                  <span className="text-sm font-medium leading-tight">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-purple-50 p-12 rounded-[2rem] border border-purple-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Have an Innovative Idea?</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            The management encourages the student community to become entrepreneurs by providing
            funding for start-ups up to **50 Lakhs**. Join our ecosystem today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-vignan-purple text-white font-bold rounded-xl hover:bg-vignan-purple-dark transition-all shadow-lg hover:shadow-vignan-purple/20">
              Apply for Funding
            </button>
            <Link href="/Pdfs/Information/training_details.pdf" target="_blank" className="px-8 py-3 bg-white text-gray-700 font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all">
              View Training Details
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
