import Navbar from "../../../components/HomePage/Navbar";
import Footer from "../../../components/HomePage/Footer";
import Link from "next/link";
import Image from "next/image";
import React from 'react';
import { Users, Calendar, Download, ExternalLink, User, Building, Award } from "lucide-react";

export const metadata = {
    title: "Alumni | VITS",
    description: "Information about Alumni at VITS.",
};

// Data: Alumni Webinars
const webinars = [
    {
        speaker: "Mr. Sai Kumar Thirumala",
        role: "Master of Construction Management, Deakin University",
        topic: "Modern Methods of Construction",
        image: "https://vignanits.ac.in/wp-content/uploads/2020/10/CE_Alumni-Guest-Lecture-1-900x500.jpg",
        link: "https://vignanits.ac.in/wp-content/uploads/2020/10/CE_Alumni-Guest-Lecture-1.jpg"
    },
    {
        speaker: "Mr. Satya Thangellapalli",
        role: "Founder of eventglad, Prunixlic, Sneakandshop",
        topic: "Gear Up Your Start-up",
        image: "https://vignanits.ac.in/wp-content/uploads/2020/10/alumni-webinar-2020-900x500.jpg",
        link: "https://vignanits.ac.in/wp-content/uploads/2020/10/alumni-webinar-2020.jpg"
    },
    {
        speaker: "Mr. K. Sachin Siddhartha",
        role: "Regional Manager Technical Services, JEF Techno Solutions Pvt. Ltd",
        topic: "Technical Services & Industry Insights",
        image: "https://vignanits.ac.in/wp-content/uploads/2020/10/sachin-siddaratha-900x500.jpg",
        link: "https://vignanits.ac.in/wp-content/uploads/2020/10/sachin-siddaratha.jpg"
    },
    {
        speaker: "Mr. Mahesh Aitha",
        role: "Audit & Assurance Product Manager, Deloitte, US",
        topic: "Global Corporate Standards",
        image: "https://vignanits.ac.in/wp-content/uploads/2020/10/International-Alumni-Webinar_5x3-copy-900x500.jpg",
        link: "https://vignanits.ac.in/wp-content/uploads/2020/10/International-Alumni-Webinar_5x3-copy.jpg"
    }
];

// Data: Prominent Alumni (Department Wise)
const prominentAlumni = [
    { dept: "Civil Engineering", image: "https://vignanits.ac.in/wp-content/uploads/2020/07/Alumini-CIVIL-900x500.jpg" },
    { dept: "Electrical & Electronics Engineering", image: "https://vignanits.ac.in/wp-content/uploads/2020/07/Alumini-EEE-900x500.jpg" },
    { dept: "Electronics & Communication Engineering", image: "https://vignanits.ac.in/wp-content/uploads/2020/07/Alumini-ECE-900x500.jpg" },
    { dept: "Electronics & Instrumentation Engineering", image: "https://vignanits.ac.in/wp-content/uploads/2020/07/Alumini-EIE-900x500.jpg" },
    { dept: "Computer Science & Engineering", image: "https://vignanits.ac.in/wp-content/uploads/2020/07/Alumini-CSE-900x500.jpg" },
];

// Data: Guest Lectures
const guestLectures = [
    { year: "2020-2021", title: "International & National Webinars", link: "http://vignanits.ac.in/old_website/almdata/International%20&%20National%20Webinars%20%20-%20Academic%20Year%20%202020-21.pdf" },
    { year: "2019-2020", title: "Guest Lectures & Workshops", link: "http://vignanits.ac.in/old_website/almdata/Alumni%20Guest%20Lectures%20&%20Workshops%20-%20Academic%20Year%20%202019-20.pdf" },
    { year: "2018-2019", title: "Guest Lectures & Workshops", link: "http://vignanits.ac.in/old_website/almdata/Alumni%20Guest%20Lectures%20&%20Workshops%20-%20Academic%20Year%20%202018-19.pdf" },
    { year: "2017-2018", title: "Guest Lectures & Workshops", link: "http://vignanits.ac.in/old_website/almdata/Alumni%20Guest%20Lectures%20&%20Workshops%20-%20Academic%20Year%20%202017-18.pdf" },
];

