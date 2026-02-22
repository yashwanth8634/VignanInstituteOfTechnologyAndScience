"use client";

import Link from "next/link";
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import { FileText, Download } from "lucide-react";

export default function AcademicRegulationsPage() {
    const regulations = [
        {
            name: "B.Tech VR25",
            description: "Outlines curriculum, academic rules, and evaluation criteria.",
            tags: ["B.Tech", "VR25", "Regulations"],
            href: "/Pdfs/AcademicRegulations/BTech/BTechVR25.pdf",
            bgClass: "bg-[#e8f4fc]", // Light Blue
            textClass: "text-[#1d4ed8]", // tailwind blue-700
            tagBg: "bg-blue-100/70",
            tagText: "text-blue-800",
            arrowClass: "text-[#1d4ed8] group-hover:text-blue-900 group-hover:translate-x-1 transition-all"
        },
        {
            name: "M.Tech VR25",
            description: "Detailed framework for postgraduate M.Tech programs.",
            tags: ["M.Tech", "VR25", "Regulations"],
            href: "/Pdfs/AcademicRegulations/MTech/MTechVR25.pdf",
            bgClass: "bg-[#ffefe5]", // Light Orange/Peach
            textClass: "text-[#c2410c]", // tailwind orange-700
            tagBg: "bg-orange-100/70",
            tagText: "text-orange-800",
            arrowClass: "text-[#c2410c] group-hover:text-orange-900 group-hover:translate-x-1 transition-all"
        },
        {
            name: "B.Tech VR23",
            description: "Prior syllabus structure and examination guidelines.",
            tags: ["B.Tech", "VR23", "Historical"],
            href: "/Pdfs/AcademicRegulations/BTech/BTechVR23.pdf",
            bgClass: "bg-[#f2e8fc]", // Light Purple 
            textClass: "text-[#6d28d9]", // tailwind purple-700
            tagBg: "bg-purple-100/70",
            tagText: "text-purple-800",
            arrowClass: "text-[#6d28d9] group-hover:text-purple-900 group-hover:translate-x-1 transition-all"
        },
        {
            name: "M.Tech VR23",
            description: "Standards and protocols for the 2023 postgraduate batches.",
            tags: ["M.Tech", "VR23", "Historical"],
            href: "/Pdfs/AcademicRegulations/MTech/MTechVR23.pdf",
            bgClass: "bg-[#e5f7f1]", // Light Mint/Teal
            textClass: "text-[#0f766e]", // tailwind teal-700
            tagBg: "bg-teal-100/70",
            tagText: "text-teal-800",
            arrowClass: "text-[#0f766e] group-hover:text-teal-900 group-hover:translate-x-1 transition-all"
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar variant="solid" />

            {/* Header */}
            <section className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-32 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-3">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/academics" className="hover:text-white transition-colors">Academics</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white font-medium">Academic Regulations</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Academic Regulations
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* B.Tech Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="w-8 h-1 bg-vignan-purple rounded-full"></span>
                            B.Tech Programs
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                            {regulations.filter(r => r.tags.includes('B.Tech')).map((reg, index) => (
                                <a
                                    key={index}
                                    href={reg.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block p-5 md:p-6 rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-lg group ${reg.bgClass}`}
                                >
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                                        {reg.name}
                                    </h3>
                                    <p className="text-gray-700 text-xs md:text-sm mb-4 max-w-[95%]">
                                        {reg.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {reg.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide ${reg.tagBg} ${reg.tagText}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between border-t border-black/5 pt-4 mt-auto">
                                        <span className={`font-semibold text-sm ${reg.textClass}`}>
                                            Download PDF
                                        </span>
                                        <div className={`w-6 h-6 rounded-full bg-white/50 flex items-center justify-center transition-all shadow-sm ${reg.arrowClass}`}>
                                            <Download className="w-3 h-3" />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200" />

                    {/* M.Tech Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="w-8 h-1 bg-vignan-purple rounded-full"></span>
                            M.Tech Programs
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                            {regulations.filter(r => r.tags.includes('M.Tech')).map((reg, index) => (
                                <a
                                    key={index}
                                    href={reg.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block p-5 md:p-6 rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-lg group ${reg.bgClass}`}
                                >
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                                        {reg.name}
                                    </h3>
                                    <p className="text-gray-700 text-xs md:text-sm mb-4 max-w-[95%]">
                                        {reg.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {reg.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide ${reg.tagBg} ${reg.tagText}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between border-t border-black/5 pt-4 mt-auto">
                                        <span className={`font-semibold text-sm ${reg.textClass}`}>
                                            Download PDF
                                        </span>
                                        <div className={`w-6 h-6 rounded-full bg-white/50 flex items-center justify-center transition-all shadow-sm ${reg.arrowClass}`}>
                                            <Download className="w-3 h-3" />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
