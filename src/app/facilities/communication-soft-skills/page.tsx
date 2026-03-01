import Link from "next/link";
import React from "react";
import Navbar from "../../../components/HomePage/Navbar";
import Footer from "../../../components/HomePage/Footer";
import { Mic2, MessageSquare, MonitorPlay } from "lucide-react";

export const metadata = {
  title: "Communication & Soft Skills | VITS",
  description: "Information about Communication Soft Skills at VITS.",
};

export default function CommunicationSoftSkillsPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar variant="solid" />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-[120px] pb-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-purple-200 mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/facilities" className="hover:text-white transition-colors">Facilities</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Communication Soft Skills</span>
          </nav>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <Mic2 className="w-8 h-8 opacity-90 shrink-0" />
              Communication & Soft Skills Lab
            </h1>
            <p className="text-base sm:text-lg text-white opacity-90 max-w-3xl leading-relaxed text-justify">
              Empowering students with effective communication capabilities for their professional journey.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-8">
        {/* Overview Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-vignan-purple" />
            Overview
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed font-medium">
            <p className="text-justify text-lg leading-relaxed">
              The main aim of this lab is to improve Communication Skills in formal
              and informal situations. It is also to impart training to students
              through the syllabus in its theoretical aspects and practical
              components. The lab is equipped with high-end configuration workstations
              which also feature high quality audio & video capabilities.
            </p>
          </div>
        </section>

        {/* Features Placeholder */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <MonitorPlay className="w-6 h-6 text-vignan-blue" />
            Facilities & Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 border border-purple-100 bg-purple-50/50 rounded-xl">
              <h3 className="font-bold text-vignan-purple mb-2">High-End Systems</h3>
              <p className="text-sm text-gray-600">Modern workstations specifically configured for language learning software and interactive modules.</p>
            </div>
            <div className="p-5 border border-blue-100 bg-blue-50/50 rounded-xl">
              <h3 className="font-bold text-vignan-blue mb-2">Audio-Visual Aids</h3>
              <p className="text-sm text-gray-600">Premium quality headsets and microphones to practice pronunciation, listening, and speaking exercises.</p>
            </div>
            <div className="p-5 border border-indigo-100 bg-indigo-50/50 rounded-xl">
              <h3 className="font-bold text-indigo-700 mb-2">Interactive Sessions</h3>
              <p className="text-sm text-gray-600">Software-enabled roleplays, group discussions, and JAM sessions to simulate real-world professional environments.</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
