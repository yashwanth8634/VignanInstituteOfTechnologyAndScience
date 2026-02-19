"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const accreditations = [
  {
    image: "/MouLogos/aicte.png",
    title: "AICTE",
    subtitle: "Approved Institution",
  },
  {
    image: "/MouLogos/JNTUH.png",
    title: "JNTUH",
    subtitle: "University Affiliated",
  },
  {
    image: "/MouLogos/nba.png",
    title: "NBA",
    subtitle: "Accredited Programs",
  },
  {
    image: "/MouLogos/naac.png",
    title: "NAAC A+",
    subtitle: "A+ Grade Institution",
  },
  {
    image: "/MouLogos/ATAL.png", // or atal.png
    title: "ARIIA",
    subtitle: "Innovation Ranking",
  },
];

export default function Accreditations() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">

        <div className="text-center mb-12 group cursor-default">

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-vignan-purple transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1">
            Our Accreditations & Affiliations
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg mt-3 transition-all duration-800 group-hover:-translate-y-1">
            Recognized for our commitment to quality education and excellence
          </p>

          {/* Animated Underline */}
          <div className="h-[5px] bg-vignan-purple/60 mx-auto mt-5 rounded-full transition-all duration-800 w-16 group-hover:w-28"></div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-12">
          {accreditations.map((item, index) => (
            <div
              key={item.title}
              className={`group relative bg-white p-5 sm:p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out flex flex-col items-center justify-center cursor-pointer overflow-hidden ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >

              {/* Soft Glow Background */}
              <div className="absolute inset-0 bg-vignan-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-md"></div>

              {/* Logo Circle Section */}
              <div className="relative w-24 h-24 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">

                {/* Inner Circle Fill */}
                <div className="absolute inset-0 bg-vignan-purple/10 rounded-full transition-colors duration-500 group-hover:bg-vignan-purple/20"></div>

                {/* White Logo Holder */}
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center overflow-hidden">

                  {/* Subtle Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at center, #7c3aed 1px, transparent 1px)",
                      backgroundSize: "8px 8px",
                    }}
                  ></div>

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="object-contain group-hover:scale-110 transition-transform duration-500 relative z-10"
                  />

                  {/* Light Shine */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>

                {/* Ripple Rings */}
                <div className="absolute inset-0 border-2 border-vignan-purple/0 rounded-full group-hover:border-vignan-purple/20 group-hover:scale-110 transition-all duration-700 ease-out"></div>
                <div className="absolute inset-0 scale-110 border border-vignan-purple/0 rounded-full group-hover:border-vignan-purple/10 group-hover:scale-125 transition-all duration-1000 ease-out"></div>
                <div className="absolute inset-0 scale-125 border border-vignan-purple/0 rounded-full group-hover:border-vignan-purple/5 group-hover:scale-150 transition-all duration-1500 ease-out"></div>

              </div>

              {/* Title */}
              <h3 className="font-bold text-lg text-center group-hover:text-vignan-purple transition-colors duration-300 relative z-10">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-gray-500 mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 transition-all duration-500 relative z-10">
                {item.subtitle}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}