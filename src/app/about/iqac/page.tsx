import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "IQAC | Vignan Institute of Technology and Science",
    description:
        "Internal Quality Assurance Cell (IQAC) of Vignan Institute of Technology and Science.",
};

const iqacObjectives = [
    "To develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance of the institution.",
    "To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.",
    "To channelize and systematize the efforts and measures of an institution towards academic excellence.",
    "To act as a nodal agency of the institution for coordinating quality-related activities, including adoption and dissemination of best practices.",
    "To develop and apply quality benchmarks/parameters for the various academic and administrative activities of the institution.",
    "To facilitate the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process.",
];

const accreditations = [
    {
        title: "NAAC Accreditation",
        description:
            "National Assessment and Accreditation Council — Vignan ITS has been accredited by NAAC, recognizing the institution's commitment to quality education.",
        logo: "/MouLogos/NAAC.png",
        badge: null,
        color: null,
    },
    {
        title: "NBA Accreditation",
        description:
            "National Board of Accreditation — Multiple programs at VGNT are NBA accredited, ensuring they meet the highest standards of technical education.",
        logo: "/MouLogos/nba.png",
        badge: null,
        color: null,
    },
    {
        title: "ISO 9001:2015",
        description:
            "The institution is ISO 9001:2015 certified, demonstrating its commitment to quality management systems and continuous improvement.",
        logo: "/MouLogos/iso.png",
        badge: "ISO",
        color: "bg-green-600",
    },
    {
        title: "NIRF Ranking",
        description:
            "Vignan ITS participates in the National Institutional Ranking Framework (NIRF), reflecting transparency and accountability in institutional performance.",
        logo: "/MouLogos/nirf.png",
        badge: null,
        color: null,
    },
];

export default function IQACPage() {
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
                        <span className="text-white font-medium">IQAC</span>
                    </nav>


                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Internal Quality Assurance Cell (IQAC)
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-8 md:space-y-12">
                {/* About IQAC */}
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">About IQAC</h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-4">
                        The Internal Quality Assurance Cell (IQAC) was established at
                        Vignan Institute of Technology and Science as a post-accreditation
                        quality sustenance measure. Since quality enhancement is a
                        continuous process, the IQAC became a part of the institution&apos;s
                        system and works towards realizing the goals of quality enhancement
                        and sustenance.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                        The prime task of the IQAC is to develop a system for conscious,
                        consistent and catalytic improvement in the overall performance of
                        institutions. For this, during the post-accreditation period, it
                        will channelize all efforts and measures of the institution towards
                        promoting its holistic academic excellence.
                    </p>
                </div>

                {/* Objectives */}
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                        Objectives of IQAC
                    </h2>
                    <ul className="space-y-4">
                        {iqacObjectives.map((objective, index) => (
                            <li key={index} className="flex items-start gap-3 sm:gap-4">
                                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-vignan-purple/10 rounded-full flex items-center justify-center text-vignan-purple font-bold text-xs sm:text-sm mt-0.5">
                                    {index + 1}
                                </div>
                                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{objective}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Accreditations */}
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                        Accreditations &amp; Rankings
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {accreditations.map((item) => (
                            <div
                                key={item.title}
                                className="bg-white rounded-2xl shadow-md p-6 sm:p-8 flex items-start gap-4 sm:gap-6 hover:shadow-lg transition-shadow"
                            >
                                {/* Logo or badge */}
                                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                                    {item.logo ? (
                                        <Image
                                            src={item.logo}
                                            alt={item.title}
                                            width={64}
                                            height={64}
                                            className="object-contain w-full h-full"
                                        />
                                    ) : (
                                        <div className={`${item.color} text-white font-bold text-sm px-3 py-2 rounded-lg`}>
                                            {item.badge}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.description}</p>
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
