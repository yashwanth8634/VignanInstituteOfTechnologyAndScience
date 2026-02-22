import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Link from "next/link";

export const metadata = {
    title: "Organogram | Vignan Institute of Technology and Science",
    description:
        "Organizational structure of Vignan Institute of Technology and Science.",
};

const orgStructure = [
    {
        level: "Top Management",
        roles: ["Chairman", "Vice-Chairman", "CEO"],
        color: "bg-vignan-purple",
        textColor: "text-white",
    },
    {
        level: "Academic Leadership",
        roles: ["Principal"],
        color: "bg-purple-600",
        textColor: "text-white",
    },
    {
        level: "Administrative",
        roles: ["Vice Principal", "Dean Academics", "Dean Student Affairs", "Dean R&D"],
        color: "bg-purple-500",
        textColor: "text-white",
    },
    {
        level: "Heads of Departments",
        roles: ["HOD - CSE", "HOD - CSE (AIML)", "HOD - CSE (DS)", "HOD - CSE (IT)", "HOD - AIML", "HOD - AIDS", "HOD - ECE", "HOD - EEE", "HOD - EIE", "HOD - Mech", "HOD - Civil"],
        color: "bg-purple-400",
        textColor: "text-white",
    },
    {
        level: "Support Cells",
        roles: ["Training & Placement Cell", "IQAC", "Research & Development Cell", "Examination Cell", "Library", "Sports & Cultural"],
        color: "bg-purple-200",
        textColor: "text-purple-900",
    },
];

export default function OrganogramPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Page Header */}
            <div className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-30 pb-7">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-3">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/about" className="hover:text-white transition-colors">About</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white font-medium">Organogram</span>
                    </nav>


                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Organogram
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 text-center">
                        Organizational Structure
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base text-center mb-10 md:mb-12">
                        Vignan Institute of Technology and Science
                    </p>

                    <div className="space-y-6">
                        {orgStructure.map((level, levelIndex) => (
                            <div key={level.level} className="relative">
                                {levelIndex < orgStructure.length - 1 && (
                                    <div className="absolute left-1/2 -bottom-6 w-0.5 h-6 bg-gray-300 z-10"></div>
                                )}
                                <div className="text-center mb-3">
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                                        {level.level}
                                    </span>
                                </div>
                                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                                    {level.roles.map((role) => (
                                        <div
                                            key={role}
                                            className={`${level.color} ${level.textColor} px-3 sm:px-5 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-shadow text-center`}
                                        >
                                            {role}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-14 pt-8 border-t border-gray-100">
                        <p className="text-gray-500 text-xs sm:text-sm text-center">
                            For the official organogram chart, please refer to the{" "}
                            <Link href="/mandatory-disclosures" className="text-vignan-purple hover:underline font-medium">
                                Mandatory Disclosures
                            </Link>{" "}
                            section.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
