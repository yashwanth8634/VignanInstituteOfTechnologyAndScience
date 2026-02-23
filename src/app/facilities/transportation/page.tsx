"use client";

import Link from "next/link";
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import { Bus } from "lucide-react";
import Image from "next/image";

export default function TransportationPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
      <Navbar variant="solid" />

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-[120px] pb-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-purple-200 mb-3 block">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/facilities" className="hover:text-white transition-colors">Facilities</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Transportation</span>
          </nav>

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <Bus className="w-8 h-8 opacity-90 shrink-0" />
              Transportation
            </h1>
            <p className="text-base sm:text-lg text-white opacity-90 max-w-3xl leading-relaxed">
              Safe, reliable, and comfortable commuting options for students.
            </p>
          </div>
        </div>
      </div>

      {/* Content Range */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12 md:space-y-16 w-full">

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
            {/* Image Section */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full lg:h-auto min-h-[300px] overflow-hidden group">
              <Image
                src="/FacilitiesPage/Transportation.webp"
                alt="Transportation Fleet"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-in-out scale-110 group-hover:scale-100"
              />
            </div>

            {/* Text Content */}
            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-vignan-purple rounded-full"></span>
                Bus Services
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed text-justify">
                <p>
                  College is providing transport facility to the students from various points in Hyderabad.
                  College is running 40+ buses covering all points in Hyderabad.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
