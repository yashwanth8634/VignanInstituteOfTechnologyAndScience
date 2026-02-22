"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/HomePage/HeroSection/vignanvideo.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-950/40" />

      {/* Subtle blue/purple magic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-vignan-blue/30 via-transparent to-vignan-purple/30 mix-blend-overlay" />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <h1
          className="animate-fade-in-up [animation-duration:1s] text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-tight text-[#ecf4e5]"
        >
          An Institution Nurturing Innovation and Excellence
        </h1>

        <div
          className="flex flex-col sm:flex-row items-center gap-6 mt-12 animate-fade-in-up [animation-duration:1s] [animation-delay:0.3s] opacity-0 [animation-fill-mode:forwards]"
        >
          <Link href="/admissions" passHref>
            <div
              className="px-8 py-4 bg-white/90 backdrop-blur-sm text-vignan-purple font-bold text-lg rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] min-w-[200px] text-center"
            >
              Apply Now
            </div>
          </Link>

          <Link href="/about" passHref>
            <div
              className="px-8 py-4 bg-transparent border-2 border-white/80 text-white font-bold text-lg rounded-full backdrop-blur-lg hover:scale-105 active:scale-95 hover:bg-white/10 transition-all duration-300 min-w-[200px] text-center "
            >
              Learn More
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}