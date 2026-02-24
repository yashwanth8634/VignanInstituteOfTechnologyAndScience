import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Link from "next/link";
import React from 'react';
import { FileText, Download } from "lucide-react";

export const metadata = {
    title: "News Letters | VITS",
    description: "Download college newsletters from VITS.",
};

const newsletters = [
    {
        title: "Vignan News Letter from January 2018 to December 2018",
        url: "/Pdfs/Newsletters/2018.pdf",
        date: "Jan 2018 - Dec 2018"
    },
    {
        title: "Vignan News Letter from January 2019 to June 2019",
        url: "/Pdfs/Newsletters/2019.pdf",
        date: "Jan 2019 - Jun 2019"
    },
    {
        title: "Vignan News Letter from June 2019 to August 2019",
        url: "/Pdfs/Newsletters/2019-2.pdf",
        date: "Jun 2019 - Aug 2019"
    },
    {
        title: "Vignan News Letter from Septemeber 2019 to November 2019",
        url: "/Pdfs/Newsletters/2019-3.pdf",
        date: "Sep 2019 - Nov 2019"
    }
];

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Page Header */}
            <section className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-32 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-6 flex items-center space-x-2">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/information" className="hover:text-white transition-colors">Information</Link>
                        <span>/</span>
                        <span className="text-white font-medium">Newsletters</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">College Newsletters</h1>
                    <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                        Stay updated with the latest happenings, achievements, and events from our campus.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {newsletters.map((newsletter, index) => (
                        <a
                            key={index}
                            href={newsletter.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-vignan-purple/30 transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center shrink-0 group-hover:bg-vignan-purple group-hover:text-white transition-colors">
                                    <FileText className="w-6 h-6 text-vignan-purple group-hover:text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-vignan-purple transition-colors mb-2 line-clamp-2">
                                        {newsletter.title}
                                    </h3>
                                    <span className="inline-block px-3 py-1 bg-gray-50 text-sm font-medium text-gray-600 rounded-lg">
                                        {newsletter.date}
                                    </span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 text-gray-400 group-hover:bg-purple-100 group-hover:text-vignan-purple transition-colors">
                                    <Download className="w-4 h-4" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
