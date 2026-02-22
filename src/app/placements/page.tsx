
"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Image from "next/image";
import { Briefcase, Building2, BookOpen, User, Phone, Mail, Award, ChevronDown } from "lucide-react";

// Data types
interface PlacementStats {
    highestPackage: string;
    averagePackage: string;
    placementRate: string;
    studentsPlaced: string;
    recruitersCount: string;
}

interface YearData {
    year: string;
    stats: PlacementStats;
    recruiters: string[];
}

const placementData: Record<string, YearData> = {
    "2023-24": {
        year: "2023-24",
        stats: {
            highestPackage: "28 LPA",
            averagePackage: "4-6 LPA",
            placementRate: "95%",
            studentsPlaced: "850+",
            recruitersCount: "50+"
        },
        recruiters: ["Amazon", "TCS", "Infosys", "Wipro", "Accenture", "Capgemini", "Cognizant", "HCL", "Tech Mahindra", "IBM", "Oracle", "Cisco", "Mindtree", "Hyundai", "ADP"]
    },
    "2022-23": {
        year: "2022-23",
        stats: {
            highestPackage: "21 LPA",
            averagePackage: "4.5 LPA",
            placementRate: "92%",
            studentsPlaced: "780+",
            recruitersCount: "45+"
        },
        recruiters: ["Amazon", "TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "HCL", "Tech Mahindra", "IBM", "Hyundai"]
    },
    "2021-22": {
        year: "2021-22",
        stats: {
            highestPackage: "18 LPA",
            averagePackage: "4 LPA",
            placementRate: "88%",
            studentsPlaced: "700+",
            recruitersCount: "40+"
        },
        recruiters: ["TCS", "Infosys", "Wipro", "Accenture", "Capgemini", "Cognizant", "HCL", "IBM"]
    },
    "2020-21": {
        year: "2020-21",
        stats: {
            highestPackage: "14 LPA",
            averagePackage: "3.5 LPA",
            placementRate: "85%",
            studentsPlaced: "650+",
            recruitersCount: "35+"
        },
        recruiters: ["TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "HCL"]
    },
    "2019-20": {
        year: "2019-20",
        stats: {
            highestPackage: "12 LPA",
            averagePackage: "3.2 LPA",
            placementRate: "80%",
            studentsPlaced: "600+",
            recruitersCount: "30+"
        },
        recruiters: ["TCS", "Infosys", "Wipro", "Accenture", "Cognizant"]
    },
    "2018-19": {
        year: "2018-19",
        stats: {
            highestPackage: "10 LPA",
            averagePackage: "3 LPA",
            placementRate: "75%",
            studentsPlaced: "550+",
            recruitersCount: "25+"
        },
        recruiters: ["TCS", "Infosys", "Wipro", "Accenture"]
    }
};

export default function PlacementsPage() {
    const [selectedYear, setSelectedYear] = useState("2023-24");
    const currentData = placementData[selectedYear];

    const syllabus = [
        { sem: "SEM 1", stream: "Technical Training, Soft Skills", hours: 42 },
        { sem: "SEM 2", stream: "Technical Training, Soft Skills", hours: 42 },
        { sem: "SEM 3", stream: "Technical Training, Verbal Ability", hours: 42 },
        { sem: "SEM 4", stream: "Technical Training, Verbal Ability, and Logical Ability", hours: 42 },
        { sem: "SEM 5", stream: "Technical Training, Logical Ability and Quantitative Aptitude", hours: 42 },
        { sem: "SEM 6", stream: "Technical Training, Quantitative Aptitude", hours: 42 },
        { sem: "SEM 7 & 8", stream: "Company Specific Training", hours: "Depending on requirement" },
    ];

    const infrastructure = [
        { title: "Seminar Hall", desc: "Air-conditioned Hall with a seating capacity of 200 members", image: "/PlacementPage/SeminarHall.jpg", color: "bg-purple-100" },
        { title: "Interview Rooms", desc: "Separate air-conditioned rooms to accommodate 8 – 10 Panels for conducting interviews simultaneously", image: "/PlacementPage/InterviewRoom.jpg", color: "bg-blue-100" },
        { title: "Open Air Auditorium", desc: "Capacity 2000", image: "/PlacementPage/OpenAirAuditorium.jpg", color: "bg-green-100" },
        { title: "Computer Systems", desc: "1050 systems with internet and UPS backup facilities", image: "/PlacementPage/ComputerSystems.jpg", color: "bg-orange-100" },
        { title: "GD rooms", desc: "3 Separate air-conditioned rooms furnished with round table and chairs to conduct GDs with 20 – 25 members", image: "/PlacementPage/GDRooms.jpg", color: "bg-red-100" },
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-[120px] pb-7">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-3">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white font-medium">Placements</span>
                    </nav>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                            Placements
                        </h1>
                        <p className="text-base sm:text-lg text-white opacity-90 max-w-3xl leading-relaxed">
                            The credo of the Training and Placement department is to incorporate a wide range of relevant learning opportunities that support and develop students at different stages of their academics.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

                {/* Objectives & Approach */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Training Objectives</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        In order to execute this effectively, the placement cell collaborates with a number of Industries and Companies across various sectors. This helps in identifying the training needs and accordingly, training programs are facilitated to students. The main focus of the department is to train the students and to bestow them with the right opportunities for their careers.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-purple-50 p-6 rounded-xl">
                        <div>
                            <h3 className="font-semibold text-vignan-purple mb-2">Continuous Assessment</h3>
                            <p className="text-sm text-gray-600">The department consistently tracks the students’ performance to ensure improvement through assessment tests. These tests aid students to identify their areas of strength and areas of improvement.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-vignan-purple mb-2">Mock Interviews</h3>
                            <p className="text-sm text-gray-600">Mock Interviews equip students to face real time interviews with higher confidence using proper preparation. Group discussion and JAM sessions are also conducted regularly.</p>
                        </div>
                    </div>
                </section>

                {/* Dynamic Statistics Section */}
                <section>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                            <Briefcase className="w-6 h-6 text-vignan-purple" />
                            Placement Statistics {selectedYear}
                        </h2>

                        <div className="relative">
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-6 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-vignan-purple focus:border-transparent font-semibold cursor-pointer"
                            >
                                {Object.keys(placementData).sort().reverse().map((year) => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-vignan-purple text-center">
                            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">Highest Package</p>
                            <p className="text-3xl font-bold text-gray-900">{currentData.stats.highestPackage}</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-blue-500 text-center">
                            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">Students Placed</p>
                            <p className="text-3xl font-bold text-gray-900">{currentData.stats.studentsPlaced}</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-green-500 text-center">
                            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">Average Package</p>
                            <p className="text-3xl font-bold text-gray-900">{currentData.stats.averagePackage}</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-orange-500 text-center">
                            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">Recruiters</p>
                            <p className="text-3xl font-bold text-gray-900">{currentData.stats.recruitersCount}</p>
                        </div>
                    </div>

                    {/* Recruiters List */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-gray-600" />
                            Top Recruiters for {selectedYear}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {currentData.recruiters.map((company, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-vignan-purple/10 hover:text-vignan-purple transition-colors cursor-default"
                                >
                                    {company}
                                </span>
                            ))}
                            <span className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm font-medium text-gray-500 italic">
                                + many more
                            </span>
                        </div>
                    </div>
                </section>

                {/* Syllabus Table */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-vignan-purple" />
                        Training Syllabus
                    </h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-vignan-purple text-white text-left">
                                        <th className="px-6 py-4 font-semibold text-sm">SEMESTER</th>
                                        <th className="px-6 py-4 font-semibold text-sm">TRAINING STREAM</th>
                                        <th className="px-6 py-4 font-semibold text-sm text-right">NO OF HOURS</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                    {syllabus.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-medium">{item.sem}</td>
                                            <td className="px-6 py-4">{item.stream}</td>
                                            <td className="px-6 py-4 text-right font-medium">{item.hours}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Training Activities */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-vignan-blue" />
                        Certifications & Training Activities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex p-4 bg-blue-50 rounded-xl">
                            <div className="flex-1">
                                <h4 className="font-semibold text-vignan-blue mb-1">Technical Certifications</h4>
                                <p className="text-sm text-gray-600">Programs like SERVICE NOW, ORACLE CERTIFIED JAVA PROGRAM and CCNA etc. are conducted to enhance technical expertise.</p>
                            </div>
                        </div>
                        <div className="flex p-4 bg-green-50 rounded-xl">
                            <div className="flex-1">
                                <h4 className="font-semibold text-green-700 mb-1">Language Proficiency</h4>
                                <p className="text-sm text-gray-600">English Certification courses such as OXFORD Achiever and Business English Certification (BEC) to improve communication skills.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Infrastructure */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <Building2 className="w-6 h-6 text-vignan-purple" />
                        Placement Infrastructure
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {infrastructure.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group">
                                <div className={`h-48 ${item.color} flex items-center justify-center relative overflow-hidden`}>
                                    {/* Placeholder for Image - Using Icon as placeholder for now */}
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/50 to-transparent">
                                        <p className="text-white font-medium">{item.title}</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Coordinators */}
                <section className="bg-vignan-purple/5 rounded-3xl p-8 md:p-12 border border-vignan-purple/10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Placements Co-ordinators</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                        {/* Coordinator 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="w-25 h-25 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-vignan-purple">
                                <User className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">B. Aga Reddy</h3>
                            <p className="text-gray-500 font-medium mb-4">Dean Placements</p>

                            <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex items-center justify-center gap-2">
                                    <Phone className="w-4 h-4 text-vignan-purple" />
                                    <span>9866349337</span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Mail className="w-4 h-4 text-vignan-purple" />
                                    <a href="mailto:placement.vgnt@vignanits.ac.in" className="hover:text-vignan-purple transition-colors">placement.vgnt@vignanits.ac.in</a>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Mail className="w-4 h-4 text-vignan-purple" />
                                    <a href="mailto:ccotp.vignanhyd@gmail.com" className="hover:text-vignan-purple transition-colors">ccotp.vignanhyd@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Coordinator 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="w-25 h-25 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-vignan-purple">
                                <Image src="/PlacementPage/DeanTraining.png" alt="CH V B Aditya Kumar" width={100} height={100} className="w-25 h-25 text-gray-400/50 group-hover:scale-110 transition-transform duration-500 rounded-full" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">CH V B Aditya Kumar</h3>
                            <p className="text-gray-500 font-medium mb-4">Dean Training & Corporate Relations</p>

                            <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex items-center justify-center gap-2">
                                    <Phone className="w-4 h-4 text-vignan-purple" />
                                    <span>9849439683</span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Mail className="w-4 h-4 text-vignan-purple" />
                                    <a href="mailto:placements.vitshyd@vignanits.ac.in" className="hover:text-vignan-purple transition-colors">placements.vitshyd@vignanits.ac.in</a>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Mail className="w-4 h-4 text-vignan-purple" />
                                    <a href="mailto:placements.vitshyd@gmail.com" className="hover:text-vignan-purple transition-colors">placements.vitshyd@gmail.com</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
            <Footer />
        </main>
    );
}
