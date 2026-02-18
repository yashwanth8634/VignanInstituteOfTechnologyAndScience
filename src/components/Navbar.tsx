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
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  {
    label: "Academics",
    href: "/academics",
    hasDropdown: true,
    dropdown: [
      { label: "CGPA to Percentage Certificate", href: "/cgpa-certificate" },
      {
        label: "Departments",
        hasSubmenu: true,
        submenu: [
          { label: "Computer Science And Engineering", href: "/departments/cse" },
          { label: "CSE(Artifical Intelligence And Machine Learning)", href: "/departments/cse-aiml" },
          { label: "CSE(Data Science)", href: "/departments/cse-data-science" },
          { label: "CSE(Information Technology)", href: "/departments/cse-it" },
          { label: "Artificial Intelligence And Machine Learning", href: "/departments/aiml" },
          { label: "Artificial Intelligence And Data Science", href: "/departments/aids" },
          { label: "Electronics Instrumental And Engineering", href: "/departments/eie" },
          { label: "Electronics And Communication Engineering", href: "/departments/ece" },
          { label: "Electrical And Electronics Engineering", href: "/departments/eee" },
          { label: "Mechanical Engineering", href: "/departments/mech" },
          { label: "Civil Engineering", href: "/departments/civil" },
        ],
      },
      { label: "Faculty", href: "/faculty" },
      { label: "Overview", href: "/academics" },
    ],
  },

  { label: "Placements", href: "/placements" },
  { label: "Mandatory Disclosures", href: "/mandatory-disclosures" },
  {
    label: "Administration",
    href: "/administration",
    hasDropdown: true,
    dropdown: [
      { label: "Principal", href: "/administration/principal" },
      { label: "Governing Body", href: "/administration/governing-body" },
      { label: "Academic Council", href: "/administration/academic-council" },
    ],
  },
  {
    label: "Information",
    href: "/information",
    hasDropdown: true,
    dropdown: [
      { label: "Campus Life", href: "/campus-life" },
      { label: "Research", href: "/research" },
      { label: "Events", href: "/events" },
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white shadow-md border-b border-gray-100 py-3"
        : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-10  ">

          {/* Logo */}
          <div className="relative w-44 h-12 md:w-56 md:h-20 flex-shrink-0 mr-2">
            <Link href="/" className="flex items-center">
              <Image
                src="https://vignanits.ac.in/wp-content/uploads/2020/07/1595497656733.png"
                alt="Vignan Institute of Technology and Science"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="hidden xl:flex items-center gap-6 font-semibold">

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
                  className={`relative flex items-center gap-0 text-lg font-semibold transition-colors duration-300 whitespace-nowrap ${scrolled
                    ? "text-black hover:text-vignan-purple"
                    : "text-white hover:text-vignan-purple-light"
                    }`}
                >
                  {link.label}

                  {link.hasDropdown && (
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""
                        } ${scrolled ? "text-black" : "text-white"}`}
                    />
                  )}

                  {/* Animated Underline */}
                  <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-vignan-purple transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>

                {/* Dropdown */}
                {link.hasDropdown && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-5 w-64 bg-white rounded-md shadow-2xl border border-gray-100 py-3 transition-all duration-300 ${activeDropdown === link.label
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
                              className={`absolute top-0 left-full ml-2 w-56 bg-white rounded-md shadow-xl border border-gray-100 py-2 transition-all duration-300 ${activeSubmenu === item.label
                                ? "opacity-100 visible translate-x-0"
                                : "opacity-0 invisible -translate-x-2"
                                }`}
                            >
                              {item.submenu?.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  className="block px-4 py-2 text-s text-gray-700 hover:bg-vignan-purple/5 hover:text-vignan-purple transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            className="block px-5 py-2.5 text-base text-gray-700 hover:bg-vignan-purple/5 hover:text-vignan-purple transition-colors"
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
              href="/nba"
              className="px-7 py-3 bg-vignan-purple text-white text-sm font-semibold rounded-full hover:bg-vignan-purple-dark transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
            >
              NBA
            </Link>

            <Link
              href="https://ecap.vignanits.ac.in"
              target="_blank"
              className="px-7 py-3 bg-vignan-purple text-white text-sm font-semibold rounded-full hover:bg-vignan-purple-dark transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
            >
              ECAP
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="xl:hidden ml-auto">
            <button
              className="p-2 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>

        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 xl:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ top: "80px", height: "calc(100vh - 80px)" }}
      >
        <div className="h-full overflow-y-auto py-6 px-4 pb-20">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-gray-100 pb-2">
                {link.hasDropdown ? (
                  <div className="space-y-2">
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.label ? null : link.label
                        )
                      }
                      className="flex items-center justify-between w-full text-lg font-semibold text-gray-800"
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
                                  <div className="pl-2 space-y-2 border-l-2 border-vignan-purple/20">
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
                    className="block text-lg font-semibold text-gray-800"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/nba"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center px-6 py-3 bg-vignan-purple text-white text-base font-semibold rounded-lg shadow-md"
              >
                NBA
              </Link>
              <Link
                href="https://ecap.vignanits.ac.in"
                target="_blank"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center px-6 py-3 border-2 border-vignan-purple text-vignan-purple text-base font-semibold rounded-lg"
              >
                ECAP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}