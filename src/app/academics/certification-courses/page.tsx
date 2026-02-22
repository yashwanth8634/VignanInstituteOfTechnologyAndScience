import Link from "next/link";
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import { Award, ExternalLink } from "lucide-react";

export const metadata = {
    title: "Certification Courses | Vignan Institute of Technology and Science",
    description: "Value-added and certification courses offered to enhance student skills.",
};

const academicYearsData = [
    {
        year: "Academic Year 2020-2021",
        courses: [
            { sno: 1, name: "Plumbing Designing and Firefighting Services for Building", duration: "3 Weeks", students: 70 },
            { sno: 2, name: "CISCO- Introduction to Packet Tracer (IT)", duration: "16 Weeks", students: 21 },
            { sno: 3, name: "CISCO- Cybersecurity Essentials (IT)", duration: "16 Weeks", students: 19 },
            { sno: 4, name: "CISCO- Introduction to Cybersecurity (IT)", duration: "16 Weeks", students: 23 },
            { sno: 5, name: "CISCO- Introduction to Packet Tracer (ECE)", duration: "16 Weeks", students: 93 },
            { sno: 6, name: "CISCO- Cybersecurity Essentials (ECE)", duration: "16 Weeks", students: 93 },
            { sno: 7, name: "CISCO- Introduction to Cybersecurity (ECE)", duration: "16 Weeks", students: 93 },
            { sno: 8, name: "CISCO- Introduction to Packet Tracer (CSE)", duration: "16 Weeks", students: 294 },
            { sno: 9, name: "CISCO- Cybersecurity Essentials (CSE)", duration: "16 Weeks", students: 232 },
            { sno: 10, name: "CISCO- Introduction to Cybersecurity (CSE)", duration: "16 Weeks", students: 226 },
            { sno: 11, name: "Certification Training Program-TCS Code Vita", duration: "4 Weeks", students: 665 },
            { sno: 12, name: "Certification Training Program-TCS Ninja", duration: "2 Weeks", students: 1354 },
            { sno: 13, name: "Certification Training Program-DXC Technologies", duration: "1 Week", students: 665 },
            { sno: 14, name: "Certification Training Program-InfytQ", duration: "4 Weeks", students: 665 },
            { sno: 15, name: "Certification Training Program-Infosys", duration: "1 Week", students: 689 },
            { sno: 16, name: "Certification Training Program-Cognizant", duration: "3 Weeks", students: 665 },
            { sno: 17, name: "Certification Training Program-Aptitude Training", duration: "1 Week", students: 287 },
            { sno: 18, name: "Certification Training Program-Verbal Communication Basics", duration: "1 Week", students: 287 },
            { sno: 19, name: "Certification Training Program-Verbal Basics", duration: "2 Weeks", students: 269 },
            { sno: 20, name: "Certification Training Program-Recruitment IT Essentials", duration: "3 Weeks", students: 665 },
            { sno: 21, name: "Certification Training Program-Basics of Python", duration: "2 Weeks", students: 689 },
            { sno: 22, name: "Certification Training Program-Data Structues using Python", duration: "2 Weeks", students: 689 },
            { sno: 23, name: "Certification Training Program-C Language", duration: "2 Weeks", students: 493 },
            { sno: 24, name: "Certification Training Program-C Programming", duration: "2 Weeks", students: 275 },
            { sno: 25, name: "Certification Training Program-C++ Programming", duration: "2 Weeks", students: 737 },
            { sno: 26, name: "Oxoford achiever course", duration: "5 Weeks", students: 654 },
            { sno: 27, name: "INTRODUCTION TO INTERNET OF THINGS", duration: "12 weeks", students: 7 },
            { sno: 28, name: "PROBLEM SOLVING THROUGH PROGRAMMING IN C", duration: "12 weeks", students: 1 },
            { sno: 29, name: "EVOLUTION OF AIR INTERFACE TOWARDS 5G", duration: "12 weeks", students: 27 },
            { sno: 30, name: "INTRODUCTION TO MACHINE LEARNING", duration: "8 weeks", students: 5 },
            { sno: 31, name: "Geospecial inputs for enabling master plan formulation", duration: "5 days", students: 3 },
            { sno: 32, name: "Introduction to Embedded System Design", duration: "12 weeks", students: 23 },
            { sno: 33, name: "Remote sensing applications in agricultural water management", duration: "5 days", students: 1 },
            { sno: 34, name: "Satellite Photogrammetry and its Application", duration: "5 days", students: 14 },
            { sno: 35, name: "Application of Geoinformatics in Ecological Studies", duration: "12 days", students: 1 },
            { sno: 36, name: "Remote Sensing and Digital Image Analysis", duration: "25 days", students: 1 },
            { sno: 37, name: "Global Navigation Satellite System", duration: "12 days", students: 1 },
            { sno: 38, name: "Understanding of Coastal ocean processes using Remote Sensing and Numerical Modelling", duration: "5 days", students: 1 },
            { sno: 39, name: "Geographical Information System", duration: "18 days", students: 1 },
            { sno: 40, name: "Overview of Geoprocessing using Python", duration: "12 days", students: 1 },
            { sno: 41, name: "GIS for Supply Chain Management", duration: "5 days", students: 1 },
            { sno: 42, name: "TCS iON Career Edge- Young Professional (II Year EEE)", duration: "2 Weeks", students: 61 },
            { sno: 43, name: "TCS iON Career Edge- Young Professional (II Year EEE)", duration: "2 Weeks", students: 59 },
            { sno: 44, name: "C-Language (EIE)", duration: "2 Weeks", students: 53 },
            { sno: 45, name: "Data Structures (EIE)", duration: "2 Weeks", students: 48 },
            { sno: 46, name: "Python (EIE)", duration: "2 Weeks", students: 157 },
            { sno: 47, name: "MASTERING BITUMEN FOR BETTER ROADS AND INNOVATIVE APPLICATIONS", duration: "2 Weeks", students: 13 },
            { sno: 48, name: "INTRODUCTION TO PSYCHOLOGY", duration: "2 Weeks", students: 6 },
            { sno: 49, name: "RENEWABLE ENERGY AND GREEN BUILDING ENTREPRENEURSHIP", duration: "2 Weeks", students: 9 },
            { sno: 50, name: "AI FOR EVERY ONE", duration: "2 Weeks", students: 4 },
            { sno: 51, name: "CREATE A RESUME AND COVER LETTER WITH GOOGLE DOCS", duration: "2 Weeks", students: 11 },
            { sno: 52, name: "HOW TO WRITE A RESUME (PROJECT – CENTERED COURSE)", duration: "2 Weeks", students: 5 },
            { sno: 53, name: "CYBER SECURITY MANUFACTURING", duration: "2 Weeks", students: 1 },
            { sno: 54, name: "PROGRAMMING FOR EVERYBODY", duration: "2 Weeks", students: 1 },
            { sno: 55, name: "BUSINESS WRITING", duration: "3 Weeks", students: 2 },
            { sno: 56, name: "THE SCIENCE OF WELL BEING", duration: "2 Weeks", students: 1 },
            { sno: 57, name: "PYTHON FOR EVERYBODY", duration: "2 Weeks", students: 1 },
            { sno: 58, name: "CLOUD COMPUTING BASICS (CLOUD 101)", duration: "2 Weeks", students: 1 },
            { sno: 59, name: "COVID_19 CONTACT TRACING", duration: "2 Weeks", students: 4 },
            { sno: 60, name: "ENGLISH FOR EFFECTIVE BUSINESS SPEAKING", duration: "2 Weeks", students: 1 },
            { sno: 61, name: "SPEAK ENGLISH PROFESSIONALLY: IN ONLINE,PERSON&ON THE PHONE", duration: "2 Weeks", students: 1 }
        ]
    },
    { year: "Academic Year 2019-2020", courses: [] },
    { year: "Academic Year 2018-2019", courses: [] },
    { year: "Academic Year 2017-2018", courses: [] },
    { year: "Academic Year 2016-2017", courses: [] }
];

