import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { FileText, Award, Calendar, ExternalLink } from "lucide-react";

export const metadata = {
    title: "Examinations | Vignan Institute of Technology and Science",
    description: "Information about examinations, evaluation, and results at Vignan Institute of Technology and Science.",
};

const examSections = [
    {
        title: "Exam Cell",
        content: "The Examination Cell is headed by the Controller of Examinations and is responsible for conducting all internal and external examinations. It ensures the smooth functioning of the evaluation process and timely declaration of results.",
        icon: <FileText className="w-8 h-8 text-vignan-purple" />,
    },
    {
        title: "Evaluation System",
        content: "The institute follows a comprehensive evaluation system comprising Continuous Internal Evaluation (CIE) and Semester End Examinations (SEE). This ensures a balanced assessment of a student's performance throughout the academic year.",
        icon: <Award className="w-8 h-8 text-vignan-purple" />,
    },
    {
        title: "Results & Schedules",
        content: "Exam schedules, timetables, and results are regularly updated. Students can access their results and other examination-related notifications through the official portal or notice boards.",
        icon: <Calendar className="w-8 h-8 text-vignan-purple" />,
    }
];

export default function Examinations() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Page Header */}
            <div className="bg-vignan-purple pt-32 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Examinations
                    </h1>
                    <p className="text-purple-200 text-lg max-w-2xl mx-auto">
                        Ensuring transparency and excellence in student assessment.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {examSections.map((section, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-100"
                        >
                            <div className="w-14 h-14 bg-vignan-purple/10 rounded-2xl flex items-center justify-center mb-6">
                                {section.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {section.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Quick Links Section */}
                <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <ExternalLink className="w-6 h-6 text-vignan-purple" />
                        Quick Links
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-vignan-purple/5 hover:text-vignan-purple transition-all group">
                            <span className="font-medium">JNTUH Exam Notifications</span>
                            <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <Link href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-vignan-purple/5 hover:text-vignan-purple transition-all group">
                            <span className="font-medium">Download Hall Tickets</span>
                            <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <Link href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-vignan-purple/5 hover:text-vignan-purple transition-all group">
                            <span className="font-medium">Previous Question Papers</span>
                            <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <Link href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-vignan-purple/5 hover:text-vignan-purple transition-all group">
                            <span className="font-medium">Academic Calendar</span>
                            <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}
