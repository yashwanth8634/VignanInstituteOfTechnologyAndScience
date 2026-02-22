"use client";

import Link from "next/link";
import React from 'react';
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import { Trophy, Activity, Dumbbell, Map, Medal, Users, HeartPulse, ShieldCheck, Smile } from "lucide-react";

export default function SportsPage() {
    const yogaPrograms = [
        { sno: 1, programme: "Yoga and Meditation", year: "2017-18", conducted: 1 },
        { sno: 2, programme: "Yoga and Meditation", year: "2016-17", conducted: 1 },
        { sno: 3, programme: "Yoga and Meditation", year: "2015-16", conducted: 1 },
        { sno: 4, programme: "Yoga and Meditation", year: "2014-15", conducted: 1 },
        { sno: 5, programme: "Yoga and Meditation", year: "2013-14", conducted: 1 },
    ];

    const outdoorFacilities = [
        { sno: 1, name: "Volley ball courts", courts: 5, area: "810" },
        { sno: 2, name: "Basket ball courts", courts: 2, area: "840" },
        { sno: 3, name: "Shuttle badminton court(U.C)", courts: 1, area: "81.74" },
        { sno: 4, name: "Kho – Kho court", courts: 1, area: "464" },
        { sno: 5, name: "Kabaddi courts", courts: 2, area: "260" },
        { sno: 6, name: "Throw ball courts", courts: 2, area: "446.52" },
        { sno: 7, name: "Lawn tennis courts", courts: 2, area: "521.51" },
        { sno: 8, name: "Tennis coit courts", courts: 2, area: "134.2" },
        { sno: 9, name: "Ball badminton court", courts: 1, area: "297.19" },
        { sno: 10, name: "Foot ball field", courts: 1, area: "5000" },
        { sno: 11, name: "Cricket play ground", courts: 1, area: "16,900" },
        { sno: 12, name: "Hockey field", courts: 1, area: "5000" },
        { sno: 13, name: "Athletic track – 400 mts,8lines", courts: 1, area: "3,920" },
    ];

    const indoorFacilities = [
        { sno: 1, name: "Table Tennis", instruments: "2(9/5, Sq. Feet)" },
        { sno: 2, name: "Table Tennis", instruments: "2(9/5, Sq. Feets)" },
        { sno: 3, name: "Carroms", instruments: "08" },
        { sno: 4, name: "Chess", instruments: "15" },
        { sno: 5, name: "Shuttle badminton", instruments: "UC(13.4/6.10,Mts)" },
    ];

    const staffData = [
        { sno: 1, name: "P V Suresh Babu", designation: "Physical Director" },
        { sno: 2, name: "T Yadaiah", designation: "Physical Director" },
    ];

    const achievements = [
        "Mr.K.V.S.Yugandhar reddy from B.Tech (CSE) 4th Year got selected for kabaddhi Team to represent JNTU Hyderabad in 2017-18.",
        "Mr.K.V.S.Yugandhar reddy from B.Tech (CSE) 4th Year got selected for kabaddhi Team to represent Telangana state in 2018-19.",
        "Mr.K.Harshavardhan reddy from B.Tech (MECH) 2nd Year got selected for Boxing Team to represent JNTU Hyderabad in 2018-19.",
        "Mr.K.Deepika from B.Tech (ECE) 2nd Year got selected for Taekwondo Team to represent JNTU Hyderabad in 2018-19.",
        "Ms.G.Tanvi from B.Tech (CSE) 1st Year got selected for Yoga Team to represent JNTU Hyderabad in 2018-19."
    ];

    const benefits = [
        { text: "Healthy growth and development", icon: <Activity className="w-5 h-5 text-green-500" /> },
        { text: "Better self-esteem", icon: <Smile className="w-5 h-5 text-blue-500" /> },
        { text: "Stronger bones, muscles and joints", icon: <Dumbbell className="w-5 h-5 text-purple-500" /> },
        { text: "Better posture and balance", icon: <ShieldCheck className="w-5 h-5 text-orange-500" /> },
        { text: "A stronger heart", icon: <HeartPulse className="w-5 h-5 text-red-500" /> },
        { text: "A healthier weight range", icon: <Activity className="w-5 h-5 text-vignan-blue" /> },
        { text: "Social interaction with friends", icon: <Users className="w-5 h-5 text-vignan-purple" /> },
        { text: "Learning new skills while having fun", icon: <Trophy className="w-5 h-5 text-yellow-500" /> },
        { text: "Better focus and concentration during school", icon: <Activity className="w-5 h-5 text-indigo-500" /> },
    ];

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar variant="solid" />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-[120px] pb-7">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-3">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/facilities" className="hover:text-white transition-colors">Facilities</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white font-medium">Physical Education</span>
                    </nav>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                            Physical Education & Sports
                        </h1>
                        <p className="text-base sm:text-lg text-white opacity-90 max-w-3xl leading-relaxed">
                            Nurturing athletic excellence and physical well-being.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-8 md:space-y-12">

                {/* Introduction Section */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Trophy className="w-6 h-6 text-yellow-500" />
                        Overview
                    </h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed font-medium">
                        <p>
                            Vignan Institute of Technology and Science encourage its students to take part in the sports activities. Students are trained under the guidance of qualified Physical Education Trainer & have achieved excellence in University and National level in sports activities. Besides emphasizing on technical and academic excellence, the institute organizes various sports meets to give the students an opportunity to exhibit their athletic abilities on ground. It has created number of facilities for sports activity both in indoor & outdoor games.
                        </p>
                        <p>
                            Various physical activities were held under the able guidance of experts from Ramakrishna math, Hyderabad like Yoga for girls was exclusively conducted at the hostel premises and the students learnt different postures of body to maintain physical as well as mental fitness. The exercises filled the students with excitement.
                        </p>
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 mt-6">
                            <p className="italic text-gray-800">
                                "Yoga became an integral part of human beings these days and is acquired in every walk of life. To shine in personal and professional life one needs concentration and peace of mind. This can be attained through the practice of yoga. It eases off pressure and keeps afloat the human body and mind."
                            </p>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Benefits Section */}
                    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8 h-full">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <HeartPulse className="w-6 h-6 text-red-500" />
                            Benefits of Physical Activity
                        </h2>
                        <p className="text-sm text-gray-600 mb-4 font-medium">Physical activity can help kids cope with stress. It also promotes:</p>
                        <ul className="space-y-3">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                                    {benefit.icon}
                                    <span className="font-medium text-sm">{benefit.text}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Achievements Section */}
                    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8 h-full">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Medal className="w-6 h-6 text-vignan-blue" />
                            Recent Achievements
                        </h2>
                        <p className="text-sm font-bold text-vignan-blue mb-4 bg-blue-50 px-3 py-1 rounded-md inline-block">CULTURAL, SPORTS & GAMES ACHIEVEMENTS</p>
                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="flex gap-3 items-start border-l-4 border-vignan-purple pl-4 py-2 bg-gray-50 rounded-r-lg hover:bg-purple-50 transition-colors">
                                    <Trophy className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                    <p className="text-sm text-gray-700 leading-relaxed font-medium">{achievement}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Facilities Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Outdoor Facilities */}
                    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Map className="w-6 h-6 text-green-600" />
                            Outdoor Game Facilities
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-green-600 text-white text-left whitespace-nowrap">
                                        <th className="px-4 py-3 rounded-tl-lg text-sm font-semibold">S.No</th>
                                        <th className="px-4 py-3 text-sm font-semibold">Play Ground</th>
                                        <th className="px-4 py-3 text-sm font-semibold text-center">Courts</th>
                                        <th className="px-4 py-3 rounded-tr-lg text-sm font-semibold text-right">Sq. Meters</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 border border-gray-100 rounded-b-lg">
                                    {outdoorFacilities.map((item) => (
                                        <tr key={item.sno} className="hover:bg-gray-50">
                                            <td className="px-4 py-3 text-sm text-gray-600">{item.sno}</td>
                                            <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.name}</td>
                                            <td className="px-4 py-3 text-sm font-bold text-green-700 text-center">{item.courts}</td>
                                            <td className="px-4 py-3 text-sm text-gray-700 text-right">{item.area}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <div className="space-y-8">
                        {/* Indoor Facilities */}
                        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Activity className="w-6 h-6 text-vignan-blue" />
                                Indoor Game Facilities
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-vignan-blue text-white text-left whitespace-nowrap">
                                            <th className="px-4 py-3 rounded-tl-lg text-sm font-semibold">S.No</th>
                                            <th className="px-4 py-3 text-sm font-semibold">Name</th>
                                            <th className="px-4 py-3 rounded-tr-lg text-sm font-semibold text-right">No. of Instruments</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 border border-gray-100 rounded-b-lg">
                                        {indoorFacilities.map((item, index) => (
                                            <tr key={index} className="hover:bg-gray-50">
                                                <td className="px-4 py-3 text-sm text-gray-600">{item.sno}</td>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.name}</td>
                                                <td className="px-4 py-3 text-sm font-medium text-vignan-blue text-right">{item.instruments}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Staff Section */}
                        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Users className="w-6 h-6 text-vignan-purple" />
                                Physical Education Staff
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-vignan-purple text-white text-left whitespace-nowrap">
                                            <th className="px-4 py-3 rounded-tl-lg text-sm font-semibold">S.No</th>
                                            <th className="px-4 py-3 text-sm font-semibold">Name</th>
                                            <th className="px-4 py-3 rounded-tr-lg text-sm font-semibold">Designation</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 border border-gray-100 rounded-b-lg">
                                        {staffData.map((item) => (
                                            <tr key={item.sno} className="hover:bg-gray-50">
                                                <td className="px-4 py-3 text-sm text-gray-600">{item.sno}</td>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.name}</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">{item.designation}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Programs Table */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Activity className="w-6 h-6 text-vignan-purple" />
                        Health & Wellness Programs
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-vignan-purple text-white text-left">
                                    <th className="px-4 py-3 rounded-tl-lg text-sm font-semibold">S.No</th>
                                    <th className="px-4 py-3 text-sm font-semibold">Programme</th>
                                    <th className="px-4 py-3 text-sm font-semibold text-center">Academic Year</th>
                                    <th className="px-4 py-3 rounded-tr-lg text-sm font-semibold text-center">No. of Programmes Conducted</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 border border-gray-100 rounded-b-lg">
                                {yogaPrograms.map((item) => (
                                    <tr key={item.sno} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 text-sm text-gray-600">{item.sno}</td>
                                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.programme}</td>
                                        <td className="px-4 py-3 text-sm text-gray-700 text-center">{item.year}</td>
                                        <td className="px-4 py-3 text-sm font-bold text-vignan-purple text-center">{item.conducted}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>

            <Footer />
        </main>
    );
}
