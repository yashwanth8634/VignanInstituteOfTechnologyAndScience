
"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { CheckCircle2, Phone, Mail, GraduationCap, IndianRupee, MapPin } from "lucide-react";

export default function AdmissionsPage() {
    const btechCourses = [
        { id: 1, name: "Civil Engineering", intake: 30 },
        { id: 2, name: "Electrical & Electronics Engineering", intake: 60 },
        { id: 3, name: "Mechanical Engineering", intake: 30 },
        { id: 4, name: "Electronics & Communication Engineering", intake: 120 },
        { id: 5, name: "Computer Science & Engineering", intake: 240 },
        { id: 6, name: "CSE(Artificial Intelligence & Machine Learning)", intake: 240 },
        { id: 7, name: "CSE(Data Science)", intake: 180 },
        { id: 8, name: "Information Technology", intake: 60 },
        { id: 9, name: "Artificial Intelligence & Data Science", intake: 60 },
        { id: 10, name: "Artificial Intelligence & Machine Learning", intake: 60 },
        { id: 11, name: "Electronics & Instrumentation Engineering", intake: 30 },
    ];

    const mtechCourses = [
        { id: 1, name: "Computer Science & Engineering", intake: 12 },
        { id: 2, name: "Artificial Intelligence & Data Science", intake: 12 },
        { id: 3, name: "Embedded Systems", intake: 12 },
        { id: 4, name: "Power Electronics & Electrical Drives", intake: 12 },
    ];

    const admissionsContacts = [
        { sno: 1, name: "Mr. R. Ramanjan prasad", contact: "9000555097" },
        { sno: 2, name: "Dr. Govinda chowdary", contact: "7702551269" },
        { sno: 3, name: "Mr. K. Vishnu", contact: "9949782303" },
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Hero Section */}
            <section className="bg-vignan-purple pt-32 pb-16 text-white text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                    Your gateway to a successful engineering career.
                </p>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Courses Offered */}
                    <section id="courses" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <GraduationCap className="w-6 h-6 text-vignan-purple" />
                            Courses Offered & Intake
                        </h2>

                        {/* B.Tech Table */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 bg-gray-50 p-2 rounded-lg inline-block border border-gray-100">B.Tech Courses</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-vignan-purple text-white text-left">
                                            <th className="px-4 py-3 rounded-tl-lg text-sm font-semibold">S.No</th>
                                            <th className="px-4 py-3 text-sm font-semibold">Name of the Course</th>
                                            <th className="px-4 py-3 rounded-tr-lg text-sm font-semibold">Intake</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 border border-gray-100 rounded-b-lg">
                                        {btechCourses.map((course) => (
                                            <tr key={course.id} className="hover:bg-gray-50">
                                                <td className="px-4 py-3 text-sm text-gray-600">{course.id}</td>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">{course.name}</td>
                                                <td className="px-4 py-3 text-sm font-bold text-vignan-purple">{course.intake}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* M.Tech Table */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 bg-gray-50 p-2 rounded-lg inline-block border border-gray-100">M.Tech Courses</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-vignan-blue text-white text-left">
                                            <th className="px-4 py-3 rounded-tl-lg text-sm font-semibold">S.No</th>
                                            <th className="px-4 py-3 text-sm font-semibold">Name of the Course</th>
                                            <th className="px-4 py-3 rounded-tr-lg text-sm font-semibold">Intake</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 border border-gray-100 rounded-b-lg">
                                        {mtechCourses.map((course, index) => (
                                            <tr key={index} className="hover:bg-gray-50">
                                                <td className="px-4 py-3 text-sm text-gray-600">{index + 1}</td>
                                                <td className="px-4 py-3 text-sm font-medium text-gray-900">{course.name}</td>
                                                <td className="px-4 py-3 text-sm font-bold text-vignan-blue">{course.intake}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Fee Structure */}
                    <section id="fee" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <IndianRupee className="w-6 h-6 text-vignan-purple" />
                            Fee Structure
                        </h2>
                        <p className="text-sm text-gray-500 mb-6">Yearly Fee details of each Program per year for 2019-20 Academic years are given here under.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 text-center">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">B.Tech</h3>
                                <p className="text-3xl font-bold text-vignan-purple">₹ 1,00,000</p>
                                <p className="text-xs text-gray-500 mt-1">Per Year</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">M.Tech</h3>
                                <p className="text-3xl font-bold text-vignan-blue">₹ 60,000</p>
                                <p className="text-xs text-gray-500 mt-1">Per Year</p>
                            </div>
                        </div>
                    </section>

                    {/* Eligibility */}
                    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
                        <div className="flex items-start gap-3 p-4 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-100">
                            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                            <p>Candidates must have passed Class 10+2 exam from a recognised board with Physics, Chemistry and Mathematics as core subjects.</p>
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Phone className="w-6 h-6 text-vignan-purple" />
                            For Admissions Contact
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <tbody>
                                    {admissionsContacts.map((contact) => (
                                        <tr key={contact.sno} className="border-b border-gray-100 last:border-0">
                                            <td className="py-3 px-4 text-gray-900 font-medium">{contact.name}</td>
                                            <td className="py-3 px-4 text-vignan-purple font-bold font-mono text-right">{contact.contact}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                </div>

                {/* Sidebar Form */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Admissions Enquiry</h3>
                        <p className="text-sm text-gray-500 mb-6">Fill out the form below 2024-2025</p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                                <input type="text" placeholder="Student Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vignan-purple focus:border-transparent outline-none transition-all" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vignan-purple focus:border-transparent outline-none transition-all" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile No.</label>
                                <input type="tel" placeholder="Mobile No." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vignan-purple focus:border-transparent outline-none transition-all" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Course Interested In</label>
                                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vignan-purple focus:border-transparent outline-none transition-all text-gray-600">
                                    <option>- Select -</option>
                                    <option>B.Tech - CSE</option>
                                    <option>B.Tech - CSE (AI & ML)</option>
                                    <option>B.Tech - CSE (DS)</option>
                                    <option>B.Tech - ECE</option>
                                    <option>B.Tech - EEE</option>
                                    <option>B.Tech - Civil</option>
                                    <option>B.Tech - Mech</option>
                                    <option>M.Tech</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                <input type="text" placeholder="Enter Your City" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vignan-purple focus:border-transparent outline-none transition-all" />
                            </div>

                            <button className="w-full py-3 bg-vignan-purple text-white font-bold rounded-lg hover:bg-vignan-purple-dark transition-colors shadow-md mt-2">
                                Submit Enquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
