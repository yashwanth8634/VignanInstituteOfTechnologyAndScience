import Navbar from "../../components/HomePage/Navbar";
import Footer from "../../components/HomePage/Footer";
import Link from "next/link";
import {
    Waves,
    Monitor,
    Cpu,
    MessageSquare,
    Dumbbell,
    Coffee,
    Bus,
    Home,
    Settings,
    ChevronRight
} from "lucide-react";

export const metadata = {
    title: "Facilities | VITS",
    description: "Explore the world-class facilities and campus amenities at VITS.",
};

const facilityLinks = [
    {
        title: "Vignan Dhara",
        description: "Our Central Library – a treasure house of knowledge with a vast collection of books, journals, and digital resources.",
        href: "/facilities/vignan-dhara",
        icon: <Waves className="w-8 h-8 text-vignan-purple" />,
    },
    {
        title: "ICT Facilities",
        description: "Modern Information and Communication Technology infrastructure supporting digital learning and research.",
        href: "/facilities/ict-facilities",
        icon: <Monitor className="w-8 h-8 text-vignan-purple" />,
    },
    {
        title: "Computer Center",
        description: "State-of-the-art computing labs with high-speed internet and latest software for academic and research work.",
        href: "/facilities/computer-center",
        icon: <Cpu className="w-8 h-8 text-vignan-purple" />,
    },
    {
        title: "Communication Skills",
        description: "Dedicated labs for enhancing language proficiency, soft skills, and professional communication abilities.",
        href: "/facilities/communication-soft-skills",
        icon: <MessageSquare className="w-8 h-8 text-vignan-purple" />,
    },
    {
        title: "Physical Education",
        description: "Extensive sports infrastructure including playgrounds, gymnasium, and facilities for various indoor and outdoor games.",
        href: "/facilities/physical-education",
        icon: <Dumbbell className="w-8 h-8 text-vignan-purple" />,
    },
    {
        title: "Cafeteria",
        description: "A hygienic and vibrant space offering a variety of nutritious food and refreshments for students and staff.",
        href: "/facilities/cafeteria",
        icon: <Coffee className="w-8 h-8 text-vignan-purple" />,
    },
    {
        title: "Transportation",
        description: "A fleet of modern buses providing safe and comfortable commute to students and staff across the city.",
        href: "/facilities/transportation",
        icon: <Bus className="w-8 h-8 text-vignan-purple" />,
    },
    {
        title: "Hostel",
        description: "Comfortable and secure residential facilities offering a home-away-from-home experience for outstation students.",
        href: "/facilities/hostel",
        icon: <Home className="w-8 h-8 text-vignan-purple" />,
    },
    {
        title: "IT Maintenance",
        description: "Comprehensive IT management and maintenance system ensuring seamless operation of campus digital services.",
        href: "https://drive.google.com/file/d/1WdUDbhtlxtr_BKL6l0U3mRbaS2C6KXVB/view",
        icon: <Settings className="w-8 h-8 text-vignan-purple" />,
        external: true
    }
];

export default function FacilitiesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Page Header */}
            <section className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-32 pb-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-3">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white font-medium">Facilities</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">Facilities</h1>
                    <p className="text-xl text-white opacity-90 max-w-2xl">
                        World-class infrastructure designed to foster an environment
                        of learning, innovation, and overall student development.
                    </p>
                </div>
            </section>

            {/* Facilities Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {facilityLinks.map((item) => (
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
                                {item.external ? "Open Document" : "Learn more"}
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
