"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  UserPlus,
  Briefcase,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    icon: BookOpen,
    title: "Academics",
    description: "Explore our comprehensive academic programs",
    href: "/academics",
    image:
      "https://i.pinimg.com/736x/15/b2/e2/15b2e27ffb437ac1eaadac0418262b08.jpg",
  },
  {
    icon: UserPlus,
    title: "Admissions",
    description: "Join our community of future engineers",
    href: "/admissions",
    image:
      "https://i.pinimg.com/1200x/8b/2a/26/8b2a26ab6719e37b7993ae5a7975e5e8.jpg",
  },
  {
    icon: Briefcase,
    title: "Placements",
    description: "Excellent career opportunities await",
    href: "/placements",
    image:
      "https://i.pinimg.com/1200x/2d/98/12/2d9812b228eaf0802b5d5b890cce63eb.jpg",
  },
  {
    icon: Lightbulb,
    title: "Research",
    description: "Cutting-edge research and innovation",
    href: "/research",
    image:
      "https://i.pinimg.com/736x/24/f1/1c/24f11c2c6eb970b194228af749ba6468.jpg",
  },
];

export default function CampusExplorer() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 group">
          <h2 className="text-4xl md:text-5xl font-bold text-vignan-purple transition-all duration-500 group-hover:scale-105">
            Explore Our Campus
          </h2>

          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Discover world-class facilities, innovative programs, and endless opportunities.
          </p>

          <div className="h-[3px] w-16 bg-vignan-purple mx-auto mt-6 rounded-full transition-all duration-500 group-hover:w-28"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((card, index) => (
            <Link
              key={card.title}
              href={card.href}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >

              {/* Image Container */}
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500">

                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Animated Spotlight Effect */}
                <div className="absolute inset-0 bg-gradient-radial from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Subtle dark bottom gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Glass Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                    <card.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

              </div>

              {/* Content */}
              <div className="mt-6 px-2">
                <h3 className="text-xl font-bold text-vignan-blue group-hover:text-vignan-purple transition-colors duration-300">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {card.description}
                </p>

                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-vignan-purple opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}