import Navbar from "../../components/HomePage/Navbar";
import Footer from "../../components/HomePage/Footer";
import Link from "next/link";
import {
    Rocket,
    Newspaper,
    Briefcase,
    Heart,
    Lightbulb,
    Mail,
    Users,
    Calendar,
    Leaf,
    Shield,
    Trophy,
    Star,
    Zap,
    FlaskConical,
    Activity,
    UserPlus,
    MapPin,
    Layout,
    ChevronRight
} from "lucide-react";

export const metadata = {
    title: "Information | VITS",
    description: "Access institutional news, events, student activities, and more at VITS.",
};

const infoLinks = [
    { title: "Student Start-Ups", description: "Empowering young entrepreneurs to build innovative ventures.", href: "/information/student-startups", icon: <Rocket className="w-8 h-8 text-vignan-purple" /> },
    { title: "VGNT in Media", description: "Institution news and highlights featured in various media outlets.", href: "/information/media", icon: <Newspaper className="w-8 h-8 text-vignan-purple" /> },
    { title: "Consultancy Bureau", description: "Industrial consultancy services and collaborative projects.", href: "/information/consultancy", icon: <Briefcase className="w-8 h-8 text-vignan-purple" /> },
    { title: "Institutional Values", description: "Core values and principles guiding our institution.", href: "/information/values", icon: <Heart className="w-8 h-8 text-vignan-purple" /> },
    { title: "EDC Centre", description: "Entrepreneurship Development Cell fostering business innovation.", href: "/information/edc", icon: <Lightbulb className="w-8 h-8 text-vignan-purple" /> },
    { title: "News Letters", description: "Monthly and quarterly updates on campus activities.", href: "/information/newsletters", icon: <Mail className="w-8 h-8 text-vignan-purple" /> },
    { title: "Alumni", description: "Our global network of graduates and their achievements.", href: "/information/alumni", icon: <Users className="w-8 h-8 text-vignan-purple" /> },
    { title: "College Events", description: "Past and upcoming seminars, fests, and workshops.", href: "/information/events", icon: <Calendar className="w-8 h-8 text-vignan-purple" /> },
    { title: "Green Initiatives", description: "Our commitment to environmental sustainability.", href: "/information/green-initiatives", icon: <Leaf className="w-8 h-8 text-vignan-purple" /> },
    { title: "VITS–NSS", description: "National Service Scheme activities and social service.", href: "/information/nss", icon: <Shield className="w-8 h-8 text-vignan-purple" /> },
    { title: "Achievements", description: "Student and faculty highlights and recognitions.", href: "/information/achievements", icon: <Trophy className="w-8 h-8 text-vignan-purple" /> },
    { title: "Skills Enhancement", description: "Specialized training programs for professional growth.", href: "/information/skills", icon: <Star className="w-8 h-8 text-vignan-purple" /> },
    { title: "Innovation", description: "Research labs and platforms for technological exploration.", href: "/information/innovation", icon: <Zap className="w-8 h-8 text-vignan-purple" /> },
    { title: "IDEA LAB", description: "The center for practical implementation and prototyping.", href: "/information/idea-lab", icon: <FlaskConical className="w-8 h-8 text-vignan-purple" /> },
    { title: "I & E Activities", description: "Innovation and Entrepreneurship initiative activities.", href: "/information/ie-activities", icon: <Activity className="w-8 h-8 text-vignan-purple" /> },
    { title: "Registration", description: "Student portals and institutional registration links.", href: "/information/registration", icon: <UserPlus className="w-8 h-8 text-vignan-purple" /> },
    { title: "Route Map", description: "Navigation and campus location information.", href: "/information/route-map", icon: <MapPin className="w-8 h-8 text-vignan-purple" /> },

];

export default function InformationPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Page Header */}
            <section className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-32 pb-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-3">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white font-medium">Information</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">Institutional Hub</h1>
                    <p className="text-xl text-white opacity-90 max-w-2xl">
                        Stay connected with the latest happenings, initiatives, and digital resources
                        of VITS.
                    </p>
                </div>
            </section>

            {/* Information Cards Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {infoLinks.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
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
