import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Link from "next/link";

export const metadata = {
    title: "Vision & Mission | Vignan Institute of Technology and Science",
    description:
        "Vision and Mission of Vignan Institute of Technology and Science.",
};

export default function VisionMissionPage() {
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
                        <span className="text-white font-medium">Vision &amp; Mission</span>
                    </nav>


                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Vision &amp; Mission
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Vision */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 border-t-4 border-vignan-purple">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-vignan-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-vignan-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Vision</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                            To evolve into a center of excellence in Science &amp; Technology
                            through creative and innovative practices in teaching-learning,
                            promoting academic achievement &amp; research excellence to produce
                            internationally accepted competitive and world class professionals
                            who are psychologically strong and emotionally balanced imbued with
                            social consciousness and ethical values.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 border-t-4 border-purple-400">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Mission</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                            To provide high quality academic programmes, training activities,
                            research facilities and opportunities supported by continuous
                            industry – institute interaction aimed at employability,
                            entrepreneurship, leadership and research aptitude among students
                            and contribute to the economic and technological development of the
                            region, state and nation.
                        </p>
                    </div>
                </div>

                {/* Quality Policy */}
                <div className="mt-6 md:mt-8 bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-vignan-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-vignan-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Quality Policy</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Vignan Institute of Technology and Science is committed to providing
                        quality technical education through continuous improvement of
                        teaching-learning processes, infrastructure, and industry
                        interactions. We strive to produce graduates who are technically
                        competent, ethically sound, and socially responsible, capable of
                        contributing to the growth of the nation and the global community.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
