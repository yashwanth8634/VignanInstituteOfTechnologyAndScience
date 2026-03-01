import Navbar from "../../components/HomePage/Navbar";
import Footer from "../../components/HomePage/Footer";
import Link from "next/link";
import {
    Scale,
    ShieldCheck,
    Wrench,
    Target,
    Award,
    Users,
    FileWarning,
    UserCircle,
    ChevronRight
} from "lucide-react";

export const metadata = {
    title: "Mandatory Disclosures | VITS",
    description: "Access institutional disclosures, policies, and committee information at VITS.",
};

const disclosureLinks = [
    {
        title: "Right to Information (RTI)",
        description: "Information about the Right to Information Act and how to access institutional data.",
        href: "/mandatory-disclosures/rti",
        icon: <Scale className="w-8 h-8 text-vignan-purple" />,
    },
    {
        title: "IT Policy",
        description: "Guidelines and protocols for the use of institutional IT resources and digital infrastructure.",
        href: "/mandatory-disclosures/it-policy",
        icon: <ShieldCheck className="w-8 h-8 text-vignan-purple" />,
        external: true
    },
    {
        title: "Maintenance Policy",
        description: "Policy framework for the maintenance of campus infrastructure and physical facilities.",
        href: "/mandatory-disclosures/maintenance-policy",
        icon: <Wrench className="w-8 h-8 text-vignan-purple" />,
        external: true
    },
    {
        title: "Strategic Plans",
        description: "Institutional strategic plan and deployment document for long-term growth and excellence.",
        href: "/mandatory-disclosures/strategic-plans",
        icon: <Target className="w-8 h-8 text-vignan-purple" />,
    },
    {
        title: "ARIIA",
        description: "Atal Ranking of Institutions on Innovation Achievements disclosure and ranking details.",
        href: "/mandatory-disclosures/ariia",
        icon: <Award className="w-8 h-8 text-vignan-purple" />,
        external: true
    },
    {
        title: "Online Grievance",
        description: "Portal for students and staff to submit and track institutional grievances and concerns.",
        href: "http://103.10.134.234/login/Grievance",
        icon: <FileWarning className="w-8 h-8 text-vignan-purple" />,
        external: true
    },
    {
        title: "College Committees",
        description: "Details of various college-level committees ensuring effective governance and administration.",
        href: "/mandatory-disclosures/committees",
        icon: <Users className="w-8 h-8 text-vignan-purple" />,
    },
    {
        title: "Professional Bodies",
        description: "Information about various professional societies and student chapters active in the institution.",
        href: "/mandatory-disclosures/professional-bodies",
        icon: <UserCircle className="w-8 h-8 text-vignan-purple" />,
    }
];

export default function DisclosuresPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Page Header */}
            <section className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-32 pb-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-3">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white font-medium">Mandatory Disclosures</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">Mandatory Disclosures</h1>
                    <p className="text-xl text-white opacity-90 max-w-2xl">
                        Upholding the highest standards of accountability and governance through
                        comprehensive public disclosures and proactive compliance.
                    </p>
                </div>
            </section>

            {/* Disclosures Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {disclosureLinks.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-1 border border-gray-100 flex flex-col"
                        >
                            <div className="w-14 h-14 bg-vignan-purple/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-vignan-purple transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed normal-case flex-1">
                                {item.description}
                            </p>
                            <div className="mt-4 flex items-center text-vignan-purple text-sm font-semibold">
                                {item.external ? "Open Portal" : "Learn more"}
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
