import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Link from "next/link";
import { Users, Calendar } from "lucide-react";

export const metadata = {
    title: "Research | VITS",
    description:
        "Explore research activities, committees, and conferences at Vignan Institute of Technology and Science.",
};

const committeeMembers = [
    { sno: 1, name: "Prof. Neelakantan Krishnan", designation: "Dean R&D, VGNT" },
    { sno: 2, name: "Dr. Chakravarthy", designation: "Former Director, CPDC, ASL, DRDL, Hyderabad — (Convenor)" },
    { sno: 3, name: "Dr. N. Eshwar Prasad", designation: "Director, RCMA, Cemilac, DRDO, Hyderabad — (Honorary Member)" },
    { sno: 4, name: "Sri Madhav", designation: "MD, Spectrochem Ltd — (Honorary Member)" },
    { sno: 5, name: "Dr. G. Durga Sukumar", designation: "Principal, VGNT" },
    { sno: 6, name: "Dr. G. Raja Vikram", designation: "HOD CSE, VGNT" },
    { sno: 7, name: "Dr. T. Ram Subba Reddy", designation: "HOD EEE, VGNT" },
    { sno: 8, name: "Dr. N. Phani Kumar", designation: "HOD BS&H Dept, VGNT" },
    { sno: 9, name: "Dr. G. Narayan Sangam", designation: "Associate Professor, Department of Civil Engineering, VGNT" },
    { sno: 10, name: "Sri N. Dinesh Kumar", designation: "HOD ECE, VGNT" },
    { sno: 11, name: "Sri N. Leela Prasad", designation: "HOD MECH, VGNT" },
    { sno: 12, name: "Dr. D. Soundar Rajan", designation: "HOD CIVIL, VGNT" },
];

const conferences = [
    {
        title: "International Conference on Research and Advances in Mechanical Engineering (ICRAME-2020)",
        date: "10th & 11th December 2020",
        organizer: "Department of Mechanical Engineering",
        type: "International",
    },
    {
        title: "National Conference on Advances in Civil Engineering (NCACE-2020)",
        date: "29th & 30th December 2020",
        organizer: "Department of Civil Engineering",
        type: "National",
    },
];

export default function ResearchPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Page Header */}
            <section className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-32 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-3">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white font-medium">Research</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Research</h1>
                    <p className="text-xl text-white opacity-90 max-w-2xl">
                        Advancing knowledge through rigorous inquiry, collaboration with industry
                        and R&D laboratories, and innovative academic conferences.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

                {/* ── Research Committee ── */}
                <section>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-vignan-purple/10 rounded-2xl flex items-center justify-center shrink-0">
                            <Users className="w-6 h-6 text-vignan-purple" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-vignan-blue">Research Committee</h2>
                    </div>
                    <div className="w-20 h-1 bg-vignan-purple rounded-full mb-4 ml-15" />
                    <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
                        The Research Committee comprises a team of experts from the college and eminent persons
                        from various industries and R&D labs, providing a sense of direction to the research
                        activities of the institution.
                    </p>

                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
                        <table className="w-full border-collapse bg-white">
                            <thead>
                                <tr className="bg-vignan-purple text-white">
                                    <th className="p-4 text-left border border-white/20 w-16 font-semibold">S.No</th>
                                    <th className="p-4 text-left border border-white/20 font-semibold">Name</th>
                                    <th className="p-4 text-left border border-white/20 font-semibold">Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {committeeMembers.map((member) => (
                                    <tr
                                        key={member.sno}
                                        className="even:bg-gray-50 border-b border-gray-100 last:border-0 hover:bg-vignan-purple/5 transition-colors"
                                    >
                                        <td className="p-4 border-r border-gray-100 text-center font-medium text-gray-500">
                                            {member.sno}
                                        </td>
                                        <td className="p-4 border-r border-gray-100 font-semibold text-gray-800">
                                            {member.name}
                                        </td>
                                        <td className="p-4 text-vignan-blue font-medium">
                                            {member.designation}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                        {committeeMembers.map((member) => (
                            <div
                                key={member.sno}
                                className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col gap-2"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <span className="font-bold text-gray-900 leading-snug">{member.name}</span>
                                    <span className="shrink-0 text-xs font-bold text-vignan-purple bg-vignan-purple/10 px-2 py-1 rounded-full">
                                        #{member.sno}
                                    </span>
                                </div>
                                <p className="text-sm text-vignan-blue font-medium leading-relaxed">{member.designation}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Conferences ── */}
                <section>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-vignan-purple/10 rounded-2xl flex items-center justify-center shrink-0">
                            <Calendar className="w-6 h-6 text-vignan-purple" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-vignan-blue">Conferences Organized</h2>
                    </div>
                    <div className="w-20 h-1 bg-vignan-purple rounded-full mb-8 ml-15" />

                    <div className="grid sm:grid-cols-2 gap-6">
                        {conferences.map((conf, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                            >
                                {/* Top accent */}
                                <div className="h-1.5 w-full bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600" />
                                <div className="p-7">
                                    {/* Type Badge */}
                                    <span className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 ${conf.type === "International"
                                            ? "bg-vignan-purple/10 text-vignan-purple"
                                            : "bg-blue-100 text-blue-700"
                                        }`}>
                                        {conf.type} Conference
                                    </span>

                                    <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-vignan-purple transition-colors">
                                        {conf.title}
                                    </h3>

                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Calendar className="w-4 h-4 text-vignan-purple shrink-0" />
                                            <span>{conf.date}</span>
                                        </div>
                                        <div className="flex items-start gap-2 text-gray-600">
                                            <Users className="w-4 h-4 text-vignan-purple shrink-0 mt-0.5" />
                                            <span>
                                                Organized by {conf.organizer},<br />
                                                Vignan Institute of Technology and Science
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            <Footer />
        </div>
    );
}
