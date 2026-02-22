import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "CEO's Message | Vignan Institute of Technology and Science",
    description:
        "Message from Mr. Shravan Boyapati, CEO of Vignan Group of Institutions.",
};

export default function CEOPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Page Header */}
            <div className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 
            backdrop-blur-md shadow-lg pt-30 pb-7">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-3">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/about" className="hover:text-white transition-colors">About</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white font-medium">CEO</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        CEO&apos;s Message
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">

                        {/* Photo Panel */}
                        <div className="w-full md:w-2/5 lg:w-1/3 bg-[#fbf9fa] flex flex-col items-center justify-center py-10 px-6 md:px-10 rounded-l-2xl">
                            {/* Larger photo */}
                            <div className="relative w-64 h-80 sm:w-72 sm:h-[22rem] md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-6 group border-[3px] border-vignan-purple transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl cursor-pointer">
                                <Image
                                    src="/AboutPage/Ceo.webp"
                                    alt="Mr. Shravan Boyapati - CEO"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 256px, 288px"
                                />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-vignan-blue text-center tracking-tight">
                                Mr. Shravan Boyapati
                            </h2>
                            <p className="text-vignan-purple font-bold text-center mt-1 text-lg">
                                CEO
                            </p>
                            <p className="text-gray-500 font-medium text-sm text-center mt-1.5">
                                Vignan Group of Institutions
                            </p>
                        </div>

                        {/* Message */}
                        <div className="w-full md:w-3/5 lg:w-2/3 p-6 sm:p-8 md:p-10">
                            <div className="flex items-start gap-3 mb-6">
                                <div className="w-1 h-10 bg-vignan-purple rounded-full flex-shrink-0 mt-1"></div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-snug">
                                    &ldquo;Focus on your strengths. Every individual is
                                    different.&rdquo;
                                </h3>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                                <p>
                                    Mr. Shravan Boyapati has been instrumental in carving the
                                    institution into what it is today. His vision and leadership
                                    have been pivotal in balancing student outlook with
                                    institutional prosperity, ensuring that Vignan remains at the
                                    forefront of technical education.
                                </p>
                                <p>
                                    &ldquo;Focus on your strengths. Every individual is
                                    different. Make your own decisions and chart your own path.
                                    The world needs people who can think independently and
                                    contribute uniquely to society.&rdquo;
                                </p>
                                <p>
                                    Under his guidance, Vignan has grown into a premier
                                    institution that not only imparts technical knowledge but also
                                    fosters innovation, entrepreneurship, and leadership among its
                                    students. He believes in creating an environment where
                                    students can explore their potential and develop into
                                    well-rounded professionals.
                                </p>
                                <p>
                                    His commitment to excellence is reflected in the
                                    institution&apos;s state-of-the-art infrastructure, industry
                                    partnerships, and placement record. He continues to drive
                                    Vignan towards greater heights with a clear vision for the
                                    future of technical education.
                                </p>
                                <p>
                                    The CEO&apos;s office remains open to students, faculty, and
                                    stakeholders, reflecting his belief in transparent and
                                    accessible leadership. He encourages every student to dream
                                    big and work hard to achieve their goals.
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <p className="font-bold text-gray-900 text-base md:text-lg">Mr. Shravan Boyapati</p>
                                <p className="text-vignan-purple font-medium text-sm md:text-base">
                                    CEO, Vignan Group of Institutions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
