import Navbar from "../../../components/HomePage/Navbar";
import Footer from "../../../components/HomePage/Footer";
import Link from "next/link";
import { Download, FileText, Cpu, MessageCircle, HeartHandshake, MapPin, ExternalLink } from "lucide-react";

export const metadata = {
    title: "Skills Enhancement | VITS",
    description: "Information about Skills Enhancement programs and reports at VITS.",
};

const skillCategories = [
    {
        title: "Soft Skills Programs",
        description: "Training programs focused on personality development, leadership, and interpersonal skills.",
        icon: HeartHandshake,
        color: "text-pink-600",
        bgColor: "bg-pink-50",
        borderColor: "border-pink-100",
        documents: [
            { year: "2020-2021", link: "https://drive.google.com/file/d/1X2rqi_8Awq6HF0limHafkQTeAlqjTTZW/view" },
            { year: "2019-2020", link: "https://drive.google.com/file/d/1fkWzYiEiby4qE7VWAGXZRZKOMfOs1rdN/view" },
            { year: "2018-2019", link: "https://drive.google.com/file/d/1TTBHDfFCVo-3PIIZ6OGZiZmhdDlnGdX6/view" },
            { year: "2017-2018", link: "https://drive.google.com/file/d/1_bgyv60CFkSaNN6uPUIInECk6ontBnL4/view" },
            { year: "2016-2017", link: "https://drive.google.com/file/d/1H_sEJ-l8Yq24uwA1Q8-nonepk-5g8aNq/view" },
        ],
        geoTagLink: "https://drive.google.com/file/d/1ulwb_CFGvedX4mx_Pfv3PbWXoRy35GQ6/view"
    },
    {
        title: "Language & Communication Skills",
        description: "Initiatives to improve verbal and written communication proficiency for professional success.",
        icon: MessageCircle,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-100",
        documents: [
            { year: "2020-2021", link: "https://drive.google.com/file/d/1cGDYLwMiK3uR3KBraD81H_-b1Ka0gqtE/view" },
            { year: "2019-2020", link: "https://drive.google.com/file/d/1QIKLmb4oOKA_K_BG0LZuHsRKALiyoZWK/view" },
            { year: "2018-2019", link: "https://drive.google.com/file/d/1-LwciLGnfd66gWCDPaoeWvNR3CsiZCvu/view" },
            { year: "2017-2018", link: "https://drive.google.com/file/d/16NMOkSpPk3UMQjJEDAF6uEgZUaYCIiPZ/view" },
            { year: "2016-2017", link: "https://drive.google.com/file/d/1jt7K6Ju_mAR8FlzGUh9BnLl4tkfLjovI/view" },
        ],
        geoTagLink: "http://ENGLISH%20LANGUAGE%20COMMUNICATION.pdf" // Note: Link preserved from source, though appears incomplete
    },
    {
        title: "Life Skills",
        description: "Workshops on yoga, physical fitness, health, and hygiene for holistic well-being.",
        icon: FileText,
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-100",
        documents: [
            { year: "2020-2021", link: "https://drive.google.com/file/d/1QQQJ-CX7rXMDcswZiKXUHlWWbv-wPJCc/view" },
            { year: "2019-2020", link: "https://drive.google.com/file/d/1r5deNBjJ37sbMO0gprvVUY0dtHkC7mkG/view" },
            { year: "2018-2019", link: "https://drive.google.com/file/d/1L18_BJFGMF2W9wmsJnnw5qdkgLEXwx1J/view" },
            { year: "2017-2018", link: "https://drive.google.com/file/d/1-FRkJqCofcZTkSyo3RNtKRsEtQ4h_Rto/view" },
            { year: "2016-2017", link: "https://drive.google.com/file/d/1UWBj5w4xd2-9-KQ_FhnjaiJ6I9gCceMj/view" },
        ],
        geoTagLink: "https://drive.google.com/file/d/1V3LiB5IkNax6D1ADd-1WD84KBnaqzbum/view"
    },
    {
        title: "ICT / Computing Skills",
        description: "Technical training on latest software, tools, and computing trends.",
        icon: Cpu,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-100",
        documents: [
            { year: "2020-2021", link: "https://drive.google.com/file/d/1X2rqi_8Awq6HF0limHafkQTeAlqjTTZW/view" },
            { year: "2019-2020", link: "https://drive.google.com/file/d/1fkWzYiEiby4qE7VWAGXZRZKOMfOs1rdN/view" },
            { year: "2018-2019", link: "https://drive.google.com/file/d/1TTBHDfFCVo-3PIIZ6OGZiZmhdDlnGdX6/view" },
            { year: "2017-2018", link: "https://drive.google.com/file/d/1_bgyv60CFkSaNN6uPUIInECk6ontBnL4/view" },
            { year: "2016-2017", link: "https://drive.google.com/file/d/1H_sEJ-l8Yq24uwA1Q8-nonepk-5g8aNq/view" },
        ],
        geoTagLink: "https://drive.google.com/file/d/1bvD02_j244AVk9h7PPipnrR0OTvXailF/view"
    },
];

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Page Header */}
            <section className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-32 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-6 flex items-center space-x-2">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/information" className="hover:text-white transition-colors">Information</Link>
                        <span>/</span>
                        <span className="text-white font-medium">Skills</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills Enhancement</h1>
                    <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                        Comprehensive capacity building and skills enhancement initiatives for holistic student development.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div key={index} className={`bg-white rounded-3xl p-8 border ${category.borderColor} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col`}>
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${category.bgColor} ${category.color}`}>
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h2>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3 flex-grow">
                                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Annual Reports</h3>
                                    {category.documents.map((doc, idx) => (
                                        <a
                                            key={idx}
                                            href={doc.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-colors group"
                                        >
                                            <span className="text-sm font-medium text-gray-700">Academic Year {doc.year}</span>
                                            <span className="text-xs font-bold text-vignan-purple flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                Download <Download className="w-3 h-3" />
                                            </span>
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <a
                                        href={category.geoTagLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-colors ${category.bgColor} ${category.color} hover:brightness-95`}
                                    >
                                        <MapPin className="w-4 h-4" />
                                        View Geotagged Photographs
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>

            <Footer />
        </div>
    );
}