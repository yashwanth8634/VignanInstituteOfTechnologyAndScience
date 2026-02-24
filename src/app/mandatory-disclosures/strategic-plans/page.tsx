import Link from "next/link";
import React from 'react';
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import { Target, Download, FileText } from "lucide-react";

export const metadata = {
  title: "Strategic Plans | VITS",
  description: "Information about Strategic Plans at VITS.",
};

const plans = [

  { title: "Strategic Plan for 2014-2019", link: "/Pdfs/StrategicPlans/2014-2019.pdf" },
  { title: "Strategic Plan for 2020-2024", link: "/Pdfs/StrategicPlans/2020-2024.pdf" },
  { title: "Strategic Plan for 2025-2029", link: "/Pdfs/StrategicPlans/2025-2029.pdf" }
];

export default function StrategicPlansPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
      <Navbar variant="solid" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-32 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-purple-200 mb-3 block">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/mandatory-disclosures" className="hover:text-white transition-colors">Mandatory Disclosures</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Strategic Plans</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">Strategic Plans</h1>
          <p className="text-xl text-white opacity-90 max-w-2xl">
            Explore the perspective and strategic planning highlights that guide our institution's growth and development over various timeframes.
          </p>
        </div>
      </section>

      {/* Content Container */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-vignan-purple group-hover:text-white transition-colors duration-300">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight pr-4">
                    {plan.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">
                    Official PDF Document
                  </p>
                </div>
              </div>

              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-gray-50 text-[#003666] font-semibold rounded-2xl group-hover:bg-[#003666] group-hover:text-white transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download Document
              </a>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </main>
  );
}
