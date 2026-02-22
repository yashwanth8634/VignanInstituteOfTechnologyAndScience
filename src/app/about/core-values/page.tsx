import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Link from "next/link";

export const metadata = {
    title: "Core Values | Vignan Institute of Technology and Science",
    description: "Core Values of Vignan Institute of Technology and Science.",
};

const coreValues = [
    {
        title: "Excellence and Innovation",
        description:
            "Setting the highest standards in academic and research pursuits. We foster a culture of research-oriented learning that encourages students and faculty to push boundaries and explore new frontiers of knowledge.",
        icon: (
            <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        ),
        iconBg: "bg-yellow-50",
        color: "from-yellow-400 to-orange-400",
        border: "border-yellow-200",
    },
    {
        title: "Equity & Diversity",
        description:
            "We believe in providing equal opportunities to all students regardless of their background. Our inclusive environment celebrates diversity and ensures that every student has access to quality education and resources.",
        icon: (
            <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        iconBg: "bg-blue-50",
        color: "from-blue-400 to-cyan-400",
        border: "border-blue-200",
    },
    {
        title: "Quality",
        description:
            "Maintaining the highest standards in all aspects of our operations — from teaching and research to infrastructure and student services. Quality is not just a goal but a way of life at VGNT.",
        icon: (
            <svg className="w-7 h-7 text-vignan-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        iconBg: "bg-purple-50",
        color: "from-vignan-purple to-purple-400",
        border: "border-purple-200",
    },
    {
        title: "Social Responsibility",
        description:
            "We are committed to making a positive impact on society. Our students are encouraged to engage with the community, participate in social initiatives, and develop a sense of responsibility towards the world around them.",
        icon: (
            <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        iconBg: "bg-green-50",
        color: "from-green-400 to-teal-400",
        border: "border-green-200",
    },
    {
        title: "Sustainability",
        description:
            "We are committed to environmental stewardship and sustainable practices. Our campus operations, research activities, and educational programs all reflect our dedication to preserving the environment for future generations.",
        icon: (
            <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        iconBg: "bg-emerald-50",
        color: "from-emerald-400 to-green-500",
        border: "border-emerald-200",
    },
    {
        title: "Academic & Personal Integrity",
        description:
            "Honesty, transparency, and ethical conduct are the cornerstones of our institution. We uphold the highest standards of academic integrity and personal ethics, preparing students to be trustworthy professionals and citizens.",
        icon: (
            <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        iconBg: "bg-red-50",
        color: "from-red-400 to-pink-400",
        border: "border-red-200",
    },
];

export default function CoreValuesPage() {
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
                        <span className="text-white font-medium">Core Values</span>
                    </nav>


                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Core Values
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Our Guiding Principles
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
                        These core values define who we are and guide everything we do at
                        Vignan Institute of Technology and Science.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {coreValues.map((value) => (
                        <div
                            key={value.title}
                            className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border ${value.border} group hover:-translate-y-1`}
                        >
                            <div className={`h-2 bg-gradient-to-r ${value.color}`}></div>
                            <div className="p-6 sm:p-8">
                                <div
                                    className={`w-14 h-14 ${value.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    {value.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