export default function CertificationCourses() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Page Header */}
            <div className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-32 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-3">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/academics" className="hover:text-white transition-colors">Academics</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white font-medium">Certification Courses</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">
                        Certification Courses
                    </h1>
                    <p className="text-purple-200 text-lg max-w-3xl">
                        Enhancing employability with industry-relevant certifications and value-added courses.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Accordion Box */}
                <div className="max-w-6xl mx-auto space-y-4">
                    {academicYearsData.map((data, index) => (
                        <details key={index} className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <summary className="text-xl font-bold text-gray-900 flex items-center justify-between cursor-pointer list-none">
                                <div className="flex items-center gap-3">
                                    <Award className="w-6 h-6 text-vignan-purple" />
                                    {data.year}
                                </div>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>

                            <div className="mt-4 border-t border-gray-100 pt-6">
                                {data.courses.length > 0 ? (
                                    <div className="overflow-x-auto rounded-xl border border-gray-200">
                                        <table className="w-full border-collapse bg-white text-sm text-left">
                                            <thead className="bg-vignan-purple text-white">
                                                <tr>
                                                    <th className="px-6 py-4 font-semibold border-b">S.No</th>
                                                    <th className="px-6 py-4 font-semibold border-b">Name of Add on / Certificate programs offered</th>
                                                    <th className="px-6 py-4 font-semibold border-b whitespace-nowrap">Duration of course</th>
                                                    <th className="px-6 py-4 font-semibold border-b text-center">Number of Students completing the course in the year</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {data.courses.map((course) => (
                                                    <tr key={course.sno} className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 text-gray-600 font-medium">{course.sno}</td>
                                                        <td className="px-6 py-4 text-gray-900 font-medium">{course.name}</td>
                                                        <td className="px-6 py-4 text-gray-600 font-medium">{course.duration}</td>
                                                        <td className="px-6 py-4 text-gray-600 font-medium text-center">{course.students}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-8 text-gray-400">
                                        <p>Course data will be updated soon.</p>
                                    </div>
                                )}
                            </div>
                        </details>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 bg-vignan-purple rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">

                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ignite Your Career Potential</h2>
                        <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                            Explore our range of certification courses designed to give you a competitive edge in the job market.
                        </p>
                        <button className="bg-white text-vignan-purple px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                            <Link href="/placements">
                                Contact Placement Cell
                            </Link>
                        </button>
                    </div>
                </div>

            </div>

            <Footer />
        </div >
    );
}
