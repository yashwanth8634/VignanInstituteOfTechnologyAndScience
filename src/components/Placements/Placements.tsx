"use client";

import { useEffect, useRef, useState } from "react";
import { Handshake, MessageSquareQuote, Award } from "lucide-react";

const placementHighlights = [
  { company: "TCS", package: "8 LPA", year: "2024" },
  { company: "Infosys", package: "6.5 LPA", year: "2024" },
  { company: "Wipro", package: "6 LPA", year: "2024" },
  { company: "Cognizant", package: "5.5 LPA", year: "2024" },
  { company: "HCL Technologies", package: "5 LPA", year: "2024" },
  { company: "Tech Mahindra", package: "4.5 LPA", year: "2024" },
];

const mous = [
  "Microsoft",
  "AWS Academy",
  "NASSCOM",
  "APSSDC",
  "ICT Academy",
  "Spoken Tutorial (IIT Bombay)",
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
                className="text-center p-4 rounded-xl bg-gradient-to-br from-vignan-purple/5 to-vignan-purple/10 border border-vignan-purple/10 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <p className="font-bold text-vignan-blue text-sm">
                  {p.company}
                </p>
                <p className="text-vignan-purple font-semibold text-lg mt-1">
                  {p.package}
                </p>
                <p className="text-xs text-gray-400 mt-1">{p.year}</p>
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

          <div className="flex flex-wrap justify-center gap-4">
            {mous.map((m) => (
              <div
                key={m}
                className="px-6 py-3 bg-vignan-blue/5 rounded-full text-vignan-blue font-medium text-sm border border-vignan-blue/10 hover:bg-vignan-purple/10 hover:text-vignan-purple hover:border-vignan-purple/20 transition-all duration-300"
              >
                {m}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
