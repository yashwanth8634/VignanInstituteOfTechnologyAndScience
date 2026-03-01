import Navbar from "../../../components/HomePage/Navbar";
import Footer from "../../../components/HomePage/Footer";
import Link from "next/link";
import React from 'react';
import { Target, Flag, Lightbulb, Users, Calendar, Award, Rocket, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "EDC Centre | VITS",
    description: "Information about EDC Centre at VITS.",
};

const thrustAreas = [
    "Indian School of Business – Technology Entrepreneurship Program",
    "Student Extension Activities",
    "Intellectual Property",
    "Industry Interaction"
];

const longTermGoals = [
    "To develop two student entrepreneurs from B-Tech 2021-2022.",
    "To develop five student entrepreneurs by December 2023.",
    "To conduct 6 to 7 Entrepreneurship Development Activities like Workshops, Conferences or Guest Lectures by December 2023.",
    "To establish an Incubation centre by December 2023.",
    "To develop a network with most active institutions in India like IITs and IIMs ED cells.",
    "To create an infrastructural setup for students to develop their entrepreneurial models.",
    "The activities like Innovative ideas into bankable projects, facilitating government support to entrepreneurship, facilitating banks support to student model projects etc."
];

const shortTermGoals = [
    "To organize two entrepreneurship development programs by December 2022.",
    "To build the team of entrepreneurship from II Year students.",
    "To develop two student entrepreneurs by 2022 December."
];

const committeeMembers = [
    { id: 1, name: "Dr. G. Durga Sukumar", designation: "Principal", role: "Chair Person" },
    { id: 2, name: "Dr. Narayan Sangam", designation: "Professor", role: "Head. ED-Cell" },
    { id: 3, name: "Dr. T. Rama Subba Reddy", designation: "Professor & DEAN SA", role: "Chief Advisor" },
    { id: 4, name: "Dr. N. Dinesh Kumar", designation: "Professor & DEAN R&D", role: "Secretary" },
    { id: 5, name: "Mr. N. Leela Prasad", designation: "Professor & DEAN FA", role: "Member" },
    { id: 6, name: "Dr. K. Chandra Shekar", designation: "Professor & DEAN Academics", role: "Member" }
];

const programs = [
    { id: 1, event: "Inauguration of EDC Cell", organizer: "EDC", date: "20-09-2013" },
    { id: 2, event: "Webinar on Role of Entrepreneurship in Post COVID-19 Resurgence", organizer: "EDC & MECH", date: "17-06-2021" },
    { id: 3, event: "Two Days Internal Hackathon Competition", organizer: "EDC & CSE", date: "19th & 20th FEB 2021" },
    { id: 4, event: "Smart India Hackthon (SIH 2020)", organizer: "EDC & CSE", date: "5th & 6th FEB 2020" },
    { id: 5, event: "Inspiration towards Entrepreunership. Kick off Session (TIE GRAD)", organizer: "EDC & CSE", date: "22nd OCT 2019" },
    { id: 6, event: "Entrepreunership Awareness Camp", organizer: "EDC & OU", date: "23rd - 25th JULY 2019" },
    { id: 7, event: "E-TALKS", organizer: "EDC", date: "15th APR 2019" },
    { id: 8, event: "Guest Lecture on Self Analysis and Career Enhancement", organizer: "EDC & ECE", date: "23rd MAR 2019" },
    { id: 9, event: "Guest Lecture on Life Skills and Money Management", organizer: "EDC & CSE", date: "23rd FEB 2019" },
    { id: 10, event: "Guest Lecture on Career Growth", organizer: "EDC & ECE", date: "07th JAN 2019" },
    { id: 11, event: "Guest Lecture on Career Opportunities", organizer: "EDC & ECE", date: "5th OCT 2018" },
    { id: 12, event: "Workshop on IOT and Embedded Systems", organizer: "EDC & CSE", date: "24th Aug 2018" },
    { id: 13, event: "Guest Lecture on How to be the best among the rest", organizer: "EDC & CSE", date: "28th JULY 2018" },
    { id: 14, event: "Talk on Personality Development Traits", organizer: "EDC & CSE", date: "24th MAR 2018" },
    { id: 15, event: "Guest Lecture on Usage and Development of Sales Force", organizer: "EDC & CSE", date: "17th FEB 2018" },
    { id: 16, event: "Guest Lecture on IOT and Embedded Systems", organizer: "EDC & ECE", date: "27th JAN 2018" },
    { id: 17, event: "Talk on Career Guidance and Motivation towards Competitive World", organizer: "EDC & EEE", date: "25th JAN 2018" },
    { id: 18, event: "Talk on Business Opportunities", organizer: "EDC", date: "28th DEC 2017" },
    { id: 19, event: "One day workshop on Motivation Towards Entrepreneurship", organizer: "EDC", date: "21st OCT 2017" },
    { id: 20, event: "Guest Lecture on Financial Awareness Program", organizer: "EDC", date: "20th Sep 2017" },
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
                        <span className="text-white font-medium">EDC</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Entrepreneurship Development Cell</h1>
                    <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                        Fostering innovation and nurturing the entrepreneurial spirit among students.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-16">

                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <Target className="w-6 h-6 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Vision</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            To make entrepreneurship a viable, affordable, and noble career option for the students of VITS and to be recognized as a non-profit service entity for stakeholders and society at large.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-purple-50 p-3 rounded-lg">
                                <Flag className="w-6 h-6 text-vignan-purple" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Mission</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            To nurture the most thrust areas of entrepreneurship by categorizing them into various clusters of entrepreneurship activities with an element of continuous improvement.
                        </p>
                    </div>
                </div>

                {/* Thrust Areas */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <Rocket className="w-8 h-8 text-vignan-purple" />
                        <h2 className="text-3xl font-bold text-gray-900">ED Cell Thrust Areas</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {thrustAreas.map((area, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center text-center hover:border-purple-200 transition-colors">
                                <p className="font-semibold text-gray-800">{area}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Goals Section */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Long Term Goals */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                            <Award className="w-6 h-6 text-orange-500" />
                            <h3 className="text-xl font-bold text-gray-900">Long-term Goals</h3>
                        </div>
                        <ul className="space-y-4">
                            {longTermGoals.map((goal, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span className="text-sm leading-relaxed">{goal}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Short Term Goals */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm h-fit">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                            <Lightbulb className="w-6 h-6 text-yellow-500" />
                            <h3 className="text-xl font-bold text-gray-900">Short-term Goals</h3>
                        </div>
                        <ul className="space-y-4">
                            {shortTermGoals.map((goal, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span className="text-sm leading-relaxed">{goal}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Committee Table */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <Users className="w-8 h-8 text-vignan-purple" />
                        <h2 className="text-3xl font-bold text-gray-900">Entrepreneurship Development Committee</h2>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-vignan-purple">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">S.No.</th>
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Name of the Faculty</th>
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Designation</th>
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Role</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {committeeMembers.map((member) => (
                                        <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-sm text-gray-500">{member.id}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{member.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{member.designation}</td>
                                            <td className="px-6 py-4 text-sm text-vignan-purple font-medium">{member.role}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Programs Table */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <Calendar className="w-8 h-8 text-vignan-purple" />
                        <h2 className="text-3xl font-bold text-gray-900">Programs Organized by EDC Cell</h2>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-vignan-purple sticky top-0 z-10">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">S.No.</th>
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Event Name</th>
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Organized By</th>
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {programs.map((prog) => (
                                        <tr key={prog.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-sm text-gray-500">{prog.id}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{prog.event}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{prog.organizer}</td>
                                            <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">{prog.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </div>
    );
}