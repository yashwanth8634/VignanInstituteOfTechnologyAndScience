import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
    title: "Governing Body | Vignan Institute of Technology and Science",
    description:
        "Governing Body members of Vignan Institute of Technology and Science.",
};

const governingBodyMembers = [
    { sno: 1, name: "Dr. L. Rathaiah", designation: "Chairman", category: "Management Representative" },
    { sno: 2, name: "Sri. L. Krishna Devarayalu", designation: "Vice-Chairman", category: "Management Representative" },
    { sno: 3, name: "Sri. B. Shravan", designation: "Member", category: "CEO, Vignan Group of Institutions" },
    { sno: 4, name: "Smt. L. Rani Rudrama Devi", designation: "Member", category: "Management Representative" },
    { sno: 5, name: "Dr. B. Padmaja Rani", designation: "Member", category: "JNTUH Nominee" },
    { sno: 6, name: "Prof. N. V. Ramana Rao", designation: "Member", category: "NIT-Warangal Nominee" },
    { sno: 7, name: "Dr. G. Durga Sukumar", designation: "Member Secretary", category: "Principal, VGNT" },
    { sno: 8, name: "Sri. K. Srinivas Rao", designation: "Member", category: "Industry Representative" },
    { sno: 9, name: "Dr. P. Srinivasa Rao", designation: "Member", category: "Faculty Representative" },
    { sno: 10, name: "Sri. M. Suresh Kumar", designation: "Member", category: "Alumni Representative" },
    { sno: 11, name: "Dr. K. Ramesh Babu", designation: "Member", category: "Academic Expert" },
    { sno: 12, name: "Sri. V. Ravi Kumar", designation: "Member", category: "Industry Expert" },
    { sno: 13, name: "Dr. S. Narayana", designation: "Member", category: "State Government Nominee" },
    { sno: 14, name: "Sri. T. Venkat Rao", designation: "Member", category: "Local Society Representative" },
    { sno: 15, name: "Dr. A. Ramesh", designation: "Member", category: "Technical Expert" },
];

export default function GoverningBodyPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Page Header */}
            <div className="bg-vignan-purple pt-30 pb-7">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-3">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/about" className="hover:text-white transition-colors">About</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white font-medium">Governing Body</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Governing Body
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-6 sm:p-8 border-b border-gray-100">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Board of Governors</h2>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base">
                            The Governing Body of Vignan Institute of Technology and Science
                            comprises distinguished members from academia, industry, and
                            management who guide the institution towards excellence.
                        </p>
                    </div>

                    {/* Desktop table */}
                    <div className="hidden sm:block overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-vignan-purple/5">
                                    <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-vignan-purple uppercase tracking-wider">S.No</th>
                                    <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-vignan-purple uppercase tracking-wider">Name</th>
                                    <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-vignan-purple uppercase tracking-wider">Designation</th>
                                    <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-vignan-purple uppercase tracking-wider">Category</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {governingBodyMembers.map((member, index) => (
                                    <tr key={member.sno} className={`hover:bg-vignan-purple/5 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                                        <td className="px-4 md:px-6 py-3 md:py-4 text-sm text-gray-500 font-medium">{member.sno}</td>
                                        <td className="px-4 md:px-6 py-3 md:py-4 text-sm font-semibold text-gray-900">{member.name}</td>
                                        <td className="px-4 md:px-6 py-3 md:py-4">
                                            <span className="inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs font-medium bg-vignan-purple/10 text-vignan-purple">
                                                {member.designation}
                                            </span>
                                        </td>
                                        <td className="px-4 md:px-6 py-3 md:py-4 text-sm text-gray-600">{member.category}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile card list */}
                    <div className="sm:hidden divide-y divide-gray-100">
                        {governingBodyMembers.map((member, index) => (
                            <div key={member.sno} className={`p-4 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm">{member.name}</p>
                                        <p className="text-gray-500 text-xs mt-0.5">{member.category}</p>
                                    </div>
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-vignan-purple/10 text-vignan-purple flex-shrink-0">
                                        {member.designation}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
