import Navbar from "../../components/HomePage/Navbar";
import Footer from "../../components/HomePage/Footer";
import Link from "next/link";
import {
    Monitor,
    Brain,
    Database,
    Globe,
    Cpu,
    ChartBar,
    Gauge,
    Radio,
    Zap,
    Cog,
    Building2,
    FlaskConical,
    ChevronRight,
} from "lucide-react";

export const metadata = {
    title: "Departments | VITS",
    description:
        "Explore all departments at Vignan Institute of Technology and Science — from Computer Science to Civil Engineering.",
};

const departments = [
    {
        id: "cse",
        name: "Computer Science and Engineering",
        shortName: "CSE",
        description:
            "Equipping students with core computing skills, algorithms, software engineering, and emerging technologies for a rapidly evolving digital world.",
        icon: <Monitor className="w-8 h-8 text-vignan-purple" />,
    },
    {
        id: "cse-aiml",
        name: "CSE (Artificial Intelligence & Machine Learning)",
        shortName: "CSE-AIML",
        description:
            "Focused on AI, neural networks, and machine learning algorithms preparing students to build intelligent systems of tomorrow.",
        icon: <Brain className="w-8 h-8 text-vignan-purple" />,
    },
    {
        id: "cse-ds",
        name: "CSE (Data Science)",
        shortName: "CSE-DS",
        description:
            "Combining statistics, programming, and domain expertise to extract insights and drive decisions from complex data sets.",
        icon: <Database className="w-8 h-8 text-vignan-purple" />,
    },
    {
        id: "cse-it",
        name: "CSE (Information Technology)",
        shortName: "CSE-IT",
        description:
            "Bridging computing and business through IT infrastructure, networking, cybersecurity and enterprise application development.",
        icon: <Globe className="w-8 h-8 text-vignan-purple" />,
    },
    {
        id: "aiml",
        name: "Artificial Intelligence and Machine Learning",
        shortName: "AIML",
        description:
            "Deep-dive into AI research, robotics, computer vision, NLP and autonomous systems with a strong industry focus.",
        icon: <Cpu className="w-8 h-8 text-vignan-purple" />,
    },
    {
        id: "aids",
        name: "Artificial Intelligence and Data Science",
        shortName: "AIDS",
        description:
            "Merging AI innovation with data science methodologies to solve real-world problems using predictive and analytical models.",
        icon: <ChartBar className="w-8 h-8 text-vignan-purple" />,
    },
    {
        id: "eie",
        name: "Electronics Instrumentation and Engineering",
        shortName: "EIE",
        description:
            "Specialising in sensors, control systems, process instrumentation and industrial automation across diverse engineering domains.",
        icon: <Gauge className="w-8 h-8 text-vignan-purple" />,
    },
    {
        id: "ece",
        name: "Electronics and Communication Engineering",
        shortName: "ECE",
        description:
            "Covering VLSI, embedded systems, signal processing, telecommunications and IoT for the next generation of electronics engineers.",
        icon: <Radio className="w-8 h-8 text-vignan-purple" />,
    },
    {
        id: "eee",
        name: "Electrical and Electronics Engineering",
        shortName: "EEE",
        description:
            "Focusing on power systems, renewable energy, electrical machines, and smart grid technologies shaping the energy future.",
        icon: <Zap className="w-8 h-8 text-vignan-purple" />,
    },
    {
        id: "mech",
        name: "Mechanical Engineering",
        shortName: "MECH",
        description:
            "Providing strong foundations in thermodynamics, manufacturing, CAD/CAM, robotics and advanced materials engineering.",
        icon: <Cog className="w-8 h-8 text-vignan-purple" />,
    },
    {
        id: "civil",
        name: "Civil Engineering",
        shortName: "CIVIL",
        description:
            "Building tomorrow's infrastructure through structural analysis, geotechnical engineering, transportation systems and construction management.",
        icon: <Building2 className="w-8 h-8 text-vignan-purple" />,
    },
    {
        id: "bsh",
        name: "Basic Sciences and Humanities",
        shortName: "BS&H",
        description:
            "The foundational bedrock of engineering education — mathematics, physics, chemistry, English communication and social sciences.",
        icon: <FlaskConical className="w-8 h-8 text-vignan-purple" />,
    },
];

export default function DepartmentsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Page Header */}
            <section className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-32 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-3">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/academics" className="hover:text-white transition-colors">Academics</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white font-medium">Departments</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Departments</h1>
                    <p className="text-xl text-white opacity-90 max-w-2xl">
                        Discover world-class academic departments at VITS, each committed to
                        excellence in teaching, research, and innovation.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-6">
                        {[
                            { label: "Departments", value: "12" },
                            { label: "Faculty Members", value: "200+" },
                            { label: "Labs & Centers", value: "50+" },
                        ].map((stat) => (
                            <div key={stat.label} className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-white">{stat.value}</span>
                                <span className="text-purple-200 text-sm font-medium">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Department Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="mb-10 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-vignan-blue">Choose a Department</h2>
                    <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm md:text-base">
                        Click on any department to explore its overview, faculty, laboratories, research and student achievements.
                    </p>
                    <div className="mt-4 mx-auto w-20 h-1 bg-vignan-purple rounded-full" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {departments.map((dept) => (
                        <Link
                            key={dept.id}
                            href={`/departments/${dept.id}`}
                            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
                        >
                            <div className="h-1.5 w-full bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600" />
                            <div className="p-7">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-14 h-14 bg-vignan-purple/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                                        {dept.icon}
                                    </div>
                                    <span className="text-xs font-bold tracking-widest text-vignan-purple bg-vignan-purple/10 px-3 py-1.5 rounded-full uppercase">
                                        {dept.shortName}
                                    </span>
                                </div>
                                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-vignan-purple transition-colors leading-snug">
                                    {dept.name}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed normal-case line-clamp-3">
                                    {dept.description}
                                </p>
                                <div className="mt-5 flex items-center text-vignan-purple text-sm font-semibold">
                                    Explore Department
                                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