// Data: Alumni Meet Reports
const meetReports = [
    { year: "2017-2018", reports: [{ name: "Meet 1 (Dec 2017)", link: "/wp-content/uploads/2020/07/Meet 1- Dec 2017.pdf" }, { name: "Meet 2 (Jan 2018)", link: "/wp-content/uploads/2020/07/Meet 2- Jan 2018.pdf" }] },
    { year: "2016-2017", reports: [{ name: "Meet 1 (Dec 2016)", link: "/wp-content/uploads/2020/07/Meet 1- Dec 2016.pdf" }, { name: "Meet 2 (Jan 2017)", link: "/wp-content/uploads/2020/07/Meet 2- Jan 2017.pdf" }] },
    { year: "2015-2016", reports: [{ name: "Meet 1 (Dec 2015)", link: "/wp-content/uploads/2020/07/Meet1- Dec 2015.pdf" }, { name: "Meet 2 (Jan 2016)", link: "/wp-content/uploads/2020/07/Meet 2- Jan 2016.pdf" }] },
    { year: "2014-2015", reports: [{ name: "Meet 1 (Dec 2014)", link: "/wp-content/uploads/2020/07/Meet 1- Dec 2014.pdf" }, { name: "Meet 2 (Jan 2015)", link: "/wp-content/uploads/2020/07/Meet 2-Jan 2015.pdf" }] },
    { year: "2013-2014", reports: [{ name: "Meet 1 (Dec 2013)", link: "/wp-content/uploads/2020/07/Meet 1- Dec 2013.pdf" }, { name: "Meet 2 (Jan 2014)", link: "/wp-content/uploads/2020/07/Meet 2- Jan 2014.pdf" }] },
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
                        <span className="text-white font-medium">Alumni</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Alumni</h1>
                    <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                        Reconnecting with classmates, engaging with the community, and celebrating our shared history.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-16">

                {/* About & Registration CTA */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12 items-start">
                    <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-3">
                            <Users className="w-8 h-8 text-vignan-purple" />
                            <h2 className="text-3xl font-bold text-gray-900">About Alumni</h2>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            It is our pleasure to welcome you to the alumni section of our website, where you can feel right at home. In this section, you can be active and engaged members of the community, reconnect with your classmates, and keep up to date about alumni events.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 bg-blue-50 rounded-2xl p-8 border border-blue-100 flex flex-col items-center text-center space-y-4">
                        <User className="w-12 h-12 text-blue-600" />
                        <h3 className="text-xl font-bold text-blue-900">Join the Community</h3>
                        <p className="text-blue-700 text-sm">Register officially to stay connected with campus news and events.</p>
                        <a
                            href="https://vignanits.ac.in/wp-content/uploads/2022/05/Alumni-Association-registration.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full justify-center"
                        >
                            Alumni Registration
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* International Webinars */}
                <section>
                    <div className="flex items-center gap-3 mb-8 border-b pb-4 border-gray-200">
                        <ExternalLink className="w-8 h-8 text-vignan-purple" />
                        <h2 className="text-3xl font-bold text-gray-900">International Alumni Webinars</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {webinars.map((webinar, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={webinar.image}
                                        alt={webinar.speaker}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                        <h3 className="text-white font-bold text-xl">{webinar.topic}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">{webinar.speaker}</h4>
                                    <p className="text-gray-600 text-sm mb-4">{webinar.role}</p>
                                    <a
                                        href={webinar.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-vignan-purple font-medium hover:underline inline-flex items-center gap-1"
                                    >
                                        View Event Details <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Prominent Alumni */}
                <section>
                    <div className="flex items-center gap-3 mb-8 border-b pb-4 border-gray-200">
                        <Award className="w-8 h-8 text-vignan-purple" />
                        <h2 className="text-3xl font-bold text-gray-900">Prominent Alumni</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {prominentAlumni.map((alum, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
                                <div className="aspect-video overflow-hidden bg-gray-100">
                                    <img
                                        src={alum.image}
                                        alt={alum.dept}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 bg-gray-50 border-t border-gray-100">
                                    <p className="font-semibold text-gray-800 text-sm flex items-center gap-2">
                                        <Building className="w-4 h-4 text-gray-500" />
                                        {alum.dept}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Guest Lectures & Workshops List */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Calendar className="w-6 h-6 text-vignan-purple" />
                            <h3 className="text-2xl font-bold text-gray-900">Lectures & Workshops</h3>
                        </div>
                        <div className="space-y-4">
                            {guestLectures.map((lecture, index) => (
                                <a
                                    key={index}
                                    href={lecture.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group p-4 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors border border-gray-100 hover:border-purple-100"
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span className="text-sm font-bold text-vignan-purple bg-white px-2 py-1 rounded-md shadow-sm mb-2 inline-block">
                                                {lecture.year}
                                            </span>
                                            <p className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors">
                                                {lecture.title}
                                            </p>
                                        </div>
                                        <Download className="w-5 h-5 text-gray-400 group-hover:text-purple-600" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Alumni Meet Reports */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="w-6 h-6 text-vignan-purple" />
                            <h3 className="text-2xl font-bold text-gray-900">Alumni Meet Reports</h3>
                        </div>
                        <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                            {meetReports.map((yearGroup, index) => (
                                <div key={index} className="border-l-4 border-vignan-purple pl-4">
                                    <h4 className="font-bold text-lg text-gray-900 mb-3">{yearGroup.year}</h4>
                                    <div className="space-y-2">
                                        {yearGroup.reports.map((report, rIndex) => (
                                            <a
                                                key={rIndex}
                                                href={report.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-vignan-purple transition-colors text-sm"
                                            >
                                                <Download className="w-4 h-4" />
                                                {report.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

            </div>
            <Footer />
        </div>
    );
}