import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Award, BookOpen, ShieldCheck, Terminal, Lightbulb } from "lucide-react";

export const metadata = {
    title: "Certification Courses | Vignan Institute of Technology and Science",
    description: "Value-added and certification courses offered to enhance student skills.",
};

const certifications = [
    {
        title: "CISCO - Introduction to Packet Tracer",
        description: "Learn network simulation and visualization using Cisco Packet Tracer.",
        icon: <Terminal className="w-8 h-8 text-vignan-purple" />,
        category: "Networking"
    },
    {
        title: "CISCO - Cybersecurity Essentials",
        description: "Understand the fundamental principles of cybersecurity and how to protect networks.",
        icon: <ShieldCheck className="w-8 h-8 text-vignan-purple" />,
        category: "Cybersecurity"
    },
    {
        title: "CISCO - Introduction to Cybersecurity",
        description: "A beginner-friendly course covering the basics of cyber threats and defense mechanisms.",
        icon: <ShieldCheck className="w-8 h-8 text-vignan-purple" />,
        category: "Cybersecurity"
    },
    {
        title: "Technical Workshops",
        description: "Hands-on workshops on various technical topics like Plumbing Designing and Firefighting Services.",
        icon: <Lightbulb className="w-8 h-8 text-vignan-purple" />,
        category: "Skill Development"
    },
    {
        title: "Skill Enhancement Programs",
        description: "Various add-on programs conducted annually to improve employability and technical skills.",
        icon: <BookOpen className="w-8 h-8 text-vignan-purple" />,
        category: "General Skills"
    }
];

export default function CertificationCourses() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Page Header */}
            <div className="bg-vignan-purple pt-32 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Certification Courses
                    </h1>
                    <p className="text-purple-200 text-lg max-w-2xl mx-auto">
                        Enhancing employability with industry-relevant certifications and value-added courses.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-1 block h-full flex flex-col"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 bg-vignan-purple/10 rounded-xl flex items-center justify-center">
                                    {course.icon}
                                </div>
                                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                                    {course.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-vignan-purple transition-colors">
                                {course.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                                {course.description}
                            </p>

                            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-vignan-purple font-medium text-sm">
                                <Award className="w-4 h-4 mr-2" />
                                Request Details
                            </div>
                        </div>
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
                            Contact Placement Cell
                        </button>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}
