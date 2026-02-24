import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Link from "next/link";
import React from 'react';
import { FileText, Trophy, Calendar, Globe, Award, Download, ChevronRight } from "lucide-react";

export const metadata = {
    title: "College Level Events | VITS",
    description: "Information about College Level Events at VITS.",
};

// Data: Resource Links (PDFs)
const eventResources = [
    {
        title: "Technical Events Report",
        category: "Technical",
        icon: FileText,
        link: "https://vignanits.ac.in/NAAC/nirf/Technical%20Events.pdf",
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "National & International Events",
        category: "General",
        icon: Globe,
        link: "https://vignanits.ac.in/NAAC/nirf/7.1.11%20Index%20(2).pdf",
        color: "bg-indigo-50 text-indigo-600"
    },
    {
        title: "Inclusion & Situatedness",
        category: "Social",
        icon: UsersIcon, // Defined below to avoid reference error if not imported, swapped to generic icon in render
        link: "https://vignanits.ac.in/NAAC/CR7/7.1.8/7.1.8%20Index.pdf",
        color: "bg-purple-50 text-purple-600"
    },
    {
        title: "Sports Achievements",
        category: "Sports",
        icon: Trophy,
        link: "https://vignanits.ac.in/NAAC/SportsTechincalCultural/Sport_Achievements.pdf",
        color: "bg-orange-50 text-orange-600"
    },
    {
        title: "Sports Events List",
        category: "Sports",
        icon: Calendar,
        link: "https://vignanits.ac.in/NAAC/SportsTechincalCultural/Sport_Events.pdf",
        color: "bg-orange-50 text-orange-600"
    },
    {
        title: "Cultural Achievements",
        category: "Cultural",
        icon: Award,
        link: "https://vignanits.ac.in/NAAC/SportsTechincalCultural/Cultural_Achievements.pdf",
        color: "bg-pink-50 text-pink-600"
    },
    {
        title: "Cultural Events List",
        category: "Cultural",
        icon: Calendar,
        link: "https://vignanits.ac.in/NAAC/SportsTechincalCultural/Cultural_Events.pdf",
        color: "bg-pink-50 text-pink-600"
    }
];

// Data: Past Events Timeline
const pastEvents = [
    {
        title: "SMART INDIA HACKTHON",
        date: "5th & 6th February 2020",
        description: "A nationwide initiative to provide students a platform to solve some of the pressing problems we face in our daily lives.",
        type: "Hackathon"
    },
    {
        title: "Innovative Project Expo-2019",
        date: "9th November 2019",
        description: "A showcase of innovative student projects demonstrating technical prowess and creativity.",
        type: "Exhibition"
    },
    {
        title: "CODE SMASH",
        date: "25th September 2019",
        description: "Organized in association with Naresh i Technologies to test coding skills.",
        type: "Competition"
    },
    {
        title: "Innovative Project Expo-2019 (April Edition)",
        date: "20th April 2019",
        description: "The spring edition of the project expo highlighting final year capstone projects.",
        type: "Exhibition"
    },
    {
        title: "Innovative Project Expo-2018",
        date: "3rd November 2018",
        description: "Annual project exhibition fostering research and development among students.",
        type: "Exhibition"
    },
    {
        title: "Innovative Project Expo-2018 (March Edition)",
        date: "24th March 2018",
        description: " showcasing technical models and prototypes.",
        type: "Exhibition"
    },
    {
        title: "Innovative Project Expo-2017",
        date: "3rd November 2017",
        description: "Platform for budding engineers to display their innovative ideas.",
        type: "Exhibition"
    },
    {
        title: "Technvite-15",
        date: "30th September 2015",
        description: "A grand technical fest celebrating engineering excellence.",
        type: "Fest"
    },
    {
        title: "Yanthriyan",
        date: "Annual Event",
        description: "A signature technical event organized by the Mechanical Engineering department.",
        type: "Fest"
    }
];

// Helper for icon
function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}

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
                        <span className="text-white font-medium">College Events</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">College Level Events</h1>
                    <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                        A hub of vibrant Technical, Cultural, and Sports activities that define campus life at Vignan.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-16">

                {/* Resource Downloads Section */}
                <section>
                    <div className="flex items-center gap-3 mb-8 border-b pb-4 border-gray-200">
                        <Download className="w-8 h-8 text-vignan-purple" />
                        <h2 className="text-3xl font-bold text-gray-900">Event Reports & Achievements</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {eventResources.map((resource, index) => {
                            const Icon = resource.icon;
                            return (
                                <a
                                    key={index}
                                    href={resource.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${resource.color}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 group-hover:text-vignan-purple transition-colors mb-1">
                                            {resource.title}
                                        </h3>
                                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
                                            {resource.category}
                                        </p>
                                        <span className="text-sm text-vignan-purple font-medium flex items-center gap-1">
                                            View Document <ChevronRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </section>

                {/* Past Events Timeline Section */}
                <section>
                    <div className="flex items-center gap-3 mb-8 border-b pb-4 border-gray-200">
                        <Calendar className="w-8 h-8 text-vignan-purple" />
                        <h2 className="text-3xl font-bold text-gray-900">Technical Events History</h2>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <div className="relative border-l-2 border-gray-100 ml-3 md:ml-6 space-y-12">
                            {pastEvents.map((event, index) => (
                                <div key={index} className="relative pl-8 md:pl-12">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-white bg-vignan-purple shadow-sm"></div>

                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                                        <h3 className="text-xl font-bold text-[#003666]">{event.title}</h3>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600 whitespace-nowrap">
                                            <Calendar className="w-3 h-3 mr-1.5" />
                                            {event.date}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                                        {event.description}
                                    </p>

                                    <div className="mt-3">
                                        <span className="inline-block px-2 py-1 bg-purple-50 text-vignan-purple text-xs font-semibold rounded">
                                            {event.type}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </div>
    );
}