"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

interface SubmenuItem {
  label: string;
  href: string;
}

interface DropdownItem {
  label: string;
  href?: string;
  hasSubmenu?: boolean;
  submenu?: SubmenuItem[];
}

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdown?: DropdownItem[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    hasDropdown: true,
    dropdown: [
      { label: "Chairman", href: "/about/chairman" },
      { label: "CEO", href: "/about/ceo" },
      { label: "Principal", href: "/about/principal" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Governing Body", href: "/about/governing-body" },
      { label: "Core Values", href: "/about/core-values" },
      { label: "IQAC", href: "/about/iqac" },
      { label: "Organogram", href: "/about/organogram" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  {
    label: "Academics",
    href: "/academics",
    hasDropdown: true,
    dropdown: [

      {
        label: "Departments",
        hasSubmenu: true,
        submenu: [
          { label: "Computer Science And Engineering", href: "/departments/cse" },
          { label: "CSE(Artificial Intelligence And Machine Learning)", href: "/departments/cse-aiml" },
          { label: "CSE(Data Science)", href: "/departments/cse-ds" },
          { label: "CSE(Information Technology)", href: "/departments/cse-it" },
          { label: "Artificial Intelligence And Machine Learning", href: "/departments/aiml" },
          { label: "Artificial Intelligence And Data Science", href: "/departments/aids" },
          { label: "Electronics Instrumental And Engineering", href: "/departments/eie" },
          { label: "Electronics And Communication Engineering", href: "/departments/ece" },
          { label: "Electrical And Electronics Engineering", href: "/departments/eee" },
          { label: "Mechanical Engineering", href: "/departments/mech" },
          { label: "Civil Engineering", href: "/departments/civil" },
          { label: "Basic Sciences And Humanities", href: "/departments/bsh" },
        ],
      },
      { label: "Academic Regulations", href: "/academics/academic-regulations" },
      { label: "Academic Calendars", href: "/academics/academic-calendars" },
      { label: "Examinations", href: "/academics/examinations" },
      { label: "Certification Courses", href: "/academics/certification-courses" },
    ],
  },

  { label: "Placements", href: "/placements" },
  {
    label: "Facilities",
    href: "/facilities",
    hasDropdown: true,
    dropdown: [
      { label: "Vignan Dhara", href: "/facilities/vignan-dhara" },
      { label: "ICT Facilities", href: "/facilities/ict-facilities" },
      { label: "Computer Center", href: "/facilities/computer-center" },
      { label: "Communication & Soft Skills", href: "/facilities/communication-soft-skills" },
      { label: "Physical Education", href: "/facilities/physical-education" },
      { label: "Cafeteria", href: "/facilities/cafeteria" },
      { label: "Transportation", href: "/facilities/transportation" },
      { label: "Hostel", href: "/facilities/hostel" },
      { label: "Other Facilities", href: "/facilities/other-facilities" },
    ],
  },
  {
    label: "Mandatory Disclosures",
    href: "/mandatory-disclosures",
    hasDropdown: true,
    dropdown: [
      { label: "Right to Information (RTI)", href: "/mandatory-disclosures/rti" },
      { label: "IT Policy", href: "/mandatory-disclosures/it-policy" },
      { label: "Maintenance Policy", href: "/mandatory-disclosures/maintenance-policy" },
      { label: "Strategic Plans", href: "/mandatory-disclosures/strategic-plans" },
      { label: "ARIIA", href: "/mandatory-disclosures/ariia" },
      { label: "Online Grievance", href: "http://103.10.134.234/login/Grievance" },
      { label: "College Level Committees", href: "/mandatory-disclosures/committees" },
      { label: "Professional Bodies", href: "/mandatory-disclosures/professional-bodies" },
    ],
  },
  {
    label: "Information",
    href: "/information",
    hasDropdown: true,
    dropdown: [
      { label: "Student Start-Ups & Careers", href: "/information/student-startups" },
      { label: "VGNT in Media", href: "/information/media" },
      { label: "Industrial Consultancy Bureau", href: "/information/consultancy" },
      { label: "Institutional Values", href: "/information/values" },
      { label: "EDC Centre", href: "/information/edc" },
      { label: "News Letters", href: "/information/newsletters" },
      { label: "Alumni", href: "/information/alumni" },
      { label: "College Level Events", href: "/information/events" },
      { label: "Green Initiatives", href: "/information/green-initiatives" },
      { label: "VITS–NSS", href: "/information/nss" },
      { label: "Achievements", href: "/information/achievements" },
      { label: "Skills Enhancement", href: "/information/skills" },
      { label: "Innovation & Incubation", href: "/information/innovation" },
      { label: "IDEA LAB", href: "/information/idea-lab" },
      { label: "I & E Activities", href: "/information/ie-activities" },
      { label: "Student Registration", href: "/information/registration" },
      { label: "Route Map", href: "/information/route-map" },
      { label: "Blog", href: "/information/blog" },
    ],
  },
];

interface NavbarProps {
  variant?: "transparent" | "solid";
}

export default function Navbar({ variant = "transparent" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(variant === "solid");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    if (variant === "solid") return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-150 ${scrolled
        ? "bg-white shadow-md border-b border-gray-100 py-3"
        : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-10 ">

          {/* Logo */}
          {/* Logo */}
          <Link href="/" className="flex flex-col gap-0 group">
            <div className="flex items-center">
              <div className="relative w-9 h-9 md:w-12 md:h-12 flex-shrink-0 transition-transform duration-150 group-hover:scale-105">
                <Image
                  src="/Logo.png"
                  alt="VGNT Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span
                className={`text-4xl md:text-6xl font-bold tracking-tight leading-none transition-colors duration-150 ${scrolled
                  ? "text-transparent bg-clip-text bg-center bg-cover bg-[url('/HomePage/NavSection/NavTextImage.webp')]"
                  : "text-[#ecf4e5]"
                  }`}
              >
                VIGNAN
              </span>
            </div>
            <span className={` text-[12px] md:text-[19px] font-medium tracking-tighter leading-tight transition-colors duration-150 ml-2 ${scrolled ? "text-transparent bg-clip-text bg-center bg-cover bg-[url('/HomePage/NavSection/NavTextImage.webp')]" : "text-[#ecf4e5]"
              }`}>
              Institute of Technology and Science
            </span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden xl:flex items-center gap-4 font-medium">

            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() =>
                  link.hasDropdown && setActiveDropdown(link.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`relative flex items-center gap-0 text-lg font-medium transition-colors duration-150 whitespace-nowrap ${scrolled
                    ? "text-black hover:text-vignan-purple"
                    : "text-white hover:text-vignan-purple-light"
                    }`}
                >
                  {link.label}

                  {link.hasDropdown && (
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-100 ${activeDropdown === link.label ? "rotate-180" : ""
                        } ${scrolled ? "text-black" : "text-white"}`}
                    />
                  )}

                  {/* Animated Underline */}
                  <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-vignan-purple transition-all duration-150 group-hover:w-full rounded-full"></span>
                </Link>

                {/* Dropdown */}
                {link.hasDropdown && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-5 w-64 bg-white rounded-md shadow-2xl border border-gray-100 py-3 transition-all duration-150 ${
                      // Only add scroll if no nested submenus to prevent clipping
                      !link.dropdown?.some((item) => item.hasSubmenu)
                        ? "max-h-[80vh] overflow-y-auto"
                        : ""
                      } ${activeDropdown === link.label
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-3 invisible"
                      }`}
                  >
                    {link.dropdown?.map((item) => (
                      <div
                        key={item.label}
                        className="relative group"
                        onMouseEnter={() =>
                          item.hasSubmenu && setActiveSubmenu(item.label)
                        }
                        onMouseLeave={() => setActiveSubmenu(null)}
                      >
                        {item.hasSubmenu ? (
                          <>
                            <div className="flex items-center justify-between px-5 py-2.5 text-base text-gray-700 hover:bg-vignan-purple/5 hover:text-vignan-purple cursor-pointer transition-colors">
                              {item.label}
                              <ChevronDown className="w-4 h-4 -rotate-90" />
                            </div>

                            {/* Submenu */}
                            <div
                              className={`absolute top-0 left-full ml-2 w-56 bg-white rounded-md shadow-xl border border-gray-100 py-2 transition-all duration-150 ${activeSubmenu === item.label
                                ? "opacity-100 visible translate-x-0"
                                : "opacity-0 invisible -translate-x-2"
                                }`}
                            >
                              {item.submenu?.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-vignan-purple/5 hover:text-vignan-purple transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            href={item.href || "#"}
                            className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-vignan-purple/5 hover:text-vignan-purple transition-colors"
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}

              </div>
            ))}
          </div>
          {/* Right Buttons */}
          <div className="hidden xl:flex items-center gap-5">
            <Link
              href="/Pdfs/NIRF/NIRF2025.pdf"
              className="px-7 py-3 bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 
            backdrop-blur-md shadow-lg text-white text-sm font-semibold rounded-full hover:bg-vignan-purple-dark transition-all duration-150 shadow-md hover:shadow-xl hover:scale-105"
            >
              NIRF
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="xl:hidden ml-auto">
            <button
              className="p-2 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className={`w-6 h-6 ${scrolled || variant === "solid" ? "text-gray-800" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled || variant === "solid" ? "text-gray-800" : "text-white"}`} />
              )}
            </button>
          </div>

        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-150 xl:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ top: "80px", height: "calc(100vh - 80px)" }}
      >
        <div className="h-full overflow-y-auto py-6 px-4 pb-20">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-vignan-purple/30 pb-2">
                {link.hasDropdown ? (
                  <div className="space-y-2">
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.label ? null : link.label
                        )
                      }
                      className="flex items-center justify-between w-full text-lg font-medium text-gray-800"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${activeDropdown === link.label ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {activeDropdown === link.label && (
                      <div className="pl-4 space-y-3 mt-2 bg-gray-50 p-4 rounded-lg">
                        {link.dropdown?.map((item) => (
                          <div key={item.label}>
                            {item.hasSubmenu ? (
                              <div className="space-y-2">
                                <button
                                  onClick={() =>
                                    setActiveSubmenu(
                                      activeSubmenu === item.label
                                        ? null
                                        : item.label
                                    )
                                  }
                                  className="flex items-center justify-between w-full font-medium text-vignan-purple text-sm uppercase tracking-wider mb-2 mt-2"
                                >
                                  {item.label}
                                  <ChevronDown
                                    className={`w-4 h-4 transition-transform ${activeSubmenu === item.label
                                      ? "rotate-180"
                                      : ""
                                      }`}
                                  />
                                </button>

                                {activeSubmenu === item.label && (
                                  <div className="pl-2 space-y-2 border-l-2 border-vignan-purple/50">
                                    {item.submenu?.map((sub) => (
                                      <Link
                                        key={sub.label}
                                        href={sub.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block text-sm text-gray-600 hover:text-vignan-purple py-1"
                                      >
                                        {sub.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                href={item.href || "#"}
                                onClick={() => setMobileOpen(false)}
                                className="block text-base text-gray-600 hover:text-vignan-purple py-1"
                              >
                                {item.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-lg font-medium text-gray-800"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/nirf"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center px-6 py-3 bg-vignan-purple text-white text-base font-semibold rounded-lg shadow-md"
              >
                NIRF
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}