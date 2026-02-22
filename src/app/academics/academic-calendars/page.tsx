"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import { Calendar, Download, ChevronDown } from "lucide-react";

export default function AcademicCalendarsPage() {
    const [openYear, setOpenYear] = useState<string | null>("2025-2026"); // Default open year

    const calendarsByYear = {
        "2025-2026": [
            {
                name: "M.Tech I Year",
                href: "https://drive.google.com/file/d/13--aZbh2KTOxT043MZu33Y67xEPN-tUS/view",
            },
            {
                name: "M.Tech II Year",
                href: "https://drive.google.com/file/d/1Q1EBouw8PjCjoFM-wb45oQ5j7UvijKu9/view",
            },
            {
                name: "B.Tech I Year",
                href: "/Pdfs/AcademicCalendars/2025-2026/B.Tech-I-Year-2025-26-VR25.pdf",
            },
            {
                name: "B.Tech II Year",
                href: "/Pdfs/AcademicCalendars/2025-2026/B.Tech-II-Year-2025-26.pdf",
            },
            {
                name: "B.Tech III Year",
                href: "/Pdfs/AcademicCalendars/2025-2026/B.Tech-III-Year-2025-26.pdf",
            },
            {
                name: "B.Tech IV Year",
                href: "https://drive.google.com/file/d/13r536HvvlUv9_JyQbjgftXUaWAc07Irq/view",
            },
        ],
        "2024-2025": [
            {
                name: "M.Tech I Year",
                href: "/Pdfs/AcademicCalendars/2024-2025/M.Tech-I-Year-2024-25-VR23.pdf",
            },
            {
                name: "M.Tech II Year",
                href: "/Pdfs/AcademicCalendars/2024-2025/M.Tech-II-Year-2024-25-VR23.pdf",
            },
            {
                name: "B.Tech I Year",
                href: "/Pdfs/AcademicCalendars/2024-2025/B.Tech-I-Year-2024-25-VR23.pdf",
            },
            {
                name: "B.Tech II Year",
                href: "/Pdfs/AcademicCalendars/2024-2025/B.Tech-II-2024-25-Year.pdf",
            },
        ],
        "2023-2024": [
            {
                name: "M.Tech I Year & B.Tech I Year",
                href: "/Pdfs/AcademicCalendars/2023-2024/B.Tech_M.Tech-I-Year-2023-24.pdf",
            },
        ]
    };

    const toggleYear = (year: string) => {
        setOpenYear(openYear === year ? null : year);
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Header */}
            <section className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-32 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-3">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/academics" className="hover:text-white transition-colors">Academics</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white font-medium">Academic Calendars</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
                        <Calendar className="w-10 h-10 md:w-12 md:h-12 text-white/90" />
                        Academic Calendars
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto space-y-6">
                    {Object.entries(calendarsByYear).map(([year, calendars]) => (
                        <div key={year} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200">
                            {/* Accordion Header */}
                            <button
                                onClick={() => toggleYear(year)}
                                className={`w-full flex items-center justify-between p-5 md:p-6 text-left transition-all bg-white
                                    ${openYear === year ? 'border-b border-gray-100 rounded-t-2xl' : 'rounded-2xl'}`
                                }
                            >
                                <div className="flex items-center gap-4 md:gap-5">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center bg-vignan-purple/5 text-vignan-purple flex-shrink-0">
                                        <Calendar className="w-6 h-6 md:w-7 md:h-7" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">Academic Year {year}</h2>
                                        <p className="text-sm text-gray-500 mt-0.5">{calendars.length} Calendars Available</p>
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 text-gray-500 flex-shrink-0 transition-colors hover:bg-gray-100">
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300
                                        ${openYear === year ? 'rotate-180' : ''}`
                                    } />
                                </div>
                            </button>

                            {/* Accordion Content */}
                            <div className={`transition-all duration-300 ease-in-out
                                ${openYear === year ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`
                            }>
                                <div className="p-4 md:p-6 bg-gray-50/50 border-t border-gray-100">
                                    <ul className="space-y-2">
                                        {calendars.map((cal, index) => (
                                            <li key={index}>
                                                <a
                                                    href={cal.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all text-gray-700 hover:text-vignan-purple group"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <Calendar className="w-4 h-4 text-gray-400 group-hover:text-vignan-purple transition-colors" />
                                                        <span className="font-medium">{cal.name}</span>
                                                    </div>
                                                    <Download className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
