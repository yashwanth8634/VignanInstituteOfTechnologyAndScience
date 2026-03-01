import Navbar from "../../../components/HomePage/Navbar";
import Footer from "../../../components/HomePage/Footer";
import Link from "next/link";
import React from 'react';
import { Construction, ArrowLeft, Lightbulb } from "lucide-react";

export const metadata = {
    title: "I & E Activities | VITS",
    description: "Information about Innovation & Entrepreneurship Activities at VITS.",
};

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
                        <span className="text-white font-medium">I & E Activities</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Innovation & Entrepreneurship Activities</h1>
                    <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                        Fostering a culture of innovation and creative thinking among students and faculty.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">

                {/* Content Placeholder */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                    <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6">
                        <Construction className="w-10 h-10 text-vignan-purple" />
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Content Under Update</h2>
                    <p className="text-gray-600 max-w-lg mx-auto mb-8 leading-relaxed">
                        We are currently updating the list of Innovation and Entrepreneurship activities. Please check back soon for the latest workshops, hackathons, and seminar details.
                    </p>

                    <div className="flex gap-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>

                        <Link
                            href="/information/edc"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-vignan-purple text-white font-medium rounded-xl hover:bg-[#003666] transition-colors shadow-md hover:shadow-lg"
                        >
                            <Lightbulb className="w-4 h-4" />
                            Visit EDC Cell
                        </Link>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}