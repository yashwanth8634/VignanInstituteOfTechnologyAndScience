import Navbar from "../../../components/HomePage/Navbar";
import Footer from "../../../components/HomePage/Footer";
import Link from "next/link";
import React from 'react';
import { Network, Server, Cpu, Database, Wrench, Lightbulb, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Innovation & Incubation Center | VITS",
    description: "Information about Innovation & Incubation Center at VITS.",
};

const facilities = [
    {
        title: "IBM Center of Excellence",
        icon: Server,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        description: [
            "IBM & VITS acknowledge the need for IBM Software skills in the IT Education and training sector. The Objective is to have a number of graduating professionals skilled on IBM Software. Both IBM and VITS are keen to cooperate in a way that shall benefit VITS students pursuing a career in the industry.",
            "VITS shall rollout under/Post-graduate/Certificate/value added programs with specialization aligned with relevant IBM Software delivering all or any such programs to enrolled students and faculty members.",
            "The Curriculum may be provided by IBM or Jointly developed by IBM and VITS designated subject matter experts. There may be additional specialized offerings and curriculum may be reviewed and updated by IBM and VITS from time to time with mutual agreement."
        ]
    },
    {
        title: "CISCO Networking Lab",
        icon: Network,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
        description: [
            "Cisco Networking Academy is an IT skills and career-building program for learning institutions and individuals worldwide.",
            "The Memorandum of Understanding (MoU) was signed between VITS and Cisco Inc. for implementing the Cisco Network Academy program at College Premises. The College established a separate laboratory for Cisco Networking Programs. The training programs will be organized in Networking and its related technologies for students which will be useful for career growth."
        ]
    },
    {
        title: "LAB View",
        icon: Database,
        color: "text-green-600",
        bgColor: "bg-green-50",
        description: [
            "LabVIEW provides the state-of-the-art way to effectively teach and learn basic and advanced engineering concepts using a graphical programming platform. Nowadays engineers and scientists rely on LabVIEW for a variety of applications: test and measurement, process control and automation, monitoring and simulation.",
            "The objective is to present theoretical and practical concepts and hands-on experience in LabVIEW, intended to teach students the tools of LabVIEW with an emphasis on various applications."
        ]
    },
    {
        title: "Composite Manufacturing and Research Lab",
        icon: Wrench,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        description: [
            "Composites are new generation materials which are light-weight, corrosion-resistant and stronger than conventional engineering materials. The research and developmental activities of this lab have contributed to resolving certain technical problems encountered by researchers and students of engineering institutions.",
            "Students and faculty researchers of this institute actively involve themselves in research activities. This has resulted in many successful and on-going student mini and major projects, funding projects and numerous research publications."
        ],
        outcomes: [
            "Decrease of bicycle frame weight by 4 kg achieved by replacing parts with composite materials, maintaining performance.",
            "Analysis of propagation of de-lamination damage caused by flying debris and bird hits to aircraft structures."
        ]
    },
    {
        title: "Innovative Project Laboratory",
        icon: Lightbulb,
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        description: [
            "A young mind is the sharpest mind. The Innovative projects are a platform giving these young minds a place to experiment, innovate, and come up with something extraordinary. This platform showcases how technologies are applied to implement new approaches to learning—it's 'technology in action'.",
            "The aim is to involve all students across departments to learn practical aspects of Engineering and Technology to solve real-time problems. The focus includes solving societal problems to truly benefit mankind.",
            "Student involvement starts early in the semester, with 40 minutes during lab time allotted for group projects (3-5 students). Faculty guides them through the concepts. The college organizes an Innovative Projects Expo to exhibit these ideas, judged by eminent persons from Academics, Industry, and Research for cash prizes and certification."
        ]
    }
];

const iotLabObjectives = [
    "To create a laboratory for IoT, equipping it with WyzBee boards procured from Redpine.",
    "To equip the lab with essentials such as PCs, power supply, and internet access.",
    "To organize training courses and sessions based on the designated IoT Platform.",
    "To assign faculty and staff to take up the assigned activity.",
    "To support students taking up projects based on the platform.",
    "To purchase and equip laboratories with additional platforms and peripherals.",
    "To support the defined courses and lab work.",
    "To identify applications and research areas based on studies carried out.",
    "To prepare to offer real-world solutions to problems in areas identified as thrust areas by the government."
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
                        <span className="text-white font-medium">Innovation</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Innovation & Incubation Center</h1>
                    <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                        Fostering creativity, technical excellence, and industry-aligned research through state-of-the-art laboratory facilities.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">

                {/* Facilities Grid */}
                <div className="space-y-12 mb-16">
                    {facilities.map((facility, index) => {
                        const Icon = facility.icon;
                        return (
                            <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row items-start gap-6">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${facility.bgColor}`}>
                                        <Icon className={`w-8 h-8 ${facility.color}`} />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{facility.title}</h2>
                                        <div className="space-y-4">
                                            {facility.description.map((desc, i) => (
                                                <p key={i} className="text-gray-700 leading-relaxed text-sm md:text-base">
                                                    {desc}
                                                </p>
                                            ))}
                                        </div>
                                        {facility.outcomes && (
                                            <div className="mt-6 pt-6 border-t border-gray-100">
                                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Key Outcomes</h3>
                                                <ul className="grid sm:grid-cols-2 gap-4">
                                                    {facility.outcomes.map((outcome, i) => (
                                                        <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                            <CheckCircle2 className="w-5 h-5 text-vignan-purple shrink-0 mt-0.5" />
                                                            <span className="text-sm text-gray-600 leading-snug">{outcome}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* IOT Lab Section */}
                <div className="bg-[#003666] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mt-32 -mr-32 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full -mb-32 -ml-32 blur-3xl" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-sm shrink-0">
                                <Cpu className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">IOT Lab</h2>
                                <p className="text-blue-200 text-sm md:text-base">In Collaboration with Red Pine Signals</p>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-10">
                            <div className="space-y-6">
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm h-full">
                                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                                        <Lightbulb className="w-5 h-5 text-yellow-400" />
                                        Vision
                                    </h3>
                                    <p className="text-blue-100 leading-relaxed text-sm italic">
                                        "To evolve into a center of excellence in Science & Technology through creative and innovative practices in teaching-learning, promoting academic achievement & research excellence to produce internationally accepted competitive and world class professionals who are psychologically strong and emotionally balanced imbued with social consciousness and ethical values."
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm h-full">
                                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                                        Mission
                                    </h3>
                                    <p className="text-blue-100 leading-relaxed text-sm italic">
                                        "To provide high quality academic programmes, training activities, research facilities and opportunities supported by continuous industry - institute interaction aimed at employability, entrepreneurship, leadership and research aptitude among students and contribute to the economic and technological development of the region, state and nation."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-3">Objectives</h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {iotLabObjectives.map((obj, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-xs font-bold">
                                            {i + 1}
                                        </div>
                                        <p className="text-sm text-blue-100 leading-snug font-medium">{obj}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}