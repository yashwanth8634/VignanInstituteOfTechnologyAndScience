"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import { departments } from "@/data/departments";
import {
  BookOpen,
  User,
  Users,
  FileText,
  FlaskConical,
  Trophy,
  ChevronRight,
  ChevronDown,
  GraduationCap,
  Target,
  X,
  Mail,
  Award,
  Briefcase,
  BookMarked,
  Calendar,
  Book,
  Handshake,
  Presentation,
  Shield
} from "lucide-react";

/* ---------- Sidebar Menu ---------- */

const sidebarItems = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "vision", label: "Vision & Mission", icon: Target },
  { id: "hod", label: "HOD's Desk", icon: User },
  { id: "faculty", label: "Faculty", icon: Users },
  { id: "labs", label: "Laboratories", icon: FlaskConical },

  { id: "syllabus", label: "Syllabus", icon: FileText },
  { id: "course-materials", label: "Course Materials", icon: Book },

  { id: "research-projects", label: "Research / Consultancy Projects", icon: Briefcase },
  { id: "publications", label: "Publications", icon: BookOpen },
  { id: "mous", label: "MOUs", icon: Handshake },
  { id: "seminars", label: "Seminars / Workshops / Conferences", icon: Presentation },

  { id: "department-committee", label: "Department Level Committee", icon: Users },
  { id: "disciplinary-committee", label: "Disciplinary Committee", icon: Shield },

  { id: "clubs", label: "Clubs", icon: Users },
  { id: "achievements", label: "Achievements", icon: Trophy },
];

