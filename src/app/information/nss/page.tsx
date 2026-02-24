"use client"; // Required for useState/useEffect

import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Users2, Target, Trophy, Calendar, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Award } from "lucide-react";




// --- DATA CONSTANTS ---

const objectives = [
    "Understand the community in which they work",
    "Understand themselves in relation to their community",
    "Identify the needs and problems of the community and involve them in problem-solving",
    "Develop among them a sense of social and civic responsibility",
    "Utilize their knowledge in finding practical solutions to individual and community problems",
    "Develop competence required for group-living and sharing of responsibilities",
    "Gain skills in mobilizing community participation",
    "Acquire leadership qualities and democratic attitudes",
    "Develop capacity to meet emergencies and natural disasters",
    "Practice national integration and social harmony"
];

// Slider Images
const sliderImages = [
    {
        src: "https://vignanits.ac.in/wp-content/uploads/2020/07/nss.jpg",
        alt: "NSS Volunteers Group Photo",
        caption: "VITS NSS Unit Volunteers"
    },
    {
        src: "https://vignanits.ac.in/wp-content/uploads/2020/07/event-2.jpg", // Example placeholder, using existing domain structure
        alt: "Tree Plantation Drive",
        caption: "Tree Plantation Drive - Green Campus"
    },
    {
        src: "https://vignanits.ac.in/wp-content/uploads/2020/07/event-3.jpg", // Example placeholder
        alt: "Blood Donation Camp",
        caption: "Annual Blood Donation Camp"
    }
];

// Consolidated Data for Accordions
const academicData = [
    {
        id: "2021-2022",
        title: "Academic Year 2021-2022 Events",
        type: "events",
        headers: ["S.No", "Title of the Programme", "Date & Duration"],
        data: [
            { col1: 1, col2: "Rashtriya Ektha Diwas", col3: "31st Oct 2021 (1 Day)" },
            { col1: 2, col2: "Azadi ka Amrit Mahotsav", col3: "25th Nov 2021 (1 Day)" },
            { col1: 3, col2: "Constitutional day Clebration", col3: "26th Nov 2021 (1 Day)" },
            { col1: 4, col2: "Blood Donation Camp", col3: "24th Dec 2021 (1 Day)" },
            { col1: 5, col2: "World Water Day", col3: "22nd March 2022 (1 Day)" },
            { col1: 6, col2: "Ambedkar Jayanthi", col3: "14th April 2022 (1 Day)" },
            { col1: 7, col2: "World Earth Day", col3: "22nd April 2022 (1 Day)" }
        ]
    },
    {
        id: "2020-2021",
        title: "Academic Year 2020-2021 Achievements",
        type: "awards",
        headers: ["Name of the Activity", "Award / Recognition", "Awarding Body"],
        data: [
            { col1: "NIRF Ranking", col2: "Appreciation", col3: "Commissionerate, Collegiate Education" },
            { col1: "Inclusion of ATAL Academy FDP", col2: "World Book of Records-London", col3: "ATAL Academy" },
            { col1: "Awareness on Pandemic Disease", col2: "Certificate of Service Excellence", col3: "Panchayat, Kawadipally Village" },
            { col1: "Online Telemedicine IOT Medical Kit", col2: "Certificate of Appreciation", col3: "Anaadha Vidyarthi Griha" },
            { col1: "Online Telemedicine IOT Medical Kit", col2: "Certificate of Appreciation", col3: "Panchayat, Balijaguda Village" },
            { col1: "Online Teaching Learning Process", col2: "Green Campus Award", col3: "VMeduLife" },
            { col1: "Plastic Free Campus", col2: "Certificate of Achievement", col3: "Senergy" },
            { col1: "Blood Donation Camp", col2: "Certificate of organizing excellence", col3: "NTR TRUST" },
            { col1: "IEEE SIGHT/HAC Covid-19 Project", col2: "Certificate of Appreciation", col3: "IEEE Region 10 SIGHT/HAC" },
            { col1: "Hands on workshop on IOT Training", col2: "Certificate of Appreciation", col3: "IEEE CSS Outreach" },
            { col1: "Chatra Vishwakarma Award 2020", col2: "Shortlisted for second round", col3: "AICTE" }
        ]
    },
    {
        id: "2019-2020",
        title: "Academic Year 2019-2020 Achievements",
        type: "awards",
        headers: ["Name of the Activity", "Award / Recognition", "Awarding Body"],
        data: [
            { col1: "Online Teaching Learning Process", col2: "Green Campus Award", col3: "VMeduLife" },
            { col1: "Sanitation & Hygiene, Waste Management", col2: "Certificate of Recognized Social Entrepreneurship", col3: "MGNCRE-MHRD, Govt of India" },
            { col1: "Blood Donation Camp", col2: "Certificate of organizing excellence", col3: "NTR TRUST" },
            { col1: "Dental Check up Camp", col2: "Certificate of Service Excellence", col3: "Panchayat, Kawadipally Village" },
            { col1: "Swachh Bharat Abhiyan", col2: "Certificate of Recognition", col3: "Panchayat, Deshmukhi Village" },
            { col1: "Health Camp", col2: "Certificate of Recognition", col3: "Panchayat, Bilajaguda Village" },
            { col1: "National youth Day", col2: "Certificate of organizing excellence", col3: "NTR TRUST" },
            { col1: "Green Initiative", col2: "Certificate of Appreciation", col3: "Eco Action" },
            { col1: "Plastic Free Campus", col2: "Certificate of Achievement", col3: "Senergy" },
            { col1: "NSS Activities", col2: "Best NSS unit Award", col3: "Kranataka Educational Awards" },
            { col1: "E-Waste", col2: "Certificate of Appreciation", col3: "Anand Computer Systems" },
            { col1: "Harithaharam", col2: "Certificate for excellence", col3: "Panchayat, Kawadipally Village" }
        ]
    },
    {
        id: "2018-2019",
        title: "Academic Year 2018-2019 Achievements",
        type: "awards",
        headers: ["Name of the Activity", "Award / Recognition", "Awarding Body"],
        data: [
            { col1: "Popularization of Rice Machinery", col2: "Certificate of Appreciation", col3: "KSNM Marketing, Tamil nadu" },
            { col1: "Best Academic Education institute", col2: "Best Academic Education institute Award", col3: "Trinity college Durbin" },
            { col1: "Best Performing Academy", col2: "Best Performing Academy Award", col3: "TASK, Govt. of Telangana" },
            { col1: "Blood Donation Camp", col2: "Certificate of organizing excellence", col3: "NTR TRUST" },
            { col1: "Dental Check up Camp", col2: "Certificate of Service Excellence", col3: "Panchayat, Kawadipally Village" },
            { col1: "Swachh Bharat Abhiyan", col2: "Public Service excellence award", col3: "Panchayat, Kawadipally Village" },
            { col1: "Academy Years of Service", col2: "Academy Years of Service Award", col3: "CISCO Networking Academy" },
            { col1: "IEEE EPICS Project implementation", col2: "Certificate of Recognition", col3: "IEEE Hyderabad Section" }
        ]
    }
];

