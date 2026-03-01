import Link from 'next/link';
import { Home, ArrowLeft, TriangleAlert } from 'lucide-react';
import Navbar from '../components/HomePage/Navbar';
import Footer from '../components/HomePage/Footer';

export const metadata = {
    title: 'Page Not Found | Vignan Institute of Technology and Science',
    description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar variant="solid" />

            <main className="flex-grow flex items-center justify-center px-4 pt-40 pb-20">
                <div className="max-w-2xl w-full text-center">

                    {/* Animated Error Graphic */}
                    <div className="relative mb-10 inline-block">
                        <div className="absolute inset-0 bg-blue-100/50 blur-3xl rounded-full"></div>
                        <div className="relative bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center">
                            <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#003666] via-vignan-purple to-blue-500">
                                404
                            </h1>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -top-4 -right-4 p-3 bg-red-50 rounded-2xl shadow-sm border border-red-100 animate-bounce">
                            <TriangleAlert className="w-8 h-8 text-red-500" />
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Oops! Page not found</h2>

                    <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="group w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#003666] to-vignan-purple text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                            <Home className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                            Back to Home
                        </Link>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
