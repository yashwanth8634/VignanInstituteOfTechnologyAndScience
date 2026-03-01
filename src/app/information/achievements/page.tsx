"use client";

import Navbar from "../../../components/HomePage/Navbar";
import Footer from "../../../components/HomePage/Footer";
import Link from "next/link";
import React, { useState } from 'react';
import { Trophy, Star, Award, GraduationCap, Medal, FileText, ChevronDown, ChevronUp } from "lucide-react";




const instituteAchievements = [
    "Four programs (EEE, ME, ECE and CSE) accredited by NBA.",
    "Institute stood in the Rank band: 201- 250 – for two consent year 2020 & 2021 : Engineering by National Institutional Ranking Framework and Institute is certified by ISO 9001: 2005.",
    "Consistently ranked among the top 100 engineering colleges by the leading survey agencies like India Today, The Week, Outlook, etc.",
    "Research projects worth Rs. 4.05 crores contributed by both faculty and the students.",
    "A unique practice of 'Innovative Project Expo' conducted in every semester with a display of student involved projects- a flagship of the best practices of the institution.",
    "85% average placement record in software and reputed core companies through dedicated training & placement team.",
    "Eco-friendly green campus in a calm and quite peaceful environment.",
    "Remote-centre for IIT Bombay enabled with A-view software.",
];

const highlightedRankings = [
    { text: "IEEE VITS Student Branch received the Vibrant Student Branch Award from IEEE Hyderabad Section.", icon: Star, color: "text-blue-500", bg: "bg-blue-50" },
    { text: "The institute has received the Best Academic Education Institute Award from Trinity college Durbin and Education matters.", icon: Trophy, color: "text-yellow-500", bg: "bg-yellow-50" },
    { text: "The institute received Best Performing Academy Award for training the highest number of students in IT Essentials from TASK, Government of Telangana.", icon: Award, color: "text-purple-500", bg: "bg-purple-50" },
    { text: "The institute received Academy years of Service Award from CISCO Networking Academy.", icon: Medal, color: "text-indigo-500", bg: "bg-indigo-50" },
    { text: "44th Position in South India, 68th position nation wide and 10th position in Private Engineering colleges in Hyderabad by The WEEK Survey in 2019.", icon: Trophy, color: "text-yellow-500", bg: "bg-yellow-50" },
    { text: "5th Position in Placements by Times of India Ranking in 2019.", icon: Star, color: "text-blue-500", bg: "bg-blue-50" },
    { text: "100th Position Nation wide by India Today MDRA Ranking in 2019.", icon: Award, color: "text-purple-500", bg: "bg-purple-50" },
    { text: "11th Position in Top Engineering Colleges of Excellence by CSR-GHRDC in 2019.", icon: Medal, color: "text-indigo-500", bg: "bg-indigo-50" },
    { text: "7th in Telangana Region, 90th Rank in India by Data Quest in 2019.", icon: Star, color: "text-blue-500", bg: "bg-blue-50" },
];

