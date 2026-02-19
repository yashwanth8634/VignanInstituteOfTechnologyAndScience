"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
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
    <section ref={ref} className="py-20 px-4 bg-white group">
  <div className="max-w-4xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold text-vignan-blue text-center mb-4 transition-all duration-900 group-hover:scale-105">
      About{" "}
      <span className="text-vignan-purple">
        VGNT
      </span>
    </h2>

    {/* Animated Underline */}
    <div className="h-1 bg-vignan-purple mx-auto mb-10 rounded-full transition-all duration-900 w-24 group-hover:w-40" />

    {/* Content */}
    <div
      className={`space-y-6 text-gray-700 text-base md:text-lg leading-relaxed text-justify transition-all duration-1000 tracking-tight ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <p>
        <span className="relative text-vignan-purple font-bold">
          Vignan Institute of Technology and Science
          <span className="absolute left-0 -bottom-1 h-[3px] bg-vignan-purple w-0 transition-all duration-900 group-hover:w-full"></span>
        </span>{" "}
        established by Vignan Educational Society, is committed to delivering
        quality technical education with a strong focus on discipline, values,
        and industry-oriented practical learning. The institute is approved by
        the All India Council for Technical Education (AICTE), permanently
        affiliated with Jawaharlal Nehru Technological University Kakinada
        (JNTU Kakinada), and recognized by the University Grants Commission
        under Sections 2(f) and 12(B). The institution offers UG, PG,
        Diploma, and MBA programs across multiple engineering disciplines. It
        is accredited with an &quot;A&quot; Grade by the National Assessment
        and Accreditation Council (NAAC), with select UG programs accredited
        by the National Board of Accreditation (NBA).
      </p>

      <p>
        <span className="relative text-vignan-purple font-bold">
          Vignan Institute of Technology and Science
          <span className="absolute left-0 -bottom-1 h-[3px] bg-vignan-purple w-0 transition-all duration-900 group-hover:w-full"></span>
        </span>{" "}
        has established itself as a beacon of academic excellence, celebrating
        years of distinguished service in engineering education. The
        institution has earned a reputation for academic distinction,
        integrity, and a forward-thinking approach that empowers students to
        achieve their highest potential. Set in a serene and inspiring
        environment, the institute fosters a culture of curiosity, creativity,
        and continuous growth. It emphasizes not only strong technical
        competence but also ethical values and leadership qualities, preparing
        students to navigate complex global challenges with confidence and
        responsibility. With a dynamic focus on research, innovation, and
        meaningful industry collaboration, the institution equips graduates
        with practical skills and real-world insights.
      </p>
    </div>
  </div>
</section>
  );
}
