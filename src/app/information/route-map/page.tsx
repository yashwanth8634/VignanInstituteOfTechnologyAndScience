import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Link from "next/link";
import React from 'react';
import { MapPin, Navigation, Bus, Train } from "lucide-react";

export const metadata = {
    title: "Route Map | VITS",
    description: "Directions and Route Map to VITS, Deshmukhi.",
};

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            {/* Page Header */}
            <section className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-32 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-6 flex items-center space-x-2">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/information" className="hover:text-white transition-colors">Information</Link>
                        <span>/</span>
                        <span className="text-white font-medium">Route Map</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Route Map & Location</h1>
                    <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                        Locate us easily. We are situated in a serene environment at Deshmukhi, near Ramoji Film City.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-8">

                {/* Map Section */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 md:p-6 overflow-hidden">
                    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-inner bg-gray-100 relative">
                        <iframe
                            width="100%"
                            height="100%"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=8PVC%2BVP%2C%20Deshmukhi%2C%20Telangana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder={0}
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            title="VITS Route Map"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>

                {/* Location Details & Directions */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Address Card */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-purple-50 text-vignan-purple rounded-xl">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Campus Address</h2>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed mb-2 font-medium">
                                VITS
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Vignan Hills, Deshmukhi Village,<br />
                                Pochampally Mandal, Yadadri Bhuvanagiri District,<br />
                                Telangana - 508284
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">
                                <span className="font-bold text-gray-700">Plus Code:</span> 8PVC+VP, Deshmukhi, Telangana
                            </div>
                        </div>

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=8PVC+VP,+Deshmukhi,+Telangana"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center justify-center gap-2 w-full py-4 bg-vignan-purple text-white font-bold rounded-xl hover:bg-[#003666] transition-colors shadow-md hover:shadow-lg"
                        >
                            <Navigation className="w-5 h-5" />
                            Get Directions on Google Maps
                        </a>
                    </div>

                    {/* Transportation Info */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                <Bus className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">How to Reach</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <Bus className="w-5 h-5 text-gray-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">By College Bus</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        The college operates a fleet of buses covering all major routes in Hyderabad and Secunderabad. Contact the transport department for specific route timings.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <Train className="w-5 h-5 text-gray-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">By Public Transport</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        <strong>Nearest Landmark:</strong> Ramoji Film City. <br />
                                        <strong>RTC Buses:</strong> Buses towards Deshmukhi or Batasingaram are available from LB Nagar and Uppal.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <Navigation className="w-5 h-5 text-gray-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Distance</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Approx. 15 km from LB Nagar Ring Road.<br />
                                        Approx. 35 km from Secunderabad Railway Station.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}