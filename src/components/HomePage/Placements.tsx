"use client";

import { useEffect, useRef, useState } from "react";
import { Handshake, MessageSquareQuote, Award } from "lucide-react";

const placementHighlights = [
  { company: "TCS", package: "8 LPA", year: "2024", logo: "/PlacementPage/Logos/tcs.webp" },
  { company: "Infosys", package: "6.5 LPA", year: "2024", logo: "/PlacementPage/Logos/infosys.webp" },
  { company: "Wipro", package: "6 LPA", year: "2024", logo: "/PlacementPage/Logos/wipro.png" },
  { company: "Cognizant", package: "5.5 LPA", year: "2024", logo: "/PlacementPage/Logos/cognizant.png" },
  { company: "HCL Technologies", package: "5 LPA", year: "2024", logo: "/PlacementPage/Logos/hcl.svg" },
  { company: "Tech Mahindra", package: "4.5 LPA", year: "2024", logo: "/PlacementPage/Logos/techmahindra.png" },
];

const mous = [
  { name: "Cisco Networking Academy", logo: "/HomePage/MouLogos/cisco.png" },
  { name: "IBM Academy", logo: "/HomePage/MouLogos/ibm.png" },
  { name: "IIIT Hyderabad", logo: "/HomePage/MouLogos/iiit.png" },
  { name: "IME (Israel)", logo: "/HomePage/MouLogos/ime.png" },
  { name: "Infosys Springboard", logo: "/HomePage/MouLogos/infosys.webp" },
  { name: "TAAPMA", logo: "/HomePage/MouLogos/taapma.png" },
];

const testimonials = [
  {
    name: "Priya Reddy",
    dept: "CSE, Batch 2023",
    quote:
      "VGNT gave me the perfect platform to grow technically and personally. The faculty mentorship and placement training were instrumental in landing my dream job.",
  },
  {
    name: "Ravi Kumar",
    dept: "ECE, Batch 2022",
    quote:
      "The hands-on lab experiences and industry collaborations at Vignan prepared me extraordinarily well for the professional world.",
  },
  {
    name: "Sneha Sharma",
    dept: "IT, Batch 2024",
    quote:
      "From hackathons to placement drives, every opportunity at VGNT shaped me into a confident engineer. Truly grateful for the journey.",
  },
];

export default function Placements() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Placements */}
        <div>
          <div className="text-center mb-12">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <Award className="w-8 h-8 text-vignan-purple" />
              <h2 className="text-3xl md:text-5xl font-bold text-vignan-purple">
                Our Placements
              </h2>
            </div>
            <p className="text-gray-600 text-lg">
              Celebrating our students&apos; success stories and placement
              achievements
            </p>
          </div>

          <div
            className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 transition-all duration-700 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            {placementHighlights.map((p, i) => (
              <div
                key={i}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white border border-vignan-purple/10 hover:border-vignan-purple/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className="h-16 w-full flex items-center justify-center mb-4 grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={p.logo} alt={p.company} className="max-h-full max-w-[80%] object-contain" />
                </div>
                <div className="w-full pt-4 border-t border-gray-100">
                  <p className="font-bold text-vignan-blue text-sm mb-1">
                    {p.company}
                  </p>
                  <p className="text-vignan-purple font-extrabold text-lg">
                    {p.package}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mt-1">
                    Class of {p.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOUs */}
        <div>
          <div className="text-center mb-10">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <Handshake className="w-8 h-8 text-vignan-purple" />
              <h2 className="text-3xl md:text-5xl font-bold text-vignan-purple">
                Our MOUs
              </h2>
            </div>
            <p className="text-gray-600 text-lg">
              Strategic partnerships with leading organizations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {mous.map((m) => (
              <div
                key={m.name}
                className="group flex flex-col items-center p-10 rounded-3xl bg-white border border-gray-100 hover:border-vignan-purple/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className="h-24 w-full flex items-center justify-center mb-6 grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={m.logo} alt={m.name} className="max-h-full max-w-[85%] object-contain" />
                </div>
                <p className="text-vignan-blue font-bold text-sm group-hover:text-vignan-purple transition-colors duration-300">
                  {m.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-10">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <MessageSquareQuote className="w-8 h-8 text-vignan-purple" />
              <h2 className="text-3xl md:text-5xl font-bold text-vignan-purple">
                Student Testimonies
              </h2>
            </div>
            <p className="text-gray-600 text-lg">
              Hear directly from our graduates and current students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-justify">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`relative bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-500 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="text-4xl text-vignan-purple/20 absolute top-4 right-4">
                  &ldquo;
                </div>
                <p className="text-gray-600 italic mb-4 leading-relaxed text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-bold text-vignan-blue text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.dept}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
