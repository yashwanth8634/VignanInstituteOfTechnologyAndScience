import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Principal's Message | Vignan Institute of Technology and Science",
    description:
        "Message from Dr. G. Durga Sukumar, Principal of Vignan Institute of Technology and Science.",
};

export default function PrincipalPage() {
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
                        <span className="text-white font-medium">Principal</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Principal&apos;s Message
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
                                    src="/AboutPage/Principal.webp"
                                    alt="Dr. G. Durga Sukumar - Principal"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 256px, 288px"
                                />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-vignan-blue text-center tracking-tight">
                                Dr. G. Durga Sukumar
                            </h2>
                            <p className="text-gray-500 font-medium text-sm mt-1.5 text-center">Ph.D (IIT-R)</p>
                            <p className="text-vignan-purple font-bold text-center mt-1 text-lg">
                                Principal
                            </p>
                            <p className="text-gray-500 font-medium text-sm mt-1.5 text-center">
                                Vignan Institute of Technology and Science
                            </p>
                        </div>

                        {/* Message */}
                        <div className="w-full md:w-3/5 lg:w-2/3 p-6 sm:p-8 md:p-10">
                            <div className="flex items-start gap-3 mb-6">
                                <div className="w-1 h-10 bg-vignan-purple rounded-full flex-shrink-0 mt-1"></div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-snug">
                                    Warm Greetings and Welcome
                                </h3>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                                <p>
                                    Warm Greetings and welcome to Vignan Institute of Technology
                                    and Science. It is my privilege to lead this institution that
                                    has been committed to producing a talent pool of &ldquo;Global
                                    standards with Indian values.&rdquo;
                                </p>
                                <p>
                                    At VGNT, we believe in creative teaching-learning processes
                                    that go beyond the conventional classroom. Our faculty members
                                    are dedicated to nurturing the intellectual curiosity of
                                    students and helping them develop into well-rounded
                                    professionals who are ready to face the challenges of the
                                    modern world.
                                </p>
                                <p>
                                    Discipline and personality development are integral parts of
                                    our educational philosophy. We strive to instill in our
                                    students not just technical knowledge, but also the values of
                                    integrity, teamwork, and social responsibility that are
                                    essential for success in today&apos;s world.
                                </p>
                                <p>
                                    Our institution is equipped with state-of-the-art
                                    laboratories, libraries, and research facilities that provide
                                    students with the resources they need to excel in their chosen
                                    fields. We also have strong industry partnerships that provide
                                    students with valuable exposure to real-world applications of
                                    their learning.
                                </p>
                                <p>
                                    I invite you to explore all that VGNT has to offer and to
                                    join us in our mission to create the next generation of
                                    innovators, leaders, and change-makers. Together, we can build
                                    a brighter future for our nation and the world.
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <p className="font-bold text-gray-900 text-base md:text-lg">
                                    Dr. G. Durga Sukumar, Ph.D (IIT-R)
                                </p>
                                <p className="text-vignan-purple font-medium text-sm md:text-base">
                                    Principal, Vignan Institute of Technology and Science
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
