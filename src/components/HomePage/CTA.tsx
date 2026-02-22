import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-vignan-blue via-vignan-blue to-vignan-purple/80" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-vignan-purple/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-vignan-purple/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Shape Your Future with Us
        </h2>
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Be a part of Vignan Institute of Technology and Science&apos;s legacy
          of excellence in technical education.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/admissions"
            className="px-8 py-3.5 bg-white text-vignan-purple font-bold text-lg rounded-md hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 min-w-[180px]"
          >
            Apply Now
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-transparent border-2 border-white text-white font-bold text-lg rounded-md hover:bg-white/10 transition-all duration-300 min-w-[180px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