const facultyData = [
    {
        year: "2016-2017",
        achievements: [
            { name: "Dr.K.Chandra Shekar", designation: "Professor", award: "Bharath Jyothi Award, Best Paper Award, Best Paper Certificate" },
            { name: "B.Singaravel", designation: "Assistant Professor", award: "Best Paper Award, Appreciation Certificate" },
            { name: "N.Venkateshwarlu", designation: "Associate Professor", award: "Best Paper Award" },
            { name: "N.Leela Prasad", designation: "Associate Professor", award: "Appreciation Certificate" },
            { name: "B Lavanya", designation: "Assistant Professor", award: "Best Faculty Award from Lavu Educational Society" },
            { name: "T Karthik Chary", designation: "Assistant Professor", award: "Best Faculty Award from Lavu Educational Society" },
            { name: "Lakshmi Narayana K", designation: "Professor", award: "Certificate of excellence by 83rd Annual conference" },
            { name: "R.Sridhar", designation: "Associate Professor", award: "Best paper award by Ist international trends in science" },
            { name: "V.Vasantha kumar", designation: "Assoc professor", award: "Certificate of excellence by concept based teaching" },
            { name: "Mr. J. Rajaram", designation: "Associate Professor", award: "Best Paper in ICPCSI" },
            { name: "Dr B Prakash", designation: "Professor", award: "Acted As a Editor/Reviewer for GRD" },
            { name: "Mr. M. Narender", designation: "Associate Professor", award: "Best Paper in ICCIT" },
            { name: "Mr G.Yendukondalu", designation: "Associate Professor", award: "Best Paper Award in ICICSE" },
            { name: "Mr. N.Sreekanth", designation: "Associate Professor", award: "Best Paper in ICASCCT" },
            { name: "Dr.N. Dinesh Kumar", designation: "Professor", award: "Institute for exploring Advances In engineering Best Teacher Award" },
            { name: "Dr.P.A.Harshavardhini", designation: "Professor", award: "Conference fellowship, VLSID 2017" },
            { name: "Dr.B.Vijaya Laxmi", designation: "Professor", award: "Early career research award DST-SERB" },
            { name: "Dr.Vijayalaxmi", designation: "Professor", award: "Senior Member , IEEE CHAIR" },
            { name: "B. Madhusudhan Reddy", designation: "Asst.Prof", award: "Instructor years of service, Cisco Networking Academy" },
            { name: "A.Jhansi Rani", designation: "Asst. Professor", award: "Best Paper in International Conference" },
            { name: "P.Prashanthi Reddy", designation: "Asst. Professor", award: "Best Paper in International Conference" },
            { name: "G. Srinivas", designation: "Assistant professor", award: "International conference" },
            { name: "Dr. G. Durga Sukumar", designation: "Professor and Principal", award: "Dr. APJ Abdul Kalam life time achievement National Award" },
            { name: "Dr.Narayan Sangam", designation: "Associate Professor", award: "Best Ph.D Thesis Award, National Award for Best Teacher" },
            { name: "B Mahesh", designation: "Assistant Professor", award: "Best Faculty Award from Lavu Educational Society" },
            { name: "V.GuruShanker", designation: "Assistant Professor", award: "Best Faculty Award" },
            { name: "M.Ashok", designation: "Assistant Professor", award: "Best Faculty Award" },
            { name: "Dr.T. Maruti Padmaja", designation: "Professor", award: "Best Paper in IEEE ICIIECS" },
            { name: "Mr. G. Raja Vikram", designation: "Asst.Professor", award: "Best Paper in ICWCSPN" },
            { name: "Mrs K.Shailaja", designation: "Asst.Professor", award: "Best Paper in IC3T" },
            { name: "Mr B.V.Chowdary", designation: "Asst.Professor", award: "Best Paper in ICSCC" },
            { name: "Vikas kumar Tiwari", designation: "Asst.Prof", award: "Certificate of MERIT, ERTS lab IITBOMBAY" },
            { name: "Ch V B Aditya Kumar", designation: "Asst. Professor", award: "Best Faculty in the Department of EIE" },
            { name: "R. Ramanjan Prasad", designation: "Assistant professor", award: "International conference" },
            { name: "G. Sravanthi", designation: "Assistant professor", award: "Best faculty" }
        ]
    },
    {
        year: "2014-2015",
        achievements: [
            { name: "Dr.Narayan Sangam", designation: "Associate Professor", award: "Outstanding Researcher Award in Geology" },
            { name: "Dr. Laxmi narayana K", designation: "Professor", award: "Paper presentation in IMBITCS" },
            { name: "T Karthik Chary", designation: "Assistant Professor", award: "Best Faculty Award from Lavu Educational Society" },
            { name: "B Lavanya", designation: "Assistant Professor", award: "Fellow Member in Association of Consulting Civil Engineer" },
            { name: "B Ramamohana Reddy", designation: "Assistant Professor", award: "Certificate of Appreciation from CSIR-NIO, Goa" },
            { name: "P.Ashok Reddy", designation: "Assistant Professor", award: "Best Faculty Award" },
            { name: "G.Laxmi Srinivas", designation: "Assistant Professor", award: "Best Faculty Award" },
            { name: "Dr. T.Maruti Padmaja", designation: "Professor", award: "Best Paper in IEEE ISCO" },
            { name: "Dr C. Srininvas Kumar", designation: "Professor", award: "Acted as a Editor/Reviewer for Theoritical Computer Science Journal" },
            { name: "Mrs Shubhangi Urkude", designation: "Assistant Professor", award: "Best Paper in ICICSE" },
            { name: "Mr.N. Dinesh Kumar", designation: "Associate Professor", award: "Certificate of excellence in ICCIDM 2015" },
            { name: "Dr.P.A.Harshavardhini", designation: "Professor", award: "Best paper award in SERB-DST sponsored National Confernce" },
            { name: "Mrs.N.Koteswaramma", designation: "Assistant Professor", award: "Best paper award in SERB-DST sponsored National Confernce" },
            { name: "Mrs.D.Bindu Tushara", designation: "Assistant Professor", award: "Best paper award in SERB-DST sponsored National Confernce" },
            { name: "S.Prasanna", designation: "Assistant Professor", award: "Best Faculty in the Department of EIE" },
            { name: "S.Vamshi Krishna", designation: "Assistant Professor", award: "Best Faculty in the Department of EIE" },
            { name: "R. Ramanjan Prasad", designation: "Assistant Professor", award: "International conference" },
            { name: "G. Srinivas", designation: "Assistant Professor", award: "Best faculty" },
            { name: "Dr.Narayan Sangam", designation: "Associate Professor", award: "Best Paper Award from National Conference" },
            { name: "K.Laxmi narayan", designation: "Professor", award: "Best paper award from 8th Intrnational conference on MSAT" },
            { name: "P.Govind chowdary", designation: "Assistant Professor", award: "certficate of exellence from New vistats of chemitry" },
            { name: "N Leela Prasad", designation: "Associate Professor", award: "Appreciation Certificate" },
            { name: "Dr.A.Venkateshwarlu", designation: "Professor", award: "Best Faculty Award" },
            { name: "Dr B.Prakash", designation: "Professor", award: "Acted a Judge in ICACSE" },
            { name: "Mrs. K. Shailaja", designation: "Assistant Professor", award: "Best Paper in ICACCI" },
            { name: "Ch V B Aditya Kumar", designation: "Assistant Professor", award: "Best Faculty in the Department of EIE" },
            { name: "B Rajesh", designation: "Assistant Professor", award: "Best Faculty in the Department of EIE" }
        ]
    },
    {
        year: "2013-2014",
        achievements: [
            { name: "Dr.Narayan Sangam", designation: "Associate Professor", award: "Best Paper Award from IconSWM 2013, 3rd ISC, 6th APSC" },
            { name: "Koppuju Manasa", designation: "Assistant Professor", award: "Best Faculty Award from Lavu Educational Society" },
            { name: "K. Chandra Shekar", designation: "Associate Professor", award: "Best Paper Award, Appreciation Certificate" },
            { name: "N. Leela Prasad", designation: "Associate Professor", award: "Best Paper Award" },
            { name: "Dr.R.Uday Krishna", designation: "Professor", award: "Best Faculty Award" },
            { name: "Dr.C. Srinivasa Kumar", designation: "Professor", award: "Acted as Chair Person in ICCIT" },
            { name: "Mr.J.Raja Ram", designation: "Assistant Professor", award: "Best Paper in ICCC" },
            { name: "Mr.R. Praveen Kumar", designation: "Assistant Professor", award: "Best Paper in ICICSE" },
            { name: "Dr T. Maruthi Padmaja", designation: "Professor", award: "Acted as Chair person in MIKE Conference" },
            { name: "Dr.N. Dinesh Kumar", designation: "Associate Professor", award: "Yuva Engineer award" },
            { name: "B.Vijayalaxmi", designation: "Associate Professor", award: "Project SELECTED for GRANT LIST-ELECRAMA 13, Best paper presentation" },
            { name: "Ch V B Aditya Kumar", designation: "Assistant Professor", award: "Life Time Membership in ISOI" },
            { name: "K.Premsagar", designation: "Assistant Professor", award: "Life Time Membership in ISOI" },
            { name: "D. Mohan rao", designation: "Assistant professor", award: "Best Faculty" },
            { name: "R. Ramanjan Prasad", designation: "Assistant professor", award: "International conference" }
        ]
    }
];

