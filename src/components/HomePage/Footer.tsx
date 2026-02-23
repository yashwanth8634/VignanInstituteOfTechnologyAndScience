import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const moreLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "Research & Development", href: "/research" },
  { label: "Industrial Consultancy Bureau", href: "/information/consultancy" },
  { label: "Institutional Values and Best Practices", href: "/mandatory-disclosures" },
  { label: "EDC Centre", href: "/mandatory-disclosures/strategic-plans" },
  { label: "Grievance", href: "/grievance" },
  { label: "Alumni", href: "/alumni" },
];

const loginLinks = [
  { label: "Student Counseling Portal", href: "https://www.vignanits.ac.in/Mentor/" },
  { label: "OBE Portal", href: "#" },
  { label: "V-Learn (Moodle)", href: "#" },
  { label: "VIMS Login", href: "#" },
  { label: "Placement Portal", href: "https://vignanits713.examly.io/login" },
];

export default function Footer() {
  return (
    <footer className="relative bg-vignan-blue text-white overflow-hidden">

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-indigo-900/20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* About Column */}
          <div>
            <Link href="/" className="flex flex-col gap-1 group mb-6">
              <div className="flex items-center">
                <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/Logo.png"
                    alt="VGNT Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <span className="text-4xl md:text-5xl font-bold tracking-tight ml-2 text-[#ecf4e5]">
                  VIGNAN
                </span>
              </div>

              <span className="text-sm md:text-base tracking-wide text-[#ecf4e5]/80 ml-1">
                Institute of Technology and Science
              </span>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed">
              Deshmukhi(V), Pochampally(M), <br />
              Yadadri-Bhuvanagiri District, <br />
              Telangana - 508284 <br /><br />

              Tel: 08685-226128, 9866399776 / 861 <br /><br />

              Email: principal.vgnt89@gmail.com <br />
              principal.vits@gmail.com <br />
              principal.vgnt@vignanits.ac.in
            </p>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-vignan-purple-light mb-6 border-b border-white/10 pb-2">
              More Links
            </h4>

            <ul className="space-y-3">
              {moreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-sm text-white/70 hover:text-white transition-all duration-200 relative inline-block group"
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-vignan-purple-light transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Login Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-vignan-purple-light mb-6 border-b border-white/10 pb-2">
              Login Links
            </h4>

            <ul className="space-y-4">
              {loginLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between text-sm text-white/70 hover:text-white transition-colors border-b border-white/5 pb-2"
                  >
                    <span>{link.label}</span>
                    <span className="text-vignan-purple-light">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-vignan-purple-light mb-6 border-b border-white/10 pb-2">
              Contact Info
            </h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-vignan-purple-light mt-1 shrink-0" />
                <span className="text-sm text-white/70">
                  Deshmukhi, Pochampally Mandal,
                  Yadadri Bhuvanagiri District,
                  Telangana - 508284
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-vignan-purple-light shrink-0" />
                <span className="text-sm text-white/70">
                  9866399776
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-vignan-purple-light shrink-0" />
                <span className="text-sm text-white/70">
                  info@vignanits.ac.in
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-vignan-blue/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50 text-center sm:text-left">
            © {new Date().getFullYear()} Vignan Institute of Technology and Science. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}