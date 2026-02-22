"use client";

import Image from "next/image";

const accreditations = [
  {
    image: "/HomePage/MouLogos/aicte.png",
    title: "AICTE",
    subtitle: "Approved Institution",
  },
  {
    image: "/HomePage/MouLogos/JNTUH.png",
    title: "JNTUH",
    subtitle: "University Affiliated",
  },
  {
    image: "/HomePage/MouLogos/nba.png",
    title: "NBA",
    subtitle: "Accredited Programs",
  },
  {
    image: "/HomePage/MouLogos/NAAC.png",
    title: "NAAC A+",
    subtitle: "A+ Grade Institution",
  },
  {
    image: "/HomePage/MouLogos/ATAL.png", // or atal.png
    title: "ARIIA",
    subtitle: "Innovation Ranking",
  },
];

export default function Accreditations() {
  return (
    <section className="py-20 px-4 bg-gray-50/50 relative overflow-hidden">
      {/* Decorative Background blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vignan-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10 animate-fade-in-up [animation-duration:1s]">
        <div className="text-center mb-16 group cursor-default">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 transition-all duration-500 group-hover:scale-105">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-vignan-purple to-purple-500">
            Accreditations</span> & Affiliations
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Recognized for our commitment to quality education and excellence
          </p>

          {/* Animated Underline */}
          <div className="h-1 bg-vignan-purple mx-auto mt-6 rounded-full transition-all duration-500 w-16 group-hover:w-32" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 mt-12">
          {accreditations.map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-vignan-purple/20 transition-all duration-300 ease-out flex flex-col items-center justify-center cursor-pointer overflow-hidden hover:-translate-y-2 animate-fade-in-up [animation-duration:1s] opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Soft Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-vignan-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              {/* Logo Circle Section */}
              <div className="relative w-24 h-24 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                {/* Inner Circle Fill */}
                <div className="absolute inset-0 bg-vignan-purple/5 rounded-full transition-colors duration-300 group-hover:bg-vignan-purple/10"></div>

                {/* White Logo Holder */}
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-inner">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="object-contain group-hover:scale-110 transition-transform duration-300 relative z-10"
                  />
                </div>

                {/* Ripple Rings */}
                <div className="absolute inset-0 border border-vignan-purple/0 rounded-full group-hover:border-vignan-purple/20 group-hover:scale-110 transition-all duration-500 ease-out"></div>
                <div className="absolute inset-0 scale-110 border border-vignan-purple/0 rounded-full group-hover:border-vignan-purple/10 group-hover:scale-125 transition-all duration-700 ease-out"></div>
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg text-gray-800 text-center group-hover:text-vignan-purple transition-colors duration-300 relative z-10">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-gray-500 mt-2 text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
