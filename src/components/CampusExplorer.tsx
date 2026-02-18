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
      "https://images.unsplash.com/photo-1561089489-f13d5e730d72?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QWNhZGVtaWNzfGVufDB8fDB8fHww",
  },
  {
    icon: UserPlus,
    title: "Admissions",
    description: "Join our community of future engineers",
    href: "/admissions",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: Briefcase,
    title: "Placements",
    description: "Excellent career opportunities await",
    href: "/placements",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: Lightbulb,
    title: "Research",
    description: "Cutting-edge research and innovation",
    href: "/research",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
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
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 ${
                isVisible
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