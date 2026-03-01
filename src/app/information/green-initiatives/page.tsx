import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Link from "next/link";
import React from 'react';
import Image from 'next/image';
import { Leaf, Recycle, Droplets, Users, CheckCircle2, ClipboardCheck, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Green Initiatives | VITS",
    description: "Information about Green Initiatives at VITS.",
};

const auditTeam = [
    { name: "Dr. G. Durga Sukumar", role: "Principal, VITS Hyderabad", position: "Head" },
    { name: "Mr. G. Narendar", role: "Dean, Administration", position: "Member" },
    { name: "Dr. T. Rama Subba Reddy", role: "Professor, EEE", position: "Member" },
    { name: "Dr. S. Deva Prasad", role: "Professor, Mechanical Engineering", position: "Member" },
    { name: "Dr. Narayan Sangam", role: "Assoc. Professor, Civil Engineering", position: "Member" },
];

const auditFunctions = [
    "Closely monitoring the existing status of environment and energy management practices.",
    "Suggesting sustainable options for improving the quality of learning.",
    "Energy audit and management with ‘go green’ motive.",
    "Use of renewable energy like solar power.",
    "Solid, liquid and e-waste management.",
    "Water conservation and management."
];

const solidWastePractices = [
    "Waste is collected and segregated in bins of two different colors every day: Blue bins for dry/recyclable waste and Green bins for wet/bio-degradable waste.",
    "The institution prepares compost from organic waste derived from trees, plants, vegetable peels, and fruit waste in dedicated compost pits.",
    "Damaged wooden and metal furniture (chairs, tables) are repaired and refurbished in the maintenance department to maximize reuse."
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
                        <span className="text-white font-medium">Green Initiatives</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Green Initiatives</h1>
                    <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                        Creating a sustainable and eco-friendly environment through rigorous audits and conscious management practices.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-16">

                {/* Introduction & Audit Team */}
                <section className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Leaf className="w-8 h-8 text-green-600" />
                            <h2 className="text-3xl font-bold text-gray-900">Green Audit Team</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Recognizing the quick expansion of the campus, the institute has initiated specific green practices to create a sustainable environment. A dedicated Green Audit team constitutes the backbone of these initiatives, performing annual energy and environmental audits.
                        </p>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="font-bold text-[#003666] mb-4 flex items-center gap-2">
                                <Users className="w-5 h-5" />
                                Team Composition
                            </h3>
                            <ul className="space-y-3">
                                {auditTeam.map((member, index) => (
                                    <li key={index} className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                        <div>
                                            <p className="font-semibold text-gray-900">{member.name}</p>
                                            <p className="text-sm text-gray-600">{member.role}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg group">
                        <Image 
                            src="/InformationPage/GreenInitiatives/1.jpg" 
                            alt="Green Campus" 
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8">
                            <p className="text-white font-medium text-lg">"Sustainable development is the pathway to the future we want for all."</p>
                        </div>
                    </div>
                </section>

                {/* Functions of Green Audit Team */}
                <section className="bg-green-50 rounded-3xl p-8 md:p-12 border border-green-100">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Functions of the Audit Team</h2>
                        <p className="text-gray-600">The team is responsible for maintaining the ecological balance of the campus through various strategic interventions.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {auditFunctions.map((func, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex gap-4">
                                <ClipboardCheck className="w-8 h-8 text-green-600 shrink-0" />
                                <p className="text-gray-700 text-sm leading-relaxed font-medium">{func}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Solid Waste Management */}
                <section>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                             <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                                <Image 
                                    src="/InformationPage/GreenInitiatives/2.jpg" 
                                    alt="Solid Waste Management" 
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-6">
                            <div className="flex items-center gap-3">
                                <Recycle className="w-8 h-8 text-green-600" />
                                <h2 className="text-3xl font-bold text-gray-900">Solid Waste Management</h2>
                            </div>
                            
                            {/* Diagram Trigger: Visualizing waste segregation helps students understand the process better */}
                            

                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <ul className="space-y-4">
                                    {solidWastePractices.map((practice, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                                            <span className="text-gray-700 leading-relaxed">{practice}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Liquid Waste Management */}
                <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <Droplets className="w-8 h-8 text-blue-600" />
                                <h2 className="text-3xl font-bold text-gray-900">Liquid Waste Management</h2>
                            </div>
                            <div className="prose text-gray-700 leading-relaxed">
                                <p className="mb-4">
                                    Vignan has always been committed to student-centric initiatives throughout its existence of more than three decades. This commitment extends to maintaining a clean and safe campus environment through proper liquid waste disposal and management systems.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-64 lg:h-auto">
                            <Image 
                                src="/InformationPage/GreenInitiatives/3.jpg" 
                                alt="Liquid Waste Management" 
                                fill
                                className="object-cover"
                                sizes="50vw"
                            />
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </div>
    );
}