"use client";

import { useRef, useState, useEffect } from "react";
import {
  Users,
  BookOpen,
  UserCheck,
  Calendar,
  FlaskConical,
  Trophy,
  Megaphone,
  Building2,
  GraduationCap,
  FileText,
  Briefcase,
} from "lucide-react";

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
}

const statGroups = [
  {
    title: "Academic Excellence",
    stats: [
      { icon: Users, value: 5000, suffix: "+", label: "Students" },
      { icon: BookOpen, value: 20, suffix: "+", label: "Courses" },
      { icon: UserCheck, value: 250, suffix: "+", label: "Faculty" },
      { icon: Calendar, value: 20, suffix: "+", label: "Years of Excellence" },
    ] as StatItem[],
  },
  {
    title: "Infrastructure",
    stats: [
      { icon: FlaskConical, value: 50, suffix: "+", label: "Labs" },
      { icon: Trophy, value: 15, suffix: "+", label: "Clubs" },
      { icon: Megaphone, value: 100, suffix: "+", label: "Events" },
      { icon: Building2, value: 8, suffix: "", label: "Departments" },
    ] as StatItem[],
  },
  {
    title: "Outcomes",
    stats: [
      { icon: GraduationCap, value: 30000, suffix: "+", label: "Alumni" },
      { icon: FileText, value: 500, suffix: "+", label: "Research Papers" },
      { icon: Briefcase, value: 85, suffix: "%", label: "Placements" },
    ] as StatItem[],
  },
];

function AnimatedCounter({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;

    hasAnimated.current = true;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * target);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // trigger only once
        }
      },
      {
        threshold: 0.1, // lowered to 0.1 to ensure it triggers on mobile when section is tall
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-vignan-purple text-center mb-3">
          Our Achievements in Numbers
        </h2>
        <p className="text-gray-600 text-lg text-center mb-14">
          Vignan Institute takes pride in its accomplishments across academics,
          research, and infrastructure
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statGroups.map((group, gIdx) => (
            <div
              key={group.title}
              className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${gIdx * 200}ms` }}
            >
              <h3 className="text-xl font-bold text-vignan-blue mb-6 pb-3 border-b-2 border-vignan-purple/20">
                {group.title}
              </h3>
              <div className="space-y-5">
                {group.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-vignan-purple/10 flex items-center justify-center shrink-0">
                      <stat.icon className="w-5 h-5 text-vignan-purple" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-vignan-blue">
                        <AnimatedCounter
                          target={stat.value}
                          suffix={stat.suffix}
                          isVisible={isVisible}
                        />
                      </p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-vignan-purple font-semibold hover:text-vignan-purple-dark transition-colors text-lg"
          >
            Learn more about our achievements →
          </a>
        </div>
      </div>
    </section>
  );
}
