import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Chairman's Message | Vignan Institute of Technology and Science",
    description:
        "Message from Dr. Lavu Rathaiah, Chairman of Vignan Group of Institutions.",
};

export default function ChairmanPage() {
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
                        <span className="text-white font-medium">Chairman</span>
                    </nav>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Chairman&apos;s Message
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">

                        {/* Photo Panel */}
                        <div className="w-full md:w-2/5 lg:w-1/3 bg-gradient-to-br from-vignan-purple/10 to-purple-50 flex flex-col items-center justify-center py-10 px-6 md:px-10">
                            {/* Larger photo */}
                            <div className="relative w-64 h-80 sm:w-72 sm:h-[22rem] md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl mb-6">
                                <Image
                                    src="/AboutSectionImages/Chairman.webp"
                                    alt="Dr. Lavu Rathaiah - Chairman"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 256px, 288px"
                                />
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center">
                                Dr. Lavu Rathaiah
                            </h2>
                            <p className="text-vignan-purple font-semibold text-center mt-1 text-base md:text-lg">
                                Chairman
                            </p>
                            <p className="text-gray-500 text-sm text-center mt-1">
                                Vignan Group of Institutions
                            </p>
                        </div>

                        {/* Message */}
                        <div className="w-full md:w-3/5 lg:w-2/3 p-6 sm:p-8 md:p-10">
                            <div className="flex items-start gap-3 mb-6">
                                <div className="w-1 h-10 bg-vignan-purple rounded-full flex-shrink-0 mt-1"></div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-snug">
                                    &ldquo;Well Thought-out Reforms In Technical Education Is The
                                    Need Of The Hour.&rdquo;
                                </h3>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                                <p>
                                    We are living in a transition era in India. The country is
                                    poised to take a great leap forward in the fields of Science
                                    and Technology. The need of the hour is skilled professionals
                                    who can contribute to the nation&apos;s growth and development.
                                </p>
                                <p>
                                    There is a growing gap between what the industry needs and
                                    what the current engineering education system provides. This
                                    gap needs to be bridged through well-thought-out reforms in
                                    technical education. At Vignan, we are committed to producing
                                    graduates who are not only technically sound but also possess
                                    the soft skills and ethical values required to succeed in
                                    today&apos;s competitive world.
                                </p>
                                <p>
                                    I resolve to rededicate Vignan to the national march towards
                                    &ldquo;Vision 2020&rdquo; and beyond. Our institutions are
                                    committed to providing world-class education that prepares
                                    students to meet the challenges of a rapidly changing
                                    technological landscape.
                                </p>
                                <p>
                                    We believe that education is not just about imparting
                                    knowledge, but about shaping character, building confidence,
                                    and nurturing the spirit of innovation and entrepreneurship.
                                    Our faculty, infrastructure, and academic programs are all
                                    geared towards this holistic development of our students.
                                </p>
                                <p>
                                    I invite you to be a part of the Vignan family and experience
                                    the difference that quality education can make in your life
                                    and career.
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <p className="font-bold text-gray-900 text-base md:text-lg">Dr. Lavu Rathaiah</p>
                                <p className="text-vignan-purple font-medium text-sm md:text-base">
                                    Chairman, Vignan Group of Institutions
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
