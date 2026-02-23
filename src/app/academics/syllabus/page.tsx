"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import { Download, BookOpen, ChevronDown } from "lucide-react";

export default function SyllabusPage() {
    // ---------- B.Tech VR25 ----------
    const btechVR25 = [
        {
            year: "B.Tech I Year Syllabus",
            branches: [
                { sno: 1, name: "Computer Science and Engineering (CSE)", href: "https://drive.google.com/file/d/1eIuyrMXD5vxAOPS6dJZyNRRtHsdfJtfJ/view" },
                { sno: 2, name: "CSE (Artificial Intelligence & Machine Learning)", href: "https://drive.google.com/file/d/1rnEl6nhinR4eyEy1-kk2MrB63dq3RfKV/view" },
                { sno: 3, name: "CSE (Data Science)", href: "https://drive.google.com/file/d/13NY2kqGm46_K2Us_WzclOItvuO1_LdRm/view" },
                { sno: 4, name: "CSE (Information Technology)", href: "https://drive.google.com/file/d/1x4_OAvTFGlCCnlEljXWeRJwH8AG6-2za/view" },
                { sno: 5, name: "Artificial Intelligence and Machine Learning (AI&ML)", href: "https://drive.google.com/file/d/1gWUJHRFHrZfq1xk-o6oGutjqZGlicR-H/view" },
                { sno: 6, name: "Artificial Intelligence and Data Science (AI&DS)", href: "https://drive.google.com/file/d/1uJGSJ9xqo1A7Hx9PwNbhDlQy7sZoz7OQ/view" },
                { sno: 7, name: "Electronics and Communication Engineering (ECE)", href: "https://drive.google.com/file/d/1-sIyH30kq862zidxzRjv1td0kDb5DRVv/view" },
                { sno: 8, name: "Electronics and Instrumentation Engineering (EIE)", href: "https://drive.google.com/file/d/1ppfboyEYZE5C_FvHa5xK3yNMhcuP9FsY/view" },
                { sno: 9, name: "Electrical and Electronics Engineering (EEE)", href: "https://drive.google.com/file/d/1l1VUCVeQNrA0CJjwp4dnnvzYVW_GyZzg/view" },
                { sno: 10, name: "Mechanical Engineering (ME)", href: "https://drive.google.com/file/d/1A8S7H6nAZAEoSlop4HDSZrs4CDqdUs1v/view" },
                { sno: 11, name: "Civil Engineering (CE)", href: "https://drive.google.com/file/d/1Rj2cdzFcYw75npYy7coYRc0EATYSBsIo/view" },
            ]
        },
        // Additional years like II, III, IV can be added here following the same structure
    ];

    // ---------- B.Tech VR23 ----------
    const btechVR23 = [
        {
            year: "B.Tech I Year Syllabus",
            branches: [
                { sno: 1, name: "Computer Science and Engineering (CSE)", href: "https://drive.google.com/file/d/1wQyEOOXKlV5FjGD8lo2rYP56Pkn81kz2/view" },
                { sno: 2, name: "CSE (Artificial Intelligence & Machine Learning)", href: "https://drive.google.com/file/d/1W5rgxR-ILrC-bXL-RzJBoJGgZZOH7mWJ/view" },
                { sno: 3, name: "CSE (Data Science)", href: "https://drive.google.com/file/d/1FZogqM30U-LBwUygQ4budvAvQPhQnafm/view" },
                { sno: 4, name: "CSE (Information Technology)", href: "https://drive.google.com/file/d/1EQ5tzpLWyGTPn6SEJMm1Xid2ovQgF8AQ/view" },
                { sno: 5, name: "Artificial Intelligence and Data Science (AI&DS)", href: "https://drive.google.com/file/d/1_gUd8HCJHkeMR5irzQx7lQUL1n1VjAcv/view" },
                { sno: 6, name: "Electronics and Communication Engineering (ECE)", href: "https://drive.google.com/file/d/1pH_iMSv25ELr6cvLw9qBtQl7Qt45m2BM/view" },
                { sno: 7, name: "Electronics and Instrumentation Engineering (EIE)", href: "https://drive.google.com/file/d/1jM7EziN_SLmtH0GWqGzHGgIqSllET6aj/view" },
                { sno: 8, name: "Electrical and Electronics Engineering (EEE)", href: "https://drive.google.com/file/d/1-eyUA9s_-KXdYcbGesYEo-Cx8uPzNQ2J/view" },
                { sno: 9, name: "Mechanical Engineering (ME)", href: "https://drive.google.com/file/d/1sgyK9E0daP3yW2DqEUy0KvxeJHngYPqu/view" },
                { sno: 10, name: "Civil Engineering (CE)", href: "https://drive.google.com/file/d/1GG5QTW7DWslPuqM73HWRcA266xzjq7j0/view" },
            ]
        },

        {
            year: "B.Tech II Year Syllabus",
            branches: [
                { sno: 1, name: "Computer Science and Engineering (CSE)", href: "https://drive.google.com/file/d/1A2zQk33a_omwJ1f96SuNX_sgoevH6rlw/view" },
                { sno: 2, name: "CSE (Artificial Intelligence & Machine Learning)", href: "https://drive.google.com/file/d/1_1oGsTQEWETqzEfguZF9gX62bxotyO7b/view" },
                { sno: 3, name: "CSE (Data Science)", href: "https://drive.google.com/file/d/1zZLap_CuexN1G7TE6rLYiwgqgVkfQVRB/view" },
                { sno: 4, name: "CSE (Information Technology)", href: "https://drive.google.com/file/d/1ZpEbMMkzbprbYJAdgYrFoMBLn27y1SN0/view" },
                { sno: 5, name: "Artificial Intelligence and Data Science (AI&DS)", href: "https://drive.google.com/file/d/18NkqitS-GZPQ0XM9fW2AAzCxmTUa28br/view" },
                { sno: 6, name: "Electronics and Communication Engineering (ECE)", href: "https://drive.google.com/file/d/1lPJ7iKJY-Y7FprbIDNIYrAY59knCzns3/view" },
                { sno: 7, name: "Electronics and Instrumentation Engineering (EIE)", href: "https://drive.google.com/file/d/1rw6aNWbDakBpZggBMpjO3C3R8pYI2JDq/view" },
                { sno: 8, name: "Electrical and Electronics Engineering (EEE)", href: "https://drive.google.com/file/d/10GC5-6Po-VqU0x6rsZQ9pOnH6NuvxAIg/view" },
                { sno: 9, name: "Mechanical Engineering (ME)", href: "https://drive.google.com/file/d/1d6a0AOS2JtUMRK6PgW9Av5-VGNAe_qzv/view" },
                { sno: 10, name: "Civil Engineering (CE)", href: "https://drive.google.com/file/d/1_Nkn85qGZpZtDUlvqTtrzsZHf33ppxp4/view" },
            ]
        },

        {
            year: "B.Tech III Year Syllabus",
            branches: [
                { sno: 1, name: "Computer Science and Engineering (CSE)", href: "#" },
                { sno: 2, name: "CSE (Artificial Intelligence & Machine Learning)", href: "#" },
                { sno: 3, name: "CSE (Data Science)", href: "#" },
                { sno: 4, name: "CSE (Information Technology)", href: "#" },
                { sno: 5, name: "Artificial Intelligence and Machine Learning (AI&ML)", href: "#" },
                { sno: 6, name: "Artificial Intelligence and Data Science (AI&DS)", href: "#" },
                { sno: 7, name: "Electronics and Communication Engineering (ECE)", href: "#" },
                { sno: 8, name: "Electronics and Instrumentation Engineering (EIE)", href: "#" },
                { sno: 9, name: "Electrical and Electronics Engineering (EEE)", href: "#" },
                { sno: 10, name: "Mechanical Engineering (ME)", href: "#" },
                { sno: 11, name: "Civil Engineering (CE)", href: "#" },
            ]
        },

        {
            year: "B.Tech IV Year Syllabus",
            branches: [
                { sno: 1, name: "Computer Science and Engineering (CSE)", href: "#" },
                { sno: 2, name: "CSE (Artificial Intelligence & Machine Learning)", href: "#" },
                { sno: 3, name: "CSE (Data Science)", href: "#" },
                { sno: 4, name: "CSE (Information Technology)", href: "#" },
                { sno: 5, name: "Artificial Intelligence and Machine Learning (AI&ML)", href: "#" },
                { sno: 6, name: "Artificial Intelligence and Data Science (AI&DS)", href: "#" },
                { sno: 7, name: "Electronics and Communication Engineering (ECE)", href: "#" },
                { sno: 8, name: "Electronics and Instrumentation Engineering (EIE)", href: "#" },
                { sno: 9, name: "Electrical and Electronics Engineering (EEE)", href: "#" },
                { sno: 10, name: "Mechanical Engineering (ME)", href: "#" },
                { sno: 11, name: "Civil Engineering (CE)", href: "#" },
            ]
        },
    ];

    const minorDepartmentsVR23 = [
        { sno: 1, name: "B.Tech. Minor in Artificial Intelligence & Machine Learning", href: "#" },
        { sno: 2, name: "B.Tech. Minor in Cyber Security", href: "#" },
        { sno: 3, name: "B. Tech. Minor in Data Science", href: "#" },
        { sno: 4, name: "B.Tech. Minor in Innovation and Entrepreneurship", href: "#" },
        { sno: 5, name: "B.Tech. Minor in Internet of Things", href: "#" },
    ];

    // ---------- M.Tech ----------
    const mtechVR25 = [
        {
            year: "M.Tech Syllabus",
            branches: [
                { sno: 1, name: "Embedded Systems", href: "#" },
                { sno: 2, name: "Power Electronics & Electrical Drives", href: "#" },
                { sno: 3, name: "Artificial Intelligence & Data Science", href: "#" },
                { sno: 4, name: "Computer Science & Engineering", href: "#" },
            ]
        }
    ];

    const mtechVR23 = [
        {
            year: "M.Tech Syllabus",
            branches: [
                { sno: 1, name: "Embedded Systems", href: "#" },
                { sno: 2, name: "Power Electronics & Electrical Drives", href: "#" },
                { sno: 3, name: "Artificial Intelligence & Data Science", href: "#" },
                { sno: 4, name: "Computer Science & Engineering", href: "#" },
            ]
        }
    ];

    // Reusable dropdown component
    const StructuredDropdown = ({ title, items, theme }: { title: string, items: any[], theme: "blue" | "purple" | "teal" | "orange" }) => {
        const [isOpen, setIsOpen] = useState(false);
        const config = {
            bg: "bg-purple-50/30",
            text: "text-purple-900",
            border: "border-purple-200",
            hoverBg: "hover:bg-purple-50/50",
            icon: "text-purple-500",
            tableHeaderBg: "bg-vignan-purple",
            tableHeaderRow: "bg-purple-50 hover:bg-purple-100",
        };

        return (
            <div className={`mb-4 border rounded-xl overflow-hidden bg-white transition-all duration-300 ${isOpen ? config.border : 'border-gray-200 shadow-sm'}`}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold transition-colors ${isOpen ? config.bg + " " + config.text : 'hover:bg-gray-50 text-gray-800'}`}
                >
                    <div className="flex items-center gap-3">
                        <span className="text-base md:text-lg">{title}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                    <div className="p-0 border-t border-gray-100 bg-white">
                        <div className="w-full">
                            <table className="w-full text-left border-collapse block md:table">
                                <thead className="hidden md:table-header-group">
                                    <tr className={`text-white text-sm font-semibold ${config.tableHeaderBg}`}>
                                        <th className="px-6 py-4 whitespace-nowrap w-16 text-center">S.No.</th>
                                        <th className="px-6 py-4">Name of the Department</th>
                                        <th className="px-6 py-4 whitespace-nowrap text-right">Click to View</th>
                                    </tr>
                                </thead>
                                <tbody className="block md:table-row-group divide-y-4 md:divide-y md:divide-gray-200 divide-gray-100">
                                    {items.map((item, idx) => (
                                        <tr key={idx} className={`block md:table-row transition-colors ${config.tableHeaderRow} group p-2 md:p-0`}>
                                            <td className="flex justify-between items-center md:table-cell px-4 md:px-6 py-3 md:py-4 text-sm text-gray-600 md:text-center font-medium border-b border-gray-100 md:border-none">
                                                <span className="md:hidden font-bold text-gray-800">S.No.</span>
                                                <span>{item.sno || (idx + 1)}</span>
                                            </td>
                                            <td className="flex flex-col sm:flex-row sm:items-center sm:justify-between md:table-cell px-4 md:px-6 py-3 md:py-4 text-sm font-medium text-gray-900 border-b border-gray-100 md:border-none gap-1 sm:gap-4">
                                                <span className="md:hidden font-bold text-gray-800">Department</span>
                                                <span className="text-left sm:text-right md:text-left">{item.name}</span>
                                            </td>
                                            <td className="flex justify-end md:table-cell px-4 md:px-6 py-3 md:py-4 text-sm text-right">
                                                <a
                                                    href={item.href || "#"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors bg-white border shadow-sm hover:shadow ${config.text} ${config.border}`}
                                                >
                                                    <Download className="w-4 h-4" />
                                                    Download
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
            <Navbar variant="solid" />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-[120px] pb-7">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-3 block">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/academics" className="hover:text-white transition-colors">Academics</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white font-medium">Syllabus</span>
                    </nav>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                            Syllabus
                        </h1>
                    </div>
                </div>
            </div>

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12 md:space-y-16 w-full">

                {/* B.Tech Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-vignan-purple shrink-0" />
                        B.Tech Syllabus
                    </h2>

                    <div className="space-y-10">
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-6 bg-gray-50 p-3 rounded-lg border border-gray-100 inline-block w-full">
                                Autonomous Regulation - VR 25
                            </h3>
                            <div>
                                {btechVR25.map((item, index) => (
                                    <StructuredDropdown key={index} title={item.year} items={item.branches} theme="purple" />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-6 bg-gray-50 p-3 rounded-lg border border-gray-100 inline-block w-full">
                                Autonomous Regulation - VR 23
                            </h3>
                            <div>
                                {btechVR23.map((item, index) => (
                                    <StructuredDropdown key={index} title={item.year} items={item.branches} theme="purple" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* B.Tech Minor Degree Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-vignan-purple shrink-0" />
                        B.Tech Minor Degree (Autonomous Regulation - VR 23)
                    </h2>

                    <div className="space-y-8">
                        <StructuredDropdown title="VR23 B.Tech with Minor Program Syllabus" items={minorDepartmentsVR23} theme="purple" />
                    </div>
                </div>

                {/* M.Tech Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-vignan-purple shrink-0" />
                        M.Tech Syllabus
                    </h2>

                    <div className="space-y-10">
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-6 bg-gray-50 p-3 rounded-lg border border-gray-100 inline-block w-full">
                                Autonomous Regulation - VR 25
                            </h3>
                            <div>
                                {mtechVR25.map((item, index) => (
                                    <StructuredDropdown key={index} title={item.year} items={item.branches} theme="purple" />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-6 bg-gray-50 p-3 rounded-lg border border-gray-100 inline-block w-full">
                                Autonomous Regulation - VR 23
                            </h3>
                            <div>
                                {mtechVR23.map((item, index) => (
                                    <StructuredDropdown key={index} title={item.year} items={item.branches} theme="purple" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}
