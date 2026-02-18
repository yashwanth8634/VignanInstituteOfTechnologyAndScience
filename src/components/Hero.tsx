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
        <source src="/videos/vignanvideo.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-vignan-blue/20" /> */}

      {/* Subtle blue tint overlay */}
      {/* <div className="absolute inset-0 bg-vignan-blue/20" /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 leading-tight max-w-5xl animate-fade-in-up">
          An Institution{" "}
          <span className="text-vignan-purple-light">
            Nurturing Innovation and Excellence
          </span>
        </h1>

        <div
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href="/admissions"
            className="px-8 py-3.5 bg-white text-vignan-purple font-semibold text-lg rounded-md hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 min-w-[180px]"
          >
            Apply Now
          </Link>

          <Link
            href="/about"
            className="px-8 py-3.5 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-md hover:bg-white/10 transition-all duration-300 min-w-[180px]"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Bottom fade */}

    </section>
  );
}