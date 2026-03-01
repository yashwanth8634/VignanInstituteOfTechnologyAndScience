import Navbar from "../../components/HomePage/Navbar";
import Footer from "../../components/HomePage/Footer";
import Link from "next/link";
import {
    Calendar,
    FileText,
    Award,
    BookOpen,
    BookCheck,
    ChevronRight
} from "lucide-react";

export const metadata = {
    title: "Academics | VITS",
    description: "Explore academic programs, regulations, calendars, and syllabus at VITS.",
};

const academicLinks = [
    {
        title: "Academic Calendars",
        description: "Stay updated with the important dates, holidays, and academic schedules for all semesters.",
        href: "/academics/academic-calendars",
        icon: <Calendar className="w-8 h-8 text-vignan-purple" />,
    },
    {
        title: "Academic Regulations",
        description: "Comprehensive guidelines on academic performance, attendance, and graduation requirements.",
        href: "/academics/academic-regulations",
        icon: <FileText className="w-8 h-8 text-vignan-purple" />,
    },
    {
        title: "Certification Courses",
        description: "Enhance your skills with our wide range of industry-recognized professional certification programs.",
        href: "/academics/certification-courses",
        icon: <Award className="w-8 h-8 text-vignan-purple" />,
    },
    {
        title: "Examinations",
        description: "Access examination schedules, results, and important notifications from the Controller of Examinations.",
        href: "/academics/examinations",
        icon: <BookCheck className="w-8 h-8 text-vignan-purple" />,
    },
    {
        title: "Syllabus",
        description: "Detailed curriculum and syllabus for B.Tech, M.Tech, and other academic programs.",
        href: "/academics/syllabus",
        icon: <BookOpen className="w-8 h-8 text-vignan-purple" />,
    }
];

export default function AcademicsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Page Header */}
            <section className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-32 pb-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-3">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white font-medium">Academics</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">Academics</h1>
                    <p className="text-xl text-white opacity-90 max-w-2xl">
                        Nurturing the next generation of engineers through rigorous curriculum,
                        modern pedagogical approaches, and professional ethics.
                    </p>
                </div>
            </section>

            {/* Academic Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {academicLinks.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-1 border border-gray-100"
                        >
                            <div className="w-14 h-14 bg-vignan-purple/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-vignan-purple transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed normal-case">
                                {item.description}
                            </p>
                            <div className="mt-4 flex items-center text-vignan-purple text-sm font-semibold">
                                Learn more
                                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