export default function Page() {
    // Set default open year to the first one
    const [openYear, setOpenYear] = useState<string | null>("2016-2017");

    const toggleAccordion = (year: string) => {
        setOpenYear(openYear === year ? null : year);
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
                        <span className="text-white font-medium">Achievements</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Achievements</h1>
                    <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                        Celebrating milestones, academic excellence, and continuous recognition at both the institute and faculty levels.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-16">

                {/* Institute Achievements Section */}
                <section>
                    <div className="flex items-center gap-3 mb-8 border-b pb-4 border-gray-200">
                        <Trophy className="w-8 h-8 text-vignan-purple" />
                        <h2 className="text-3xl font-bold text-gray-900">Institute Achievements</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        {/* Key Highlights Column */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <GraduationCap className="w-6 h-6 text-indigo-600" />
                                Key Highlights
                            </h3>
                            <ul className="space-y-4">
                                {instituteAchievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-vignan-purple mt-2 shrink-0" />
                                        <span className="text-gray-700 leading-relaxed text-sm md:text-base">{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Rankings Column */}
                        <div className="space-y-4">
                            {highlightedRankings.map((ranking, i) => {
                                const Icon = ranking.icon;
                                return (
                                    <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${ranking.bg} ${ranking.color}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <p className="text-gray-700 leading-snug font-medium text-sm md:text-base pt-1">
                                            {ranking.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Faculty Achievements Section with Accordions */}
                <section>
                    <div className="flex items-center gap-3 mb-8 border-b pb-4 border-gray-200">
                        <Award className="w-8 h-8 text-vignan-purple" />
                        <h2 className="text-3xl font-bold text-gray-900">Faculty Achievements</h2>
                    </div>

                    <div className="space-y-6">
                        {facultyData.map((yearData, idx) => (
                            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <button
                                    onClick={() => toggleAccordion(yearData.year)}
                                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg ${openYear === yearData.year ? 'bg-vignan-purple text-white' : 'bg-gray-100 text-gray-500'}`}>
                                            <Award className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className={`text-lg font-bold ${openYear === yearData.year ? 'text-vignan-purple' : 'text-gray-800'}`}>
                                                Academic Year {yearData.year}
                                            </h3>
                                            <span className="text-sm text-gray-500">{yearData.achievements.length} Awards</span>
                                        </div>
                                    </div>
                                    {openYear === yearData.year ? (
                                        <ChevronUp className="w-5 h-5 text-gray-400" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    )}
                                </button>

                                <div className={`transition-all duration-300 ease-in-out ${openYear === yearData.year ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                                    <div className="overflow-x-auto border-t border-gray-100 max-h-[600px] overflow-y-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-vignan-purple sticky top-0 z-10">
                                                <tr className="bg-vignan-purple">
                                                    <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider bg-vignan-purple">Faculty Name</th>
                                                    <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider bg-vignan-purple">Designation</th>
                                                    <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider bg-vignan-purple">Award / Recognition</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-100">
                                                {yearData.achievements.map((faculty, index) => (
                                                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{faculty.name}</td>
                                                        <td className="px-6 py-4 text-sm text-gray-500">{faculty.designation}</td>
                                                        <td className="px-6 py-4 text-sm text-gray-700 max-w-md">{faculty.award}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Additional Links */}
                <section className="mt-8 text-center pt-8 border-t border-gray-200">
                    <a
                        href="/Pdfs/Achievements/stdA.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-vignan-blue text-white rounded-xl font-bold shadow-md hover:bg-[#002850] transition-colors group"
                    >
                        <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        View Detailed Student Achievements PDF
                    </a>
                </section>

            </div>
            <Footer />
        </div>
    );
}