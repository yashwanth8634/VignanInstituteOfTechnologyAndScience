"use client";

import Link from "next/link";
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import { Building } from "lucide-react";
import Image from "next/image";

export default function HostelPage() {
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
            <span className="text-white font-medium">Hostel</span>
          </nav>

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <Building className="w-8 h-8 opacity-90 shrink-0" />
              Hostel
            </h1>
            <p className="text-base sm:text-lg text-white opacity-90 max-w-3xl leading-relaxed">
              A comfortable, secure, and vibrant residential facility for students.
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
                src="/FacilitiesPage/Hostel.webp"
                alt="Hostel Building"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-in-out scale-110 group-hover:scale-100"
              />
            </div>

            {/* Text Content */}
            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-vignan-purple rounded-full"></span>
                Residential Facilities
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed text-justify space-y-4">
                <p>
                  The College has campus attached spacious hostel which provides pleasant stay at affordable fee.
                  It is Managed by our college management on no loss no gain principle. We serve Delicious and
                  Nutritious food under the best hygienic conditions and in a spacious Dining Hall. The menu is
                  decided by the students&apos; committee. The menu changes every week as per their interests.
                </p>
                <p>
                  Rooms are Well ventilate &amp; spacious with executive study table, lockable cupboards for each
                  student and attached toilets. The hostel is enabled with Digital library facility till late nights.
                  It also has Wi-Fi facility and Internet connectivity. The hostel inmates have Exclusive computer Lab facility,
                  Common room with a facility of indoor games and Cricket Ground, Volleyball Ground for outdoor games.
                  They also have Activity room for recreation and talent exhibition. Like Literary, Art, Technical club facilities.
                </p>
                <p>
                  Drinking water is Mineral water with water coolers. Students have Hot water facility with Solar system.
                  We endow with 24 hrs health care centre with basic first aid facility and emergency vehicle.
                  Students are monitored by Separate wardens for both boys and girls. We engage Special classes for
                  slow learners with the help of residential faculty. Students are members in various clubs to monitor
                  the well functioning of the hostel. Hostel day celebrations: Our students celebrate hostel day every
                  year on 28th December amidst of joyful events and colorful ambience.
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
