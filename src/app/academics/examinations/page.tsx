import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Link from "next/link";
import { FileText, Award, Calendar, ExternalLink } from "lucide-react";

export const metadata = {
    title: "Examinations | Vignan Institute of Technology and Science",
    description: "Information about examinations, evaluation, and results at Vignan Institute of Technology and Science.",
};

const resultsLinks = [
    { label: "B.TECH II YEAR I SEMESTER REGULAR EXTERNAL EXAMINATIONS (VR23) DEC-2025", href: "http://103.10.134.237/examcell/examResults" },
    { label: "M.TECH II YEAR II SEM REGULAR (VR23) EXTERNAL EXAMINATIONS NOV-202", href: "http://103.10.134.237/examcell/examResults" }
];

const soeLinks = [
    { label: "Academic Year 2023-2024", href: "https://drive.google.com/drive/folders/1Dg9SDT52dnZ025imXigKKkcNhX3MkSGd" },
    { label: "Academic Year 2022-2023", href: "https://drive.google.com/drive/folders/1RDboxNmTW36HJPnnyiCcnSAds-RZ573P" },
    { label: "Academic Year 2021-2022", href: "https://drive.google.com/drive/folders/12G3lCr31WtZw6_0kNZsjhYuCOWcc44tQ" },
    { label: "Academic Year 2020-2021", href: "https://drive.google.com/drive/folders/1ZVFQKinGjqbyWk0DssX5KNPcVk2hilvV" },
    { label: "Academic Year 2019-2020", href: "https://drive.google.com/drive/folders/1vj1k9utSLw6HgamHhtwQFaoQqAtwZVJv" },
    { label: "Academic Year 2018-2019", href: "https://drive.google.com/drive/folders/1VOzL4mysH2a32WcByUBdlpD-1k6qs1-x" },
];

const staffList = [
    { sno: 1, name: "Dr J Venkateswara Rao", designation: "Dean of Evaluation" },
    { sno: 2, name: "Mr. N Nagarjuna", designation: "Assistant Professor,CSE & ACE-1" },
    { sno: 3, name: "Mr. B Meenaiah", designation: "Assistant Professor, ECE & ACE-2" },
    { sno: 4, name: "Mr. B Venkatesh", designation: "DTP Operator" },
    { sno: 5, name: "Mr. G Vidhyadhar Rao", designation: "DTP Operator" },
    { sno: 6, name: "Mr. B Santosh", designation: "DTP Operator" },
    { sno: 7, name: "Mr. V Durga Prasad", designation: "Lab Assistant, EIE & Record Assistant" },
    { sno: 8, name: "Mr. B Rajeshwar", designation: "Record Assistant" },
    { sno: 9, name: "G Jayanth Naidu", designation: "Security" },
    { sno: 10, name: "M Sandya", designation: "Attender" }
];

const downloadLinks = [
    { label: "Leave Policy for Examination Duties", href: "/Pdfs/Examinations/LEAVE-POLICY-OF-EXAMINATION-BRANCH.pdf" },
    { label: "Choice Based Credit System University Guide Lines", href: "/Pdfs/Examinations/CBCS.pdf" },
];

const certificationCourses = [
    { label: "Academic Year 2020-2021", href: "#" },
    { label: "Academic Year 2019-2020", href: "#" },
    { label: "Academic Year 2018-2019", href: "#" },
    { label: "Academic Year 2017-2018", href: "#" },
    { label: "Academic Year 2016-2017", href: "#" }
];

export default function Examinations() {
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
                        <span className="text-white font-medium">Examinations</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Examinations
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">

                {/* Results Section */}
                <section className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <FileText className="w-6 h-6 text-vignan-purple" />
                        Results
                    </h2>
                    <ul className="space-y-3">
                        {resultsLinks.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-vignan-purple font-medium hover:text-indigo-600 transition-colors group">
                                    <span className="w-2 h-2 rounded-full bg-vignan-purple mr-3 group-hover:bg-indigo-600 transition-colors"></span>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Grid for SOE and Downloads */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Scheme of Evaluations */}
                    <section className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Calendar className="w-6 h-6 text-vignan-purple" />
                            Scheme of Evaluations
                        </h2>
                        <h3 className="text-lg font-semibold text-gray-700 mb-4 bg-gray-50 p-2 rounded-lg inline-block border border-gray-100">
                            Academic Year Wise SOE
                        </h3>
                        <ul className="space-y-3">
                            {soeLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-vignan-purple transition-colors">
                                        <ExternalLink className="w-4 h-4 mr-3 text-gray-400" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Downloads Section */}
                    <section className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Award className="w-6 h-6 text-vignan-purple" />
                            Downloads
                        </h2>
                        <ul className="space-y-3">
                            {downloadLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-vignan-purple transition-colors">
                                        <ExternalLink className="w-4 h-4 mr-3 text-gray-400" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* Certification Courses Section */}


                {/* Staff Section */}
                <section className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Staff</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-vignan-purple text-white text-left">
                                    <th className="px-6 py-4 rounded-tl-lg font-semibold">S.No</th>
                                    <th className="px-6 py-4 font-semibold">Name</th>
                                    <th className="px-6 py-4 rounded-tr-lg font-semibold">Designation</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 border border-gray-100 rounded-b-lg">
                                {staffList.map((staff) => (
                                    <tr key={staff.sno} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-3 text-gray-600 font-medium">{staff.sno}</td>
                                        <td className="px-6 py-3 text-gray-900 font-semibold">{staff.name}</td>
                                        <td className="px-6 py-3 text-vignan-purple font-medium">{staff.designation}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>

            <Footer />
        </div>
    );
}
