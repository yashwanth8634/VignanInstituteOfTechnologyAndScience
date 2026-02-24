import Link from "next/link";
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import { Award, ExternalLink } from "lucide-react";

export const metadata = {
    title: "Certification Courses | VITS",
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
    {
        year: "Academic Year 2019-2020",
        courses: [
            { sno: 1, name: "AI For Everyone", duration: "4 Weeks", students: 401 },
            { sno: 2, name: "Programming for Everybody (Getting Started with Python)", duration: "4 Weeks", students: 375 },
            { sno: 3, name: "Creating Database Tables with SQL", duration: "4 Weeks", students: 232 },
            { sno: 4, name: "Python Data Structures", duration: "4 Weeks", students: 216 },
            { sno: 5, name: "Introduction to Cloud Identity", duration: "4 Weeks", students: 107 },
            { sno: 6, name: "Intermediate Relational Database and SQL", duration: "4 Weeks", students: 87 },
            { sno: 7, name: "Retrieve Data using Single-Table SQL Queries", duration: "4 Weeks", students: 72 },
            { sno: 8, name: "Python Basics", duration: "4 Weeks", students: 68 },
            { sno: 9, name: "IT Essentials", duration: "16 Weeks", students: 251 },
            { sno: 10, name: "C for Everyone: Programming Fundamentals", duration: "4 Weeks", students: 62 },
            { sno: 11, name: "Introduction to Mechanical Engineering Design and Manufacturing with Fusion 360", duration: "4 Weeks", students: 62 },
            { sno: 12, name: "Wind Energy", duration: "4 Weeks", students: 57 },
            { sno: 13, name: "Advanced Features with Relational Database Tables Using SQLiteStudio", duration: "4 Weeks", students: 56 },
            { sno: 14, name: "Introduction to Thermodynamics: Transferring Energy from Here to There", duration: "4 Weeks", students: 44 },
            { sno: 15, name: "Digital Manufacturing & design", duration: "4 Weeks", students: 43 },
            { sno: 16, name: "Electric Power Systems", duration: "4 Weeks", students: 42 },
            { sno: 17, name: "Grammar and Punctuation", duration: "4 Weeks", students: 42 },
            { sno: 18, name: "Modern JavaScript: ES6 Basics", duration: "4 Weeks", students: 37 },
            { sno: 19, name: "Oxoford achiever course", duration: "5 Weeks", students: 592 },
            { sno: 20, name: "NPTEL(Principle of modern CDMA/MIMO/OFDM wireless communications", duration: "12 weeks", students: 84 },
            { sno: 21, name: "NPTEL(Product design manufacturing )", duration: "4 weeks", students: 11 },
            { sno: 22, name: "NPTEL(Principles and Techniques of Modern Radar Systems – Online)", duration: "4 weeks", students: 18 },
            { sno: 23, name: "NPTEL(Problem solving through programming in C)", duration: "4 weeks", students: 23 },
            { sno: 24, name: "NPTEL(introduction to mechanical micro machining )", duration: "4 weeks", students: 11 },
            { sno: 25, name: "NPTEL(introduction of internet of things)", duration: "4 weeks", students: 34 },
            { sno: 26, name: "TCS CODEVITA SPECIFIC TRAINING (FACE)", duration: "1 Week", students: 100 },
            { sno: 27, name: "TCS NINJA SPECIFIC TRAINING (FACE)", duration: "2 Weeks", students: 512 },
            { sno: 28, name: "COGNIZANT COMPANY SPECIFIC TRAINING PROGRAMME (TALENTIO)", duration: "1 Week", students: 364 },
            { sno: 29, name: "INFOSYS COMPANY SPECIFIC TRAINING PROGRAMME (TALENTIO)", duration: "2 Weeks", students: 364 },
            { sno: 30, name: "FACE COMPANY SPECIFIC TRAINING (INFYTQ)", duration: "3 Weeks", students: 120 },
            { sno: 31, name: "INFOSYS COMPANY SPECIFIC TRAINING PROGRAMME (TALENTIO)", duration: "1 Week", students: 380 }
        ]
    },
    {
        year: "Academic Year 2018-2019",
        courses: [
            { sno: 1, name: "IT Essentials", duration: "16 Weeks", students: 608 },
            { sno: 2, name: "GPS & GSM based tracker device", duration: "1 Week", students: 374 },
            { sno: 3, name: "PCB Designing", duration: "1 Week", students: 323 },
            { sno: 4, name: "Calibration techniques for pipelined ADCs", duration: "1 Week", students: 161 },
            { sno: 5, name: "Database Management System", duration: "1 Week", students: 157 },
            { sno: 6, name: "Advanced computation Engineering", duration: "1 Week", students: 263 },
            { sno: 7, name: "Digital Design using Verilog and VHDL", duration: "1 Week", students: 443 },
            { sno: 8, name: "Web development", duration: "1 Week", students: 243 },
            { sno: 9, name: "Industrial training on oracle apps", duration: "1 Week", students: 222 },
            { sno: 10, name: "Python Programming", duration: "1 Week", students: 132 },
            { sno: 11, name: "Structural monitoring instrumentation : Deflection measurement", duration: "1 Week", students: 60 },
            { sno: 12, name: "CAMPUS PLACEMENT CRACKER (FACE)", duration: "2 Weeks", students: 171 },
            { sno: 13, name: "CAMPUS PLACEMENT CRACKER (FACE)", duration: "3 days", students: 180 },
            { sno: 14, name: "CAMPUS PLACEMENT CRACKER (FACE)", duration: "3 days", students: 168 },
            { sno: 15, name: "CAMPUS PLACEMENT CRACKER (FACE)", duration: "3 days", students: 314 },
            { sno: 16, name: "TCS NINJA SPECIFIC TRAINING (FACE)", duration: "2 weeks", students: 240 },
            { sno: 17, name: "INFOSYS SPECIFIC TRAINING", duration: "1 week", students: 360 },
            { sno: 18, name: "CAMPUS PLACEMENT CRACKER (FACE)", duration: "1 week", students: 558 },
            { sno: 19, name: "CAMPUS PLACEMENT CRACKER (FACE)", duration: "5 days", students: 314 },
            { sno: 20, name: "TECHNICAL WIZARD IT (FACE)", duration: "2 Weeks", students: 555 }
        ]
    },
    {
        year: "Academic Year 2017-2018",
        courses: [
            { sno: 1, name: "Stadd Pro", duration: "36 hours", students: 57 },
            { sno: 2, name: "Durability of concrete structure", duration: "48 hours", students: 56 },
            { sno: 3, name: "Design of tall buildings", duration: "48 hours", students: 156 },
            { sno: 4, name: "Basic PS Transmission and smart grid", duration: "48 hours", students: 53 },
            { sno: 5, name: "IT Essentials", duration: "60 hours", students: 51 },
            { sno: 6, name: "NI MULTISIM", duration: "1 week", students: 161 },
            { sno: 7, name: "Engineering Mechanics", duration: "1 week", students: 234 },
            { sno: 8, name: "Seismic Design", duration: "1 week", students: 106 },
            { sno: 9, name: "PDMS", duration: "1 week", students: 148 },
            { sno: 10, name: "Basic Welding Process", duration: "1 week", students: 150 },
            { sno: 11, name: "CATIA", duration: "1 week", students: 455 },
            { sno: 12, name: "CAD-CAM Training", duration: "1 week", students: 350 },
            { sno: 13, name: "Advanced Optimization Methods", duration: "1 week", students: 320 },
            { sno: 14, name: "SCILAB", duration: "4 Weeks", students: 170 },
            { sno: 15, name: "Robotics", duration: "4 Weeks", students: 133 },
            { sno: 16, name: "Digital Design using Verilog and VHDL", duration: "1 week", students: 497 },
            { sno: 17, name: "Robotics", duration: "1 week", students: 320 },
            { sno: 18, name: "IT essential", duration: "2 Weeks", students: 178 },
            { sno: 19, name: "Cyber security", duration: "10 Weeks", students: 173 },
            { sno: 20, name: "Cloud Computing", duration: "1 week", students: 521 },
            { sno: 21, name: "Database design and programming with SQL", duration: "1 week", students: 521 },
            { sno: 22, name: "Cyber security", duration: "1 week", students: 298 },
            { sno: 23, name: "Web development", duration: "3 Weeks", students: 240 },
            { sno: 24, name: "Gas Chromatography", duration: "1 Week", students: 16 },
            { sno: 25, name: "Robotics & Automation", duration: "1 Week", students: 14 },
            { sno: 26, name: "PLC and SCADA", duration: "1 Week", students: 24 },
            { sno: 27, name: "Labview", duration: "1 Week", students: 423 },
            { sno: 28, name: "CAMPUS PLACEMENT TRAINING ON VERBAL, APTITUDE & LOGICAL REASONING", duration: "1 Week", students: 1250 },
            { sno: 29, name: "TASK FINISHING SCHOOL", duration: "1 Week", students: 280 },
            { sno: 30, name: "TASK SPRAC PROGRAMME", duration: "2 Weeks", students: 173 },
            { sno: 31, name: "INFOSYS COMPANY SPECIFIC TRAINING PROGRAMME", duration: "1 Week", students: 594 },
            { sno: 32, name: "ORGANIZATION & INTERVIEW SKILLS", duration: "1 Week", students: 594 },
            { sno: 33, name: "ORACLE ACADEMY PROGRAMME", duration: "2 Weeks", students: 100 },
            { sno: 34, name: "DIAGnostic CAREER TEST", duration: "2 Weeks", students: 594 }
        ]
    },
    {
        year: "Academic Year 2016-2017",
        courses: [
            { sno: 1, name: "CAD software", duration: "1 Week", students: 42 },
            { sno: 2, name: "Auto CAD Drafting", duration: "1 Week", students: 44 },
            { sno: 3, name: "Computational Fluid Mechanics", duration: "1 Week", students: 350 },
            { sno: 4, name: "Advanced computations in Engineering", duration: "1 Week", students: 325 },
            { sno: 5, name: "NI MULTISIM", duration: "1 Week", students: 47 },
            { sno: 6, name: "Industrial Automation", duration: "1 Week", students: 181 },
            { sno: 7, name: "Recent trends in Electrical Machines", duration: "1 Week", students: 54 },
            { sno: 8, name: "HYPERMESH", duration: "1 Week", students: 110 },
            { sno: 9, name: "Basic Welding Process", duration: "1 Week", students: 168 },
            { sno: 10, name: "HVAC", duration: "1 Week", students: 430 },
            { sno: 11, name: "Arduino hands on", duration: "4 Weeks", students: 83 },
            { sno: 12, name: "Robotics", duration: "4 Weeks", students: 83 },
            { sno: 13, name: "WSN using NS2 and Antennas design using ANSYS HFSS", duration: "1 Week", students: 46 },
            { sno: 14, name: "SCILAB", duration: "3 Weeks", students: 441 },
            { sno: 15, name: "Intricate knowledge of circuit design", duration: "1 week", students: 418 },
            { sno: 16, name: "Microcontrollers Programming", duration: "1 week", students: 320 },
            { sno: 17, name: "IT essential", duration: "12 Weeks", students: 178 },
            { sno: 18, name: "Cyber security", duration: "8 Weeks", students: 151 },
            { sno: 19, name: "BIG DATA", duration: "1 week", students: 126 },
            { sno: 20, name: "BIG DATA", duration: "1 week", students: 126 },
            { sno: 21, name: "Blue Mix", duration: "1 week", students: 305 },
            { sno: 22, name: "Android Development", duration: "1 week", students: 178 },
            { sno: 23, name: "Recent trends in SCADA", duration: "1 week", students: 25 },
            { sno: 24, name: "Advanced Applications in Chromatography", duration: "1 week", students: 4 },
            { sno: 25, name: "MatLab", duration: "1 week", students: 16 },
            { sno: 26, name: "WOWS SPEED ON MATHS AND CAMPUS PLACEMENT CRACKER", duration: "1 week", students: 598 },
            { sno: 27, name: "TECHNICAL TRAINING ON DATA STRUCTURES", duration: "2 weeks", students: 110 },
            { sno: 28, name: "cocubes DCT exam AND pre assessment exam", duration: "2 Weeks", students: 285 },
            { sno: 29, name: "INFOSYS CAMPUS CONNECT PROGRAMME", duration: "1 Week", students: 598 },
            { sno: 30, name: "TASK PRACTICE OF PROFESSION(POP) SESSION", duration: "1 Week", students: 1200 },
            { sno: 31, name: "RECRUITMENT ESSENTIAL PROGRAMME", duration: "1 Week", students: 598 }
        ]
    }
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