export default function Page() {
    // Slider State
    const [currentSlide, setCurrentSlide] = useState(0);

    // Accordion State
    const [openYear, setOpenYear] = useState<string | null>("2021-2022"); // Default open

    // Auto-play Slider
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
    };

    const toggleAccordion = (id: string) => {
        setOpenYear(openYear === id ? null : id);
    };

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
                        <span className="text-white font-medium">NSS</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">National Service Scheme (NSS)</h1>
                    <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                        "Not Me but You" - Developing the personality of students through community service.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-16">

                {/* Intro Section with Slider */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-vignan-purple rounded-full font-medium text-sm border border-purple-100">
                            <Users2 className="w-5 h-5" />
                            About NSS at VITS
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                            More than 3.2 million student volunteers nationwide.
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            National Service Scheme, under the Ministry of Youth Affairs & Sports Govt. of India,
                            was launched in Gandhiji's Birth Centenary Year 1969. The primary focus is on the
                            development of the personality of students through community service.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            From its inception, more than 3.75 crore students from Universities, Colleges
                            and Institutions of higher learning have benefited from NSS activities as student volunteers.
                        </p>
                    </div>

                    {/* Image Slider Component */}
                    <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                        {sliderImages.map((img, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover"
                                    unoptimized // Remove if using optimized external images config
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                                    <p className="font-medium text-center">{img.caption}</p>
                                </div>
                            </div>
                        ))}

                        {/* Slider Controls */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {sliderImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? "bg-white w-4" : "bg-white/50"}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Characteristics Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Coverage</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Started in 37 universities with 40,000 volunteers, now exceeding 2.6 million volunteers across 200 Universities and Polytechnics.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-purple-50 text-vignan-purple rounded-xl flex items-center justify-center mb-4">
                            <Trophy className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Motto</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            "Not Me but You" - reflects the essence of democratic living and upholds the need for self-less service and appreciation of others.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Symbol</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Based on the giant Rath Wheel of the Konark Sun Temple. It portrays creation, preservation, release, and continuous striving for social change.
                        </p>
                    </div>
                </div>

                {/* Objectives */}
                <div className="bg-vignan-blue rounded-3xl p-10 text-white relative overflow-hidden shadow-xl">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Target className="w-6 h-6 text-purple-300" />
                            Main Objectives
                        </h2>
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                            {objectives.map((obj, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                                    <span className="text-blue-50 text-sm leading-relaxed">{obj}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dropdown / Accordion Section for Events & Achievements */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-8 border-b pb-4">
                        <Award className="w-8 h-8 text-vignan-purple" />
                        <h2 className="text-3xl font-bold text-gray-900 uppercase">Events & Achievements</h2>
                    </div>

                    {academicData.map((year, index) => (
                        <div key={year.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            {/* Accordion Header */}
                            <button
                                onClick={() => toggleAccordion(year.id)}
                                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-lg ${openYear === year.id ? 'bg-vignan-purple text-white' : 'bg-gray-100 text-gray-500'}`}>
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <h3 className={`text-lg font-bold ${openYear === year.id ? 'text-vignan-purple' : 'text-gray-800'}`}>
                                        {year.title}
                                    </h3>
                                </div>
                                {openYear === year.id ? (
                                    <ChevronUp className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>

                            {/* Accordion Body */}
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openYear === year.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="p-6 pt-0 border-t border-gray-100">
                                    <div className="overflow-x-auto mt-4">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-vignan-purple">
                                                <tr>
                                                    {year.headers.map((header, idx) => (
                                                        <th key={idx} className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">
                                                            {header}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {year.data.map((row, rIdx) => (
                                                    <tr key={rIdx} className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                                            {row.col1}
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-600">
                                                            {row.col2}
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-500">
                                                            {row.col3}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}