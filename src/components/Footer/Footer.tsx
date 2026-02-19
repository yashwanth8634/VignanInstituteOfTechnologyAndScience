import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";

const quickLinks1 = [
  { label: "AICTE Idea Lab", href: "/aicte-idea-lab" },
  { label: "Grievance", href: "/grievance" },
  { label: "Online Fee Payment", href: "/fee-payment", external: true },
  { label: "Consultancy Fee", href: "/consultancy-fee", external: true },
];

const quickLinks2 = [
  { label: "ECAP", href: "https://ecap.vignanits.ac.in", external: true },
  { label: "Alumni", href: "/alumni" },
  { label: "Student Portal", href: "/student-portal" },
  { label: "Research", href: "/research" },
];

export default function Footer() {
  return (
    <footer className="bg-vignan-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div>
                <Link href="/">
                  <Image
                    src="https://vignanits.ac.in/wp-content/uploads/2020/07/1595497656733.png"
                    alt="Vignan Institute of Technology and Science"
                    width={220}
                    height={60}
                    className="object-contain"
                    priority
                  />
                </Link>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Vignan Institute of Technology and Science (VGNT) has maintained
              its values, nurturing thousands of students and evolving into a
              distinguished engineering institution committed to excellence.
            </p>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-vignan-purple-light mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks1.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-vignan-purple-light transition-colors"
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                    {link.external && (
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-vignan-purple-light mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks2.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-vignan-purple-light transition-colors"
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                    {link.external && (
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-vignan-purple-light mb-5">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-vignan-purple-light mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">
                  Deshmukhi, Pochampally Mandal,
                  <br />
                  Yadadri Bhuvanagiri District,
                  <br />
                  Telangana - 508284
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-vignan-purple-light shrink-0" />
                <span className="text-sm text-white/70">9866399776</span>
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
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Vignan Institute of Technology and
            Science. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/50 hover:text-vignan-purple-light transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/50 hover:text-vignan-purple-light transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