export default function DepartmentPage() {
  const params = useParams();
  const deptId = params.id as string;
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState<any>(null); // Using any temporarily to avoid import issues if type isn't updated yet, or use FacultyMember if imported
  const [activeOverviewTab, setActiveOverviewTab] = useState("about");

  // Look up the department by ID — returns 404 if not found
  const dept = departments[deptId];

  if (!dept) {
    return notFound();
  }

  const handleSectionChange = (id: string) => {
    setActiveSection(id);
    // Scroll to content on all screen sizes so the active section comes into view
    setTimeout(() => {
      const element = document.getElementById("dept-content");
      if (element) {
        // Calculate offset to account for the sticky header
        const yOffset = -220;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar variant="solid" />

      {/* ================= HEADER ================= */}
      <section className="relative lg:sticky lg:top-0 z-30 pt-28 pb-8 px-4 bg-white border-b border-vignan-purple transition-all duration-300">

        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-vignan-purple transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/academics"
              className="hover:text-vignan-purple transition-colors"
            >
              Academics
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/departments"
              className="hover:text-vignan-purple transition-colors"
            >
              Departments
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">
              {dept.name || deptId.toUpperCase()}
            </span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900" >
            {dept.fullName}
          </h1>

          <div className="w-27 h-1 bg-vignan-purple mt-3 rounded-full" />
        </div>
      </section>

      {/* ================= BODY ================= */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-6" id="dept-body">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Horizontal Tabs */}
          {/* Mobile Dropdown Menu */}
          <div className="lg:hidden mb-6 sticky top-24 z-20">
            <div className="relative">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm text-sm font-medium text-gray-800"
              >
                <div className="flex items-center gap-2">
                  {sidebarItems.find((i) => i.id === activeSection)?.icon && (
                    <span className="text-vignan-purple">
                      {(() => {
                        const Icon = sidebarItems.find(
                          (i) => i.id === activeSection
                        )?.icon;
                        return Icon ? <Icon className="w-4 h-4" /> : null;
                      })()}
                    </span>
                  )}
                  {sidebarItems.find((i) => i.id === activeSection)?.label}
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${mobileMenuOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Dropdown Content */}
              {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl overflow-y-auto max-h-[60vh] py-1 animate-in fade-in zoom-in-95 duration-200">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleSectionChange(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${activeSection === item.id
                        ? "bg-vignan-purple/5 text-vignan-purple font-semibold"
                        : "text-gray-600 hover:bg-gray-50"
                        }`}
                    >
                      <item.icon
                        className={`w-4 h-4 ${activeSection === item.id
                          ? "text-vignan-purple"
                          : "text-gray-400"
                          }`}
                      />
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-8">
            {/* ===== SIDEBAR (Desktop) ===== */}
            <aside className="hidden lg:block w-full lg:w-80 xl:w-96 shrink-0">
              <div className="sticky top-[280px] space-y-6 transition-all duration-300">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 max-h-[calc(100vh-320px)] overflow-y-auto">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSectionChange(item.id)}
                      className={`w-full flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeSection === item.id
                        ? "bg-vignan-purple text-white shadow-md"
                        : "text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Quick Facts Removed */}
              </div>
            </aside>

            {/* ===== MAIN CONTENT ===== */}
            <div className="flex-1 w-full" id="dept-content">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-8 md:p-10 lg:p-12 ">
                {activeSection === "overview" && (
                  <>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                      Department Overview
                    </h2>
                    <div className="w-24 h-1 bg-vignan-purple mt-4 mb-8 rounded-full" />

                    <div className="flex flex-wrap gap-3 mb-6">
                      <button
                        onClick={() => setActiveOverviewTab('about')}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeOverviewTab === 'about' ? 'bg-vignan-purple text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        About
                      </button>
                      <button
                        onClick={() => setActiveOverviewTab('peos')}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeOverviewTab === 'peos' ? 'bg-vignan-purple text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        PEOs
                      </button>
                      <button
                        onClick={() => setActiveOverviewTab('pos')}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeOverviewTab === 'pos' ? 'bg-vignan-purple text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        POs
                      </button>
                      <button
                        onClick={() => setActiveOverviewTab('psos')}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeOverviewTab === 'psos' ? 'bg-vignan-purple text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        PSOs
                      </button>
                    </div>

                    <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 min-h-[500px]">
                      <div className="text-gray-700 leading-relaxed text-justify text-base md:text-lg space-y-6 whitespace-pre-line animate-in fade-in duration-300">
                        {activeOverviewTab === 'about' && <p>{dept.overview}</p>}

                        {activeOverviewTab === 'peos' && (
                          <div>
                            <h3 className="text-xl font-bold text-vignan-blue mb-6">Program Educational Objectives (PEOs)</h3>
                            <ul className="space-y-4">
                              {dept.peos?.length > 0 ? dept.peos.map((item, index) => (
                                <li key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                  <div className="mt-1 w-2.5 h-2.5 rounded-full bg-vignan-purple shrink-0" />
                                  <span className="text-gray-700 leading-relaxed">{item}</span>
                                </li>
                              )) : <p className="text-gray-500 italic">Information will be updated soon.</p>}
                            </ul>
                          </div>
                        )}

                        {activeOverviewTab === 'pos' && (
                          <div>
                            <h3 className="text-xl font-bold text-vignan-blue mb-6">Program Outcomes (POs)</h3>
                            <ul className="space-y-4">
                              {dept.pos?.length > 0 ? dept.pos.map((item, index) => (
                                <li key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                  <div className="mt-1 w-2.5 h-2.5 rounded-full bg-vignan-purple shrink-0" />
                                  <span className="text-gray-700 leading-relaxed"><span className="font-bold text-vignan-blue">PO{index + 1}:</span> {item}</span>
                                </li>
                              )) : <p className="text-gray-500 italic">Information will be updated soon.</p>}
                            </ul>
                          </div>
                        )}

                        {activeOverviewTab === 'psos' && (
                          <div className="space-y-8">
                            <div>
                              <h3 className="text-xl font-bold text-vignan-blue mb-6">
                                {dept.pgPsos?.length ? "U G Program Specific Outcomes" : "Program Specific Outcomes (PSOs)"}
                              </h3>
                              <ul className="space-y-4">
                                {dept.psos?.length > 0 ? dept.psos.map((item, index) => (
                                  <li key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <div className="mt-1 w-2.5 h-2.5 rounded-full bg-vignan-purple shrink-0" />
                                    <span className="text-gray-700 leading-relaxed"><span className="font-bold text-vignan-blue">PSO{index + 1}:</span> {item}</span>
                                  </li>
                                )) : <p className="text-gray-500 italic">Information will be updated soon.</p>}
                              </ul>
                            </div>

                            {dept.pgPsos && dept.pgPsos.length > 0 && (
                              <div>
                                <h3 className="text-xl font-bold text-vignan-blue mb-6">P G Program Specific Outcomes</h3>
                                <ul className="space-y-4">
                                  {dept.pgPsos.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                      <div className="mt-1 w-2.5 h-2.5 rounded-full bg-vignan-purple shrink-0" />
                                      <span className="text-gray-700 leading-relaxed"><span className="font-bold text-vignan-blue">PSO{index + 1}:</span> {item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {activeSection === "vision" && (
                  <>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                      Vision & Mission
                    </h2>
                    <div className="w-24 h-1 bg-vignan-purple mt-4 mb-8 rounded-full" />

                    <div className="mb-10">
                      <h3 className="text-xl font-bold text-vignan-blue mb-4">
                        Vision
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-justify text-lg border-l-4 border-vignan-purple pl-4 italic bg-gray-50 py-4 pr-4 rounded-r-lg">
                        &quot;{dept.vision}&quot;
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-vignan-blue mb-4">
                        Mission
                      </h3>
                      <ul className="space-y-4">
                        {dept.mission.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-vignan-purple shrink-0" />
                            <span className="text-gray-700 text-lg leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {activeSection === "hod" && (
                  <>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                      HOD&apos;s Desk
                    </h2>
                    <div className="w-24 h-1 bg-vignan-purple mt-4 mb-8 rounded-full" />

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      {/* Placeholder for HOD Image - can be added to data later */}
                      <div className="w-full md:w-1/3 aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden shrink-0">
                        <img src={dept.hod.image} alt={dept.hod.name} className="w-full h-full object-cover" />
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <User className="w-20 h-20" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-vignan-blue mb-1">
                          {dept.hod.name}
                        </h3>
                        <p className="text-vignan-purple font-medium mb-6">
                          {dept.hod.designation}
                        </p>

                        <div className="text-gray-700 leading-relaxed text-justify space-y-4 whitespace-pre-line">
                          <p>{dept.hod.message}</p>
                        </div>

                        {((dept.hod.stats && dept.hod.stats.length > 0) || (dept.hod.achievements && dept.hod.achievements.length > 0)) && (
                          <div className="mt-8 space-y-6">
                            {/* Stats List */}
                            {dept.hod.stats && dept.hod.stats.length > 0 && (
                              <ul className="space-y-2">
                                {dept.hod.stats.map((stat, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-vignan-purple shrink-0" />
                                    <span className="font-semibold text-vignan-blue">{stat.label}:</span> {stat.value}
                                  </li>
                                ))}
                              </ul>
                            )}

                            {/* Achievements List */}
                            {dept.hod.achievements && dept.hod.achievements.length > 0 && (
                              <div>
                                <h4 className="text-lg font-bold text-vignan-blue mb-3 flex items-center gap-2">
                                  <Award className="w-5 h-5 text-vignan-purple" />
                                  Key Achievements & Roles
                                </h4>
                                <ul className="space-y-2">
                                  {dept.hod.achievements.map((achievement, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-vignan-purple shrink-0" />
                                      <span className="leading-relaxed">{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {activeSection === "faculty" && (
                  <>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                      Faculty
                    </h2>
                    <div className="w-24 h-1 bg-vignan-purple mt-4 mb-8 rounded-full" />

                    {/* Desktop View (Table) */}
                    <div className="hidden lg:block overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-200 min-w-[600px]">
                        <thead>
                          <tr className="bg-vignan-purple text-white">
                            <th className="p-3 text-left border border-white/20 w-16">S.No</th>
                            <th className="p-3 text-left border border-white/20">Name</th>
                            <th className="p-3 text-left border border-white/20">Designation</th>
                            <th className="p-3 text-left border border-white/20">Registration No</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dept.faculty?.map((member) => (
                            <tr
                              key={member.sno}
                              onClick={() => setSelectedFaculty(member)}
                              className="even:bg-gray-50 hover:bg-vignan-purple/5 hover:border-vignan-purple/20 cursor-pointer transition-all duration-200 group border-b border-gray-100 last:border-0"
                            >
                              <td className="p-4 border-r border-gray-100 text-center font-medium text-gray-500 group-hover:text-vignan-purple transition-colors">
                                {member.sno}
                              </td>
                              <td className="p-4 border-r border-gray-100">
                                <div className="font-semibold text-gray-800 group-hover:text-vignan-purple transition-colors">
                                  {member.name}
                                </div>
                              </td>
                              <td className="p-4 border-r border-gray-100 text-vignan-blue font-medium">
                                {member.designation}
                              </td>
                              <td className="p-4 text-gray-600 font-mono text-sm">
                                {member.registrationNumber}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile View (Cards) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
                      {dept.faculty?.map((member) => (
                        <div
                          key={member.sno}
                          onClick={() => setSelectedFaculty(member)}
                          className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col gap-3 cursor-pointer hover:border-vignan-purple transition-all duration-200 active:scale-[0.98]"
                        >
                          <div className="flex justify-between items-start gap-4">
                            <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-vignan-purple">
                              {member.name}
                            </h3>
                            <span className="shrink-0 text-xs font-mono font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-md">
                              #{member.sno}
                            </span>
                          </div>

                          <div className="flex flex-col gap-1">
                            <p className="text-vignan-blue font-semibold text-sm">
                              {member.designation}
                            </p>
                            <p className="text-xs text-gray-500 font-mono bg-gray-50 px-2 py-1.5 rounded-lg border border-gray-100 w-fit mt-1">
                              {member.registrationNumber}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>



                    {/* Faculty Details Modal */}
                    {selectedFaculty && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedFaculty(null)}>
                        <div
                          className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* Modal Header */}
                          <div className="bg-vignan-purple p-6 text-white flex justify-between items-start">
                            <div className="flex gap-4">
                              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center shrink-0 border-2 border-white/20">
                                {selectedFaculty.image ? (
                                  <img src={selectedFaculty.image} alt={selectedFaculty.name} className="w-full h-full object-cover rounded-full" />
                                ) : (
                                  <User className="w-8 h-8 md:w-10 md:h-10 text-white/80" />
                                )}
                              </div>
                              <div>
                                <h3 className="text-xl md:text-2xl font-bold leading-tight mb-1">
                                  {selectedFaculty.name}
                                </h3>
                                <p className="text-white/80 font-medium">
                                  {selectedFaculty.designation}
                                </p>
                                <div className="flex items-center gap-2 mt-2 text-xs md:text-sm text-white/60 font-mono bg-black/20 px-2 py-1 rounded w-fit">
                                  <span>ID: {selectedFaculty.registrationNumber}</span>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => setSelectedFaculty(null)}
                              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                            >
                              <X className="w-6 h-6" />
                            </button>
                          </div>

                          {/* Modal Body */}
                          <div className="p-6 md:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <div>
                                  <h4 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                                    <Award className="w-4 h-4" /> Qualification
                                  </h4>
                                  <p className="text-gray-800 font-medium bg-gray-50 p-3 rounded-lg border border-gray-100">
                                    {selectedFaculty.qualification || "Ph.D in Computer Science (Placeholder)"}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                                    <Briefcase className="w-4 h-4" /> Experience
                                  </h4>
                                  <p className="text-gray-800 font-medium bg-gray-50 p-3 rounded-lg border border-gray-100">
                                    {selectedFaculty.experience || "10+ Years of Teaching Experience"}
                                  </p>
                                </div>
                              </div>

                              <div className="space-y-4">
                                <div>
                                  <h4 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                                    <Mail className="w-4 h-4" /> Contact
                                  </h4>
                                  <p className="text-gray-800 font-medium bg-gray-50 p-3 rounded-lg border border-gray-100">
                                    {selectedFaculty.email || "faculty@vgnt.ac.in"}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                                    <BookMarked className="w-4 h-4" /> Areas of Interest
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {(selectedFaculty.researchInterests || ["Machine Learning", "IoT", "Data Science"]).map((interest: string, i: number) => (
                                      <span key={i} className="px-3 py-1 bg-vignan-blue/10 text-vignan-blue text-sm font-medium rounded-full">
                                        {interest}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Additional placeholder info */}
                            <div className="pt-6 border-t border-gray-100">
                              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                                Biography
                              </h4>
                              <p className="text-gray-600 leading-relaxed text-justify">
                                {selectedFaculty.name} is a dedicated academician with a strong passion for teaching and research.
                                With extensive experience in the field of {dept.name}, they have contributed significantly to student development
                                and institutional growth. Actively involved in mentoring students and guiding research projects.
                              </p>
                            </div>
                          </div>

                          {/* Modal Footer */}
                          <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
                            <button
                              onClick={() => setSelectedFaculty(null)}
                              className="px-5 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                  </>
                )}

                {activeSection === "labs" && (
                  <>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                      Laboratories
                    </h2>
                    <div className="w-24 h-1 bg-vignan-purple mt-4 mb-8 rounded-full" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {dept.laboratories.map((lab, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                        >
                          <FlaskConical className="w-5 h-5 text-vignan-purple shrink-0" />
                          <span className="text-gray-800 font-medium">
                            {lab}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {activeSection === "achievements" && (
                  <>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                      Achievements
                    </h2>
                    <div className="w-24 h-1 bg-vignan-purple mt-4 mb-8 rounded-full" />

                    <ul className="space-y-4">
                      {dept.achievements.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 p-4 bg-yellow-50/50 rounded-xl border border-yellow-100"
                        >
                          <Trophy className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                          <span className="text-gray-800 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}



                {activeSection === "department-committee" && (
                  <>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                      Department Level Committee
                    </h2>
                    <div className="w-24 h-1 bg-vignan-purple mt-4 mb-8 rounded-full" />

                    {dept.departmentCommittee && dept.departmentCommittee.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-200 min-w-[500px]">
                          <thead>
                            <tr className="bg-vignan-purple text-white">
                              <th className="p-3 text-left border border-white/20 w-16">S.No</th>
                              <th className="p-3 text-left border border-white/20">Name of the Member</th>
                              <th className="p-3 text-left border border-white/20">Designation</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dept.departmentCommittee.map((member) => (
                              <tr key={member.sno} className="even:bg-gray-50 border-b border-gray-100 last:border-0 hover:bg-vignan-purple/5 transition-colors">
                                <td className="p-4 border-r border-gray-100 text-center font-medium text-gray-500">{member.sno}</td>
                                <td className="p-4 border-r border-gray-100 font-semibold text-gray-800">{member.name}</td>
                                <td className="p-4 text-vignan-blue font-medium">{member.designation}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                        <p className="text-gray-500">Information will be updated soon.</p>
                      </div>
                    )}
                  </>
                )}

                {activeSection === "disciplinary-committee" && (
                  <>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                      Disciplinary Committee
                    </h2>
                    <div className="w-24 h-1 bg-vignan-purple mt-4 mb-8 rounded-full" />

                    {dept.disciplinaryCommittee && dept.disciplinaryCommittee.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-200 min-w-[500px]">
                          <thead>
                            <tr className="bg-vignan-purple text-white">
                              <th className="p-3 text-left border border-white/20 w-16">S.No</th>
                              <th className="p-3 text-left border border-white/20">Name of the Member</th>
                              <th className="p-3 text-left border border-white/20">Designation</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dept.disciplinaryCommittee.map((member) => (
                              <tr key={member.sno} className="even:bg-gray-50 border-b border-gray-100 last:border-0 hover:bg-vignan-purple/5 transition-colors">
                                <td className="p-4 border-r border-gray-100 text-center font-medium text-gray-500">{member.sno}</td>
                                <td className="p-4 border-r border-gray-100 font-semibold text-gray-800">{member.name}</td>
                                <td className="p-4 text-vignan-blue font-medium">{member.designation}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                        <p className="text-gray-500">Information will be updated soon.</p>
                      </div>
                    )}
                  </>
                )}

                {activeSection === "research-projects" && (
                  <>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                      Research / Consultancy Projects
                    </h2>
                    <div className="w-25 h-1 bg-vignan-purple mt-4 mb-8 rounded-full" />

                    {((dept.researchProjects && dept.researchProjects.length > 0) || (dept.consultancyProjects && dept.consultancyProjects.length > 0)) ? (
                      <div className="space-y-12">
                        {dept.researchProjects && dept.researchProjects.length > 0 && (
                          <div>
                            <h3 className="text-xl font-bold text-vignan-blue mb-4">Research Projects</h3>
                            <div className="overflow-x-auto rounded-xl border border-gray-200">
                              <table className="w-full border-collapse bg-white">
                                <thead>
                                  <tr className="bg-vignan-purple text-white">
                                    <th className="p-3 text-left border border-white/20 w-16">S.No</th>
                                    <th className="p-3 text-left border border-white/20">Title</th>
                                    <th className="p-3 text-left border border-white/20">Faculty</th>
                                    <th className="p-3 text-left border border-white/20">Funding Agency</th>
                                    <th className="p-3 text-left border border-white/20">Sanction Date</th>
                                    <th className="p-3 text-left border border-white/20">Duration</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {dept.researchProjects.map((project, idx) => (
                                    <tr key={idx} className="even:bg-gray-50 border-b border-gray-100 last:border-0">
                                      <td className="p-4 border-r border-gray-100 text-center font-medium text-gray-500">{idx + 1}</td>
                                      <td className="p-4 border-r border-gray-100 font-semibold text-gray-800">{project.title}</td>
                                      <td className="p-4 border-r border-gray-100 text-gray-600">{project.faculty.join(', ')}</td>
                                      <td className="p-4 border-r border-gray-100 text-gray-600">{project.fundingAgency}</td>
                                      <td className="p-4 border-r border-gray-100 text-gray-600">{project.sanctionDate}</td>
                                      <td className="p-4 text-gray-600">{project.duration}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                        {dept.consultancyProjects && dept.consultancyProjects.length > 0 && (
                          <div>
                            <h3 className="text-xl font-bold text-vignan-blue mb-4">Consultancy Projects</h3>
                            <div className="overflow-x-auto rounded-xl border border-gray-200">
                              <table className="w-full border-collapse bg-white">
                                <thead>
                                  <tr className="bg-vignan-purple text-white">
                                    <th className="p-3 text-left border border-white/20 w-16">S.No</th>
                                    <th className="p-3 text-left border border-white/20">Title</th>
                                    <th className="p-3 text-left border border-white/20">Faculty</th>
                                    <th className="p-3 text-left border border-white/20">Funding Agency</th>
                                    <th className="p-3 text-left border border-white/20">Date</th>
                                    <th className="p-3 text-left border border-white/20">Amount (Lakhs)</th>
                                    <th className="p-3 text-left border border-white/20">Duration</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {dept.consultancyProjects.map((project, idx) => (
                                    <tr key={idx} className="even:bg-gray-50 border-b border-gray-100 last:border-0">
                                      <td className="p-4 border-r border-gray-100 text-center font-medium text-gray-500">{idx + 1}</td>
                                      <td className="p-4 border-r border-gray-100 font-semibold text-gray-800">{project.title}</td>
                                      <td className="p-4 border-r border-gray-100 text-gray-600">{project.faculty}</td>
                                      <td className="p-4 border-r border-gray-100 text-gray-600">{project.fundingAgency}</td>
                                      <td className="p-4 border-r border-gray-100 text-gray-600">{project.date}</td>
                                      <td className="p-4 border-r border-gray-100 text-gray-600 text-center">{project.amountInLakhs ? `₹${project.amountInLakhs}` : '-'}</td>
                                      <td className="p-4 text-gray-600">{project.duration || '-'}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                        <p className="text-gray-500">Information will be updated soon.</p>
                      </div>
                    )}
                  </>
                )}

                {activeSection === "mous" && (
                  <>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                      MOUs
                    </h2>
                    <div className="w-24 h-1 bg-vignan-purple mt-4 mb-8 rounded-full" />

                    {dept.mous && dept.mous.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-200 min-w-[600px]">
                          <thead>
                            <tr className="bg-vignan-purple text-white">
                              <th className="p-3 text-left border border-white/20 w-16">S.No</th>
                              <th className="p-3 text-left border border-white/20">Name of MOU</th>
                              <th className="p-3 text-left border border-white/20">Duration</th>
                              <th className="p-3 text-left border border-white/20">Activities Included</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dept.mous.map((mou, index) => (
                              <tr key={index} className="even:bg-gray-50 border-b border-gray-100 last:border-0">
                                <td className="p-4 border-r border-gray-100 text-center font-medium text-gray-500">{index + 1}</td>
                                <td className="p-4 border-r border-gray-100 font-semibold text-gray-800">{mou.name}</td>
                                <td className="p-4 border-r border-gray-100 text-gray-600">{mou.duration}</td>
                                <td className="p-4 text-gray-600 text-sm">{mou.activities}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                        <p className="text-gray-500">Information will be updated soon.</p>
                      </div>
                    )}
                  </>
                )}

                {activeSection === "publications" && (
                  <>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                      Publications
                    </h2>
                    <div className="w-24 h-1 bg-vignan-purple mt-4 mb-8 rounded-full" />

                    {dept.publications && dept.publications.length > 0 ? (
                      <div className="overflow-x-auto rounded-xl border border-gray-200">
                        <table className="w-full border-collapse bg-white">
                          <thead>
                            <tr className="bg-vignan-purple text-white">
                              <th className="p-3 text-left border border-white/20 w-16">S.No</th>
                              <th className="p-3 text-left border border-white/20">Academic Year</th>
                              <th className="p-3 text-left border border-white/20">Document</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dept.publications.map((item, index) => (
                              <tr key={index} className="even:bg-gray-50 border-b border-gray-100 last:border-0">
                                <td className="p-4 border-r border-gray-100 text-center font-medium text-gray-500">{index + 1}</td>
                                <td className="p-4 border-r border-gray-100 font-semibold text-gray-800">{item.AcademicYear}</td>
                                <td className="p-4 text-vignan-blue font-medium hover:underline cursor-pointer">
                                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4" /> View Document
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                        <p className="text-gray-500">Information will be updated soon.</p>
                      </div>
                    )}
                  </>
                )}

                {/* Dynamic Sections with Placeholder Content */}
                {(
                  activeSection === "syllabus" ||
                  activeSection === "academic-calendars" ||
                  activeSection === "course-materials" ||
                  activeSection === "seminars" ||
                  activeSection === "clubs") && (
                    <>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 capitalize">
                        {sidebarItems.find((i) => i.id === activeSection)?.label}
                      </h2>
                      <div className="w-24 h-1 bg-vignan-purple mt-4 mb-8 rounded-full" />

                      <div className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                        <p className="text-gray-500">
                          Content for {sidebarItems.find((i) => i.id === activeSection)?.label} will be updated soon.
                        </p>
                      </div>
                    </>
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}