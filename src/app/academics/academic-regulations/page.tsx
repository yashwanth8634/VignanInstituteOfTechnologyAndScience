"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { FileText, Download } from "lucide-react";

export default function AcademicRegulationsPage() {
    const regulations = [
        {
            name: "B.Tech VR25 Regulations",
            href: "/Pdfs/AcademicRegulations/BTech/BTechVR25.pdf", // Placeholder
        },
        {
            name: "M.Tech VR25 Regulations",
            href: "/Pdfs/AcademicRegulations/MTech/MTechVR25.pdf", // Placeholder
        },
        {
            name: "B.Tech VR23 Regulations",
            href: "/Pdfs/AcademicRegulations/BTech/BTechVR23.pdf", // Placeholder
        },
        {
            name: "M.Tech VR23 Regulations",
            href: "/Pdfs/AcademicRegulations/MTech/MTechVR23.pdf", // Placeholder
        },
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Header */}
            <section className="bg-vignan-purple pt-32 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Academic Regulations
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto space-y-4">
                    {regulations.map((reg, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-4 group"
                        >
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <div className="w-12 h-12 bg-vignan-purple/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-vignan-purple transition-colors duration-300">
                                    <FileText className="w-6 h-6 text-vignan-purple group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-vignan-purple transition-colors">
                                    {reg.name}
                                </h3>
                            </div>

                            <a
                                href={reg.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-auto px-6 py-3 bg-vignan-purple text-white rounded-lg font-semibold hover:bg-vignan-purple-dark transition-colors duration-300 text-sm flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
                            >
                                <Download className="w-4 h-4" />
                                Download PDF
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
